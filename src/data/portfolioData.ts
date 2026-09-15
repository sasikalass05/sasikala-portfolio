import { Project, SkillCategory, SubjectArea, TimelineMilestone, CaseStudy } from '../types';

export const PERSONAL_INFO = {
  name: 'Sasikala S',
  preferredName: 'Sasikala',
  tagline: 'MCA Student | IT Enthusiast | Aspiring Software Professional | AI & Technology Enthusiast',
  heroStatement: 'An MCA student passionate about technology, intelligent systems, and continuous learning.',
  location: 'Tenkasi, Tamil Nadu, India',
  email: 'sasikala0935@gmail.com',
  academicEmail: '25mca048@grd.edu.in',
  phone: '+91 86680 37581',
  github: '[ADD GITHUB LINK]',
  linkedin: '[ADD LINKEDIN LINK]',
  resumeUrl: '[ADD RESUME LINK]',
  introBio:
    'Sasikala is an aspiring IT professional with a background in Information Technology and a growing interest in Artificial Intelligence, Cloud Computing, software development, robotics, and emerging technologies. She enjoys learning new technologies, solving problems, building practical projects, and continuously developing herself for a career in the IT industry.',
};

export const LEARNING_PHILOSOPHY = {
  quote: 'Never Stop Learning.',
  body: 'I believe technology keeps changing, so learning should never stop. Every new concept, project, mistake, and challenge is an opportunity to improve.',
  principles: [
    {
      title: 'Curiosity',
      description: 'Always explore something new — from foundational programming to emerging machine learning models.',
      icon: 'Compass',
    },
    {
      title: 'Consistency',
      description: 'Small progress every day creates long-term growth. Regular practice builds genuine competence.',
      icon: 'Target',
    },
    {
      title: 'Persistence',
      description: 'Challenges are a natural part of learning. Believing in “Never Give Up” turns obstacles into breakthroughs.',
      icon: 'Sparkles',
    },
  ],
};

export const STRENGTHS = [
  { name: 'Quick Learner', desc: 'Absorbs new technical concepts and frameworks with enthusiasm and rapid adaptability.' },
  { name: 'Hardworking', desc: 'Dedicated to thorough preparation, meticulous lab work, and disciplined daily practice.' },
  { name: 'Positive Learning Attitude', desc: 'Welcomes feedback, views bugs as teaching moments, and seeks continuous refinement.' },
  { name: 'Problem-Solving Mindset', desc: 'Breaks complex academic and technical challenges into clear, logical steps.' },
  { name: 'Persistence (“Never Give Up”)', desc: 'Tenacious when debugging code, tuning models, or calibrating embedded sensors.' },
  { name: 'Curiosity', desc: 'Constantly eager to understand how hardware, software, and artificial intelligence connect.' },
  { name: 'Team Collaboration', desc: 'Active team player in group seminars, lab experiments, and collaborative projects.' },
  { name: 'Continuous Self-Improvement', desc: 'Actively builds practical projects and pursues certifications to expand capabilities.' },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    period: '2022 – 2025',
    title: 'B.Sc Information Technology',
    institutionOrContext: 'Dr. G. R. Damodaran College of Science (GRD College), Coimbatore',
    scoreOrHighlight: 'Graduated with 85.5%',
    description:
      'Built a robust foundational understanding of computer science principles, object-oriented programming, relational databases, web standards, and software engineering methodologies.',
    highlights: [
      'Core focus on C, C++, Java, PHP, and MySQL database administration',
      'Developed foundational academic projects in web and data applications',
      'Completed Career Oriented Certificate Course in Computer Hardware Maintenance',
    ],
  },
  {
    period: 'Foundational Exploration',
    title: 'Technology Exploration & Skill Expansion',
    institutionOrContext: 'Self-directed & Lab Practicals',
    description:
      'Broadened academic horizon beyond standard coursework into diverse computing disciplines: programming, databases, web technologies, AI fundamentals, cloud concepts, mobile technologies, and cybersecurity awareness.',
    highlights: [
      'Earned Cisco Certification in "Introduction to Data Science"',
      'Earned Cisco Certification in "Getting Started with Cisco Packet Tracer"',
      'Explored data analysis with Python, SPSS, and spreadsheet automation',
    ],
  },
  {
    period: 'Hands-on Milestone',
    title: 'Robotics & Embedded Systems Learning',
    institutionOrContext: 'e-Yantra Lab Setup Initiative (eLSI), IIT Bombay',
    scoreOrHighlight: 'Certificate of Merit in eLSI',
    description:
      'Completed rigorous training in basics of embedded systems, sensors, actuators, microcontroller programming, and hardware-software interaction.',
    highlights: [
      'Hands-on experience with sensor data acquisition and motor actuation',
      'Designed logic for automated guided movement and physical state detection',
      'Developed the concept for the Automated Material Handling Robot',
    ],
  },
  {
    period: '2025 – 2027 (Current)',
    title: 'Master of Computer Applications (MCA)',
    institutionOrContext: 'Dr. G. R. Damodaran College of Science (GRD College), Coimbatore',
    scoreOrHighlight: '1st Sem: 90% | 2nd Sem: 89%',
    description:
      'Currently pursuing MCA with advanced focus on software architecture, deep learning, computer vision, modern web frameworks, mobile application development, IoT, and cloud computing.',
    highlights: [
      'Deep dive into Deep Learning, Transformers, and Vision Transformers (ViT)',
      'Designing robust backend REST APIs using FastAPI and Python',
      'Focusing on deployable, responsible AI applications in medical image analysis',
    ],
  },
  {
    period: 'Active Academic Work',
    title: 'Flagship AI & Healthcare Projects',
    institutionOrContext: 'Academic Research & Project Development',
    description:
      'Applied theoretical computer vision and data extraction concepts to solve real-world accessibility and medical classification challenges.',
    highlights: [
      'Developed "Lung Cancer Classification Using Vision Transformer Algorithm" with FastAPI backend',
      'Created "Location Based Data Extraction for Health Camp Search Engine"',
      'Implemented unit, integration, and validation testing for software reliability',
    ],
  },
  {
    period: 'Vision & Next Steps',
    title: 'Future Goal: Professional IT Career',
    institutionOrContext: 'Career Objective',
    description:
      'Aspires to build a strong professional career in the IT industry with leading technology companies, contributing to impactful software and AI projects while continuing to learn and evolve technically.',
    highlights: [
      'Deepen skills in full-stack engineering, cloud deployments, and production AI',
      'Work alongside experienced engineering teams on scalable systems',
      'Maintain an active commitment to lifelong learning and integrity',
    ],
  },
];

