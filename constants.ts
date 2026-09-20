
import { NavItem, Project, ProjectCategory, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Obsidian House',
    location: 'Jakarta Selatan',
    category: ProjectCategory.ARCHITECTURE,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    client: 'Private Residence',
    area: '450 m²',
    description: 'A monolithic expression of modern living, The Obsidian House utilizes dark natural stone and vast expanses of glass to create a seamless dialogue between privacy and openness. The structure acts as a silhouette against the Jakarta skyline.',
    challenge: 'The primary challenge was to maintain privacy in a dense urban environment while maximizing natural light and air circulation.',
    solution: 'We implemented a "breathing facade" using custom louvers and an internal courtyard system that brings nature into the core of the house without exposing the interior to the street.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop'
    ],
    credits: {
      architect: 'Linier Team',
      photography: 'Andreas W'
    }
  },
  {
    id: '2',
    title: 'Azure Sky Structure',
    location: 'Surabaya',
    category: ProjectCategory.CONSTRUCTION,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    year: '2023',
    client: 'Skyline Corp',
    area: '1,200 m²',
    description: 'A high-rise commercial complex designed to redefine the skyline of Surabaya. Precision engineering meets aesthetic fluidity.',
    challenge: 'Constructing a high-load steel structure on a limited footprint with challenging soil conditions.',
    solution: 'Utilization of a deep bore pile foundation system combined with a lightweight steel composite superstructure to ensure stability and speed of construction.',
    gallery: [
        'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    title: 'Minimalist Zen Villa',
    location: 'Bali',
    category: ProjectCategory.ARCHITECTURE,
    image: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    client: 'Hospitality Group',
    area: '300 m²',
    description: 'A sanctuary of silence. This villa integrates traditional Balinese elements with brutalist concrete geometry.',
    gallery: [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '4',
    title: 'Lumina Art Gallery',
    location: 'Bandung',
    category: ProjectCategory.INTERIOR,
    image: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1600&auto=format&fit=crop',
    year: '2023',
    client: 'Lumina Arts',
    area: '200 m²',
    description: 'An interior space designed to disappear, allowing the art to take center stage. Pure white volumes interact with controlled lighting.',
    gallery: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '5',
    title: 'Nexus Office Hub',
    location: 'Tangerang',
    category: ProjectCategory.CONSTRUCTION,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    year: '2025',
    client: 'Tech Nexus',
    area: '800 m²',
    description: 'A forward-thinking workspace focused on collaboration. The construction prioritized acoustic comfort and sustainable material sourcing.',
    gallery: [
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '6',
    title: 'Aeon Penthouse',
    location: 'Jakarta Pusat',
    category: ProjectCategory.INTERIOR,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    client: 'Mr. H',
    area: '350 m²',
    description: 'Luxury redefined through texture. Velvet, marble, and brushed bronze create a tactile experience in this sky-high residence.',
    gallery: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'arch',
    title: 'Architecture Design',
    description: 'Comprehensive architectural planning focusing on spatial harmony, sustainable materials, and functional aesthetics.'
  },
  {
    id: 'const',
    title: 'Construction & Build',
    description: 'High-precision construction management ensuring every detail from the blueprint is executed to perfection.'
  },
  {
    id: 'int',
    title: 'Interior Design',
    description: 'Curating immersive interior environments that reflect personality through bespoke furniture and lighting.'
  },
  {
    id: 'master',
    title: 'Master Planning',
    description: 'Large-scale urban design and site planning for residential complexes and commercial districts.'
  }
];

export const MARQUEE_TEXT = "INNOVATION — PRECISION — SUSTAINABILITY — EXCLUSIVE LIVING — TIMELESS DESIGN — ";
