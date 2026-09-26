// All site copy lives here. Edit this file to update content; components only render it.
// Nothing in this file should be added unless it can be verified from the CV or from
// information supplied by Neyamul directly.

export const person = {
  name: 'Neyamul Islam',
  role: 'AI Researcher | Deep Learning Engineer',
  eyebrow: 'AI Researcher · Deep Learning Engineer',
  intro:
    'Final-year Computer Science and Engineering student working at the intersection of Deep Learning, Explainable AI, Medical Imaging, Computer Vision, and Federated Learning.',
  // Wording kept close to the CV summary.
  about:
    'I am a final-year Computer Science and Engineering student specializing in Deep Learning, Explainable AI (XAI), Medical Image Analysis, and Computer Vision. I am a first-author IEEE published researcher, and I am looking for research opportunities in AI and medical imaging.',
  signals: ['Deep Learning', 'Medical Imaging', 'Explainable AI', 'Federated Learning'],
}

export const links = {
  email: 'neyamul.nehal@gmail.com',
  // WhatsApp: international format, digits only. Shown as +880 1738-062029.
  whatsappNumber: '8801738062029',
  whatsappDisplay: '+880 1738-062029',
  whatsappMessage: "Hi Neyamul, I came across your portfolio and I'd like to connect.",
  github: 'https://github.com/nehal-0407',
  linkedin: 'https://linkedin.com/in/neyamul-islam-45b577404',
  scholar: 'https://scholar.google.com/citations?hl=en&user=FMlWyLoAAAAJ',
  cv: '/resume.pdf',
  cvDownloadName: 'Neyamul-Islam-CV.pdf',
}

export const education = {
  degree: 'B.Sc. in Computer Science and Engineering',
  institution: 'Khwaja Yunus Ali University',
  // NOTE: the uploaded CV lists 3.53. 3.50 is the value supplied in the redesign brief.
  // Keep this in sync with the CV before deploying.
  cgpa: '3.50 / 4',
  years: '2022–2026',
}

export const interests = [
  'Machine Learning',
  'Federated Learning',
  'Deep Learning',
  'Computer Vision',
  'AI in Medical Imaging',
  'Data Analysis',
]