export const EDUCATION_DATA = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. G. R. Damodaran College of Science (GRD College)',
    location: 'Coimbatore, Tamil Nadu',
    duration: '2025 – 2027 (Pursuing)',
    performance: '1st Semester: 90% | 2nd Semester: 89%',
    description:
      'Currently pursuing MCA with a focus on strengthening knowledge across software development, artificial intelligence, databases, web technologies, mobile application development, cybersecurity, IoT, generative AI, and modern computing concepts.',
    keySubjects: [
      'Advanced Software Engineering',
      'Deep Learning & Vision Transformers',
      'Database Architecture & SQL Optimization',
      'Cloud & Distributed Computing Concepts',
      'Mobile Application Development (Android)',
      'Software Testing & Quality Assurance',
    ],
  },
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc IT)',
    institution: 'Dr. G. R. Damodaran College of Science (GRD College)',
    location: 'Coimbatore, Tamil Nadu',
    duration: '2022 – 2025',
    performance: 'Aggregate: 85.5%',
    description:
      'Built a solid foundation in programming, relational databases, software development methodologies, web technologies, computer networks, and practical information technology workflows.',
    keySubjects: [
      'Programming in C, C++, and Java',
      'Relational Database Management Systems (MySQL)',
      'Web Technologies (HTML, CSS, JavaScript, PHP)',
      'Data Structures & Algorithms',
      'Operating Systems & Network Basics',
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC) & SSLC',
    institution: 'King Universe Matric Hr. Sec School',
    location: 'Kumanthapuram, Tamil Nadu',
    duration: 'SSLC: 2020 | HSC: 2022',
    performance: 'HSC: 75% | SSLC: 77.8%',
    description:
      'Completed foundational high school education with strong emphasis on mathematics, computer science, and physical sciences.',
    keySubjects: ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'],
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Certificate of Merit in eLSI: Basics of Embedded Systems and Robotics',
    issuer: 'e-Yantra (IIT Bombay)',
    type: 'Robotics & Hardware-Software Interaction',
    description:
      'Comprehensive merit-based course covering microcontrollers, sensor interfacing, actuator control, automation concepts, and intelligent machine logic.',
  },
  {
    title: 'Career Oriented Course in Computer Hardware Maintenance',
    issuer: 'GRD College / Certificate Level',
    type: 'Computer Hardware & Architecture',
    description:
      'Practical training in PC architecture, system assembly, component diagnostics, peripheral interfacing, and operating system setup.',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    type: 'Data Analysis & Analytics',
    description:
      'Explored foundational data analysis techniques, data pipelines, descriptive statistics, and practical insights extraction.',
  },
  {
    title: 'Getting Started with Cisco Packet Tracer',
    issuer: 'Cisco Networking Academy',
    type: 'Networking & Protocols',
    description:
      'Simulated complex network topologies, subnetting, router/switch configurations, and packet inspection protocols.',
  },
];

