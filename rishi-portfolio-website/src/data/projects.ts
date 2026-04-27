export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LokSetu – Civic Issue Reporting Platform",
    description:
      "A MERN-based civic-tech platform enabling citizens to report local issues using image proof and geolocation with an upvote-based escalation workflow.",
    longDescription:
      "LokSetu is a MERN-based civic-tech platform that enables citizens to report local issues such as potholes, broken streetlights, garbage dumps, and water leakage using image proof and geolocation. It promotes transparency and community participation through an upvote-based escalation workflow.",
    features: [
      "JWT-based authentication & protected routes",
      "Image upload with Cloudinary integration",
      "Geolocation-based issue reporting",
      "Upvote-based automatic escalation system",
      "Admin dashboard with issue status management",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    liveUrl: "https://loksetu-six.vercel.app/",
    githubUrl: "https://github.com/RishiRajLimshakre/loksetu",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "MuscleMap – Gym Progress Tracking App",
    description:
      "A full-stack workout tracking application that allows users to securely log exercises, monitor progress, and manage workout history with persistent data storage.",
    longDescription:
      "MuscleMap is a full-stack workout tracking application that allows users to securely log exercises, monitor progress, and manage workout history with authentication and persistent data storage.",
    features: [
      "Secure user authentication with JWT",
      "Workout logging with sets, reps, and weight tracking",
      "Workout history grouped by date",
      "Responsive UI across devices",
      "MongoDB data persistence",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Render",
    ],
    liveUrl: "https://musclemap-r6xp.onrender.com/",
    githubUrl: "https://github.com/RishiRajLimshakre/MuscleMap",
    category: "Full Stack",
    featured: true,
  },
];

export default projects;
