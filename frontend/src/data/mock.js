// Mock data for Diksha Bidikar's Portfolio

export const personalInfo = {
  name: "Diksha Bidikar",
  title: "Data Scientist | Machine Learning Engineer",
  location: "Houston, TX",
  email: "bidikar.diksha@gmail.com",
  phone: "+1 (832) 837-0310",
  linkedin: "https://www.linkedin.com/in/diksha-bidikar/",
  resumeUrl: "https://customer-assets.emergentagent.com/job_6949bfdb-4a39-4643-918d-e30ce20a5735/artifacts/vfqj2plj_Diksha_Bidikar__Resume.pdf",
  bio: "Data Science graduate from Rice University with 3+ years of experience in machine learning, deep learning, and full-stack development. Passionate about solving real-world problems through data-driven approaches, particularly in healthcare and environmental safety.",
  tagline: "Transforming Data into Actionable Insights"
};

export const education = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "Rice University",
    location: "Houston, TX",
    period: "Graduated May 2025",
    gpa: "3.7",
    description: "Advanced coursework in machine learning, deep learning, statistical analysis, and big data technologies."
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "Visvesvaraya Technological University",
    location: "India",
    period: "Graduated June 2018",
    gpa: "",
    description: "Foundation in software engineering, algorithms, databases, and web development."
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Consultant",
    company: "Infosys Limited",
    location: "Pune, India",
    period: "Apr 2021 - May 2022",
    description: [
      "Collaborated with business stakeholders and product owners to gather requirements and translate them into technical specifications, ensuring alignment between client expectations and development outcomes.",
      "Designed and implemented responsive front-end interfaces using React.js, HTML, CSS, and JavaScript for enterprise-level client portals, improving user engagement.",
      "Led cross-functional team communications to deliver high-quality software solutions on time."
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Infogen Labs",
    location: "Pune, India",
    period: "Jun 2019 - Mar 2021",
    description: [
      "Assisted in designing and implementing the database structure in MySQL, improving data organization and enabling faster backend queries.",
      "Programmed a Python script to parse email reports, convert JSON to CSV, and upload to AWS S3, reducing manual work by 70% and enabling timely, actionable insights for business teams.",
      "Created React-based web interfaces and integrated Xsolla payment gateway, enhancing purchase flow and improving user experience on a multi-user client-facing platform."
    ]
  },
  {
    id: 3,
    title: "Technical Associate",
    company: "Spurtree Technologies",
    location: "Bangalore, India",
    period: "Oct 2018 - May 2019",
    description: [
      "Conducted large-scale data analysis on 80,000+ healthcare records using Python and Scrapy, extracting critical patient and treatment data to enable improved insights into healthcare trends and outcomes.",
      "Managed and secured large healthcare datasets in MongoDB, supporting scalable analytics.",
      "Developed and documented RESTful APIs using Swagger for seamless healthcare data integration."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "InstaText: Deep Learning for Text Extraction",
    description: "Designed and implemented a deep learning pipeline leveraging Optical Character Recognition (OCR) and a transformer-based model (DONUT) for accurate text recognition from diverse image datasets.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OCR", "DONUT", "CNN"],
    achievements: [
      "Developed a CNN-based classifier to route images to the most effective models based on complexity",
      "Improved accuracy from 56% to 81%",
      "Enhanced document digitalization and accessibility for complex layouts"
    ],
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzY4NDA5MTg0fDA&ixlib=rb-4.1.0&q=85"
  },
  {
    id: 2,
    title: "Fault Detection in Centrifugal Pumps",
    description: "Applied Machine Learning Models (Logistic Regression, SVM, KNN, K-means, and DBSCAN) to identify faults and enhance the efficiency of centrifugal pumps.",
    technologies: ["Python", "Scikit-learn", "SVM", "KNN", "K-means", "DBSCAN"],
    achievements: [
      "Optimized model accuracy from 61% to 80% through advanced hyperparameter tuning",
      "Reduced breakdown risks, saving millions of dollars for the process industry",
      "Implemented real-time monitoring and prediction system"
    ],
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
  },
  {
    id: 3,
    title: "Drinking Water Potability Prediction",
    description: "Built Machine Learning models to predict potable water using real-world datasets, enabling early identification of unsafe drinking water sources.",
    technologies: ["Python", "Random Forest", "Scikit-learn", "Pandas", "NumPy"],
    achievements: [
      "Achieved 68% accuracy with Random Forest after cross-validation and tuning",
      "Enabled early identification of unsafe drinking water sources",
      "Supported scalable, data-driven approaches to public health and environmental safety"
    ],
    image: "https://images.pexels.com/photos/35471391/pexels-photo-35471391.jpeg"
  }
];

export const skills = {
  "Programming Languages": ["Python", "R", "SQL", "JavaScript"],
  "Machine Learning & AI": ["Scikit-learn", "PyTorch", "TensorFlow", "OCR", "CNNs", "Transformer Models"],
  "Web Development": ["React.js", "Node.js", "Express", "HTML5", "CSS3", "Bootstrap"],
  "Data Tools": ["NumPy", "Pandas", "PySpark", "Spark"],
  "Databases": ["MongoDB", "MySQL"],
  "Cloud & DevOps": ["AWS", "S3"],
  "Visualization": ["Tableau", "PowerBI", "Plotly", "Matplotlib"],
  "Other Tools": ["Scrapy", "Swagger", "Git", "Excel"]
};

export const achievements = [
  "Improved InstaText accuracy from 56% to 81% through CNN-based classifier development",
  "Saved millions of dollars for the process industry by reducing breakdown risks in centrifugal pumps",
  "Reduced manual work by 70% through Python scripting for email report processing",
  "Achieved 68% accuracy in predicting drinking water potability with Random Forest",
  "Enabled improved user engagement on enterprise-level client portals"
];