export const ROBOTICS_EDUCATION = {
  title: 'Robotics & Intelligent Systems',
  subtitle: 'Understanding the Bridge Between Physical Sensors and Software Intelligence',
  overview:
    'Sasikala’s robotics education through the e-Yantra initiative provided crucial exposure to how hardware and software communicate in real-time environments. Rather than seeing code as an abstract screen entity, robotics taught her to appreciate timing constraints, noisy sensor inputs, physical actuation, and feedback loops.',
  keyCompetencies: [
    {
      title: 'Sensors & Signal Acquisition',
      desc: 'Interfacing ultrasonic, infrared, and optical sensors to perceive ambient physical environments.',
    },
    {
      title: 'Actuators & Motion Control',
      desc: 'Driving DC and servo motors using pulse-width modulation (PWM) and directional motor driver circuits.',
    },
    {
      title: 'Automation & Logic Loops',
      desc: 'Developing state machine decision matrices for automated navigation and threshold-based responses.',
    },
    {
      title: 'Hardware-Software Interaction',
      desc: 'Writing low-level controller logic, handling interrupts, and debugging electronic circuit behaviors.',
    },
    {
      title: 'Embedded Systems',
      desc: 'Appreciating memory constraints, real-time response times, and deterministic logic execution.',
    },
    {
      title: 'Intelligent Machines',
      desc: 'Connecting automated physical systems with rule-based and machine-learning decision models.',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: [
      { name: 'Python', category: 'Programming', level: 'Practical Exposure', description: 'Used for AI modeling, Vision Transformers, data manipulation, and FastAPI backend scripting.' },
      { name: 'Java', category: 'Programming', level: 'Academic', description: 'Learned object-oriented design patterns, exception handling, data structures, and multithreading.' },
      { name: 'C', category: 'Programming', level: 'Academic', description: 'Studied low-level memory management, pointers, and algorithmic logic during undergraduate coursework.' },
      { name: 'C#', category: 'Programming', level: 'Exploring', description: 'Currently exploring .NET environment, syntax structures, and object-oriented application concepts.' },
      { name: 'PHP', category: 'Programming', level: 'Academic', description: 'Applied in web scripting, server-side data processing, and connecting web pages with MySQL.' },
    ],
  },
  {
    title: 'Web Technologies',
    iconName: 'Globe',
    skills: [
      { name: 'HTML5', category: 'Web', level: 'Hands-on', description: 'Writing semantic, accessible, and structured page layouts for web applications.' },
      { name: 'CSS3', category: 'Web', level: 'Hands-on', description: 'Designing responsive layouts using Flexbox, CSS Grid, and custom aesthetic stylesheets.' },
      { name: 'JavaScript', category: 'Web', level: 'Hands-on', description: 'Client-side DOM manipulation, event handling, asynchronous fetching, and UI reactivity.' },
      { name: 'React', category: 'Web', level: 'Exploring', description: 'Exploring modern component architecture, hooks (useState, useEffect), and modular UI state.' },
      { name: 'REST APIs', category: 'Web', level: 'Practical Exposure', description: 'Designing and consuming HTTP endpoints with JSON data exchange for backend connectivity.' },
      { name: 'FastAPI', category: 'Web', level: 'Practical Exposure', description: 'Created lightweight Python backend services to expose deep learning inference endpoints.' },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', category: 'Databases', level: 'Hands-on', description: 'Schema design, table normalization, indexing, and complex JOIN queries for academic projects.' },
      { name: 'SQL', category: 'Databases', level: 'Hands-on', description: 'Writing DDL and DML statements, aggregate functions, filtering, and data integrity constraints.' },
      { name: 'DBMS Concepts', category: 'Databases', level: 'Academic', description: 'Understanding ACID properties, transaction management, relational integrity, and concurrency.' },
    ],
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    iconName: 'Brain',
    skills: [
      { name: 'Artificial Intelligence', category: 'AI/ML', level: 'Academic', description: 'Studying core search algorithms, heuristics, knowledge representation, and reasoning.' },
      { name: 'Machine Learning', category: 'AI/ML', level: 'Academic', description: 'Supervised vs. unsupervised workflows, classification, regression, and model evaluation metrics.' },
      { name: 'Deep Learning', category: 'AI/ML', level: 'Practical Exposure', description: 'Neural network architectures, forward/backward propagation, activation functions, and loss minimization.' },
      { name: 'Computer Vision', category: 'AI/ML', level: 'Practical Exposure', description: 'Image preprocessing, feature extraction, patch dividing, and medical scan classification.' },
      { name: 'Transformers', category: 'AI/ML', level: 'Academic', description: 'Understanding self-attention mechanisms, query-key-value vectors, and positional embeddings.' },
      { name: 'Vision Transformers (ViT)', category: 'AI/ML', level: 'Practical Exposure', description: 'Flagship academic focus: splitting medical images into 16x16 patches for attention-based diagnosis.' },
      { name: 'Generative AI', category: 'AI/ML', level: 'Exploring', description: 'Exploring diffusion models, text generation mechanics, and modern creative AI tools.' },
      { name: 'NLP Fundamentals', category: 'AI/ML', level: 'Academic', description: 'Tokenization, text normalization, vectorization, and vocabulary building concepts.' },
      { name: 'Prompt Engineering', category: 'AI/ML', level: 'Exploring', description: 'Practicing zero-shot, one-shot, few-shot, and role-based prompting for structured outputs.' },
      { name: 'RAG Concepts', category: 'AI/ML', level: 'Exploring', description: 'Understanding how external document retrieval enriches language model generation.' },
    ],
  },
  {
    title: 'Cloud & Modern Computing',
    iconName: 'Cloud',
    skills: [
      { name: 'Cloud Fundamentals', category: 'Cloud', level: 'Exploring', description: 'Understanding IaaS, PaaS, SaaS delivery models and shared responsibility paradigms.' },
      { name: 'Distributed Computing', category: 'Cloud', level: 'Academic', description: 'Studying cluster computing, load balancing, consensus concepts, and horizontal scaling.' },
      { name: 'Cloud Storage & Compute', category: 'Cloud', level: 'Exploring', description: 'Exploring scalable object storage, virtual machine instances, and serverless executions.' },
      { name: 'Backend Services', category: 'Cloud', level: 'Practical Exposure', description: 'Structuring application logic into decoupled API microservices for web clients.' },
    ],
  },
  {
    title: 'Software Testing & Quality Assurance',
    iconName: 'CheckCircle',
    skills: [
      { name: 'Software Testing', category: 'Testing', level: 'Academic', description: 'Understanding test life cycles, test case creation, bug tracking, and boundary value analysis.' },
      { name: 'Unit Testing', category: 'Testing', level: 'Academic', description: 'Writing isolated tests to verify that individual code functions output expected results.' },
      { name: 'Integration Testing', category: 'Testing', level: 'Academic', description: 'Validating data flow and communication between API endpoints, databases, and ML models.' },
      { name: 'Validation Testing', category: 'Testing', level: 'Academic', description: 'Ensuring software adheres to end-user functional requirements and clinical constraints.' },
      { name: 'Performance Testing', category: 'Testing', level: 'Academic', description: 'Evaluating system response time, throughput, and memory consumption under stress.' },
      { name: 'Apache JMeter', category: 'Testing', level: 'Academic', description: 'Used to configure thread groups and simulate load requests against application endpoints.' },
    ],
  },
  {
    title: 'Mobile, IoT & Robotics',
    iconName: 'Cpu',
    skills: [
      { name: 'Android Development', category: 'Mobile & IoT', level: 'Academic', description: 'Studying Android application lifecycle, XML UI layouts, and basic activity navigation.' },
      { name: 'Android Studio', category: 'Mobile & IoT', level: 'Academic', description: 'Configuring virtual device emulators, Gradle dependencies, and debugging mobile views.' },
      { name: 'Internet of Things (IoT)', category: 'Mobile & IoT', level: 'Academic', description: 'Connecting physical sensors to microcontrollers for environmental monitoring and data relay.' },
      { name: 'Robotics Fundamentals', category: 'Mobile & IoT', level: 'Practical Exposure', description: 'Studied mechanical degrees of freedom, differential drive mechanics, and sensor feedback.' },
      { name: 'Hardware-Software Integration', category: 'Mobile & IoT', level: 'Practical Exposure', description: 'Writing embedded code to read digital/analog pins and control physical motor drivers.' },
    ],
  },
  {
    title: 'Tools & Development Environment',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', category: 'Tools', level: 'Hands-on', description: 'Version control workflows, commit histories, branching, and open-source project tracking.' },
      { name: 'VS Code', category: 'Tools', level: 'Hands-on', description: 'Primary coding environment for Python, web technologies, and Markdown documentation.' },
      { name: 'Jupyter Notebook', category: 'Tools', level: 'Hands-on', description: 'Interactive exploratory data analysis, chart plotting, and model training experimentation.' },
      { name: 'Google Colab', category: 'Tools', level: 'Hands-on', description: 'Utilizing cloud GPU runtimes to train deep learning models and execute Python notebooks.' },
      { name: 'Cisco Packet Tracer', category: 'Tools', level: 'Academic', description: 'Configuring virtual routers, switches, and IP subnet topologies for network testing.' },
      { name: 'SPSS & Excel', category: 'Tools', level: 'Academic', description: 'Statistical data calculation, frequency distributions, and tabular data visualization.' },
    ],
  },
];

