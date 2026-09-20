
import { Language, ProjectCategory } from './types';

const enTranslations = {
  common: {
      headquarters: "Headquarters",
      navigation: "Navigation",
      address_line1: "Perumahan Kendari Indah, Blok F/7",
      address_line2: "Kendari City, Southeast Sulawesi",
      address_country: "Indonesia",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Settings",
      legal_doc: "Legal Documentation"
    },
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
      startProject: 'Start Project',
      subtitle: 'Arch/Build'
    },
    portfolio: {
      hero_title_1: "DESIGNING",
      hero_title_2: "HOMES WITH",
      hero_title_3: "PEOPLE",
      hero_title_4: "AT HEART",
      hero_desc_1: "We design spaces for people. No matter the scale\nof the projects, our down-to-earth approach stays\nthe same. We listen first, design second. We take\nthe time to understand how you live, work, and\nmove through your space.",
      hero_desc_2: "Then, we bring your vision to life. Drawing from real\nexperience, we create contemporary, aspirational\nspaces that feel effortless and truly yours.",
      hero_btn: "LEARN MORE ABOUT OUR STUDIO",
      hero_tag: "(OUR STUDIO)",
      hero_menu: "MENU",
      hero_get_in_touch: "GET IN TOUCH",
      title: "Portfolio",
      subtitle: "Selected Works",
      filter_all: "All"
    },
    project_detail: {
      back: "Back to Portfolio",
      client: "Client",
      area: "Area",
      year: "Year",
      role: "Role",
      role_value: "Design & Build",
      concept: "The Concept",
      challenge: "The Challenge",
      solution: "The Solution",
      visual: "Visual Documentation",
      next: "Next Project",
      view_case: "View Case Study",
      not_found: "Project Not Found",
      return: "Return to Portfolio"
    },
    // New Project Data Translations
    projects: {
      '1': {
        title: 'The Obsidian House',
        location: 'South Jakarta',
        client: 'Private Residence',
        description: 'A family home featuring a dark natural stone facade, designed to balance privacy with generous natural lighting and connection to the surrounding landscape.',
        challenge: 'Maintaining interior privacy in a dense urban neighborhood while ensuring efficient natural light and ventilation.',
        solution: 'We designed a custom louver system on the facade combined with a central inner courtyard that draws light and air into the heart of the house.'
      },
      '2': {
        title: 'Azure Sky Structure',
        location: 'Surabaya',
        client: 'Skyline Corp',
        description: 'A commercial high-rise building in Surabaya, emphasizing structural durability, layout efficiency, and functional reliability.',
        challenge: 'Constructing a heavy-load structure on a restricted site footprint with challenging soft soil conditions.',
        solution: 'We utilized a deep bore pile foundation paired with a lightweight composite steel superstructure to accelerate construction and guarantee structural stability.'
      },
      '3': {
        title: 'Minimalist Zen Villa',
        location: 'Bali',
        client: 'Hospitality Group',
        description: 'A vacation villa in Ubud that pairs warm local timber with raw concrete walls, designed to sit naturally within its forested surroundings.',
        challenge: 'Building on a steep slope without disrupting the natural topography or existing trees.',
        solution: 'We engineered cantilevered concrete volumes that float above the terrain, finished with local wood accents to blend into the landscape.'
      },
      '4': {
        title: 'Lumina Art Gallery',
        location: 'Bandung',
        client: 'Lumina Arts',
        description: 'An art gallery renovation in Bandung, designed with clean, minimalist lines to ensure the exhibited artwork remains the primary focus of visitors.',
        challenge: 'Modifying an older building structure to create a wide, open exhibition hall free of central support columns.',
        solution: 'We integrated hidden structural steel beams into the ceiling and configured an indirect, shadow-free lighting layout.'
      },
      '5': {
        title: 'Nexus Office Hub',
        location: 'Tangerang',
        client: 'Tech Nexus',
        description: 'A collaborative workspace focused on employee comfort, featuring acoustic control, flexible meeting zones, and sustainable local materials.',
        challenge: 'Designing an open-plan layout that encourages team collaboration while maintaining quiet zones for focused work.',
        solution: 'We installed decorative acoustic baffles along the ceiling and provided glass-encased quiet booths for private meetings.'
      },
      '6': {
        title: 'Aeon Penthouse',
        location: 'Central Jakarta',
        client: 'Mr. H',
        description: 'An interior apartment renovation focusing on fine materials like marble slabs, wood paneling, and custom bronze fixtures.',
        challenge: 'The technical and logistical constraints of moving large-format stone and bespoke furniture to the 45th floor.',
        solution: 'We designed custom modular furniture for easy lift transport and staged the installation process precisely.'
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your project.",
      office: "Office",
      phone: "Phone",
      email: "Email",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        address: "Project Address",
        country: "Country",
        project: "Project Type",
        budget: "Budget Estimate",
        message: "Message",
        message_ph: "Tell us about your project...",
        submit: "Send Message",
        select_range: "Select Range",
        style: "Design Style",
        select_style: "Select Design Style",
        budget_note: "Please note: This budget represents the total estimated construction/RAB budget, not the architectural/design fee."
      },
      types: [
        "Construction",
        "Commercial Architecture",
        "Interior Design",
        "Interior Contractor",
        "Consultation"
      ],
      budget_options: [
        "< $50k",
        "$50k - $100k",
        "$100k - $500k",
        "> $500k"
      ],
      interior_contractor_budget_options: [
        "0 - $5k",
        "$5k - $10k",
        "$10k - $25k",
        "> $25k"
      ],
      styles: [
        "Modern",
        "Minimalist",
        "Classical",
        "Neoclassical",
        "Contemporary",
        "Industrial",
        "Scandinavian",
        "Tropical",
        "Mediterranean",
        "Japanese (Zen)",
        "Brutalisme",
        "Art Deco",
        "Art Nouveau",
        "Bauhaus",
        "Futuristic",
        "Deconstructivism",
        "Parametric",
        "Vernacular",
        "Biophilic",
        "Postmodern"
      ]
    },
    elements: [
      {
        id: 1,
        title: "LIGHT",
        subtitle: "Natural Daylight",
        desc: "Natural light is a vital element we manage carefully to bring warmth and energy to every room.",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "Lighting is key to the character of a space. We study sun paths to capture soft morning light and warm afternoon glows, reducing the need for artificial lighting during the day.",
          philosophy: "Natural light brings rigid structures to life.",
          application: "We use skylights, lightwells, and precise window orientations to ensure natural light is distributed evenly without causing excessive heat."
        }
      },
      {
        id: 2,
        title: "TEXTURE",
        subtitle: "Material Character",
        desc: "We believe raw materials should show their natural texture and age gracefully over time.",
        image: "https://images.unsplash.com/photo-1596627689914-7299a47321c1?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "We appreciate materials in their natural form: the coolness of stone flooring, the warmth of local timber, and the honest texture of concrete. These elements ground a building in its physical reality.",
          philosophy: "Materials should be selected for their authenticity and long-term durability.",
          application: "We prioritize minimally processed, locally sourced materials to showcase wood grains, stone textures, and natural plaster finishes."
        }
      },
      {
        id: 3,
        title: "VOID",
        subtitle: "Open Layouts",
        desc: "We create open, uncluttered spaces to ensure natural ventilation and comfortable circulation.",
        image: "https://images.unsplash.com/photo-1519962551779-513473b64cf6?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "On modern plots, spaciousness is a priority. We design open transitions and central voids to keep the home feeling light, airy, and free of unnecessary visual weight.",
          philosophy: "Comfort is defined not by the number of walls, but by the freedom of movement.",
          application: "We implement double-height ceilings, central courtyard gardens, and seamless indoor-outdoor transitions to maximize air flow."
        }
      }
    ],
    hero: {
      tagline: '',
      disciplines: 'Architecture | Interior | Build',
      scroll: '• Scroll to Explore • Linier Studio •',
      title1: 'Architecture',
      title2: 'With Purpose',
      music_btn: 'Play Ambient'
    },
    home: {
      manifesto_1: 'We do not just construct walls. We design spaces to',
      cycling_words: ["FRAME LIGHT", "FLOW AIR", "RETAIN CALM", "LAST GENERATIONS"],
      manifesto_2: 'In a busy world, we provide a quiet, comfortable place to retreat.',
      manifesto_3: 'Our integrated',
      manifesto_highlight: 'Design-Build',
      manifesto_4: 'methodology ensures that the initial layout translates perfectly into the final building.',
      philosophy_btn: 'Read Our Philosophy',
      trusted_statement: "As an integrated design-build studio, we combine architecture, interior design, and construction under a single workflow. We focus on clean craftsmanship, timely delivery, and functional layouts tailored to your lifestyle. We manage every detail transparently—from initial sketches to the final hand-over—with clear budgets and open communication.",
      selected_works: 'Selected Works',
      view_all: 'View Archive',
      next_steps: 'Next Steps',
      have_a: 'Have a',
      vision: 'Vision?',
      lets_discuss: "Let's Discuss",
      journal_title: "Deconstructed",
      elements_title: "The Elements",
      elements_desc: "Deconstructing our design language into its purest forms: Light, Texture, and Void.",
      read_article: "Explore",
      marquee: "INNOVATION — PRECISION — SUSTAINABILITY — EXCLUSIVE LIVING — TIMELESS DESIGN — ",
      tour_label: "Virtual Reality",
      tour_title: "Immersive Tour",
      tour_desc: "Experience the volume, light, and atmosphere of our designs in a fully interactive 360° environment.",
      tour_btn: "Start Virtual Tour",
      tour_close: "Close Tour"
    },
    about: {
      hero_subtitle: "Refining and modernizing architectural design for a clean, contemporary aesthetic.",
      firm_and_philosophy: "The firm<br/>and the<br/>philosophy",
      firm_desc: "Our architectural style is characterized by a clean and modern approach, consistently reflecting our contemporary aesthetic.",
      learn_more: "Learn more our project",
      title: "About Us",
      subtitle: "The Studio.",
      trusted_statement: "As an integrated design-build studio, we combine architecture, interior design, and construction under a single workflow. We focus on clean craftsmanship, timely delivery, and functional layouts tailored to your lifestyle. We manage every detail transparently—from initial sketches to the final hand-over—with clear budgets and open communication.",
      paragraph_1: "Linier Studio is an architectural and construction studio. We design and build living and commercial spaces with a focus on functional comfort, character, and honest material usage.",
      paragraph_2: "Every design begins by understanding the daily habits of its occupants, responding to the local climate, and optimizing the site. For us, architecture is not just about visual appeal; it is a practical, comfortable background for your daily life.",
      paragraph_3: "We combine structured, logical planning with a clean, understated aesthetic. In every design phase, we carefully calculate spatial circulation, ventilation, structural durability, and cost efficiency so the project builds successfully in the field.",
      paragraph_4: "For interiors, we focus on creating layouts that harmonize with the building's architecture. We pay close attention to material junctions, furniture proportions, and tactile surfaces to ensure a warm, flowing experience.",
      paragraph_5: "As builders, our responsibility is to translate technical drawings into durable, precise physical structures. Supported by daily field supervision and disciplined project management, we ensure masonry, structural work, and finishing meet high technical standards.",
      paragraph_6: "We believe that well-planned and well-built spaces offer long-term value, peace of mind, and financial durability. Our commitment is simple: to complete every project with full accountability, honest communication, and reliable building quality.",
      
      vision_title: "Vision",
      vision_text: "To design and build functional, honest, and durable spaces that provide long-term utility and comfort.",
      
      mission_title: "Mission",
      mission_text: "To deliver reliable architecture and construction through a transparent, disciplined, and detail-oriented process.",
      mission_measurable_title: "Precision Details",
      mission_measurable_desc: "We believe the smallest detail impacts comfort. Every corner and material joint is calculated carefully.",
      mission_professional_title: "Transparent Process",
      mission_professional_desc: "We maintain honest communication, clear budgets, and disciplined management at every step.",
      core_values_title: "Core Values.",
      core_values_desc: "The principles that guide our every line.",
    },
    services: {
      hero_typography_1: "WE BUILD",
      hero_typography_2: "YOUR VISION.",
      hero_typography_desc: "We design thoughtful spaces for smart clients.",
      hero_typography_col1: "Architecture &\nInterior",
      hero_typography_col2: "Kendari\nIndonesia",
      hero_sub: "Our Expertise",
      hero_title_1: "Services",
      hero_title_2: "& Value.",
      
      overview: {
        title: "Service Overview",
        content: "We provide professional architecture, interior design, and construction services with a structured, transparent, and execution-focused approach. Every project progresses through clear stages—from initial programming and space planning to technical drawings and on-site construction. Our goal is to ensure clients receive a durable, well-built structure that fits their requirements, runs on budget, and functions reliably. By combining detailed design planning with experienced field supervision, we deliver practical and polished spaces."
      },
      
      view_details: "View Details",
      close_details: "Close Details",
      comprehensive_solution: "Integrated Service",
      currently_viewing: "Currently Viewing",
      
      list: [
        {
          id: 'arch_int',
          title: 'Architecture & Interior Design',
          description: 'Our design services are tailored for clients who require thorough space planning before construction begins. We treat design as an integrated system regulating movement, everyday comfort, and efficient material use. The design process covers site analysis, layout optimization, 3D renderings, and precise construction-ready blueprints to ensure on-site building goes smoothly without costly revisions.'
        },
        {
          id: 'design_build',
          title: 'Integrated Design & Build',
          description: 'A comprehensive service where we handle both design and construction. Having a single team manage the entire lifecycle improves communication, speeds up decision-making, and eliminates mismatches between the blueprint and the built structure. This approach ensures consistent quality control, clear timelines, and a highly organized work flow.'
        },
        {
          id: 'construction',
          title: 'Construction & Project Execution',
          description: 'We execute construction with a strict focus on structural safety, precision, and durability. Every phase is managed based on agreed blueprints and technical specifications, supervised closely by our field team. We ensure standard quality materials, proper technical methods, and clean finish work for new builds and renovations.'
        },
        {
          id: 'renovation',
          title: 'Renovation & Space Adaptation',
          description: 'Renovation is a smart way to upgrade, optimize, or repair an existing building without unnecessary major structural modifications. We evaluate your current space, identify technical issues, and execute realistic layouts to maximize its utility and value.'
        },
        {
          id: 'consultation',
          title: 'Professional Consultation',
          description: 'We offer pre-project consulting to analyze your space requirements, estimate construction costs, assess design feasibility, and provide objective technical advice so you can make informed decisions before starting.'
        },
        {
          id: 'management',
          title: 'Project Management',
          description: 'We supervise construction systematically, covering schedule tracking, budget control, and periodic progress reporting. Our structured management reduces the risk of delays or cost overruns, maintaining quality standards without requiring your constant presence on site.'
        }
      ],
      
      commitment: {
        title: "Our Work Commitment",
        content: "We believe a successful project is defined by disciplined work systems and clear communication. We prioritize transparency, timely delivery, and solid structural quality in all our services to build long-term trust."
      }
    },
    philosophy: {
      title: 'Our Core Disciplines',
      hero_title_1: "The Foundation of",
      hero_title_2: "Every Line We Draw.",
      items: [
        {
          title: 'Architectural Honesty',
          desc: 'We design structures focused on structural durability, clear layouts, and responsiveness to the local climate. We avoid unnecessary ornamentation, ensuring every form serves a practical purpose and is built to last.',
          tag: 'Form',
          statLabel: 'Structure',
          statValue: 'Durable Geometry'
        },
        {
          title: 'Harmonious Interiors',
          desc: 'We believe interiors should feel like an organic extension of the architecture. Our layouts prioritize physical comfort, material textures—like warm timber and cool stone—and custom lighting designed to enhance daily living.',
          tag: 'Soul',
          statLabel: 'Ambience',
          statValue: 'Comfort Focused'
        },
        {
          title: 'Precise Construction',
          desc: 'A good design is only as reliable as its execution. With our in-house construction team, we ensure that the quality of masonry, joinery, and structural finishes matches our exact design specifications without compromises.',
          tag: 'Build',
          statLabel: 'Accuracy',
          statValue: '0.0% Tolerance'
        }
      ]
    },
    process: {
      title: 'From Void to Form',
      method_title_1: "The",
      method_title_2: "Linear",
      method_title_3: "Method.",
      method_desc: "A practical transition from planning to construction. Clear communication, solid results.",
      steps: [
        { title: 'The Dialogue', desc: 'We begin by understanding your daily habits, space requirements, and budget to establish a practical, personalized design brief.' },
        { title: 'The Schematic', desc: 'We translate your needs into structured layouts, analyzing natural light pathways, airflow, and spatial proportions before creating technical blueprints.' },
        { title: 'The Construct', desc: 'Our in-house builders execute the construction under direct architect supervision, preventing miscommunications and maintaining tight quality control.' },
        { title: 'The Legacy', desc: 'We deliver a durable, well-built structure designed for longevity, providing a reliable and comfortable backdrop for your family.' }
      ]
    },
    categories: {
      [ProjectCategory.ARCHITECTURE]: 'Architecture',
      [ProjectCategory.INTERIOR]: 'Interior',
      [ProjectCategory.CONSTRUCTION]: 'Construction'
    },
    footer: {
      description: 'Designing and building functional, elegant spaces with careful planning and reliable craftsmanship.',
      menu: 'Menu',
      connect: 'Connect',
      legal: 'Legal',
      rights: 'All Rights Reserved.',
      designed: 'Crafted with Discipline.',
      cta_title_1: "Have an",
      cta_title_2: "Project?",
      cta_button: "Start a Project"
    },
    cookie_banner: {
      title: "Cookie Consent",
      description: "We use cookies to improve your browsing experience and understand how our website is used.",
      accept: "Accept All",
      preferences: "Preferences",
      decline: "Decline",
      settings_title: "Preferences",
      essential: "Essential",
      essential_desc: "Required for the website to function. Cannot be disabled.",
      analytics: "Analytics",
      analytics_desc: "Helps us understand how you use the site.",
      marketing: "Marketing",
      marketing_desc: "Used to deliver relevant content and advertisements.",
      cancel: "Cancel",
      save: "Save Changes"
    },
    legal: {
      terms_date: "Effective Date: 18 February 2026",
      terms_intro: ["These Terms of Service (“Terms”) govern your access to and use of the services provided by Linier Studio.", "By accessing our website or engaging our services, you agree to these Terms."],
      terms_s1_title: "1. Definitions",
      terms_s1_list: ["<strong>Company</strong> refers to Linier Studio.", "<strong>Client</strong> refers to any individual or entity purchasing services.", "<strong>Services</strong> refers to architecture, interior design, construction, consultation, and related professional services."],
      terms_s2_title: "2. Scope of Services",
      terms_s2_desc: "Services may include:",
      terms_s2_list: ["Architectural design", "Interior design", "Renovation", "Construction", "Project supervision", "Consultation"],
      terms_s2_note: "Specific deliverables, timelines, and costs will be detailed in separate written agreements or contracts.",
      terms_s3_title: "3. Client Responsibilities",
      terms_s3_desc: "Clients agree to:",
      terms_s3_list: ["Provide accurate project information", "Supply required documents and approvals", "Make payments according to agreed schedules", "Cooperate during project execution"],
      terms_s3_note: "Delays caused by incomplete information or approvals are not the responsibility of the Company.",
      terms_s4_title: "4. Fees and Payments",
      terms_s4_desc: "All fees shall be specified in written quotations or contracts. Unless otherwise stated:",
      terms_s4_list: ["Payments are non-refundable once work has commenced", "Late payments may result in project suspension", "Additional work outside scope will be billed separately"],
      terms_s5_title: "5. Project Timelines",
      terms_s5_desc: "Estimated timelines are projections based on available information. Delays may occur due to:",
      terms_s5_list: ["Client revisions", "Material availability", "Permit approvals", "Site conditions", "Force majeure events"],
      terms_s6_title: "6. Intellectual Property",
      terms_s6_desc_1: "All design drawings, concepts, renderings, plans, and documents created by the Company remain intellectual property of the Company unless otherwise agreed in writing.",
      terms_s6_desc_2: "Clients may not reproduce, distribute, or reuse designs without written consent.",
      terms_s7_title: "7. Revisions and Changes",
      terms_s7_desc: "Revisions beyond agreed limits may incur additional charges. Major changes after approval stages may require new timelines and pricing adjustments.",
      terms_s8_title: "8. Limitation of Liability",
      terms_s8_desc: "To the maximum extent permitted by law, the Company shall not be liable for:",
      terms_s8_list: ["Indirect or consequential damages", "Loss of profit or business opportunity", "Third-party contractor actions", "Delays outside our control"],
      terms_s9_title: "9. Warranty Disclaimer",
      terms_s9_desc: "Services are provided on a professional best-effort basis. We do not guarantee:",
      terms_s9_list: ["Exact aesthetic interpretation", "Supplier performance", "Material longevity beyond manufacturer warranty"],
      terms_s10_title: "10. Termination",
      terms_s10_desc: "We reserve the right to terminate or suspend services if:",
      terms_s10_list: ["Payment obligations are not met", "Client breaches agreement", "Project conditions become unsafe or unlawful"],
      terms_s10_note: "Client remains responsible for work completed up to termination.",
      terms_s11_title: "11. Force Majeure",
      terms_s11_desc: "We shall not be liable for delays or failure to perform due to circumstances beyond reasonable control, including natural disasters, regulatory changes, labor disputes, supply shortages, or technical failures.",
      terms_s12_title: "12. Governing Law",
      terms_s12_desc: "These Terms shall be governed by applicable laws in the jurisdiction where the Company is legally registered.",
      terms_s13_title: "13. Dispute Resolution",
      terms_s13_desc: "Disputes shall first be resolved through good-faith negotiation. If unresolved, disputes shall be settled through competent courts in the Company’s jurisdiction.",
      terms_s14_title: "14. Modifications",
      terms_s14_desc: "We reserve the right to modify these Terms at any time. Updated versions become effective upon publication.",
      terms_s15_title: "15. Contact",
      terms_s15_desc: "For legal or contractual inquiries:",
      terms_s15_label_1: "General",
      terms_s15_label_2: "Compliance",
      
      privacy_date: "Last Updated: 18 February 2026",
      privacy_intro: ["This Privacy Policy describes how Linier Studio (“Company”, “we”, “our”, or “us”), an architecture, interior design, and construction services provider, collects, uses, maintains, and protects information obtained from users (“User”, “you”, or “your”) of our website and services.", "By accessing or using our website or services, you acknowledge that you have read and understood this Privacy Policy."],
      privacy_s1_title: "1. Information We Collect",
      privacy_s1_1_title: "1.1 Personal Data",
      privacy_s1_1_desc: "We may collect personally identifiable information including but not limited to:",
      privacy_s1_1_list: ["Full name", "Company or organization name", "Email address", "Phone number", "Project address", "Project details and requirements", "Communication records"],
      privacy_s1_1_note: "You may visit our website anonymously, but certain services require personal data submission.",
      privacy_s1_2_title: "1.2 Non-Personal Data",
      privacy_s1_2_desc: "We may automatically collect non-personal information such as:",
      privacy_s1_2_list: ["Browser type", "Device type", "IP address", "Access times", "Pages visited", "Referral URLs"],
      privacy_s1_3_title: "1.3 Project Information",
      privacy_s1_3_desc: "When you request consultation, quotation, or services, we may collect:",
      privacy_s1_3_list: ["Architectural drawings", "Interior design references", "Site photos", "Budget ranges", "Timeline expectations"],
      privacy_s1_3_note: "This data is used solely for project evaluation and execution.",
      privacy_s2_title: "2. How We Use Information",
      privacy_s2_desc: "We use collected information for legitimate business purposes, including:",
      privacy_s2_list: ["Providing architectural, interior, and construction services", "Responding to inquiries and consultations", "Preparing quotations and proposals", "Managing contracts and projects", "Improving service quality", "Internal administration and documentation", "Legal compliance"],
      privacy_s3_title: "3. Legal Basis for Processing",
      privacy_s3_desc: "Where applicable under data protection laws, we rely on:",
      privacy_s3_list: ["Consent", "Contractual necessity", "Legal obligations", "Legitimate business interests"],
      privacy_s4_title: "4. Data Sharing",
      privacy_s4_desc: "We do not sell or rent personal information. We may share information only with:",
      privacy_s4_list: ["Contractors and subcontractors involved in projects", "Vendors and suppliers", "Professional advisors (legal, accounting, consultants)", "Authorities when required by law"],
      privacy_s4_note: "All parties must maintain confidentiality and data security.",
      privacy_s5_title: "5. Data Retention",
      privacy_s5_desc: "We retain personal and project data only as long as necessary for:",
      privacy_s5_list: ["Completing services", "Fulfilling contracts", "Legal compliance", "Resolving disputes", "Internal record keeping"],
      privacy_s6_title: "6. Data Security",
      privacy_s6_desc: "We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no method of transmission over the internet is completely secure, and absolute security cannot be guaranteed.",
      privacy_s7_title: "7. Your Rights",
      privacy_s7_desc: "Depending on applicable regulations, you may have the right to:",
      privacy_s7_list: ["Access your data", "Correct inaccurate data", "Request deletion", "Restrict processing", "Object to use", "Request copies of your data"],
      privacy_s7_note: "Requests can be submitted via official contact channels.",
      privacy_s8_title: "8. Cookies",
      privacy_s8_desc: "Our website may use cookies to enhance user experience and analyze traffic. You may choose to disable cookies through your browser settings.",
      privacy_s9_title: "9. Third-Party Services",
      privacy_s9_desc: "We may use third-party tools or platforms for analytics, communication, or hosting. These providers have their own privacy policies, and we are not responsible for their practices.",
      privacy_s10_title: "10. Children’s Information",
      privacy_s10_desc: "Our services are intended for business and professional use. We do not knowingly collect information from individuals under 18 years of age.",
      privacy_s11_title: "11. Policy Updates",
      privacy_s11_desc: "We reserve the right to update this Privacy Policy at any time. Changes take effect immediately upon publication. Continued use of our services constitutes acceptance of revised terms.",
      privacy_s12_title: "12. Contact",
      privacy_s12_desc: "For privacy-related inquiries or requests:",
      privacy_s12_label_1: "General Contact",
      privacy_s12_label_2: "Compliance & Complaints"
    }
};

