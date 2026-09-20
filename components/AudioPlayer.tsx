import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Track {
  title: string;
  artist: string;
  url: string;
}

const PLAYLIST: Track[] = [
  {
    title: "On & On",
    artist: "Cartoon (feat. Daniel Levi)",
    url: "https://archive.org/download/cartoon-on-on-feat.-daniel-levi-ncs-release/Cartoon%20-%20On%20_%20On%20%28feat.%20Daniel%20Levi%29%20_NCS%20Release_.mp3"
  },
  {
    title: "Why Do I?",
    artist: "Unknown Brain (feat. Bri Tolani)",
    url: "https://archive.org/download/unknown-brain-why-do-i-lyrics-ft.-bri-tolani-clean-version/Unknown%20Brain%20-%20Why%20Do%20I_%20%28Lyrics%29%20ft.%20Bri%20Tolani%20%5BClean%20version%5D.mp3"
  },
  {
    title: "Royalty",
    artist: "Egzod (feat. Neoni)",
    url: "https://archive.org/download/royalty.mp3/utomp3.com%20-%20Egzod%20%20Maestro%20Chives%20%20Royalty%20ft%20Neoni%20Official%20Lyric%20Video.mp3"
  },
  {
    title: "Bluebird",
    artist: "Oliver Buckland",
    url: "https://archive.org/download/ena-season-1-original-soundtrack/01%20-%20Olivier%20Buckland%20-%20icosa.mp3"
  },
  {
    title: "Earth Holds Hope",
    artist: "Oliver Buckland",
    url: "https://archive.org/download/ena-season-1-original-soundtrack/10%20-%20Olivier%20Buckland%20-%20Hourglass%20Meadow.mp3"
  }
];

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Gentle ambient level
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    const saved = localStorage.getItem('linier_audio_player_visible');
    return saved !== 'false';
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = PLAYLIST[currentTrackIndex];

  // Initialize and load preference from localStorage
  useEffect(() => {
    const savedTrackIndex = localStorage.getItem('linier_audio_track_index');
    if (savedTrackIndex !== null) {
      const idx = parseInt(savedTrackIndex, 10);
      if (idx >= 0 && idx < PLAYLIST.length) {
        setCurrentTrackIndex(idx);
      }
    }

    const savedVolume = localStorage.getItem('linier_audio_volume');
    if (savedVolume !== null) {
      const vol = parseFloat(savedVolume);
      if (vol >= 0 && vol <= 1) {
        setVolume(vol);
      }
    }

    // Show a gentle pulsing indicator to let the user know they can activate music
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Sync state changes with audio element
  useEffect(() => {
    if (!audioRef.current) return;
    
    audioRef.current.volume = isMuted ? 0 : volume;
    
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay blocked or playback interrupted:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, isMuted, volume]);

  // Handle global toggle events for show/hide
  useEffect(() => {
    const handleShow = () => {
      setIsVisible(true);
      setIsPlaying(true);
      localStorage.setItem('linier_audio_player_visible', 'true');
    };
    const handleHide = () => {
      setIsVisible(false);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      localStorage.setItem('linier_audio_player_visible', 'false');
    };

    window.addEventListener('show-audio-player', handleShow);
    window.addEventListener('hide-audio-player', handleHide);

    return () => {
      window.removeEventListener('show-audio-player', handleShow);
      window.removeEventListener('hide-audio-player', handleHide);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentTrackIndex + 1) % PLAYLIST.length;
    setCurrentTrackIndex(nextIdx);
    localStorage.setItem('linier_audio_track_index', nextIdx.toString());
    setIsPlaying(true);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    setCurrentTrackIndex(prevIdx);
    localStorage.setItem('linier_audio_track_index', prevIdx.toString());
    setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
    localStorage.setItem('linier_audio_volume', newVol.toString());
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
    localStorage.setItem('linier_audio_player_visible', 'false');
    window.dispatchEvent(new CustomEvent('hide-audio-player'));
  };

  return (
    <>
      {/* Self-contained styling for the animated sound waves */}
      <style>{`
        @keyframes soundwave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .animate-wave-1 { animation: soundwave 1s ease-in-out infinite; }
        .animate-wave-2 { animation: soundwave 0.8s ease-in-out infinite 0.15s; }
        .animate-wave-3 { animation: soundwave 1.2s ease-in-out infinite 0.3s; }
        .animate-wave-4 { animation: soundwave 0.9s ease-in-out infinite 0.45s; }
      `}</style>

      {/* Hidden native audio element */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        loop
        onEnded={() => {
          // Auto-advance to next track on end
          const nextIdx = (currentTrackIndex + 1) % PLAYLIST.length;
          setCurrentTrackIndex(nextIdx);
        }}
      />

      {/* Floating Controller Container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative flex items-center">
              
              {/* Main Player Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-3 bg-[#0a0a0a]/90 dark:bg-neutral-900/90 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-full p-2 pr-4 shadow-2xl transition-all duration-300 pointer-events-auto"
                style={{ width: isHovered ? '296px' : '48px', height: '48px', overflow: 'hidden' }}
              >
                {/* Play/Pause / Soundwave Button */}
                <button
                  onClick={togglePlay}
                  className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-bronze-500 hover:bg-bronze-600 text-white transition-colors cursor-pointer"
                  title={isPlaying ? "Pause Ambient" : "Play Ambient"}
                >
                  {isPlaying ? (
                    // Active Soundwave Visualizer
                    <div className="flex items-end gap-[2px] h-4 w-4 justify-center">
                      <span className="w-[1.5px] bg-white rounded-full animate-wave-1" />
                      <span className="w-[1.5px] bg-white rounded-full animate-wave-2" />
                      <span className="w-[1.5px] bg-white rounded-full animate-wave-3" />
                      <span className="w-[1.5px] bg-white rounded-full animate-wave-4" />
                    </div>
                  ) : (
                    <Play size={14} className="ml-[1px]" />
                  )}
                </button>

                {/* Expanded Controls (Rendered on Hover) */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between w-full min-w-0"
                    >
                      {/* Track Info */}
                      <div className="flex flex-col min-w-0 flex-1 ml-1 select-none">
                        <span className="text-[11px] font-display font-medium text-white truncate leading-tight">
                          {currentTrack.title}
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 truncate tracking-wider leading-none uppercase mt-0.5">
                          {currentTrack.artist}
                        </span>
                      </div>

                      {/* Navigation & Extra Controls */}
                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        {/* Previous Button */}
                        <button 
                          onClick={handlePrev}
                          className="text-neutral-400 hover:text-white transition-colors p-1"
                          title="Previous"
                        >
                          <SkipBack size={12} />
                        </button>

                        {/* Next Button */}
                        <button 
                          onClick={handleNext}
                          className="text-neutral-400 hover:text-white transition-colors p-1"
                          title="Next"
                        >
                          <SkipForward size={12} />
                        </button>

                        {/* Divider */}
                        <span className="w-[1px] h-3 bg-white/10" />

                        {/* Volume Mute Toggle */}
                        <div className="relative group/volume flex items-center">
                          <button 
                            onClick={toggleMute}
                            className="text-neutral-400 hover:text-white transition-colors p-1"
                            title={isMuted ? "Unmute" : "Mute"}
                          >
                            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                          </button>

                          {/* Slider on hover volume button */}
                          <div className="hidden group-hover/volume:flex absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-[#0a0a0a] border border-white/10 p-2 rounded-lg shadow-lg rotate-270 origin-bottom">
                            <input 
                              type="range"
                              min="0"
                              max="1"
                              step="0.05"
                              value={isMuted ? 0 : volume}
                              onChange={handleVolumeChange}
                              className="w-16 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-bronze-500"
                            />
                          </div>
                        </div>

                        {/* Divider */}
                        <span className="w-[1px] h-3 bg-white/10" />

                        {/* Dismiss (Close X) Button */}
                        <button 
                          onClick={handleClose}
                          className="text-neutral-400 hover:text-red-400 transition-colors p-1"
                          title="Close Music Player"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

              {/* Interactive Floating Tooltip Hint (appears on startup to invite click) */}
              <AnimatePresence>
                {showTooltip && !isHovered && !isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.8 }}
                    className="absolute left-14 whitespace-nowrap bg-[#0a0a0a] border border-white/10 text-[10px] font-mono tracking-wider uppercase text-neutral-300 py-1.5 px-3 rounded-full pointer-events-none shadow-xl flex items-center gap-2"
                  >
                    <Music size={10} className="text-bronze-500 animate-pulse" />
                    Play Ambient Music
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AudioPlayer;