export const SUBJECTS_STUDIED: SubjectArea[] = [
  {
    id: 'prog-soft',
    title: 'Programming & Software Development',
    category: 'Core Computer Science',
    concepts: [
      'Python',
      'Java',
      'C',
      'C#',
      'PHP',
      'Object-Oriented Programming (OOP)',
      'Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees)',
      'Algorithmic Complexity & Analysis',
      'Software Engineering Life Cycle (SDLC)',
    ],
    academicContext:
      'Gained deep structural familiarity with clean code organization, algorithmic logic, object modeling, and the phases of software specification, design, coding, and maintenance.',
  },
  {
    id: 'web-dev',
    title: 'Web Development & Architectures',
    category: 'Application Engineering',
    concepts: [
      'Semantic HTML5',
      'CSS3 & Responsive Design',
      'Modern JavaScript (ES6+)',
      'React Component Patterns',
      'PHP Server Scripting',
      'REST API Design Principles',
      'Client-Server Communication Protocols',
    ],
    academicContext:
      'Explored client-side rendering, responsive mobile-first stylesheets, asynchronous data fetching via fetch/AJAX, and separating presentation logic from data layers.',
  },
  {
    id: 'dbms',
    title: 'Databases & Data Management',
    category: 'Data Systems',
    concepts: [
      'Database Management Systems (DBMS)',
      'Relational Model & Normalization (1NF through BCNF)',
      'MySQL & SQL Query Optimization',
      'Database Connectivity (JDBC, PDO, Python connectors)',
      'Transaction Processing & ACID Properties',
    ],
    academicContext:
      'Engineered structured schemas with foreign key constraints, evaluated query execution plans, and ensured data consistency across multi-table operations.',
  },
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Deep Learning',
    category: 'Intelligent Systems',
    concepts: [
      'Artificial Intelligence Fundamentals',
      'Machine Learning Algorithms (Decision Trees, SVM, KNN)',
      'Deep Neural Networks (CNN, ViT)',
      'Computer Vision & Medical Image Preprocessing',
      'Generative AI & Large Language Models',
      'Transformers & Attention Mechanisms',
      'Prompt Engineering Strategies',
      'Retrieval-Augmented Generation (RAG)',
    ],
    academicContext:
      'Academically investigated how mathematical matrix transformations and attention weights enable computers to recognize intricate patterns in medical scans and natural language.',
  },
  {
    id: 'testing-qa',
    title: 'Software Testing & Quality Assurance',
    category: 'Reliability Engineering',
    concepts: [
      'Software Testing Life Cycle (STLC)',
      'Unit Testing & Test Fixtures',
      'Integration Testing Methodologies',
      'Validation Testing & User Acceptance',
      'Performance Testing & Load Profiles',
      'Apache JMeter Load Simulation',
    ],
    academicContext:
      'Learned to view software through a quality-focused lens, constructing test matrices to catch edge cases before deployment and measuring throughput under load.',
  },
  {
    id: 'mobile-comp',
    title: 'Mobile Computing & Applications',
    category: 'Mobile Systems',
    concepts: [
      'Android Operating System Architecture',
      'Android Studio Tooling & Gradle',
      'Activity Lifecycle & Intent Navigation',
      'Mobile UI Layouts & Material Design Basics',
      'Hardware Constraints in Mobile Devices',
    ],
    academicContext:
      'Studied the unique memory, battery, and asynchronous lifecycle considerations necessary when authoring software for handheld mobile form factors.',
  },
  {
    id: 'emerging-tech',
    title: 'Emerging Technologies & Physical Computing',
    category: 'Modern Horizons',
    concepts: [
      'Internet of Things (IoT) Architectures',
      'Cloud Computing Deployment Models',
      'Robotics Fundamentals & Control Loops',
      'Automation & Sensor Fusion',
      'Cybersecurity & Network Defense Concepts',
    ],
    academicContext:
      'Interconnected computing with physical sensors and distributed cloud backends, examining network security fundamentals to protect interconnected devices.',
  },
  {
    id: 'data-vis',
    title: 'Data Analysis & Scientific Visualization',
    category: 'Analytical Skills',
    concepts: [
      'Data Analysis Fundamentals',
      'Matplotlib & Python Data Visualizations',
      'Statistical Distributions & Hypothesis Testing',
      'IBM SPSS Statistical Analysis',
      'Spreadsheet Modeling & Data Cleansing',
    ],
    academicContext:
      'Transformed raw academic experimental datasets into interpretable scatter plots, histograms, and statistical summaries to back up academic hypotheses.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lung-cancer-vit',
    title: 'Lung Cancer Classification Using Vision Transformer Algorithm',
    category: 'MCA / Artificial Intelligence / Computer Vision',
    badge: 'Flagship Academic Project',
    isFlagship: true,
    shortDescription:
      'A deep learning-based healthcare project exploring the use of Vision Transformer (ViT) architecture for lung cancer medical image classification.',
    problem:
      'Lung cancer diagnosis involves analyzing complex chest CT and histopathology scans to identify subtle visual abnormalities. Conventional diagnostic approaches frequently depend on manually engineered image features or standard convolutional neural networks, which may struggle to capture long-range contextual relationships across distant regions of an image.',
    solution:
      'This project explores how modern transformer-based computer vision techniques can be applied to medical image classification. Instead of solely relying on local convolutional filters, a Vision Transformer divides an input medical image into a sequence of non-overlapping patches (e.g., 16×16 pixels), flattens them into 1D embeddings with positional encodings, and processes them through multi-head self-attention mechanisms to learn global diagnostic patterns.',
    technologies: [
      'Python',
      'Deep Learning',
      'Vision Transformer (ViT)',
      'Computer Vision',
      'FastAPI',
      'Machine Learning',
      'Medical Image Processing',
    ],
    backend:
      'FastAPI was explored as a high-performance, lightweight Python backend framework to serve the trained Vision Transformer model via structured REST endpoints, enabling external client applications to transmit image payloads and receive predicted classification classes with inference metadata.',
    testing: [
      {
        type: 'Unit Testing',
        description: 'Verified image preprocessing routines (resizing, patch flattening, normalization) to ensure tensors strictly match ViT input dimensions.',
      },
      {
        type: 'Integration Testing',
        description: 'Validated end-to-end communication between the FastAPI request handler, model inference pipeline, and JSON response serialization.',
      },
      {
        type: 'Validation Testing',
        description: 'Tested the model against validation datasets to assess classification accuracy, precision across diagnostic classes, and false-positive rates.',
      },
    ],
    keyContribution:
      'Configured patch embedding logic, set up the attention-based classification pipeline, and engineered a lightweight FastAPI wrapper for seamless inference delivery.',
    learningOutcome:
      'Through this project, Sasikala gained practical exposure to AI-based healthcare applications, computer vision mechanics, transformer architectures, model integration, lightweight API development, structured software testing, and deployable AI concepts.',
    futureScope:
      'Future iterations aim to explore multi-modal patient metadata integration (combining imaging with clinical records) and testing quantized model variants for edge deployment in clinics.',
    githubUrl: '[ADD GITHUB LINK]',
    liveDemoUrl: '[ADD LIVE DEMO LINK]',
  },
  {
    id: 'health-camp-search',
    title: 'Location Based Data Extraction for Health Camp Search Engine',
    category: 'B.Sc IT / Web & Data Application',
    badge: 'B.Sc IT Capstone Project',
    isFlagship: false,
    shortDescription:
      'A location-based healthcare search solution designed to help users discover relevant medical and health camps using geographical and location-related information.',
    problem:
      'Finding relevant health camps, blood donation drives, and preventive health screenings can be difficult for citizens when vital details are scattered across disparate bulletin boards, community notices, and social channels without a unified, location-aware discovery tool.',
    solution:
      'The project focuses on extracting and organizing location-related healthcare camp announcements into a centralized, searchable, user-friendly repository. Users can query by district, locality, or healthcare specialty to view critical event details including dates, hours, organizing hospitals, and available medical services.',
    technologies: [
      'Web Technologies',
      'Location-Based Search',
      'Data Extraction Logic',
      'MySQL Database',
      'PHP / Backend Scripting',
      'HTML / CSS / JavaScript',
    ],
    keyContribution:
      'Designed the relational schema for camp schedules, implemented proximity and district-based search filters, and authored an accessible user interface tailored for diverse community members.',
    learningOutcome:
      'Gained direct experience in location-oriented information retrieval, database schema optimization for search queries, data sanitization, and prioritizing accessibility for public welfare applications.',
    futureScope:
      'Potential future enhancements include automated web scrapers for authorized hospital notices, SMS notifications for upcoming rural camps, and GPS radius geolocation mapping.',
    githubUrl: '[ADD GITHUB LINK]',
    liveDemoUrl: '[ADD LIVE DEMO LINK]',
  },
];