export const skills = [
  { group: 'Programming & frameworks', items: ['Python', 'Java', 'C', 'C++'] },
  {
    group: 'Machine learning & AI',
    items: [
      'PyTorch',
      'Computer Vision',
      'CNN',
      'Vision Transformers',
      'Explainable AI',
      'Grad-CAM',
      'Federated Learning',
      'Image Processing',
    ],
  },
  { group: 'Data handling & visualization', items: ['Pandas', 'NumPy', 'MySQL', 'Matplotlib'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'] },
]

// status: 'published' | 'accepted'
// venue: null means the venue has not been supplied yet; it is simply not shown.
export const publications = [
  {
    id: 1,
    title:
      'OvFusionX-Net: An Explainable Hybrid Deep Learning Model for Early-Stage Ovarian Cancer Classification',
    authorPosition: 'First author',
    status: 'published',
    statusLabel: 'Published in IEEE',
    venue:
      '2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN 2026)',
    doi: 'https://doi.org/10.1109/QPAIN69676.2026.11546529',
    summary:
      'An explainable hybrid deep learning architecture for early-stage ovarian cancer detection, with Grad-CAM visualizations of the image regions behind each prediction.',
    details: ['Reported classification accuracy: 98.48%.', 'Integrated Grad-CAM interpretability visualizations.'],
  },
  {
    id: 2,
    title: 'BeanXNet: A Deep Hybrid CNN Approach for Bean Leaf Disease Classification with Explainable AI',
    authorPosition: 'Second author',
    status: 'published',
    statusLabel: 'Published',
    venue: null,
    summary: null,
    details: [],
  },
  {
    id: 3,
    title:
      'HybridCNN: An Attention-Enhanced Explainable Deep Learning approach for Multi-Class Lung Disease Classification from Chest X-Ray Images',
    authorPosition: 'First author',
    status: 'accepted',
    statusLabel: 'Accepted',
    venue: null,
    summary:
      'An attention-enhanced deep learning framework for multi-class respiratory disease classification from chest X-ray images.',
    details: ['Trained and evaluated with a 5-fold cross-validation pipeline.'],
  },
  {
    id: 4,
    title: 'Breast Cancer Classification via Federated CNN-GRU-Attention Learning with Explainability',
    authorPosition: 'Fourth author',
    status: 'accepted',
    statusLabel: 'Accepted',
    venue:
      'The 12th International Exchange and Innovation Conference on Engineering & Sciences (IEICES 2026)',
    summary:
      'Built and optimized the deep learning pipeline for breast cancer classification in a federated setting.',
    details: [
      'Developed the federated CNN-GRU-Attention architecture.',
      'Contributed to training, evaluation, and explainability analysis.',
      'Analysed model performance with accuracy, F1-score, and AUC-ROC, and interpreted predictions with SHAP and LIME.',
    ],
  },
  {
    id: 5,
    title:
      'ARAN: Attention-Residual Adaptive Network for Federated Melanoma Detection with Gradient-Based Explainability',
    authorPosition: 'Third author',
    status: 'accepted',
    statusLabel: 'Accepted',
    venue:
      'The 12th International Exchange and Innovation Conference on Engineering & Sciences (IEICES 2026)',
    summary: 'Built the ARAN model for melanoma detection in a federated learning setting.',
    details: [
      'Contributed to model design: EfficientNet-B0 backbone, attention modules, loss optimization, and the explainability workflow.',
      'Performed model training, validation, and performance benchmarking.',
      'Carried out Grad-CAM++ and other XAI-based interpretation.',
    ],
  },
]

// Research threads that group the publications above. Each thread only restates
// what the listed papers already contain, so nothing here adds new claims.
export const researchThreads = [
  {
    title: 'Explainable medical image classification',
    text: 'Hybrid and attention-based CNNs for diagnostic imaging, paired with gradient-based attribution so a prediction can be checked against the image regions that drove it. Applied to ovarian cancer images and multi-class chest X-ray classification.',
    methods: ['Hybrid CNN', 'Attention', 'Grad-CAM', '5-fold CV'],
    papers: [1, 3],
  },
  {
    title: 'Federated learning for medical imaging',
    text: 'Training diagnostic models across separate data holders without pooling images, with explainability kept in the loop. Work covers breast cancer classification and melanoma detection.',
    methods: ['Federated learning', 'EfficientNet-B0', 'CNN-GRU-Attention', 'SHAP', 'LIME', 'Grad-CAM++'],
    papers: [4, 5],
  },
  {
    title: 'Plant disease recognition',
    text: 'Hybrid CNN classification of bean leaf disease with explainable AI, carrying the same interpretability approach outside medicine.',
    methods: ['Hybrid CNN', 'Explainable AI'],
    papers: [2],
  },
]

export const conferences = [
  {
    name: '2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking',
    short: 'IEEE QPAIN 2026',
    host: 'Chittagong University of Engineering & Technology (CUET)',
    role: 'Presenter',
  },
  {
    name: 'International Conference on Electrical, Computer and Communication Technologies',
    short: 'ECCT 2026',
    host: 'Dhaka International University (DIU)',
    role: 'Presented paper',
  },
  {
    name: '2nd International Conference on Frontiers in Science: Innovation & Technology for Greener Industry',
    short: '2nd ICFS:ITGI',
    host: 'Bangladesh University of Engineering and Technology (BUET)',
    role: 'Presenter',
  },
  {
    name: 'International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure 2026',
    short: 'PECCI 2026',
    host: 'Pabna University of Science & Technology (PUST)',
    role: 'Presenter',
  },
]

// previewPdf: set to a path under /public (e.g. '/previews/ibm-hr-dashboard.pdf')
// once the file is added. While null, a placeholder is shown instead of a link.
export const featuredProjects = [
  {
    title: 'DESHI-CART BD',
    subtitle: 'Sales & profitability analytics dashboard',
    text: 'An interactive HTML dashboard for sales and profitability analysis. The data was cleaned and prepared in Python before being visualized.',
    tools: ['Python', 'HTML'],
    demo: 'https://nehal-0407.github.io/DESHI-CART-BD/',
    repo: 'https://github.com/nehal-0407/DESHI-CART-BD',
  },
  {
    title: 'IBM HR Analytics',
    subtitle: 'Employee attrition & performance dashboard',
    text: 'An HR analytics dashboard built in Power BI, with the source data cleaned and prepared in Python.',
    tools: ['Power BI', 'Python'],
    demo: null,
    repo: 'https://github.com/nehal-0407/IBM-HR-Analytics-Employee-Attrition-Performance',
    previewPdf: null,
  },
]

export const otherProjects = [
  {
    title: 'KYAU Tuition App',
    role: 'UI/UX designer',
    text: 'Designed the UI/UX with clean typography, negative space, and short workflows that connect university students with retake courses.',
    tools: [],
    repo: null,
  },
  {
    title: 'Online Marketplace',
    role: 'UI/UX designer & documentation lead',
    text: 'Designed user-centered wireframes and interfaces for a full-stack marketplace, prepared the SRS, SDD, and project documentation, and worked with the development team across the development lifecycle.',
    tools: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: 'https://github.com/nehal-0407/online-market-place',
  },
]

export const specialization = {
  title: 'Deep Learning for Healthcare Specialization',
  provider: 'Coursera',
  text: 'Completed the specialization, strengthening my understanding of health data analysis, neural network architectures, and deep learning applications in healthcare.',
  courses: [
    'Health Data Science Foundation',
    'Deep Learning Methods for Healthcare',
    'Advanced Deep Learning Methods for Healthcare',
  ],
  verify: 'https://lnkd.in/gBv7t-8C',
}

export const courses = [
  { title: 'Data Science Fundamentals with Python and SQL Specialization', provider: 'Coursera' },
  { title: 'Data Science and Machine Learning Zero to Mastery', provider: 'Skill Jobs BD' },
]

export const achievements = [
  'Intra Department Quiz Contest Champion',
  'Best Performer, Workshop on Next-Gen Healthcare AI: Privacy-Preserving Smart Systems',
  'Paper presenter, QPAIN 2026',
  'Paper presenter, ECCT 2026',
  'Participated in the National Hackathon',
]

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'research', label: 'Research' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]
