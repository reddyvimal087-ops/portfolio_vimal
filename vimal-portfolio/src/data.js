import { Code2, Server, LayoutTemplate, Database, Wrench } from 'lucide-react'

// All content comes from the resume. Add real URLs where marked `null`
// and the matching buttons will become live links automatically.
export const profile = {
  name: 'Vimal Reddy Pannala',
  title: 'Python Full Stack Developer | AI/ML Enthusiast',
  location: 'Hyderabad, Telangana, India',
  email: 'reddyvimal087@gmail.com',
  phone: '+91 6302222153',
  phoneHref: 'tel:+916302222153',
  linkedin: 'https://linkedin.com/in/vimalreddy-pannala',
  github: 'https://github.com/reddyvimal087-ops',
  resume: '/Vimal_Reddy_Pannala_Resume.pdf',
  photo: '/vimal_profile_pic.jpeg', // e.g. '/profile.jpg' after adding the image to /public
}

export const navLinks = [
  ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['education', 'Education'], ['achievements', 'Achievements'], ['contact', 'Contact'],
]

export const skills = [
  { title: 'Programming Languages', icon: Code2, items: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { title: 'Backend Development', icon: Server, items: ['Django', 'Django REST Framework', 'Flask', 'FastAPI', 'RESTful APIs'] },
  { title: 'Frontend Development', icon: LayoutTemplate, items: ['React.js', 'HTML', 'CSS', 'JavaScript'] },
  { title: 'Databases', icon: Database, items: ['MySQL', 'SQLite', 'MongoDB', 'Database Design'] },
  { title: 'Tools & Version Control', icon: Wrench, items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
]

export const projects = [
  {
    id: 'olms',
    short: 'OLMS',
    title: 'OLMS: Offer Letter Management System',
    description: 'A web application that automates creating, approving, and sending offer letters to candidates.',
    tech: ['Python', 'Django', 'Django REST Framework', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git'],
    features: [
      'Role-based authentication for Admin, HR, and Candidate',
      'Secure login and permission control',
      'Candidate record management',
      'Offer letter template management',
      'CRUD operations',
      'Automated PDF offer letter generation',
      'Email notifications',
      'Offer status tracking',
      'Relational database design',
      'RESTful API integration',
    ],
    github: null,
    demo: null,
  },
  {
    id: 'recommender',
    short: 'Recommender',
    title: 'Multi-Modal Product Recommendation System',
    description: 'A recommendation engine that combines numerical, categorical, and text features (price, brand, and description) to suggest relevant products.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TF-IDF', 'Sentence Embeddings', 'Flask/FastAPI', 'React.js', 'SQL'],
    features: [
      'Product price feature processing',
      'Brand encoding',
      'Product description processing',
      'Multi-modal feature fusion',
      'Product similarity computation',
      'Recommendation model development',
      'Precision@K and Recall@K evaluation',
      'REST API integration',
      'Interactive product search interface',
    ],
    github: null,
    demo: null,
  },
  {
    id: 'telemetry',
    short: 'Telemetry',
    title: 'Character-Level Telemetry De-Noising and Mission Outcome Profiling',
    description: 'A deep learning pipeline that cleans noisy character-level telemetry text and predicts final mission outcomes.',
    tech: ['Python', 'PyTorch/TensorFlow', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    features: [
      'Character-level text de-noising',
      'Restoration of corrupted telemetry text',
      'Data preprocessing and tokenization',
      'Deep learning model development',
      'Mission outcome classification',
      'Accuracy and F1-score evaluation',
      'Loss and accuracy visualization',
    ],
    github: null,
    demo: null,
  },
]
