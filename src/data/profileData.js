// Central content file for the portfolio.
// Edit this file to update text shown across the site.

export const profile = {
  name: "Nimsika Bosilu",
  title: "CSE Undergraduate | Full-Stack, Embedded Systems & Robotics",
  email: "nbosilu@gmail.com",
  phone: "+94 77 726 4820",
  location: "Ambalangoda, Sri Lanka",
  github: "https://github.com/Nimsika-Bosilu",
  linkedin: "https://linkedin.com/in/nimsika-bosilu",
  website: "https://bosilu.dev",
  avatar: "avatar.jpg",
};

export const aboutText = [
  "I'm a Computer Science and Engineering undergraduate at the University of Moratuwa, building complete systems rather than isolated modules — from ESP32 firmware and real-time sensor pipelines to the multi-tenant backends, APIs, and dashboards layered on top of them.",
  "My core focus is backend and full-stack engineering with Java 17 and Spring Boot microservices, Node.js REST APIs, and React single-page applications backed by PostgreSQL — practised in clean architecture, schema-per-service design, and Docker-based deployment on AWS.",
  "Alongside that, I have hands-on experience across machine-learning-driven IoT, computer vision, and real-time distributed data pipelines using MQTT and InfluxDB telemetry, YOLO/OpenCV perception, and ROS 2 robotics. Comfortable in Python, Java, and JavaScript, with competition-proven experience in robotics and embedded integration, and a consistent record of delivering team projects to deadline.",
];

export const services = [
  {
    icon: "layers-outline",
    title: "Full-Stack Development",
    text: "Building end-to-end web applications with React single-page frontends, RESTful and WebSocket APIs, and relational/NoSQL data layers.",
  },
  {
    icon: "server-outline",
    title: "Backend & Microservices",
    text: "Designing decoupled Java/Spring Boot and Node.js/Express services with schema-per-service PostgreSQL, hexagonal architecture, and Docker deployment on AWS.",
  },
  {
    icon: "hardware-chip-outline",
    title: "IoT & Embedded Systems",
    text: "Building ESP32/Raspberry Pi sensor nodes and edge-processing workflows streaming telemetry over MQTT to real-time dashboards and alerting pipelines.",
  },
  {
    icon: "cog-outline",
    title: "Robotics & Automation",
    text: "Integrating SLAM, A* navigation, YOLO/OpenCV perception, and voice interaction on ROS 2 platforms for autonomous, competition-grade robots.",
  },
];

export const education = [
  {
    title: "B.Sc. Engineering Honours in Computer Science and Engineering",
    place: "University of Moratuwa, Sri Lanka",
    time: "Mar 2024 — Present",
    text: "CGPA: 3.28 / 4.00",
  },
  {
    title: "G.C.E. Advanced Level — Physical Science Stream",
    place: "G/Dharmasoka College, Ambalangoda",
    time: "2020 — 2023",
    text: "Combined Mathematics (A), Physics (A), Chemistry (A) · Z-Score: 2.2836 · District Rank: 53",
  },
];

export const leadership = [
  {
    title: "Volunteer Management Committee Member",
    place: "IEEE Robotics and Automation Society, University of Moratuwa Student Branch",
    time: "2025 — 2026",
    text: "Coordinating volunteer scheduling and logistics for society events and outreach activities.",
  },
  {
    title: "Logistics Committee Member",
    place: "Hit the Ground Tournament, University of Moratuwa",
    time: "",
    text: "Organized logistics for a university-wide tournament.",
  },
  {
    title: "Volunteer",
    place: "Sasnaka Sansada Foundation",
    time: "Mar 2023 — Apr 2024",
    text: "Community service and outreach volunteering.",
  },
  {
    title: "Army Wing Cadet",
    place: "National Cadet Corps — Annual Assessment Camp, Rantembe",
    time: "2018",
    text: "",
  },
  {
    title: "Air Scout",
    place: "Sri Lanka Scout Association — President's People's Service and Up Country Camporee",
    time: "2016 — 2017",
    text: "",
  },
];

