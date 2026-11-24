// All personal content for the site lives here, so pages stay free of copy.
// DRAFT: written from the CV; review every line before publishing.

export const profile = {
  name: 'Kerem Kılıç',
  pronunciationIpa: '/keˈɾem kɯˈlɯtʃ/',
  // Put the profile photo in `public/` and point this at it, e.g. '/profile.jpg'.
  photo: '/profile-placeholder.svg',
  photoAlt: 'Portrait of Kerem Kılıç',
  // Written out in words so scrapers cannot read it; shown as plain text, not a mailto link.
  emailDisplay: 'kkilic at ethz dot ch',
  links: [
    { label: 'GitHub', href: 'https://github.com/keremckilic' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kerem-kilic' },
  ],
};

export const about = [
  `I am a master's student in Electrical Engineering at ETH Zurich, majoring in Systems, Control, and AI.
   I work as a research assistant in the Intelligent Control Systems group.`,
  `Before that I developed and deployed model-based and reinforcement learning controllers for humanoid robots
   during an internship at Hexagon Robotics, and studied hierarchical reinforcement learning through
   differentiable simulation at the Robotic Systems Lab.`,
  `I am interested in theoretically grounded approaches to learning and controlling dynamical systems.`,
];

export type NewsItem = { date: string; text: string };

export const news: NewsItem[] = [
  { date: 'Oct 2026', text: 'Started as a research assistant in the Intelligent Control Systems group at ETH Zurich.' },
  { date: 'Sep 2026', text: 'Finished my robotics internship at Hexagon Robotics.' },
  {
    date: 'Feb 2026',
    text: 'Completed my semester project on hierarchical reinforcement learning via differentiable simulation.',
  },
];

export type Entry = {
  title: string;
  org?: string;
  dates: string;
  bullets?: string[];
};

export const experience: Entry[] = [
  {
    title: 'Research Assistant',
    org: 'Intelligent Control Systems, ETH Zurich',
    dates: 'Oct 2026 – Present',
  },
  {
    title: 'Robotics Intern',
    org: 'Hexagon Robotics',
    dates: 'Mar 2026 – Sep 2026',
    bullets: [
      'Developed and deployed an RL loco-manipulation policy reaching sub-centimeter end-effector accuracy.',
      'Improved actuator torque limit and friction modeling for reliable sim-to-real transfer.',
      'Built an analytical kinematics library for stable base configurations and a real-time C++ controller.',
      'Created the system integration test framework used across teams and quantified accuracy with OptiTrack.',
    ],
  },
  { title: 'Teaching Assistant', org: 'ETH Zurich', dates: 'Sep 2024 – Jan 2026' },
  {
    title: 'Engineering Intern',
    org: 'Arke Telekom',
    dates: 'Jul 2024 – Aug 2024',
    bullets: ['Built an application-layer protocol and refined channel modeling for multi-hop mobile ad-hoc networks.'],
  },
  { title: 'Teaching Assistant', org: 'EPFL', dates: 'Sep 2023 – Jan 2024' },
];

export const research: Entry[] = [
  {
    title: 'Hierarchical RL via Differentiable Simulation',
    org: 'Robotic Systems Lab, ETH Zurich',
    dates: 'Oct 2025 – Feb 2026',
    bullets: [
      'Designed a hierarchy routing task gradients through a frozen low-level locomotion policy on ANYmal D.',
      'Showed the hierarchy lets first-order gradients match hybrid actor-critic methods where end-to-end training fails.',
      'Identified delayed action realization as a regime where temporal abstraction accelerates convergence.',
    ],
  },
];

export const projects: Entry[] = [
  {
    title: 'Robotic Scene Understanding by Exploration with Spot Robot',
    dates: 'Feb 2025 – Jun 2025',
    bullets: [
      'Built an onboard RGB-D reconstruction pipeline for Spot, replacing external LiDAR scanning.',
      'Integrated OpenMask3D instance segmentation into a dynamic scene graph updated by active perception.',
    ],
  },
  {
    title: 'Smart Traffic Control using MPC and Data-Driven Methods',
    dates: 'May 2025 – Jun 2025',
    bullets: ['Built a real-time urban traffic controller with MPC and data-driven control (DeePC, TPC).'],
  },
  {
    title: 'Unified Autonomy Stack via Gaussian Belief Propagation',
    dates: 'Mar 2025 – Jul 2025',
    bullets: [
      'Unified planning, estimation, control, and sensing as factor-graph inference for multi-robot systems.',
    ],
  },
];