export const ROBOTICS_PROJECT = {
  title: 'Automated Material Handling Robot',
  category: 'Robotics & Intelligent Systems / Automation',
  badge: 'Hardware-Software Innovation Concept',
  shortDescription:
    'A cost-conscious automation concept designed to explore how robotic systems can assist with material movement and handling tasks in industrial and institutional setups.',
  problem:
    'Manual material handling in warehouses, laboratories, and small workshops is repetitive, physically taxing, and prone to transit bottlenecks. Small facilities often cannot afford costly commercial automated guided vehicles (AGVs).',
  solution:
    'An automated robotic system concept capable of moving materials between predefined checkpoints with reduced manual intervention. The robot uses sensor arrays to detect pathways, avoid obstacles, and follow designated transport routes safely.',
  concepts: [
    'Robotics Fundamentals',
    'Automation',
    'Sensors & Input Perception',
    'Movement & Motor Control',
    'Hardware-Software Interaction',
    'Intelligent State Machines',
    'Material Handling Logistics',
  ],
  flowSteps: [
    { step: '01', name: 'Detect', desc: 'Infrared and ultrasonic sensors scan the surroundings for route guidance lines and potential transit obstructions.' },
    { step: '02', name: 'Decide', desc: 'The embedded microcontroller processes incoming telemetry against the pre-programmed state machine and navigation logic.' },
    { step: '03', name: 'Move', desc: 'Motor drivers regulate PWM signals to dual differential drive motors, smoothly steering along designated pathways.' },
    { step: '04', name: 'Deliver', desc: 'Upon reaching the designated destination station, the robot halts, signals station arrival, and safely delivers its cargo.' },
  ],
  keyLearning:
    'Developed a firm understanding of real-time control loops, sensor noise calibration, electrical power distribution for motors, and designing fail-safe emergency stop logic.',
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    number: '01',
    title: 'AI in Healthcare',
    subtitle: 'Assisting Clinical Decision Support through Responsible Computer Vision',
    questionOrProblem: 'How can Artificial Intelligence meaningfully support healthcare diagnostics without replacing human clinical expertise?',
    exploration: [
      'Medical Image Analysis: Analyzing thousands of CT, X-ray, or histopathology scans requires immense radiologist time. AI algorithms like Vision Transformers can serve as a second pair of eyes, flagging subtle anomalies for priority review.',
      'Classification Precision: Attention mechanisms can correlate distant visual signals across lung tissue, differentiating benign nodules from malignant patterns with probabilistic scoring.',
      'Responsible AI & Oversight: Clinical AI must always act as a decision-support assistant rather than an autonomous diagnostician. Clear confidence intervals, explainable attention maps, and human-in-the-loop oversight are essential ethical imperatives.',
    ],
    keyInsight:
      'AI transforms healthcare not by supplanting physicians, but by augmenting diagnostic throughput, reducing fatigue-induced oversights, and accelerating patient triage.',
    connectionToProject: 'Directly informs the architecture and validation methodologies of the Lung Cancer Classification Project.',
    tags: ['Healthcare AI', 'Vision Transformers', 'Decision Support', 'Responsible AI'],
  },
  {
    id: 'case-02',
    number: '02',
    title: 'Location-Based Healthcare Discovery',
    subtitle: 'Bridging the Information Gap for Public Community Wellness',
    questionOrProblem: 'Why do citizens in regional towns struggle to discover vital healthcare camps happening in their own neighborhoods?',
    exploration: [
      'Information Fragmentation: Preventive health camps, eye care screenings, and blood drives are frequently announced through physical flyers or isolated local channels, leading to low turnout.',
      'Location-Centric Retrieval: Organizing data by geographical hierarchy (district → taluk → locality) allows even low-bandwidth users to rapidly identify camps within traveling distance.',
      'User Accessibility: Presenting clear logistics (exact dates, venue landmarks, participating doctors, free vs. subsidized services) empowers vulnerable populations to seek timely preventive care.',
    ],
    keyInsight:
      'Effective public health solutions don’t always require complex neural networks; structured, accessible, location-aware data presentation saves lives by connecting people to care.',
    connectionToProject: 'Formed the driving thesis behind the Health Camp Search Engine project created during B.Sc IT.',
    tags: ['Public Health', 'Data Extraction', 'Information Accessibility', 'Location Services'],
  },
  {
    id: 'case-03',
    number: '03',
    title: 'Robotics Automation in Handling',
    subtitle: 'Eliminating Repetitive Strain Through Cost-Conscious Mobile Robotics',
    questionOrProblem: 'How can small-scale manufacturing units and warehouses automate material transport without multi-million dollar AGV fleets?',
    exploration: [
      'Task Repetitiveness: Workers spend up to 30% of their shift walking materials between inspection benches and storage shelves, creating cumulative ergonomic strain.',
      'Sensor-Driven Closed Loops: Utilizing simple optical path sensors combined with ultrasonic collision prevention offers a reliable, low-cost navigation architecture that avoids complex LIDAR mapping.',
      'Safety & Predictability: Predictable transit velocities and auditory/visual status cues allow human workers to comfortably collaborate in shared corridors alongside the mobile robot.',
    ],
    keyInsight:
      'Pragmatic automation succeeds when hardware complexity is minimized, prioritizing robust fail-safe behaviors and clear mechanical reliability.',
    connectionToProject: 'Inspired the concept and state-machine flow of the Automated Material Handling Robot.',
    tags: ['Robotics', 'Automation', 'Sensors', 'Industrial Efficiency'],
  },
  {
    id: 'case-04',
    number: '04',
    title: 'AI Application Development Lifecycle',
    subtitle: 'From Raw Dataset to Scalable Production API',
    questionOrProblem: 'What steps are required to turn an academic machine learning experiment into a deployable, testable software application?',
    exploration: [
      '1. Dataset Preparation: Curating, balancing classes, augmenting images (flips, rotations), and strictly separating training/validation/testing splits.',
      '2. Model Architecture & Training: Selecting suitable architectures (e.g. Vision Transformer), tuning hyperparameters, and monitoring loss and accuracy curves.',
      '3. Testing & Validation: Subjecting the trained weights to isolated unit tests, edge-case stress inputs, and calculating confusion matrices.',
      '4. API Integration: Encapsulating the model behind a lightweight REST server (such as FastAPI) with structured Pydantic schemas.',
      '5. Client Application: Connecting front-end user interfaces to the inference endpoint, providing visual feedback and latency metrics.',
    ],
    keyInsight:
      'An ML model is only an algorithm until it is packaged inside a resilient API architecture with comprehensive testing and accessible user interfaces.',
    connectionToProject: 'Reflects the architectural pipeline explored in the Lung Cancer ViT deployment with FastAPI.',
    tags: ['MLOps', 'FastAPI', 'Software Engineering', 'Pipeline Architecture'],
  },
];

