const projects = [
  {
    slug: "wildfire-marl",
    name: "Multi-Agent Wildfire Suppression (RL)",
    tagline: "PettingZoo + SimFire: coordinating drones to deploy extinguishers efficiently.",
    category: "python-ml",
    length: "3 months",
    highlights: [
      "Developed multi-agent reinforcement learning system using PettingZoo framework",
      "Implemented coordinated drone deployment strategies for wildfire suppression",
      "Achieved 40% improvement in fire containment efficiency",
      "Created custom simulation environment with realistic fire spread dynamics"
    ],
    image: "/experience-jpmc.jpg",
    stack: ["Python", "Gymnasium", "PyTorch", "PettingZoo"],
    link: "https://github.com/…",
  },
  {
    slug: "gtzan-genre",
    name: "GTZAN Music Genre Classification",
    tagline: "CNNs on spectrograms and raw waveforms; augmentation experiments.",
    category: "python-ml",
    length: "2 months",
    highlights: [
      "Built CNN models for music genre classification using GTZAN dataset",
      "Experimented with spectrogram and raw waveform input representations",
      "Implemented data augmentation techniques to improve model robustness",
      "Achieved 85% accuracy on 10-class genre classification task"
    ],
    image: "/project-music.jpg",
    stack: ["PyTorch", "torchaudio", "NumPy"],
    link: "https://github.com/…",
  },
  {
    slug: "smartcart-v3",
    name: "SmartCart v3 - Hospital Nutrition Monitor",
    tagline: "Augmented meal cart for preventing malnutrition in hospital patients.",
    category: "recent",
    length: "October 2025 - Present",
    highlights: [
      "Led development of smart meal cart system for University Hospital Southampton",
      "Implemented computer vision for food intake monitoring and analysis",
      "Designed user-friendly interface for healthcare staff and patients",
      "Integrated with hospital systems for patient data synchronization"
    ],
    image: "/project-smartcart.jpg",
    stack: ["Python", "OpenCV", "Flask", "React"],
    link: "https://smartcart-demo.com",
  },
  {
    slug: "banking-system",
    name: "Distributed Banking System",
    tagline: "Multi-threaded banking application with transaction processing and security.",
    category: "java",
    length: "4 months",
    highlights: [
      "Developed distributed banking system using Java with multi-threading",
      "Implemented secure transaction processing with encryption",
      "Created RESTful API for banking operations and account management",
      "Built comprehensive testing suite with 95% code coverage"
    ],
    image: "/project-banking.jpg",
    stack: ["Java", "Spring Boot", "MySQL", "JUnit"],
    link: "https://github.com/…",
  },
  {
    slug: "vr-escape-room",
    name: "VR Escape Room Adventure",
    tagline: "Immersive puzzle game with physics-based interactions and multiplayer support.",
    category: "unity-csharp",
    length: "5 months",
    highlights: [
      "Created immersive VR escape room experience using Unity and C#",
      "Implemented physics-based puzzle mechanics and interactions",
      "Developed multiplayer networking for cooperative gameplay",
      "Optimized performance for VR headsets with 90fps target"
    ],
    image: "/project-vr.jpg",
    stack: ["Unity", "C#", "VR Toolkit", "Photon"],
    link: "https://steam.com/…",
  },
];
export default projects;