export const skills = [
  { name: "Java & Spring Boot", percent: 88 },
  { name: "JavaScript / TypeScript", percent: 90 },
  { name: "React", percent: 88 },
  { name: "Node.js & Express.js", percent: 90 },
  { name: "PostgreSQL / SQL", percent: 85 },
  { name: "Python", percent: 82 },
  { name: "ROS 2 & Embedded Systems (ESP32)", percent: 80 },
  { name: "Docker & AWS", percent: 75 },
];

export const otherSkills = [
  "MongoDB",
  "InfluxDB",
  "MQTT",
  "WebSockets",
  "JWT & Auth",
  "REST APIs",
  "Flutter",
  "OpenCV / YOLO",
  "SLAM & Nav2",
  "Git & Linux",
];

// Project categories used for portfolio filtering.
export const projectCategories = ["all", "fullstack", "iot", "robotics"];

export const categoryLabels = {
  all: "All",
  fullstack: "Full-Stack & Web",
  iot: "IoT & Embedded",
  robotics: "Robotics & Autonomous",
};

// `images` (optional array) lists filenames in src/assets/images/projects/,
// resolved dynamically in Portfolio.jsx via import.meta.glob. Projects
// without `images` fall back to the "photo coming soon" placeholder.
// `imageType: "logo"` displays the image contained/padded on a light card
// instead of cropped edge-to-edge (used for brand logos, not screenshots).
export const projects = [
  {
    id: "unigear",
    title: "UniGear",
    subtitle: "University-Exclusive Marketplace Platform",
    category: "fullstack",
    year: "2026",
    type: "Individual Project · Ongoing",
    description:
      "A microservices marketplace that lets university students rent, sell, and swap engineering components and academic resources, replacing costly new purchases with reuse. Decoupled Java 17 / Spring Boot backend on a schema-per-service PostgreSQL pattern following SOLID principles and hexagonal architecture, with a React SPA offering a personalized dashboard, real-time WebSocket chat, and dynamic filtering.",
    stack: ["Java 17", "Spring Boot", "React", "PostgreSQL", "Microservices", "Docker", "AWS EC2", "WebSockets", "Gemini API"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["unigear-logo.png"],
    imageType: "logo",
  },
  {
    id: "microbanking",
    title: "Microbanking System",
    subtitle: "Role-Based Banking Platform",
    category: "fullstack",
    year: "2025",
    type: "Team Project · Semester 3 Database Systems",
    description:
      "A role-based banking platform covering customers, accounts, transactions, fixed deposits, reports, database constraints, and scheduled interest processing.",
    stack: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "JWT", "node-cron"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["microbanking-logo.png"],
    imageType: "logo",
  },
  {
    id: "traffic-ecosystem",
    title: "Intelligent Traffic Ecosystem",
    subtitle: "Real-Time Operations Dashboard",
    category: "fullstack",
    year: "2026",
    type: "Team Project · Real-Time Web Platform",
    description:
      "Socket-driven traffic dashboards with live map visualizations of vehicle and incident data, plus Keycloak-based role authentication across operator views.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "Mapbox", "Keycloak", "Node.js"],
    link: "https://github.com/Nimsika-Bosilu",
  },
  {
    id: "amica",
    title: "Amica",
    subtitle: "Proactive AI Women's Safety Application",
    category: "fullstack",
    year: "2026",
    type: "Team Project · Ongoing",
    description:
      "A safety platform using YOLO, OCR, automated SOS workflows, and location-based risk assessment to proactively flag risk for users.",
    stack: ["Flutter", "Node.js", "YOLO", "OCR"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["amica-logo.png"],
    imageType: "logo",
  },
  {
    id: "nimma-quiz",
    title: "Nimma Quiz",
    subtitle: "Live Kahoot-Style MCQ Platform",
    category: "fullstack",
    year: "2025",
    type: "Team Project",
    description:
      "A Kahoot-style live MCQ platform with QR joining, host controls, real-time leaderboards, and Firebase-backed sessions.",
    stack: ["React", "Firebase", "Real-Time"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["nimma-quiz.png"],
  },
  {
    id: "pattiya",
    title: "Pattiya",
    subtitle: "Multi-Tenant Smart Cattle Ecosystem",
    category: "iot",
    year: "2026",
    type: "Team Project · Full-Stack IoT Platform",
    description:
      "An end-to-end cattle monitoring platform with real-time heat-cycle, heat-stress, geofence, and methane alerts over MQTT and time-series storage. Designed the multi-tenant backend and ESP32 edge-processing workflow.",
    stack: ["Node.js", "Express.js", "MongoDB", "InfluxDB", "MQTT", "ESP32", "FreeRTOS", "LoRa"],
    link: "https://github.com/Nimsika-Bosilu",
  },
  {
    id: "algaguard",
    title: "AlgaGuard",
    subtitle: "IoT Microalgae Cultivation Tank Monitoring System",
    category: "iot",
    year: "2026",
    type: "Individual Project · Full-Stack IoT Platform",
    description:
      "ESP32 sensor nodes stream water-quality and growth-condition telemetry to a Node.js backend, surfaced through a Flutter dashboard with profile-based threshold alerting.",
    stack: ["ESP32", "Flutter", "Node.js", "Express.js", "Firebase", "MQTT", "REST API"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["algaguard-logo.png"],
    imageType: "logo",
  },
  {
    id: "helaforge",
    title: "HelaForge",
    subtitle: "Voice-Controlled Semantic Robot",
    category: "robotics",
    year: "2026",
    type: "Team Project · Semester 4",
    description:
      "A Kobuki robot integrated with LiDAR, Kinect RGB-D, SLAM, A* navigation, YOLO object localization, and voice commands over ROS 2 DDS on Linux.",
    stack: ["ROS 2", "Raspberry Pi", "Python", "LiDAR", "Kinect", "SLAM", "A*", "YOLO", "OpenCV"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["helaforge-1.png", "helaforge-2.png"],
  },
  {
    id: "dual-system-robot",
    title: "Autonomous Dual-System Robot",
    subtitle: "SLRC 2026 — Finalist",
    category: "robotics",
    year: "2026",
    type: "Team Project · Competition",
    description:
      "A simulated-robot workflow and REST communication bridge transferring coordinates and commands between physical and virtual autonomous systems.",
    stack: ["ROS 2", "REST APIs", "Simulation"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["dual-system-robot.jpg"],
  },
  {
    id: "rescue-robot",
    title: "Autonomous Rescue Robot",
    subtitle: "ROBOROARZ — Champion",
    category: "robotics",
    year: "2026",
    type: "Team Project · Competition",
    description:
      "Maze navigation, obstacle avoidance, AR-tag decoding, target recognition, coordinate tracking, and shortest-path extraction.",
    stack: ["Embedded C", "Computer Vision", "Pathfinding"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["rescue-robot.jpg"],
  },
  {
    id: "golf-caddie",
    title: "Autonomous Golf Caddie Quadruped",
    subtitle: "Unitree Go2 EDU — Ongoing",
    category: "robotics",
    year: "2026",
    type: "Individual Project · Ongoing",
    description:
      "ROS 2 simulation, SLAM/Nav2 navigation, ball detection, and voice interaction using Gazebo and MuJoCo.",
    stack: ["ROS 2", "SLAM", "Nav2", "Gazebo", "MuJoCo"],
    link: "https://github.com/Nimsika-Bosilu",
    images: ["golf-caddie.jpg"],
  },
  {
    id: "micromouse",
    title: "Autonomous Micromouse",
    subtitle: "SLIIT ROBOFEST 2025 — Finalist",
    category: "robotics",
    year: "2025",
    type: "Team Project · Competition",
    description:
      "A team-based autonomous maze-solving robot developed for SLIIT ROBOFEST 2025.",
    stack: ["Embedded C", "Maze Solving", "Sensors"],
    link: "https://github.com/Nimsika-Bosilu",
  },
];

export const achievements = [
  { title: "Champion", place: "ROBOROARZ Sri Lanka International Robotics Competition", year: "2026" },
  { title: "Finalist", place: "Sri Lankan Robotics Challenge (SLRC)", year: "2026" },
  { title: "Finalist", place: "UOJ Coders", year: "2025" },
  { title: "Finalist", place: "SLIIT ROBOFEST", year: "2025" },
  { title: "Second Place (Individual)", place: "Korea International Youth Olympiad 4I", year: "2019" },
  { title: "First Place", place: "17th Young Computer Scientist Competition (FITIS)", year: "2018" },
  { title: "First Place — ICT", place: "Sahasak Nimavum National Awards", year: "2018" },
  { title: "Second Place — Environmental Conservation & Energy", place: "Sahasak Nimavum National Awards", year: "2018" },
  { title: "Third Place — Applied Science & Technology", place: "Sahasak Nimavum National Awards", year: "2018" },
  { title: "Third Place", place: "All-Island School Inventors' Competition", year: "2017" },
  { title: "Second Place", place: "Green Innovation Competition", year: "2017" },
];

// `image` refers to a filename in src/assets/images/certificates/,
// resolved dynamically in Certificates.jsx via import.meta.glob.
export const certificates = [
  {
    title: "RoboRoarZ Sri Lanka 2026 — Champion",
    issuer: "IEEE Student Branch & Centre for Advanced Robotics, University of Moratuwa",
    date: "2026",
    image: "roboroarz-2026-champion.png",
  },
  {
    title: "Sri Lankan Robotics Challenge (SLRC) 2026 — Finalist",
    issuer: "Electronic Club, University of Moratuwa",
    date: "Mar 2026",
    image: "slrc-2026-finalist.png",
  },
  {
    title: "Spark Challenge 2025/26 — Semi-Finalist",
    issuer: "SPARK Branch, Electronic Club, University of Moratuwa",
    date: "2026",
    image: "spark-challenge-2026-semifinalist.png",
  },
  {
    title: "Remedial Teaching Skills in Mathematics — Workshop",
    issuer: "Southern Province Dept. of Education & Sasnaka Sansada Foundation",
    date: "Jun 2023",
    image: "remedial-teaching-workshop-2023.png",
  },
  {
    title: "Korea International Youth Olympiad 4I — Silver Prize",
    issuer: "World Women Inventors & Entrepreneurs Association, Seoul",
    date: "Oct 2019",
    image: "korea-youth-olympiad-2019-silver.png",
  },
  {
    title: "18th APICTA Awards — Certificate of Senior Participation",
    issuer: "Asia Pacific ICT Alliance, Guangzhou",
    date: "Oct 2018",
    image: "apicta-2018-participation.png",
  },
  {
    title: "17th Young Computer Scientist Competition — Gold Award (1st Place)",
    issuer: "FITIS Software Chapter",
    date: "2018",
    image: "ycs-2018-gold.png",
  },
  {
    title: "Sahasak Nimavum 2018 — Gold Medal (ICT)",
    issuer: "Sri Lanka Inventors Commission",
    date: "Oct 2018",
    image: "sahasak-nimavum-2018-gold-ict.png",
  },
  {
    title: "Sahasak Nimavum 2018 — Silver Medal (Energy)",
    issuer: "Sri Lanka Inventors Commission",
    date: "Oct 2018",
    image: "sahasak-nimavum-2018-silver-energy.png",
  },
  {
    title: "Sahasak Nimavum 2018 — Silver Medal (Environmental Conservation)",
    issuer: "Sri Lanka Inventors Commission",
    date: "Oct 2018",
    image: "sahasak-nimavum-2018-silver-environmental.png",
  },
  {
    title: "Sahasak Nimavum 2018 — Bronze Medal (Applied Science & Technology)",
    issuer: "Sri Lanka Inventors Commission",
    date: "Oct 2018",
    image: "sahasak-nimavum-2018-bronze-applied-science.png",
  },
  {
    title: "All Island School Inventors' Competition — Bronze Medal",
    issuer: "Sri Lanka Association for the Advancement of Science (SLAAS)",
    date: "Dec 2017",
    image: "slaas-inventors-2017-bronze.png",
  },
  {
    title: "Green Innovation 2017 — 2nd Place",
    issuer: "Faculty of Science, University of Kelaniya",
    date: "Oct 2017",
    image: "green-innovation-2017-2nd-place.png",
  },
  {
    title: "Green Innovation 2017 — Certificate of Participation",
    issuer: "Faculty of Science, University of Kelaniya",
    date: "Oct 2017",
    image: "green-innovation-2017-participation.png",
  },
];

export const references = [
  {
    name: "Dr. Sulochana Sooriyaarachchi",
    role: "Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka",
    email: "sulochanas@cse.mrt.ac.lk",
  },
  {
    name: "Dr. Kutila Gunasekara",
    role: "Senior Lecturer, Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka",
    email: "kutila@cse.mrt.ac.lk",
  },
];