export const translations: Record<Language, any> = {
  [Language.EN]: enTranslations,
  [Language.ID]: {
     ...enTranslations,
     common: { ...enTranslations.common, headquarters: "Kantor Pusat", navigation: "Navigasi", address_country: "Indonesia", privacy: "Kebijakan Privasi", terms: "Syarat Layanan", cookies: "Pengaturan Cookie" },
     nav: { home: 'Beranda', about: 'Tentang Kami', portfolio: 'Portofolio', services: 'Layanan', contact: 'Hubungi Kami', startProject: 'Mulai Proyek', subtitle: 'Ars/Bangun' },
     cookie_banner: {
       title: "Persetujuan Cookie",
       description: "Kami menggunakan cookie untuk merawat kenyamanan penelusuran Anda dan memahami bagaimana situs ini digunakan.",
       accept: "Setujui Semua",
       preferences: "Pengaturan",
       decline: "Tolak",
       settings_title: "Pengaturan Cookie",
       essential: "Penting",
       essential_desc: "Diperlukan agar situs web dapat berfungsi secara normal. Tidak dapat dinonaktifkan.",
       analytics: "Analisis",
       analytics_desc: "Membantu kami memahami bagaimana pengunjung berinteraksi dengan situs.",
       marketing: "Pemasaran",
       marketing_desc: "Digunakan untuk menyesuaikan konten agar lebih relevan dengan preferensi Anda.",
       cancel: "Batal",
       save: "Simpan Perubahan"
     },
     project_detail: {
      back: "Kembali",
      client: "Klien",
      area: "Luas Bangunan",
      year: "Tahun Proyek",
      role: "Peran Kami",
      role_value: "Desain & Konstruksi",
      concept: "Gagasan Konsep",
      challenge: "Tantangan Proyek",
      solution: "Solusi Desain",
      visual: "Dokumentasi Karya",
      next: "Proyek Berikutnya",
      view_case: "Bedah Studi Kasus",
      not_found: "Karya Tidak Ditemukan",
      return: "Kembali ke Portofolio"
    },
    projects: {
      '1': {
        title: 'The Obsidian House',
        location: 'Jakarta Selatan',
        client: 'Hunian Pribadi',
        description: 'Hunian keluarga dengan eksterior batuan alam gelap yang kokoh, dipadukan dengan bukaan kaca lebar untuk mengalirkan cahaya matahari tanpa mengorbankan privasi penghuni.',
        challenge: 'Menjaga privasi rumah di tengah lingkungan perkampungan urban yang padat sekaligus memastikan sirkulasi udara lancar.',
        solution: 'Penerapan kisi-kisi kayu/logam (louvers) pada fasad depan bangunan dan pembuatan taman terbuka di bagian dalam rumah (inner courtyard).'
      },
      '2': {
        title: 'Azure Sky Structure',
        location: 'Surabaya',
        client: 'Skyline Corp',
        description: 'Gedung perkantoran modern di Surabaya yang mengutamakan kekuatan konstruksi baja, efisiensi tata ruang, dan keandalan fungsional.',
        challenge: 'Membangun struktur bertingkat tinggi dengan beban berat di atas lahan yang terbatas dan karakteristik tanah yang lunak.',
        solution: 'Penggunaan pondasi tiang pancang (bore pile) yang dalam dikombinasikan dengan struktur komposit baja ringan untuk mempercepat pengerjaan.'
      },
      '3': {
        title: 'Minimalist Zen Villa',
        location: 'Bali',
        client: 'Hospitality Group',
        description: 'Villa peristirahatan di Ubud yang memadukan kehangatan kayu lokal dengan karakter kokoh semen ekspos, dirancang menyatu dengan alam sekitarnya.',
        challenge: 'Mendirikan bangunan di atas kontur tanah yang miring tanpa merusak pemandangan alam dan pepohonan eksisting.',
        solution: 'Merancang struktur kantilever yang melayang mengikuti kemiringan tanah serta memaksimalkan penggunaan material kayu setempat.'
      },
      '4': {
        title: 'Lumina Art Gallery',
        location: 'Bandung',
        client: 'Lumina Arts',
        description: 'Renovasi ruang pameran seni di Bandung yang dirancang bersih dan minimalis agar karya seni yang dipajang menjadi fokus utama perhatian pengunjung.',
        challenge: 'Melakukan renovasi struktural pada bangunan tua agar memiliki ruang pameran yang lapang tanpa tiang penyangga di tengah.',
        solution: 'Pemasangan balok penguat tersembunyi pada langit-langit dan penataan sistem pencahayaan tidak langsung (indirect lighting) yang merata.'
      },
      '5': {
        title: 'Nexus Office Hub',
        location: 'Tangerang',
        client: 'Tech Nexus',
        description: 'Perencanaan ruang kantor modern yang mengutamakan kenyamanan akustik, kemudahan interaksi antar karyawan, serta efisiensi energi.',
        challenge: 'Merancang ruang kerja konsep terbuka (open-plan) yang tetap tenang dan kondusif untuk konsentrasi kerja.',
        solution: 'Pemasangan panel peredam suara dekoratif di langit-langit serta bilik-bilik kecil berperedam suara untuk kebutuhan rapat singkat.'
      },
      '6': {
        title: 'Aeon Penthouse',
        location: 'Jakarta Pusat',
        client: 'Bapak H',
        description: 'Renovasi interior apartemen mewah di Jakarta Pusat dengan fokus pada detail sambungan material marmer, panel kayu, dan aksen logam.',
        challenge: 'Kendala teknis memindahkan material marmer utuh ukuran besar dan furnitur custom ke lantai 45 gedung apartemen.',
        solution: 'Pembagian modul material secara presisi agar muat di lift barang serta perancangan sistem instalasi knock-down yang praktis.'
      }
    },
    hero: {
      tagline: '',
      disciplines: 'Arsitektur | Interior | Konstruksi',
      scroll: '• Gulir untuk Menjelajahi • Linier Studio •',
      title1: 'Arsitektur',
      title2: 'dengan Tujuan',
      music_btn: 'Putar Musik'
    },
    home: { 
        manifesto_1: 'Kami tidak sekadar mendirikan dinding. Kami merancang ruang untuk', 
        cycling_words: ["MENANGKAP CAHAYA", "MENGALIRKAN UDARA", "MENYIMPAN KEHENINGAN", "MENJAGA KESEDERHANAAN"],
        manifesto_2: 'Di tengah riuhnya kesibukan, kami merancang ruang yang tenang untuk beristirahat.',
        manifesto_3: 'Metode ', 
        manifesto_highlight: 'Rancang-Bangun',
        manifesto_4: ' terintegrasi kami menyatukan gagasan desain dengan ketepatan eksekusi di lapangan.',
        philosophy_btn: 'Filosofi Desain',
        trusted_statement: "Sebagai studio rancang-bangun, kami mengintegrasikan jasa arsitektur, interior, dan konstruksi secara utuh. Kami fokus pada kualitas pengerjaan yang rapi, ketepatan waktu, dan keselarasan fungsi dengan kebutuhan Anda. Kami mengawal setiap detail secara transparan—mulai dari sketsa gagasan hingga serah terima kunci—tanpa janji berlebih, melainkan pembuktian hasil kerja di lapangan.",
        selected_works: 'Karya Terpilih', 
        view_all: 'Seluruh Portofolio', 
        next_steps: 'Langkah Berikutnya', 
        have_a: 'Punya', 
        vision: 'Visi Ruang?', 
        lets_discuss: "Mari Berdiskusi",
        journal_title: "Dekonstruksi", 
        elements_title: "Elemen Esensial", 
        elements_desc: "Membedah bahasa desain kami ke dalam bentuknya yang paling murni: Cahaya, Tekstur, dan Ruang.", 
        read_article: "Jelajahi",
        marquee: "INOVASI — PRESISI — KEBERLANJUTAN — RUANG EKSKLUSIF — DESAIN ABADI — ",
        tour_label: "Tur Virtual",
        tour_title: "Pengalaman Imersif",
        tour_desc: "Rasakan dimensi, interaksi cahaya, dan atmosfer ruang kami melalui pengalaman interaktif 360 derajat.",
        tour_btn: "Masuki Ruang Virtual",
        tour_close: "Kembali"
    },
    about: { 
      title: "Tentang Kami", 
      hero_subtitle: "Menyempurnakan dan memodernisasi desain arsitektur untuk estetika kontemporer yang bersih.",
      firm_and_philosophy: "Firma<br/>dan<br/>filosofi",
      firm_desc: "Gaya arsitektur kami ditandai dengan pendekatan yang bersih dan modern, secara konsisten mencerminkan estetika kontemporer kami.",
      learn_more: "Pelajari lebih lanjut proyek kami",
      vision_title: "Visi Kami", 
      mission_title: "Misi Kami",
      trusted_statement: "Sebagai studio rancang-bangun, kami mengintegrasikan jasa arsitektur, interior, dan konstruksi secara utuh. Kami fokus pada kualitas pengerjaan yang rapi, ketepatan waktu, dan keselarasan fungsi dengan kebutuhan Anda. Kami mengawal setiap detail secara transparan—mulai dari sketsa gagasan hingga serah terima kunci—tanpa janji berlebih, melainkan pembuktian hasil kerja di lapangan.",
      paragraph_1: "Linier Studio lahir dari keinginan untuk menyatukan perencanaan desain dengan pelaksanaan konstruksi secara presisi. Kami merancang dan membangun ruang hunian serta komersial dengan mengutamakan fungsi, kenyamanan jangka panjang, dan kesederhanaan bentuk.",
      paragraph_2: "Bagi kami, arsitektur yang baik tidak melulu soal tampilan luar. Setiap rancangan kami susun berdasarkan kebiasaan harian penghuninya, kondisi iklim mikro setempat, serta efisiensi tata ruang. Kami ingin menciptakan ruangan yang fungsional dan menjadi tempat berteduh yang nyaman.",
      paragraph_3: "Perencanaan kami selalu mempertimbangkan logika struktur, kelancaran sirkulasi udara dan cahaya, serta anggaran biaya yang realistis. Dengan begitu, gambar desain yang kami buat tidak hanya indah di atas kertas, tetapi juga aman, masuk akal, dan efisien saat dibangun di lapangan.",
      paragraph_4: "Untuk interior, kami berupaya menciptakan keselarasan dengan bentuk arsitektur bangunannya. Kami memperhatikan betul detail sambungan material, proporsi furnitur, serta pemilihan tekstur permukaan agar ruangan terasa hangat, rapi, dan nyaman untuk digunakan beraktivitas.",
      paragraph_5: "Sebagai tim kontraktor, kami bertanggung jawab penuh merealisasikan gambar kerja menjadi bangunan fisik yang kokoh. Melalui pengawasan harian yang disiplin di lapangan, kami memastikan kualitas pengerjaan struktur hingga tahap akhir (finishing) rapi dan sesuai dengan spesifikasi teknis yang disepakati.",
      paragraph_6: "Kami percaya bahwa bangunan yang direncanakan dengan baik akan berumur panjang dan memberi manfaat nyata bagi penghuninya. Komitmen kami sederhana: menyelesaikan pekerjaan dengan tanggung jawab penuh, menjaga komunikasi tetap terbuka, dan memberikan hasil konstruksi yang andal.",
      vision_text: "Menghadirkan karya arsitektur dan ruang hidup yang bersahaja, berkarakter jujur, dan berdaya tahan lama melintasi waktu.",
      mission_text: "Merancang dan membangun ruang melalui proses kolaborasi yang terbuka, pengerjaan yang rapi, dan tanggung jawab penuh terhadap kualitas hasil akhir.",
      mission_measurable_title: "Ketepatan Detail",
      mission_measurable_desc: "Kami percaya detail terkecil menentukan kenyamanan ruang. Setiap sudut dan sambungan material diperhitungkan secara matang.",
      mission_professional_title: "Keterbukaan Proses",
      mission_professional_desc: "Kami menjunjung tinggi komunikasi yang jujur, transparansi anggaran, serta manajemen kerja yang disiplin di setiap tahap.",
      core_values_title: "Nilai-Nilai Inti.",
      core_values_desc: "Prinsip-prinsip yang memandu setiap garis rancangan kami."
    },
    portfolio: { title: "Portofolio", subtitle: "Karya Terpilih", filter_all: "Semua", hero_title_1: "MERANCANG", hero_title_2: "HUNIAN DENGAN", hero_title_3: "MANUSIA", hero_title_4: "SEBAGAI PUSATNYA", hero_desc_1: "Kami merancang ruang untuk manusia. Tidak peduli skala proyeknya, pendekatan membumi kami tetap sama. Kami mendengarkan terlebih dahulu, merancang kemudian. Kami meluangkan waktu untuk memahami bagaimana Anda hidup, bekerja, dan bergerak di ruang Anda.", hero_desc_2: "Kemudian, kami mewujudkan visi Anda. Belajar dari pengalaman nyata, kami menciptakan ruang kontemporer dan aspirasional yang terasa mudah dan benar-benar milik Anda.", hero_btn: "PELAJARI LEBIH LANJUT TENTANG STUDIO KAMI", hero_tag: "(STUDIO KAMI)", hero_menu: "MENU", hero_get_in_touch: "HUBUNGI KAMI" },
    contact: { 
        title: "Hubungi Kami",
        subtitle: "Mari berdiskusi tentang proyek Anda.",
        office: "Kantor",
        phone: "Telepon",
        email: "Surel",
        form: {
            name: "Nama Lengkap",
            email: "Surel",
            phone: "Nomor Telepon",
            address: "Lokasi Proyek",
            country: "Negara",
            project: "Jenis Proyek",
            budget: "Perkiraan Anggaran",
            message: "Pesan Anda",
            message_ph: "Ceritakan kebutuhan proyek Anda...",
            submit: "Kirim Pesan",
            select_range: "Pilih Kisaran",
            style: "Gaya Desain",
            select_style: "Pilih Gaya Desain",
            budget_note: "Catatan: Nominal ini merupakan perkiraan anggaran pembangunan keseluruhan (RAB), bukan biaya jasa desain proyek."
        },
        budget_options: [
            "< 500 Juta",
            "500 Juta - 1 Miliar",
            "1 Miliar - 5 Miliar",
            "> 5 Miliar"
        ],
        interior_contractor_budget_options: [
            "0 - 50 Juta",
            "50 Juta - 100 Juta",
            "100 Juta - 250 Juta",
            "250 Juta - 500 Juta",
            "> 500 Juta"
        ],
        types: [
            "Konstruksi",
            "Arsitektur Komersial",
            "Desain Interior",
            "Kontraktor Interior",
            "Konsultasi"
        ],
        styles: [
            "Modern",
            "Minimalis",
            "Klasik",
            "Neoklasik",
            "Kontemporer",
            "Industrial",
            "Skandinavia",
            "Tropis",
            "Mediterania",
            "Jepang (Zen)",
            "Brutalisme",
            "Art Deco",
            "Art Nouveau",
            "Bauhaus",
            "Futuristik",
            "Dekonstruktivisme",
            "Parametrik",
            "Vernakular",
            "Biophilic",
            "Postmodern"
        ]
    },
    services: {
      hero_typography_1: "KAMI MEMBANGUN",
      hero_typography_2: "VISI ANDA.",
      hero_typography_desc: "Kami merancang ruang yang cermat untuk klien yang cerdas.",
      hero_typography_col1: "Arsitektur &\nInterior",
      hero_typography_col2: "Kendari\nIndonesia",
      hero_sub: "Keahlian Kami",
      hero_title_1: "Layanan",
      hero_title_2: "& Nilai.",
      overview: {
        title: "Tinjauan Layanan",
        content: "Kami menyediakan layanan profesional di bidang arsitektur, desain interior, dan konstruksi dengan pendekatan yang terstruktur, transparan, dan berorientasi pada hasil. Setiap proyek ditangani melalui tahapan yang jelas—mulai dari perencanaan konsep, pengembangan desain, kalkulasi teknis, hingga eksekusi pembangunan. Tujuan utama kami adalah memastikan klien menerima hasil akhir yang sesuai dengan visi mereka, berfungsi dengan tepat, efisien secara biaya, dan memiliki kualitas bangunan yang andal untuk jangka panjang. Dengan memadukan kemampuan desain, pengalaman teknis lapangan, dan manajemen proyek yang disiplin, kami mampu menyajikan solusi ruang yang tidak hanya menarik secara visual tetapi juga matang dalam perencanaan dan pelaksanaan."
      },
      view_details: "Lihat Detail",
      close_details: "Tutup Detail",
      comprehensive_solution: "Layanan Terpadu",
      currently_viewing: "Sedang Dilihat",
      list: [
        {
          id: 'arch_int',
          title: 'Arsitektur & Desain Interior',
          description: 'Layanan desain kami ditujukan bagi klien yang membutuhkan perencanaan ruang yang matang sebelum pembangunan dimulai. Kami merancang tata ruang sebagai satu sistem terpadu yang mengatur alur aktivitas, kenyamanan sirkulasi, dan efisiensi material. Proses desain kami meliputi analisis tapak, optimalisasi tata letak, visualisasi 3D, serta pembuatan gambar kerja teknis mendetail sebagai acuan tim pelaksana di lapangan agar pembangunan berjalan lancar tanpa pembengkakan biaya.'
        },
        {
          id: 'design_build',
          title: 'Rancang & Bangun Terintegrasi',
          description: 'Layanan komprehensif di mana kami menangani tahap perencanaan sekaligus pelaksanaan konstruksi. Mengoordinasikan seluruh tahapan di bawah satu tim memotong hambatan komunikasi, mempercepat pengambilan keputusan, dan menghindari perbedaan penafsiran antara gambar arsitek dengan hasil fisik di lapangan. Solusi ini menjamin kontrol kualitas yang konsisten, kepastian jadwal, serta proses kerja yang efisien.'
        },
        {
          id: 'construction',
          title: 'Konstruksi & Eksekusi Proyek',
          description: 'Kami melaksanakan pekerjaan konstruksi dengan fokus penuh pada kekuatan struktur, kerapian pengerjaan, dan daya tahan bangunan. Setiap tahapan diawasi secara harian oleh tim teknis kami untuk memastikan penggunaan bahan berkualitas standar, metode kerja yang benar sesuai prosedur teknis, serta hasil finishing yang bersih, baik untuk pembangunan baru maupun renovasi.'
        },
        {
          id: 'renovation',
          title: 'Renovasi & Adaptasi Ruang',
          description: 'Renovasi adalah solusi efisien untuk meningkatkan kegunaan, estetika, dan nilai bangunan tanpa perlu membongkar struktur utama secara berlebihan. Kami mengevaluasi kondisi bangunan eksisting, memetakan kendala teknis, dan menyusun penataan ulang ruang yang realistis agar ruangan lama Anda berfungsi optimal kembali.'
        },
        {
          id: 'consultation',
          title: 'Konsultasi Profesional',
          description: 'Kami menyediakan sesi konsultasi pra-proyek untuk menganalisis kebutuhan ruang Anda, memperkirakan kisaran biaya konstruksi yang realistis, meninjau kelayakan desain, serta memberikan masukan teknis yang objektif agar Anda dapat mengambil keputusan yang tepat sejak awal.'
        },
        {
          id: 'management',
          title: 'Manajemen Proyek',
          description: 'Kami melakukan pengawasan berkala secara terstruktur, memantau lini masa pengerjaan, mengontrol kesesuaian biaya anggaran, dan mengirimkan laporan perkembangan berkala. Manajemen yang baik meminimalkan risiko keterlambatan dan salah pengerjaan di lapangan tanpa mengharuskan Anda hadir di lokasi setiap saat.'
        }
      ],
      commitment: {
        title: "Komitmen Kerja Kami",
        content: "Kami percaya proyek yang sukses lahir dari metode kerja yang disiplin dan komunikasi yang jujur. Kami selalu memprioritaskan transparansi anggaran, ketepatan waktu serah terima, dan kualitas bangunan di setiap layanan kami untuk membangun kerja sama jangka panjang."
      }
    },
    elements: [
      {
        id: 1,
        title: "CAHAYA",
        subtitle: "Pencahayaan Alami",
        desc: "Cahaya alami adalah elemen penting yang kami kelola untuk menghidupkan suasana di dalam ruangan.",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "Cahaya bukan sekadar alat penerangan, melainkan pembuat karakter ruang. Kami mengatur masuknya cahaya alami untuk menciptakan bayangan yang dinamis dari pagi hingga sore hari, mengurangi ketergantungan pada lampu di siang hari.",
          philosophy: "Cahaya alami mengubah bangunan kaku menjadi ruang yang dinamis.",
          application: "Kami menempatkan bukaan vertikal, jendela atas (skylight), dan kisi-kisi dengan perhitungan arah matahari yang tepat agar ruangan tetap terang namun tidak panas."
        }
      },
      {
        id: 2,
        title: "TEKSTUR",
        subtitle: "Karakter Bahan",
        desc: "Kejujuran karakter bahan memberikan keindahan alami pada setiap sudut ruang.",
        image: "https://images.unsplash.com/photo-1596627689914-7299a47321c1?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "Kami menyukai sentuhan material yang apa adanya. Dinginnya lantai batu, kehangatan serat kayu, hingga permukaan semen ekspos. Kombinasi tekstur ini memberikan karakter taktil yang membuat ruangan terasa lebih dekat dengan alam.",
          philosophy: "Bahan bangunan harus tampil jujur dan menua dengan indah seiring waktu.",
          application: "Kami memilih material lokal dengan pengolahan minimal untuk menonjolkan serat kayu asli, guratan batu alam, dan tekstur alami semen."
        }
      },
      {
        id: 3,
        title: "RUANG",
        subtitle: "Tata Ruang Lapang",
        desc: "Menyediakan ruang sirkulasi yang lapang agar sirkulasi udara dan pandangan terasa lega.",
        image: "https://images.unsplash.com/photo-1519962551779-513473b64cf6?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "Di tengah lahan yang semakin terbatas, ruang yang lapang dan sirkulasi yang lega adalah kebutuhan penting. Kami menghindari ruangan yang terasa sesak dan buntu dengan merancang ruang tengah yang mengalir dan memiliki bukaan udara yang luas.",
          philosophy: "Kenyamanan ruang tidak ditentukan oleh sekat dinding, melainkan oleh kelegaan bernapas.",
          application: "Penerapan plafon tinggi (high ceiling), taman terbuka di dalam rumah (inner courtyard), serta penghubung ruang tanpa sekat kaku agar udara mengalir lancar."
        }
      }
    ],
    philosophy: { 
      title: "Disiplin Utama",
      hero_title_1: "Pondasi dari",
      hero_title_2: "Setiap Garis yang Kami Tarik.",
      items: [
        {
          title: 'Arsitektur Jujur',
          desc: 'Kami merancang bangunan yang fokus pada kekuatan struktur, kejelasan fungsi tata ruang, dan respon terhadap lingkungan sekelilingnya. Kami menghindari ornamen berlebihan yang tidak perlu; setiap bentuk bangunan didesain untuk bertahan lama, aman, dan memudahkan aktivitas sehari-hari.',
          tag: 'Bentuk',
          statLabel: 'Struktur',
          statValue: 'Struktur Kokoh'
        },
        {
          title: 'Interior Selaras',
          desc: 'Kami merancang ruang bagian dalam agar selaras dengan desain luar bangunannya. Sentuhan interior kami berfokus pada kenyamanan bersentuhan langsung dengan material—seperti permukaan kayu yang hangat atau lantai batu yang sejuk. Semua elemen furnitur dan pencahayaan direncanakan sejak awal bersama arsitek agar ruangan terasa fungsional dan estetis.',
          tag: 'Jiwa',
          statLabel: 'Atmosfer',
          statValue: 'Fokus Kenyamanan'
        },
        {
          title: 'Konstruksi Rapi',
          desc: 'Desain yang baik hanya akan terwujud dengan pengerjaan yang rapi di lapangan. Karena kami memiliki tim kontraktor internal, kami dapat menjamin kesesuaian antara gambar kerja dengan hasil fisik di lapangan. Kami memantau setiap proses pengecoran beton, pemasangan dinding, hingga pengerjaan detail finishing untuk meminimalkan kesalahan dan pembengkakan biaya.',
          tag: 'Pelaksana',
          statLabel: 'Akurasi',
          statValue: 'Toleransi 0.0%'
        }
      ]
    },
    process: { 
      title: "Dari Ruang Kosong Menjadi Bentuk",
      method_title_1: "Metode",
      method_title_2: "Linier",
      method_title_3: ".",
      method_desc: "Langkah teratur dari perencanaan hingga konstruksi fisik. Komunikasi satu pintu, hasil yang kokoh.",
      steps: [
        { title: 'Dialog Awal', desc: 'Proses kami mulai dengan mendengarkan kebutuhan hidup Anda, memahami kebiasaan harian, serta merencanakan kebutuhan ruangan yang sesuai dengan anggaran yang disiapkan.' },
        { title: 'Penyusunan Skema', desc: 'Kami menerjemahkan kebutuhan tersebut ke dalam tata ruang yang terukur. Kami merancang sirkulasi udara, pencahayaan alami, serta pembagian zona ruangan agar nyaman sebelum gambar teknis mendetail dibuat.' },
        { title: 'Pembangunan Fisik', desc: 'Tim pelaksana lapangan kami mulai membangun dengan pengawasan langsung dari arsitek. Hal ini memastikan setiap detail gambar terbangun dengan tepat tanpa ada kesalahpahaman antara tim perencana dan tim konstruksi.' },
        { title: 'Warisan Ruang', desc: 'Kami menyerahkan hasil pembangunan yang kokoh dan berdaya tahan lama. Kami berkomitmen untuk mewujudkan rumah yang tidak hanya indah saat serah terima kunci, melainkan tetap andal untuk ditempati bertahun-tahun kemudian.' }
      ]
    },
    categories: { [ProjectCategory.ARCHITECTURE]: 'Arsitektur', [ProjectCategory.INTERIOR]: 'Desain Interior', [ProjectCategory.CONSTRUCTION]: 'Konstruksi' },
    footer: { 
      description: 'Merancang dan membangun ruang hidup yang fungsional dan rapi dengan perencanaan matang dan konstruksi yang andal.',
      menu: 'Menu Navigasi',
      connect: 'Hubungi Kami',
      legal: 'Legalitas',
      rights: 'Hak Cipta Dilindungi.',
      designed: 'Pengerjaan dengan Disiplin.',
      cta_title_1: "Punya", 
      cta_title_2: "Proyek?", 
      cta_button: "Mulai Proyek"
    },
    legal: {
      terms_date: "Tanggal Berlaku: 18 Februari 2026",
      terms_intro: ["Syarat Layanan (“Ketentuan”) ini mengatur akses dan penggunaan Anda atas layanan yang disediakan oleh Linier Studio.", "Dengan mengakses situs web kami atau menggunakan layanan kami, Anda menyetujui Ketentuan ini."],
      terms_s1_title: "1. Definisi",
      terms_s1_list: ["<strong>Perusahaan</strong> merujuk pada Linier Studio.", "<strong>Klien</strong> merujuk pada individu atau entitas yang menggunakan layanan kami.", "<strong>Layanan</strong> merujuk pada jasa arsitektur, desain interior, konstruksi, konsultasi, dan layanan profesional terkait lainnya."],
      terms_s2_title: "2. Cakupan Layanan",
      terms_s2_desc: "Layanan kami meliputi:",
      terms_s2_list: ["Desain arsitektur", "Desain interior", "Renovasi dan adaptasi ruang", "Konstruksi dan pembangunan", "Pengawasan proyek", "Konsultasi teknis"],
      terms_s2_note: "Hasil pekerjaan, lini masa, dan biaya khusus akan dirinci dalam dokumen perjanjian atau kontrak tertulis yang terpisah.",
      terms_s3_title: "3. Tanggung Jawab Klien",
      terms_s3_desc: "Klien setuju untuk:",
      terms_s3_list: ["Memberikan data proyek yang akurat", "Menyediakan dokumen pendukung dan persetujuan yang diperlukan", "Melakukan pembayaran sesuai dengan jadwal yang disepakati", "Bekerja sama secara kooperatif selama pelaksanaan proyek"],
      terms_s3_note: "Keterlambatan yang disebabkan oleh kelalaian penyediaan informasi atau persetujuan dari pihak Klien bukan tanggung jawab Perusahaan.",
      terms_s4_title: "4. Biaya dan Pembayaran",
      terms_s4_desc: "Semua rincian biaya akan ditentukan dalam penawaran tertulis atau kontrak. Kecuali dinyatakan lain secara tertulis:",
      terms_s4_list: ["Pembayaran yang telah dilakukan tidak dapat ditarik kembali setelah pekerjaan dimulai", "Keterlambatan pembayaran dapat mengakibatkan penangguhan pengerjaan proyek", "Pekerjaan tambahan di luar kesepakatan awal akan dikenakan biaya terpisah"],
      terms_s5_title: "5. Lini Masa Proyek",
      terms_s5_desc: "Estimasi waktu pengerjaan merupakan proyeksi berdasarkan data yang tersedia. Keterlambatan dapat terjadi karena faktor-faktor luar seperti:",
      terms_s5_list: ["Revisi desain dari Klien", "Ketersediaan material di pasar", "Proses perizinan dari otoritas berwenang", "Kondisi tidak terduga di lapangan", "Keadaan kahar (force majeure)"],
      terms_s6_title: "6. Hak Kekayaan Intelektual",
      terms_s6_desc_1: "Semua gambar kerja, konsep, visualisasi 3D, rencana tata letak, dan dokumen yang dibuat oleh Perusahaan tetap menjadi hak kekayaan intelektual milik Perusahaan, kecuali disepakati lain secara tertulis.",
      terms_s6_desc_2: "Klien tidak diperkenankan menggandakan, menyebarluaskan, atau menggunakan kembali rancangan tersebut tanpa persetujuan tertulis dari Perusahaan.",
      terms_s7_title: "7. Revisi dan Perubahan",
      terms_s7_desc: "Permintaan revisi yang melebihi batas kesepakatan awal dapat dikenakan biaya tambahan. Perubahan mendasar setelah tahap persetujuan akan memerlukan penyesuaian lini masa dan harga baru.",
      terms_s8_title: "8. Batasan Tanggung Jawab",
      terms_s8_desc: "Sejauh diizinkan oleh hukum yang berlaku, Perusahaan tidak bertanggung jawab atas:",
      terms_s8_list: ["Kerugian tidak langsung atau kerugian konsekuensial", "Kehilangan potensi keuntungan atau peluang bisnis Klien", "Tindakan kelalaian kontraktor pihak ketiga di luar kendali kami", "Keterlambatan yang disebabkan oleh faktor eksternal"],
      terms_s9_title: "9. Batasan Jaminan",
      terms_s9_desc: "Layanan kami diberikan atas dasar upaya profesional terbaik. Kami tidak menjamin:",
      terms_s9_list: ["Kesesuaian mutlak atas penafsiran estetika subjektif", "Kinerja eksternal dari pemasok material", "Daya tahan material di luar garansi resmi pabrikan"],
      terms_s10_title: "10. Pengakhiran Kerjasama",
      terms_s10_desc: "Kami berhak menghentikan atau menangguhkan layanan kami jika:",
      terms_s10_list: ["Kewajiban pembayaran tidak dipenuhi oleh Klien", "Klien melanggar ketentuan kesepakatan", "Kondisi di lokasi proyek dinilai tidak aman atau melanggar hukum"],
      terms_s10_note: "Klien tetap bertanggung jawab atas pembayaran pekerjaan yang telah diselesaikan hingga tanggal pengakhiran.",
      terms_s11_title: "11. Keadaan Kahar (Force Majeure)",
      terms_s11_desc: "Kami dibebaskan dari tanggung jawab atas keterlambatan atau kegagalan pelaksanaan kewajiban yang disebabkan oleh kejadian di luar kendali wajar kami, termasuk bencana alam, perubahan regulasi pemerintah, aksi mogok kerja, kelangkaan material skala luas, atau kegagalan sistem teknis global.",
      terms_s12_title: "12. Hukum yang Mengatur",
      terms_s12_desc: "Ketentuan ini tunduk pada dan ditafsirkan berdasarkan hukum Republik Indonesia yang berlaku di domisili hukum pendaftaran Perusahaan.",
      terms_s13_title: "13. Penyelesaian Perselisihan",
      terms_s13_desc: "Setiap perselisihan akan diselesaikan terlebih dahulu melalui musyawarah mufakat dengan iktikad baik. Jika tidak mencapai mufakat, perselisihan akan diselesaikan melalui pengadilan negeri yang berwenang di domisili hukum Perusahaan.",
      terms_s14_title: "14. Perubahan Ketentuan",
      terms_s14_desc: "Kami berhak mengubah Ketentuan ini sewaktu-waktu. Versi terbaru akan segera berlaku setelah dipublikasikan di situs web kami.",
      terms_s15_title: "15. Informasi Kontak",
      terms_s15_desc: "Untuk pertanyaan terkait hukum atau kerja sama:",
      terms_s15_label_1: "Pertanyaan Umum",
      terms_s15_label_2: "Kepatuhan & Hukum",
      
      privacy_date: "Terakhir Diperbarui: 18 Februari 2026",
      privacy_intro: ["Kebijakan Privasi ini menjelaskan bagaimana Linier Studio (“Perusahaan”, “kami”, atau “kita”) mengumpulkan, menggunakan, menjaga, dan melindungi informasi yang diperoleh dari pengguna (“Pengguna”, “Anda”) situs web dan layanan kami.", "Dengan mengakses situs web atau menggunakan layanan kami, Anda menyatakan telah membaca dan memahami Kebijakan Privasi ini."],
      privacy_s1_title: "1. Informasi yang Kami Kumpulkan",
      privacy_s1_1_title: "1.1 Data Pribadi",
      privacy_s1_1_desc: "Kami dapat mengumpulkan informasi pribadi termasuk namun tidak terbatas pada:",
      privacy_s1_1_list: ["Nama lengkap", "Nama perusahaan atau organisasi", "Alamat email", "Nomor telepon aktif", "Alamat lokasi proyek", "Detail dan kebutuhan proyek", "Catatan korespondensi"],
      privacy_s1_1_note: "Anda dapat mengunjungi situs web kami secara anonim, namun pengajuan layanan tertentu memerlukan pengisian data pribadi.",
      privacy_s1_2_title: "1.2 Data Non-Pribadi",
      privacy_s1_2_desc: "Kami dapat mengumpulkan data non-pribadi secara otomatis saat Anda berkunjung, seperti:",
      privacy_s1_2_list: ["Tipe peramban (browser)", "Jenis perangkat", "Alamat IP", "Durasi kunjungan", "Halaman yang diakses", "Tautan perujuk (referral)"],
      privacy_s1_3_title: "1.3 Informasi Proyek",
      privacy_s1_3_desc: "Ketika Anda mengajukan konsultasi atau penawaran, kami dapat mengumpulkan:",
      privacy_s1_3_list: ["Gambar arsitektur awal", "Referensi desain interior", "Foto kondisi eksisting lokasi", "Estimasi anggaran", "Target lini masa pengerjaan"],
      privacy_s1_3_note: "Data ini digunakan murni untuk kebutuhan evaluasi dan pelaksanaan proyek Anda.",
      privacy_s2_title: "2. Bagaimana Kami Menggunakan Informasi Anda",
      privacy_s2_desc: "Kami menggunakan informasi terkumpul untuk tujuan operasional yang sah, termasuk:",
      privacy_s2_list: ["Menyediakan layanan arsitektur, interior, dan konstruksi", "Menjawab pertanyaan dan memfasilitasi konsultasi", "Menyusun penawaran biaya dan proposal proyek", "Mengelola kontrak dan kemajuan proyek", "Meningkatkan kualitas layanan kami", "Kebutuhan administrasi internal dan dokumentasi", "Memenuhi kepatuhan hukum yang berlaku"],
      privacy_s3_title: "3. Dasar Hukum Pemrosesan Data",
      privacy_s3_desc: "Kami memproses data Anda berdasarkan:",
      privacy_s3_list: ["Persetujuan eksplisit Anda", "Kebutuhan pemenuhan kontrak kerjasama", "Kewajiban hukum", "Kepentingan bisnis yang sah"],
      privacy_s4_title: "4. Pembagian Data kepada Pihak Ketiga",
      privacy_s4_desc: "Kami tidak menjual atau menyewakan informasi pribadi Anda. Kami hanya membagikan data kepada:",
      privacy_s4_list: ["Kontraktor dan sub-kontraktor yang terlibat langsung dalam proyek Anda", "Mitra pemasok material tepercaya", "Konsultan profesional (akuntan, penasihat hukum)", "Pihak berwenang apabila diwajibkan oleh undang-undang"],
      privacy_s4_note: "Semua pihak eksternal wajib menjaga kerahasiaan dan keamanan data Anda sesuai dengan standar kami.",
      privacy_s5_title: "5. Jangka Waktu Penyimpanan Data",
      privacy_s5_desc: "Kami menyimpan data pribadi dan proyek hanya selama diperlukan untuk:",
      privacy_s5_list: ["Menyelesaikan kewajiban layanan", "Memenuhi ketentuan kontrak", "Mematuhi kewajiban hukum perpajakan dan konstruksi", "Menyelesaikan perselisihan", "Arsip internal jangka panjang"],
      privacy_s6_title: "6. Keamanan Data",
      privacy_s6_desc: "Kami menerapkan langkah pengamanan administratif, teknis, dan fisik secara memadai untuk melindungi data Anda. Namun, perlu dipahami bahwa tidak ada metode transmisi data internet yang sepenuhnya aman secara absolut di dunia maya.",
      privacy_s7_title: "7. Hak-Hak Anda",
      privacy_s7_desc: "Anda memiliki hak untuk:",
      privacy_s7_list: ["Mengakses data pribadi Anda yang kami simpan", "Meminta perbaikan data yang tidak akurat", "Meminta penghapusan data (dalam batasan hukum)", "Membatasi atau menolak pemrosesan data tertentu", "Meminta salinan data pribadi Anda"],
      privacy_s7_note: "Permintaan Anda dapat diajukan melalui saluran komunikasi resmi kami.",
      privacy_s8_title: "8. Penggunaan Cookie",
      privacy_s8_desc: "Situs web kami menggunakan cookie untuk meningkatkan kenyamanan penelusuran Anda. Anda memiliki kendali penuh untuk menonaktifkan cookie melalui pengaturan peramban masing-masing.",
      privacy_s9_title: "9. Layanan Pihak Ketiga",
      privacy_s9_desc: "Kami mungkin menggunakan platform eksternal untuk analisis statistik, komunikasi, atau hosting. Kebijakan privasi platform tersebut sepenuhnya berada di luar tanggung jawab kami.",
      privacy_s10_title: "10. Privasi Anak-Anak",
      privacy_s10_desc: "Layanan kami ditujukan murni untuk kebutuhan bisnis profesional. Kami tidak secara sengaja mengumpulkan data pribadi dari individu di bawah usia 18 tahun.",
      privacy_s11_title: "11. Pembaruan Kebijakan",
      privacy_s11_desc: "Kami berhak memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan akan segera berlaku setelah dipublikasikan di halaman ini.",
      privacy_s12_title: "12. Hubungi Kami",
      privacy_s12_desc: "Untuk pertanyaan atau permintaan terkait data pribadi Anda:",
      privacy_s12_label_1: "Kontak Layanan Pelanggan",
      privacy_s12_label_2: "Bagian Kepatuhan Privasi"
    }
  },
  [Language.CN]: {
     ...enTranslations,
     common: { ...enTranslations.common, headquarters: "总部", navigation: "导航", address_country: "印度尼西亚", privacy: "隐私政策", terms: "服务条款", cookies: "Cookie设置" },
     nav: { home: '首页', about: '关于我们', portfolio: '作品集', services: '专业服务', contact: '联系我们', startProject: '启动项目', subtitle: '设计与建造' },
     project_detail: {
      back: "返回",
      client: "客户",
      area: "建筑面积",
      year: "项目年份",
      role: "工作职责",
      role_value: "设计与施工",
      concept: "概念设想",
      challenge: "项目挑战",
      solution: "解决方案",
      visual: "实景影像",
      next: "下一个项目",
      view_case: "深度案例剖析",
      not_found: "未找到相关项目",
      return: "返回作品集"
    },
    projects: {
      '1': {
        title: 'The Obsidian House',
        location: '雅加达南部',
        client: '私人住宅',
        description: '作为现代生活的功能型住宅表达，黑曜石住宅利用深色天然石材与开阔的玻璃结构，在采光通透度与生活私密性之间创造了平衡。',
        challenge: '主要挑战是在人口稠密的城市住宅环境中保障居住私密性，同时最大化引入自然光线并实现良性空气循环。',
        solution: '我们设计了结合定制金属百叶窗的“呼吸式立面”与天井内庭院系统，将自然光景引入房屋的核心区域。'
      },
      '2': {
        title: 'Azure Sky Structure',
        location: '泗水',
        client: 'Skyline Corp',
        description: '位于泗水市中心的一栋高层商业综合体，在结构上强调高标准的精密钢结构工程，并将功能实用性与现代审美相结合。',
        challenge: '在土质软弱、限高的狭窄场地地基上，建造承重和抗震要求极高的钢结构高层建筑。',
        solution: '采用深孔灌注桩基系统，结合钢-混组合结构，保障大楼结构稳定性的同时，实现了极高的施工装配进度。'
      },
      '3': {
        title: 'Minimalist Zen Villa',
        location: '巴厘岛',
        client: '酒店集团',
        description: '位于巴厘岛的度假别墅，将当地传统的原木材质、质朴的现浇清水混凝土与周边的山林绿意自然衔接。',
        challenge: '将现代粗野主义建筑体量有机地植入乌布地区斜度较大的天然缓坡，同时避免大范围地貌破坏。',
        solution: '采用顺应山势的悬臂体量设计，辅以当地采购的原生柚木和防腐木，使刚硬的混凝土结构温和地融入生态中。'
      },
      '4': {
        title: 'Lumina Art Gallery',
        location: '万隆',
        client: 'Lumina Arts',
        description: '由老旧建筑保护改造而成的现代美术馆，室内空间采用隐藏式主梁和无主灯反光照明设计，让展出艺术品成为空间核心。',
        challenge: '在保留原有老建筑外观的同时，进行大跨度结构加固工程，创造出完全无立柱的开阔大展厅空间。',
        solution: '引入工字钢框架和高强度拉杆进行隐藏式顶置吊装加固，并在天花板内部集成可定制的防眩光反光网格。'
      },
      '5': {
        title: 'Nexus Office Hub',
        location: '坦格朗',
        client: 'Tech Nexus',
        description: '专注于工作协作效率和声学环境舒适度的现代共享办公空间设计，施工中大量选用本地环保及低碳材料。',
        challenge: '创建一个高度协作的开放式平面图，同时仍提供声学隐私和专注区。',
        solution: '在吊顶集成高性能悬挂式声学吸音体，并在流线交汇点处合理规划具有高隔音效果的夹层玻璃静音舱。'
      },
      '6': {
        title: 'Aeon Penthouse',
        location: '雅加达中部',
        client: 'H 先生',
        description: '雅加达核心区的高端大平层住宅改造，通过石材、木材和拉丝金属等诚实材质的精准拼缝和人体工学尺寸，展现温暖质感。',
        challenge: '将大规格大理石板和定制家具运输到 45 楼的物流工作。',
        solution: '对大理石和家具板材进行精细分块设计，以便于货梯运输，现场采用模块化现场装配与整拼工艺。'
      }
    },
    hero: { 
        tagline: '', 
        disciplines: '建筑设计 | 室内设计 | 工程施工',
        scroll: '• 向下滚动探索 • 线性工作室 •', 
        title1: '建筑',
        title2: '因目的而生'
    },
    home: { 
        manifesto_1: '我们不只是砌筑墙体。我们设计空间以', 
        cycling_words: ["捕捉光线", "引导通风", "留存静谧", "坚守纯粹"],
        manifesto_2: '在忙碌的生活中，我们致力于为您量身打造一处能静心安居的温暖住宅。',
        manifesto_3: '我们的', manifesto_highlight: '设计-建造一体化',
        manifesto_4: '专业方法，确保优秀的设计想法在现场得到精准无误的落地。',
        philosophy_btn: '设计理念',
        trusted_statement: "作为一家设计与建造一体化的工作室，我们提供建筑、室内和施工的全流程服务。我们专注于细节工艺、项目按时交付以及空间功能与您生活习惯的完美契合。我们透明、公开地管理每一个项目细节——从最初的想法到钥匙交接——没有夸张的虚假承诺，只有对现场工程质量的认真负责。",
        selected_works: '精选作品', view_all: '查看全部作品', next_steps: '下一步行动', have_a: '有新项目的', vision: '构想?', lets_discuss: "让我们谈谈",
        journal_title: "解构设计", elements_title: "核心元素", elements_desc: "将我们的设计语言解构为最实用的建筑实体：采光、触感和空间感。", read_article: "探索",
        marquee: "创新 — 精准 — 可持续 — 尊享生活 — 永恒设计 — ",
        tour_label: "全景虚拟",
        tour_title: "沉浸式空间体验",
        tour_desc: "在全景交互式 360° 环境中，提前感知设计方案的真实比例、采光分布与材料氛围。",
        tour_btn: "进入虚拟游览",
        tour_close: "返回"
    },
    about: { 
      ...enTranslations.about, 
      title: "关于我们", 
      hero_subtitle: "提炼并现代化建筑设计，打造简洁、当代的审美。",
      firm_and_philosophy: "公司<br/>与<br/>理念",
      firm_desc: "我们的建筑风格以简洁和现代的方法为特征，始终体现我们当代的审美。",
      learn_more: "了解更多我们的项目",
      vision_title: "我们的愿景", 
      mission_title: "我们的使命",
      trusted_statement: "作为一家设计与建造一体化的工作室，我们提供建筑、室内和施工的全流程服务。我们专注于细节工艺、项目按时交付以及空间功能与您生活习惯的完美契合。我们透明、公开地管理每一个项目细节——从最初的想法到钥匙交接——没有夸张的虚假承诺，只有对现场工程质量的认真负责。",
      paragraph_1: "Linier Studio 致力于将高水准的设计规划与高标准的施工建造结合。我们规划和建造高舒适度的住宅与商业空间，强调用途功能、长期持用和简洁的形体。",
      paragraph_2: "对我们来说，好建筑绝不只是外表。我们的每一个设计方案都建立在对住户日常行为、当地气候微环境以及实用空间的深度论证上。我们希望空间能成为承载您舒适生活的可靠背景。",
      paragraph_3: "在设计阶段，我们会周密论证结构逻辑、空气及采光流通以及切合实际的造价概算。因此，我们的图纸不仅在纸面上美观，更能在工地现场安全、合理、经济地搭建落地。",
      paragraph_4: "在室内设计上，我们追求空间形体与外部建筑结构的一体化。我们极为关注材质拼缝细节、家具人体工学比例以及触觉界面的舒适度，以呈现出温暖、整洁的整体氛围。",
      paragraph_5: "在工程施工方面，我们对建筑的质量和结构安全负责。通过巡检与精细化进度管理，我们确保砌筑、结构灌注和饰面基层到面层的每一道工序都符合技术规范要求。",
      paragraph_6: "我们深信，经过细致规划和踏实建造的房子会随着时间流逝愈发温暖和有价值。我们的承诺非常简单：以诚信和担当完成每一项工程，保持绝对透明的沟通，提供经得起时间考验的建造品质。",
      vision_text: "打造兼具实用功能、诚实质感与长期耐用性的建筑与空间，使之成为历久弥新的生活容器。",
      mission_text: "以专业化、流程化、透明化的工作机制，为客户交付高品质、少操心的空间设计与建筑工程。",
      mission_measurable_title: "精准工艺",
      mission_measurable_desc: "我们相信细微细节决定居住舒适度。每一个墙角、缝隙和材料收口都经过推敲与计算。",
      mission_professional_title: "流程透明",
      mission_professional_desc: "在项目全程，我们保持公开的工程预算明细、诚实的沟通和严谨的施工进度管控。",
      core_values_title: "核心价值。",
      core_values_desc: "指引我们落笔每一条线条的原则。"
    },
    portfolio: { ...enTranslations.portfolio, title: "作品集", hero_title_1: "设计", hero_title_2: "以人为本的", hero_title_3: "理想", hero_title_4: "居所", hero_desc_1: "我们为人设计空间。无论项目规模如何，我们务实的方法始终如一。我们先倾听，后设计。我们花时间了解您的生活、工作以及在空间中的移动方式。", hero_desc_2: "然后，我们将您的愿景变为现实。从实际经验出发，我们创造出令人向往的现代空间，让您感到轻松自在且真正属于您。", hero_btn: "了解更多关于我们的工作室", hero_tag: "(我们的工作室)", hero_menu: "菜单", hero_get_in_touch: "联系我们" },
    contact: { 
        ...enTranslations.contact, 
        title: "联系我们",
        form: {
            ...enTranslations.contact.form,
            name: "姓名",
            phone: "电话号码",
            address: "项目地址",
            country: "国家",
            project: "项目类型",
            budget: "预算估算",
            message: "留言",
            message_ph: "告诉我们您的愿景...",
            submit: "发送咨询",
            select_range: "选择范围",
            style: "设计风格",
            select_style: "选择设计风格",
            budget_note: "请注意：此预算代表总预估建设预算（RAB），而非项目的设计费用。"
        },
        budget_options: [
            "< 5亿印尼盾",
            "5-10亿印尼盾",
            "10-50亿印尼盾",
            "> 50亿印尼盾"
        ],
        interior_contractor_budget_options: [
            "0 - 5000万印尼盾",
            "5000万 - 1亿印尼盾",
            "1亿 - 2.5亿印尼盾",
            "2.5亿 - 5亿印尼盾",
            "> 5亿印尼盾"
        ],
        types: [
            "施工",
            "商业建筑",
            "室内设计",
            "室内承包商",
            "咨询"
        ]
    },
    elements: [
      {
        id: 1,
        title: "光",
        subtitle: "隐形的材料",
        desc: "我们雕刻光线，就像我们浇筑混凝土一样。",
        image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "光不仅仅是照明；它是我们描绘体积的画笔。在我们的理念中，光决定了空间的节奏。它标记着时间的流逝，在早晨投下长长的阴影，在黄昏时分扩散成柔和的光辉。我们不安置窗户；我们构建光线。",
          philosophy: "没有光，建筑只是沉默的体量。有了光，它便开始歌唱。",
          application: "我们利用采光井、高侧窗和精心计算的朝向，确保建筑的每个角落都随时间而演变。"
        }
      },
      {
        id: 2,
        title: "肌理",
        subtitle: "触觉现实",
        desc: "不完美是天然材料的语言。",
        image: "https://images.unsplash.com/photo-1596627689914-7299a47321c1?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "建筑必须是可以触摸的。未加工混凝土的粗糙，未抛光木材的温暖，板岩的凉爽。肌理弥合了视觉与物理之间的鸿沟，将居住者扎根于现实之中。",
          philosophy: "我们拒绝贫瘠。我们拥抱材料的纹理、毛孔和伤痕。",
          application: "我们的材料面板源自当地且经过最少加工，让建筑优雅地老去，并随时间形成古色。"
        }
      },
      {
        id: 3,
        title: "虚空",
        subtitle: "空间的奢华",
        desc: "我们留下的空白比我们添加的更重要。",
        image: "https://images.unsplash.com/photo-1519962551779-513473b64cf6?q=80&w=800&auto=format&fit=crop",
        details: {
          narrative: "在拥挤的世界中，空虚是终极的奢华。虚空不是虚无；它是潜力。它是音符之间的呼吸，词语之间的停顿。通过雕刻虚空，我们让建筑呼吸。",
          philosophy: "空间不是由墙壁定义的，而是由它们所包含的空虚定义的。",
          application: "双层挑高天花板、内部庭院和开放式过渡是我们作品的关键标志，创造出无限自由的感觉。"
        }
      }
    ],
    philosophy: { 
      ...enTranslations.philosophy, 
      title: "核心领域",
      hero_title_1: "每一条线的",
      hero_title_2: "基石。",
      items: [
        {
          title: '建筑纯粹性',
          desc: '我们的建筑是体验的骨架。我们不追逐潮流；我们处理几何、光线和体积。我们设计的结构作为时间的沉默见证者，优先考虑结构完整性和空间流动。从建筑物对太阳的朝向，到立面与街道的互动方式，每一条线的绘制都旨在创建一个永恒的地标，赢得尊重而无需刻意引人注目。',
          tag: '形式',
          statLabel: '结构',
          statValue: '永恒几何'
        },
        {
          title: '沉浸式室内',
          desc: '如果建筑是身体，室内设计就是灵魂。这是人类尺度接管的地方。我们策划调动感官的环境——脚下石头的凉爽，胡桃木的温暖，亚麻的柔软。我们的室内部门从第一天起就与建筑师协同工作，确保家具、照明和材质不是事后的想法，而是空间叙事的组成部分。',
          tag: '灵魂',
          statLabel: '氛围',
          statValue: '精选感官'
        },
        {
          title: '大师级建造',
          desc: '没有大师级的工艺，最美丽的蓝图也毫无用处。这是我们的不同之处：我们建造我们要画的东西。我们的内部承包商团队弥合了愿景与现实之间危险的鸿沟。我们拒绝“标准公差”。我们监督每一次混凝土浇筑和每一个细木工连接，确保完工的建筑是最初梦想的镜像。没有捷径，没有妥协，只有对设计的绝对忠诚。',
          tag: '建造',
          statLabel: '偏差',
          statValue: '0.0% 公差'
        }
      ]
    },
    process: { 
      ...enTranslations.process, 
      title: "从虚无到形态",
      method_title_1: "线性",
      method_title_2: "方法",
      method_title_3: "论。",
      method_desc: "从抽象思想到具体现实的无缝过渡。没有噪音，只有结构。",
      steps: [
        { title: '对话', desc: '它不始于草图，而始于对话。我们深入挖掘您生活方式中未言说的需求，不仅了解您的生活方式，还了解您的感受。我们解读您的习惯，为您量身定制方案。' },
        { title: '方案', desc: '我们将抽象的欲望转化为严谨的几何形状。这是概念形成的地方。我们定义光线的流动、空气的循环和空间的体积。我们在绘制技术线条之前可视化体验。' },
        { title: '建造', desc: '我们的内部承包商接手。没有遗漏的细节，没有相互指责，也没有妥协。我们的建筑师与建筑工人一起站在脚手架上，确保愿景被绝对忠实地执行。' },
        { title: '传承', desc: '我们交付的空间将超越潮流。我们为长久而建，创造将屹立数代的结构。Linier Studio 的项目不仅仅是一座建筑；它是您生活中最重要时刻的背景。' }
      ]
    },
    categories: { [ProjectCategory.ARCHITECTURE]: '建筑设计', [ProjectCategory.INTERIOR]: '室内设计', [ProjectCategory.CONSTRUCTION]: '工程施工' },
    services: {
      hero_typography_1: "我们共筑",
      hero_typography_2: "您的愿景。",
      hero_typography_desc: "我们为明智的客户设计周到的空间。",
      hero_typography_col1: "建筑与室内\n设计",
      hero_typography_col2: "雅加达\n印度尼西亚",
      hero_sub: "我们的专业知识",
      hero_title_1: "专业服务",
      hero_title_2: "与价值。",
      overview: {
        title: "服务概述",
        content: "我们以结构化、透明且注重结果的方式，在建筑设计、室内设计和工程施工领域提供专业服务。每个项目都通过清晰的阶段进行管理——从概念规划、方案设计、技术计算，到施工执行。我们的主要目标是确保客户获得符合其愿景、功能合理、成本高效且具有长期可靠建筑质量的最终结果。通过结合卓越的设计能力、丰富的现场技术经验和严格的项目管理，我们能够呈现不仅在视觉上极具吸引力，而且在规划和执行上都非常成熟的空间解决方案。"
      },
      view_details: "查看详情",
      close_details: "关闭详情",
      comprehensive_solution: "综合解决方案",
      currently_viewing: "正在查看",
      list: [
        {
          id: 'arch_int',
          title: '建筑与室内设计',
          description: '我们的设计服务专为在施工开始前需要成熟空间规划的客户而设计。我们深知设计不仅仅是关于外观，更是一个调节功能、活动流线、用户舒适度以及材料和成本使用效率的系统。因此，每个概念都建立在对客户需求、场地条件和空间使用目标的深入分析之上。我们的设计流程涵盖需求讨论、概念开发、布局规划、3D视觉化，直至准备好用于施工参考的技术工作图纸。所有文档都极其详尽，以确保现场执行顺利进行而不会产生不同的解读。这种方法有助于降低施工中期由于设计变更而影响工期和预算的风险。'
        },
        {
          id: 'design_build',
          title: '一体化设计与建造',
          description: '设计与建造是一项全方位的解决方案，专为希望流程简便、由一个团队处理项目所有阶段的客户量身定制。在此系统中，规划与执行在统一协调下进行，使沟通更有效、决策更迅速，并将现场潜在的技术错误降至最低。这种一体化方法具有从设计到最终饰面进行一致质量控制的优势。此外，由于任何更改或调整都可以直接协调，而无需通过不同的参与方，因此能更好地保持工作时间的效率。该系统非常适合注重结果确定性、时间表清晰度以及整洁、有组织工作流程的客户。'
        },
        {
          id: 'construction',
          title: '工程施工与项目执行',
          description: '我们以优先考虑精准度、耐用性和结构安全的标准来执行施工工作。每个施工阶段都基于商定的工作图纸和技术规范进行，并由经验丰富的现场团队进行监督。我们确保使用符合质量标准的材料、符合技术程序的施工方法，并正确安装每一个细节。我们处理的项目类型包括新建工程、翻新、空间重新规划以及现有建筑的质量提升。无论是小型还是大型项目，我们的方法始终如一——清晰的规划、严格的执行和对结果负责。'
        },
        {
          id: 'renovation',
          title: '空间翻新与适应性改造',
          description: '并非所有的空间需求都需要从头开始建造。在许多情况下，适当的重新规划或翻新可以显著提升空间的功能、外观和价值。我们提供翻新服务，旨在修复、更新或优化空间，而不会过度干扰主体结构。我们的团队会评估现有条件，识别潜在的技术问题，并制定切实可行且高效的设计解决方案。通过这种方法，客户可以在无需进行不必要的大型改动的情况下获得最佳效果。'
        },
        {
          id: 'consultation',
          title: '专业咨询',
          description: '我们的咨询服务旨在为需要在开始项目前获得指导的客户提供帮助。在此阶段中，我们帮助分析空间需求、估算建设成本、评估设计可行性，并提供客观的技术投入。这种咨询通常是确保项目从一开始就朝着明确方向并做出正确决策的关键起步。'
        },
        {
          id: 'management',
          title: '项目管理',
          description: '我们提供项目管理服务，以确保每个阶段的工作都按计划进行。我们进行系统化的监督，涵盖进度控制、成本控制、工作质量监控以及定期向客户汇报项目进度。该系统使客户能够随时掌握项目发展动态，而无需时刻亲临现场。结构化的管理方法有助于降低延期、技术错误和成本超支的风险，同时维护预期的最终质量标准。'
        }
      ],
      commitment: {
        title: "我们的工作承诺",
        content: "我们相信，一个成功的项目不仅取决于优秀的设计，还取决于严格的工作系统和清晰的沟通。因此，在每项服务中，我们始终将透明度、及时性和质量作为重中之重。对我们来说，客户的信任是长期合作的基石，每个项目都是我们专业标准的直接体现。"
      }
    },
    footer: {
      description: '以精准度、材料创新和永恒的美感重塑您的居住空间。在这里，功能与纯粹美学完美相融。',
      menu: '菜单导航',
      connect: '联系我们',
      legal: '法律条款',
      rights: '保留所有权利。',
      designed: '为有远见者而作。',
      cta_title_1: "有一个",
      cta_title_2: "想法?",
      cta_button: "启动项目"
    },
    cookie_banner: {
        title: "Cookie 同意",
        description: "我们使用 Cookie 来优化网站功能并分析流量。您的数据有助于我们打造更好的体验。",
        accept: "全部接受",
        preferences: "偏好设置",
        decline: "拒绝",
        settings_title: "偏好设置",
        essential: "必要",
        essential_desc: "网站运行所需。无法禁用。",
        analytics: "分析",
        analytics_desc: "帮助我们了解您如何使用本网站。",
        marketing: "营销",
        marketing_desc: "用于提供相关内容 and 广告。",
        cancel: "取消",
        save: "保存更改"
    },
    legal: {
      terms_date: "生效日期：2026年2月18日",
      terms_intro: ["这些服务条款（“条款”）适用于您对 Linier Studio 提供的服务的访问和使用。", "访问我们的网站或使用我们的服务，即表示您同意这些条款。"],
      terms_s1_title: "1. 定义",
      terms_s1_list: ["<strong>公司</strong> 指 Linier Studio。", "<strong>客户</strong> 指任何购买服务的个人或实体。", "<strong>服务</strong> 指建筑设计、室内设计、翻新施工、咨询及相关的专业服务。"],
      terms_s2_title: "2. 服务范围",
      terms_s2_desc: "服务可能包括：",
      terms_s2_list: ["建筑设计", "室内设计", "空间翻新", "工程施工", "项目监理", "专业咨询"],
      terms_s2_note: "具体的交付成果、时间表和费用将在单独的书面协议或合同中详细说明。",
      terms_s3_title: "3. 客户责任",
      terms_s3_desc: "客户同意：",
      terms_s3_list: ["提供准确的项目信息", "提供所需的文件和审批", "按照约定的进度付款", "在项目执行期间进行通力合作"],
      terms_s3_note: "因信息不完整或审批延迟导致的工期延误，公司不承担任何责任。",
      terms_s4_title: "4. 费用与付款",
      terms_s4_desc: "所有费用应在书面报价单或合同中指定。除非另有说明：",
      terms_s4_list: ["工作一旦开始，付款概不退还", "逾期付款可能导致项目暂停", "超出范围的其他工作将单独计费"],
      terms_s5_title: "5. 项目时间表",
      terms_s5_desc: "预估时间表是基于现有信息的投影。可能会由于以下原因发生延误：",
      terms_s5_list: ["客户修改方案", "材料供应延迟", "许可证审批", "现场特殊状况", "不可抗力事件"],
      terms_s6_title: "6. 知识产权",
      terms_s6_desc_1: "除非另有书面约定，公司创建的所有设计图纸、概念、渲染图、规划和文件均属于公司的知识产权。",
      terms_s6_desc_2: "未经书面许可，客户不得复制、分发或重复使用这些设计。 ",
      terms_s7_title: "7. 修改与变更",
      terms_s7_desc: "超出约定限制的修改可能会产生额外费用。在审批阶段之后进行的重大更改可能需要重新调整时间表和价格。",
      terms_s8_title: "8. 责任限制",
      terms_s8_desc: "在法律允许的最大范围内，公司不对以下情况承担责任：",
      terms_s8_list: ["间接或结果性损失", "利润或商业机会损失", "第三方承包商的行为", "超出我们控制范围的延误"],
      terms_s9_title: "9. 免责声明",
      terms_s9_desc: "服务是本着专业、尽职的态度提供的。我们不保证：",
      terms_s9_list: ["绝对的主观审美一致", "供应商的供货表现", "超出制造商保修期的材料寿命"],
      terms_s10_title: "10. 协议终止",
      terms_s10_desc: "如果发生以下情况，我们保留终止或暂停服务的权利：",
      terms_s10_list: ["未履行付款义务", "客户违反条款协议", "项目现场环境变得不安全或不合法"],
      terms_s10_note: "客户仍有责任支付截至终止之日已完成的工作费用。",
      terms_s11_title: "11. 不可抗力",
      terms_s11_desc: "对于因超出合理控制范围的情况而导致的延误或未能履行义务，我们不承担任何责任，这些情况包括自然灾害、监管变化、劳资纠纷、物资短缺或技术故障。",
      terms_s12_title: "12. 适用法律",
      terms_s12_desc: "这些条款应受公司法定注册所在司法管辖区的适用法律管辖。",
      terms_s13_title: "13. 争议解决",
      terms_s13_desc: "争议应首先通过诚信谈判解决。如无法解决，应提交公司管辖区内有管辖权的法院审理。",
      terms_s14_title: "14. 条款修改",
      terms_s14_desc: "我们保留随时修改这些条款的权利。更新后的版本一经发布即行生效。",
      terms_s15_title: "15. 联系方式",
      terms_s15_desc: "对于法律或合同相关的咨询：",
      terms_s15_label_1: "通用咨询",
      terms_s15_label_2: "合规与投诉",
      
      privacy_date: "最近更新：2026年2月18日",
      privacy_intro: ["本隐私政策说明了 Linier Studio（“公司”或“我们”）作为建筑设计、室内设计和施工服务提供商，如何收集、使用、维护和保护从本网站及服务用户（“用户”或“您”）处获得的信息。", "访问或使用我们的网站或服务，即表示您承认已阅读并理解本隐私政策。"],
      privacy_s1_title: "1. 我们收集的信息",
      privacy_s1_1_title: "1.1 个人数据",
      privacy_s1_1_desc: "我们可能收集的个人身份信息包括但不限于：",
      privacy_s1_1_list: ["完整姓名", "公司或组织名称", "电子邮件地址", "电话号码", "项目地址", "项目详情与需求", "沟通记录"],
      privacy_s1_1_note: "您可以匿名访问我们的网站，但某些服务需要提交个人数据。",
      privacy_s1_2_title: "1.2 非个人数据",
      privacy_s1_2_desc: "我们可能会自动收集非个人信息，例如：",
      privacy_s1_2_list: ["浏览器类型", "设备类型", "IP 地址", "访问时长", "访问页面", "推荐来源链接"],
      privacy_s1_3_title: "1.3 项目信息",
      privacy_s1_3_desc: "当您请求咨询、报价或服务时，我们可能收集：",
      privacy_s1_3_list: ["建筑图纸", "室内设计参考", "现场照片", "预算范围", "期望工期"],
      privacy_s1_3_note: "这些数据仅用于项目评估与执行。",
      privacy_s2_title: "2. 我们如何使用您的信息",
      privacy_s2_desc: "我们将收集的信息用于合法的业务目的，包括：",
      privacy_s2_list: ["提供建筑、室内和施工服务", "回应咨询和会谈", "准备报价和方案建议书", "管理合同与项目进度", "提高服务质量", "内部行政与归档", "遵守法律法规"],
      privacy_s3_title: "3. 处理数据的法律依据",
      privacy_s3_desc: "在适用的数据保护法下，我们依赖：",
      privacy_s3_list: ["您的明确同意", "合同履行必要性", "法律义务", "合法的业务利益"],
      privacy_s4_title: "4. 数据共享",
      privacy_s4_desc: "我们不会出售或出租您的个人信息。我们仅在以下情况下共享信息：",
      privacy_s4_list: ["直接参与您项目的承包商和分包商", "受信任的材料供应商", "专业顾问（财务、法律顾问）", "法律要求的政府机构"],
      privacy_s4_note: "所有外部合作方均必须按照我们的安全标准维护您数据的机密性与安全性。",
      privacy_s5_title: "5. 数据保留",
      privacy_s5_desc: "我们保留个人和项目数据仅在以下必要期限内：",
      privacy_s5_list: ["完成服务所需", "履行合同义务", "遵守法律、税务和建设合规性", "解决争议", "内部长期归档"],
      privacy_s6_title: "6. 数据安全",
      privacy_s6_desc: "我们实施合理的管理、技术和物理安全措施来保护您的数据。然而，必须承认的是，没有任何一种互联网数据传输方法是绝对安全的，我们无法保证绝对的安全性。",
      privacy_s7_title: "7. 您的权利",
      privacy_s7_desc: "根据适用法规，您可能拥有以下权利：",
      privacy_s7_list: ["访问我们存储的您的个人数据", "要求更正不准确的数据", "请求删除数据（在法律限制内）", "限制或拒绝特定数据处理", "索取您个人数据的副本"],
      privacy_s7_note: "您的请求可以通过我们的官方沟通渠道提交。",
      privacy_s8_title: "8. Cookie 的使用",
      privacy_s8_desc: "我们的网站使用 Cookie 来提高您的浏览体验并分析流量。您可以通过各自的浏览器设置完全控制禁用 Cookie。",
      privacy_s9_title: "9. 第三方服务",
      privacy_s9_desc: "我们可能会使用外部工具或平台进行统计分析、沟通或托管。这些提供商拥有其自身的隐私政策，我们对其做法不承担任何责任。",
      privacy_s10_title: "10. 儿童信息",
      privacy_s10_desc: "我们的服务纯粹面向专业商业需求。我们不会故意收集18岁以下个人的个人信息。",
      privacy_s11_title: "11. 政策更新",
      privacy_s11_desc: "我们保留随时更新本隐私政策的权利。变更一经发布即行生效。继续使用我们的服务即表示您接受修订后的条款。",
      privacy_s12_title: "12. 联系我们",
      privacy_s12_desc: "对于与隐私相关的咨询或要求：",
      privacy_s12_label_1: "客户服务联系人",
      privacy_s12_label_2: "隐私合规部"
    }
  }
};