export const AI_EXPLORATION_AREAS = [
  {
    title: 'Machine & Deep Learning',
    description: 'Understanding neural network architectures, gradient descent, loss functions, and feature representation.',
    status: 'Academic & Practical',
  },
  {
    title: 'Computer Vision & Transformers',
    description: 'Specialized focus on patch embedding, self-attention matrices, and medical image classification workflows.',
    status: 'Flagship Academic Focus',
  },
  {
    title: 'Generative AI & LLMs',
    description: 'Exploring large language model architectures, context windows, tokenization, and temperature sampling.',
    status: 'Active Exploration',
  },
  {
    title: 'Prompt Engineering Techniques',
    description: 'Studying zero-shot, one-shot, few-shot, and role-based prompting to achieve reliable, structured model outputs.',
    status: 'Hands-on Practice',
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    description: 'Learning how vector databases and semantic search retrieve relevant knowledge to ground AI generations in factual sources.',
    status: 'Conceptual Study',
  },
  {
    title: 'Deployable AI Architectures',
    description: 'Bridging trained weights with client applications via lightweight Python API frameworks like FastAPI.',
    status: 'Applied Exposure',
  },
];

export const CLOUD_CONCEPTS = [
  {
    title: 'Cloud Fundamentals',
    description: 'Understanding Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).',
  },
  {
    title: 'Scalability & Elasticity',
    description: 'How horizontal autoscaling accommodates fluctuating web traffic without service disruption.',
  },
  {
    title: 'Storage & Object Buckets',
    description: 'Evaluating object storage (like AWS S3 or Google Cloud Storage) versus relational and document databases.',
  },
  {
    title: 'Compute & Serverless',
    description: 'Exploring virtual machine instances, containerized workloads, and event-driven function executions.',
  },
  {
    title: 'Cloud APIs & Gateways',
    description: 'Routing client requests securely through reverse proxies and rate-limited API gateways.',
  },
  {
    title: 'Deployment Pipelines',
    description: 'Automating build, test, and release cycles to minimize deployment downtime.',
  },
];

export const CURRENTLY_EXPLORING = [
  'Advanced Deep Learning & ViT Fine-Tuning',
  'Generative AI & LLM Prompt Engineering',
  'Cloud Platforms & Containerization Concepts',
  'Modern React & Component Lifecycle Patterns',
  'Core Java & Enterprise Architecture Patterns',
  'C# & .NET Application Development',
  'Production Software Engineering Practices',
  'RESTful Microservice Design with FastAPI',
];

export const FUTURE_AMBITIONS = [
  'Build more real-world, accessible AI applications that solve genuine social problems',
  'Strengthen core software engineering, data structures, and algorithmic efficiency',
  'Gain hands-on experience deploying containerized applications to cloud platforms',
  'Develop elegant, accessible web interfaces with clean typography and responsive design',
  'Continue exploring intelligent robotics and sensor-driven automation',
  'Master enterprise development in Java and C#',
  'Build a rich, transparent portfolio of open-source contributions on GitHub',
  'Launch a meaningful career with leading technology organizations where learning is celebrated',
];
