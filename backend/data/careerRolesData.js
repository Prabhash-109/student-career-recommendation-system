export const careerRolesData = [
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    domain: 'Web Development',
    shortDescription: 'Build beautiful, interactive, high-performance web interfaces and user experiences.',
    detailedDescription: 'Frontend Developers specialize in crafting visually engaging, responsive, and intuitive digital interfaces. They transform UI/UX designs into modular, performant client-side applications using modern JavaScript frameworks, state management, and API integrations.',
    iconName: 'Layout',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    avgSalary: {
      freshers: '₹5.5 - 10 LPA / $68k - 90k',
      midLevel: '₹12 - 24 LPA / $105k - 140k',
      senior: '₹26 - 55+ LPA / $150k - 210k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+20% (High hiring volume across startups & enterprises)',
    difficultyLevel: 'Beginner Friendly',
    keyResponsibilities: [
      'Develop dynamic, accessible, and responsive user interfaces using React/Next.js',
      'Optimize client-side rendering speed, Core Web Vitals, and bundle sizes',
      'Integrate RESTful and GraphQL APIs seamlessly with client-side state',
      'Ensure cross-browser compatibility and responsive breakpoint fidelity',
      'Implement interactive micro-animations and intuitive navigation flows'
    ],
    matchedJobTitles: ['Frontend Engineer', 'React Developer', 'UI Engineer', 'Client-Side Web Developer'],
    topInterviewTopics: ['JavaScript Event Loop & Closures', 'React Hooks & Virtual DOM', 'CSS Flexbox/Grid & Layouts', 'State Management (Redux/Zustand)', 'Web Performance & Lazy Loading'],
    requiredSkills: [
      { name: 'HTML5', category: 'Frontend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'CSS3', category: 'Frontend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'JavaScript', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'React', category: 'Frontend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'Git & GitHub', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Responsive Web Design', category: 'Frontend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Tailwind CSS', category: 'Frontend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'TypeScript', category: 'Programming Languages', importance: 'Core', minProficiency: 'Beginner', weight: 1.1 },
      { name: 'Next.js', category: 'Frontend', importance: 'Core', minProficiency: 'Beginner', weight: 1.1 },
      { name: 'RESTful APIs', category: 'Backend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Redux Toolkit', category: 'Frontend', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.8 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Web Fundamentals & Modern JavaScript',
        focusArea: 'HTML5, Modern CSS Layouts, JS ES6+ Mastery',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fe-t1', title: 'Master Semantic HTML5 & Modern CSS3 Flex/Grid', description: 'Build pixel-perfect responsive landing pages using modern semantic tags and flexbox/CSS grid.', skillName: 'HTML5', estimatedHours: 12 },
          { taskId: 'fe-t2', title: 'JavaScript ES6+, DOM Manipulation & Event Handling', description: 'Deep dive into closures, promises, async/await, array methods, and event delegation.', skillName: 'JavaScript', estimatedHours: 18 },
          { taskId: 'fe-t3', title: 'Git Version Control & GitHub Workflows', description: 'Learn branch management, pull requests, merge conflict resolution, and repo structuring.', skillName: 'Git & GitHub', estimatedHours: 6 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Modern React & Styling Architecture',
        focusArea: 'Component Architecture, Hooks, State & Tailwind CSS',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fe-t4', title: 'React Core Architecture & Hooks', description: 'Master useState, useEffect, useMemo, useCallback, custom hooks, and component lifecycle.', skillName: 'React', estimatedHours: 20 },
          { taskId: 'fe-t5', title: 'Utility-First Styling with Tailwind CSS', description: 'Build rapid, responsive, and animated UI components with modern design tokens.', skillName: 'Tailwind CSS', estimatedHours: 10 },
          { taskId: 'fe-t6', title: 'Client-Side Routing & REST API Integration', description: 'Implement React Router v7, Axios data fetching, loading states, error boundaries, and debounce.', skillName: 'RESTful APIs', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Advanced Frontend & TypeScript',
        focusArea: 'Type Safety, Next.js Full Stack & Global State',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fe-t7', title: 'TypeScript for React Developers', description: 'Add strong typing to React props, state, API responses, and custom event handlers.', skillName: 'TypeScript', estimatedHours: 16 },
          { taskId: 'fe-t8', title: 'Next.js App Router, SSR & SSG', description: 'Build SEO-optimized web apps with Server Components, dynamic routes, and API routes.', skillName: 'Next.js', estimatedHours: 18 },
          { taskId: 'fe-t9', title: 'Global State Management with Redux Toolkit / Zustand', description: 'Manage complex application state, slices, selectors, and persistent client cache.', skillName: 'Redux Toolkit', estimatedHours: 12 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Production Capstone & Interview Readiness',
        focusArea: 'Full Portfolio Showcase, Performance & Mock Interviews',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fe-t10', title: 'Build Production Capstone SaaS Dashboard', description: 'Create an end-to-end dashboard with dark mode, real-time charts, auth, and Vercel deployment.', skillName: 'Next.js', estimatedHours: 25 },
          { taskId: 'fe-t11', title: 'Frontend System Design & Performance Optimization', description: 'Master code splitting, image optimization, memoization, and Core Web Vitals profiling.', skillName: 'Responsive Web Design', estimatedHours: 12 },
        ]
      }
    ]
  },
  {
    title: 'Full Stack Developer',
    slug: 'full-stack-developer',
    domain: 'Web Development',
    shortDescription: 'Engineer end-to-end web applications covering responsive frontend and scalable backend systems.',
    detailedDescription: 'Full Stack Developers bridge the gap between user interface and backend architecture. They design database schemas, write robust RESTful/GraphQL APIs, implement security and authentication, and deliver fluid client-side interfaces.',
    iconName: 'Layers',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    avgSalary: {
      freshers: '₹6 - 14 LPA / $75k - 100k',
      midLevel: '₹15 - 32 LPA / $115k - 155k',
      senior: '₹32 - 70+ LPA / $165k - 230k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+24% (Most sought-after role by startups & scaleups)',
    difficultyLevel: 'Intermediate',
    keyResponsibilities: [
      'Architect full-stack web applications from database layer to UI components',
      'Design RESTful APIs, business logic controllers, and database schema relations',
      'Implement secure authentication (JWT, OAuth, role-based access control)',
      'Optimize database queries, indexing, and Redis caching layers',
      'Deploy applications to cloud platforms with CI/CD automation'
    ],
    matchedJobTitles: ['MERN Stack Developer', 'Full Stack Software Engineer', 'Web Applications Engineer'],
    topInterviewTopics: ['RESTful API Design & Status Codes', 'MongoDB vs SQL Schema Tradeoffs', 'JWT Auth & Security Headers', 'React Performance & State', 'Async JavaScript & Event Loop'],
    requiredSkills: [
      { name: 'JavaScript', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'React', category: 'Frontend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Node.js', category: 'Backend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'Express.js', category: 'Backend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'MongoDB', category: 'Databases', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'RESTful APIs', category: 'Backend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'HTML5', category: 'Frontend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'CSS3', category: 'Frontend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Authentication & JWT', category: 'Backend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Git & GitHub', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'TypeScript', category: 'Programming Languages', importance: 'Core', minProficiency: 'Beginner', weight: 1.1 },
      { name: 'SQL', category: 'Programming Languages', importance: 'Core', minProficiency: 'Beginner', weight: 1.0 },
      { name: 'Docker', category: 'Cloud & DevOps', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.9 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Frontend & UI Mastery',
        focusArea: 'React, State Management & Modern Web UIs',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fs-t1', title: 'React Hooks, Component Architecture & Tailwind', description: 'Build component hierarchies, reusable UI kits, and stateful interfaces.', skillName: 'React', estimatedHours: 20 },
          { taskId: 'fs-t2', title: 'TypeScript Integration for Full Stack', description: 'Configure TypeScript compiler, interfaces, generics, and shared DTO types.', skillName: 'TypeScript', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Backend Architecture & Databases',
        focusArea: 'Node.js, Express, MongoDB & Relational Modeling',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fs-t3', title: 'Node.js Event Loop & Express Server Setup', description: 'Build scalable routing, error middlewares, rate limiting, and request validation.', skillName: 'Express.js', estimatedHours: 18 },
          { taskId: 'fs-t4', title: 'MongoDB & Mongoose Schema Design', description: 'Create normalized & denormalized data models, aggregations, indexing, and validation.', skillName: 'MongoDB', estimatedHours: 16 },
          { taskId: 'fs-t5', title: 'Secure Authentication & JWT Middleware', description: 'Implement user registration, bcrypt hashing, JWT cookie/header verification, and RBAC.', skillName: 'Authentication & JWT', estimatedHours: 12 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Advanced Full Stack Integration & DevOps',
        focusArea: 'State Sync, SQL, Caching & Containerization',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fs-t6', title: 'Relational Database Modeling with PostgreSQL / SQL', description: 'Write complex SQL queries, JOINs, transactions, and foreign key relations.', skillName: 'SQL', estimatedHours: 14 },
          { taskId: 'fs-t7', title: 'Containerization with Docker & Deployment', description: 'Write Dockerfiles, docker-compose for multi-service setup, and deploy to Render/Vercel.', skillName: 'Docker', estimatedHours: 12 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: End-to-End Capstone Project & Hiring Prep',
        focusArea: 'Complete SaaS MVP & Full Stack Technical Interviews',
        durationWeeks: 4,
        tasks: [
          { taskId: 'fs-t8', title: 'Build Full Stack SaaS with Payments & AI Copilot', description: 'Build an end-to-end platform featuring auth, analytics, payment gateway, and AI advising.', skillName: 'Node.js', estimatedHours: 30 },
          { taskId: 'fs-t9', title: 'Full Stack System Design & Mock Interviews', description: 'Prepare for system design, scalability questions, concurrency, and behavioral interviews.', skillName: 'Data Structures & Algorithms (DSA)', estimatedHours: 15 },
        ]
      }
    ]
  },
  {
    title: 'AI / Machine Learning Engineer',
    slug: 'ai-ml-engineer',
    domain: 'Artificial Intelligence',
    shortDescription: 'Develop, train, fine-tune, and deploy machine learning and generative AI models into production.',
    detailedDescription: 'AI and Machine Learning Engineers create intelligent systems capable of learning from vast amounts of data. They design neural network architectures, train predictive models, fine-tune Large Language Models (LLMs), and deploy high-throughput inference endpoints.',
    iconName: 'Brain',
    gradient: 'from-violet-600 via-fuchsia-600 to-pink-600',
    avgSalary: {
      freshers: '₹8 - 18 LPA / $90k - 125k',
      midLevel: '₹20 - 45 LPA / $140k - 190k',
      senior: '₹48 - 100+ LPA / $200k - 320k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+38% (Fastest growing domain in modern computing)',
    difficultyLevel: 'Advanced',
    keyResponsibilities: [
      'Design, train, and evaluate supervised and unsupervised machine learning models',
      'Build deep learning architectures using PyTorch and TensorFlow',
      'Develop LLM pipelines, RAG (Retrieval Augmented Generation), and agentic workflows',
      'Preprocess large structured and unstructured datasets, handling embeddings and vectors',
      'Deploy scalable ML inference APIs using FastAPI and cloud containers'
    ],
    matchedJobTitles: ['Machine Learning Engineer', 'AI Research Engineer', 'Applied ML Specialist', 'LLM Engineer'],
    topInterviewTopics: ['Gradient Descent & Backpropagation', 'Overfitting/Underfitting & Regularization', 'Transformers & Attention Mechanisms', 'RAG Architecture & Vector Databases', 'Model Evaluation Metrics (Precision, Recall, F1, ROC-AUC)'],
    requiredSkills: [
      { name: 'Python', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Advanced', weight: 1.6 },
      { name: 'Machine Learning Fundamentals', category: 'AI & Machine Learning', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'Deep Learning & Neural Networks', category: 'AI & Machine Learning', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'PyTorch', category: 'AI & Machine Learning', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Pandas & NumPy', category: 'Data & Analytics', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Scikit-Learn', category: 'AI & Machine Learning', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Probability & Applied Statistics', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Large Language Models (LLMs) & Prompt Engineering', category: 'AI & Machine Learning', importance: 'Core', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'FastAPI', category: 'Backend', importance: 'Core', minProficiency: 'Beginner', weight: 1.0 },
      { name: 'SQL', category: 'Programming Languages', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Docker', category: 'Cloud & DevOps', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.9 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Mathematics & Python for Machine Learning',
        focusArea: 'Linear Algebra, Calculus, Statistics, NumPy & Pandas',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ml-t1', title: 'Advanced Python, NumPy & Vectorized Computation', description: 'Master array broadcasting, matrix math, and high-performance Python data structures.', skillName: 'Pandas & NumPy', estimatedHours: 16 },
          { taskId: 'ml-t2', title: 'Applied Probability, Linear Algebra & Statistics for AI', description: 'Understand eigenvalues, gradients, probability distributions, hypothesis testing.', skillName: 'Probability & Applied Statistics', estimatedHours: 18 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Classical Machine Learning & Scikit-Learn',
        focusArea: 'Supervised/Unsupervised Algorithms & Feature Engineering',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ml-t3', title: 'Master Regression, Classification & Clustering Algorithms', description: 'Implement linear/logistic regression, Decision Trees, Random Forests, XGBoost, and K-Means.', skillName: 'Machine Learning Fundamentals', estimatedHours: 22 },
          { taskId: 'ml-t4', title: 'Model Evaluation, Cross-Validation & Hyperparameter Tuning', description: 'Master confusion matrices, precision/recall tradeoffs, GridSearch, and pipeline abstractions.', skillName: 'Scikit-Learn', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Deep Learning & PyTorch',
        focusArea: 'Neural Networks, CNNs, RNNs & Transformers',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ml-t5', title: 'PyTorch Tensors, Autograd & Neural Network Training', description: 'Build Multi-Layer Perceptrons from scratch with loss functions, optimizers, and backprop.', skillName: 'PyTorch', estimatedHours: 24 },
          { taskId: 'ml-t6', title: 'Transformers & Large Language Model Fine-Tuning', description: 'Understand self-attention mechanism, BERT/GPT architectures, LoRA, and Hugging Face.', skillName: 'Large Language Models (LLMs) & Prompt Engineering', estimatedHours: 22 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: MLOps, API Serving & End-to-End Project',
        focusArea: 'Model Deployment, FastAPI, Vector DBs & Production RAG',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ml-t7', title: 'Build and Deploy a RAG Pipeline with FastAPI & Pinecone', description: 'Create an intelligent document retrieval agent using embeddings, vector search, and Gemini LLM.', skillName: 'FastAPI', estimatedHours: 25 },
          { taskId: 'ml-t8', title: 'ML System Design & Technical Interview Preparation', description: 'Study machine learning system design, data drift, latency optimization, and coding rounds.', skillName: 'Python', estimatedHours: 15 },
        ]
      }
    ]
  },
  {
    title: 'Data Scientist',
    slug: 'data-scientist',
    domain: 'Data Science & Analytics',
    shortDescription: 'Uncover deep data insights, build statistical models, and drive data-backed strategic decisions.',
    detailedDescription: 'Data Scientists combine domain expertise, programming skills, and statistical knowledge to extract actionable business value from complex unstructured data. They conduct experiments, build predictive models, and communicate insights through dashboards.',
    iconName: 'PieChart',
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    avgSalary: {
      freshers: '₹7 - 15 LPA / $80k - 110k',
      midLevel: '₹18 - 38 LPA / $125k - 165k',
      senior: '₹40 - 85+ LPA / $175k - 250k+',
    },
    marketDemand: 'Very High',
    growthRate: '+28% (Critical demand in finance, healthcare, e-commerce)',
    difficultyLevel: 'Intermediate',
    keyResponsibilities: [
      'Perform exploratory data analysis (EDA) on multi-gigabyte datasets',
      'Formulate statistical hypotheses and design robust A/B testing experiments',
      'Build predictive modeling pipelines using machine learning algorithms',
      'Create interactive executive dashboards and visual data storytelling reports',
      'Write optimized SQL queries for feature extraction from data warehouses'
    ],
    matchedJobTitles: ['Data Scientist', 'Decision Scientist', 'Quantitative Analyst', 'Applied Statistician'],
    topInterviewTopics: ['A/B Testing & Statistical Significance (p-values)', 'SQL Window Functions & CTEs', 'Feature Selection & Dimensionality Reduction', 'Predictive Modeling Tradeoffs', 'Data Storytelling & Business Metric Alignment'],
    requiredSkills: [
      { name: 'Python', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'SQL', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Advanced', weight: 1.5 },
      { name: 'Pandas & NumPy', category: 'Data & Analytics', importance: 'Critical', minProficiency: 'Advanced', weight: 1.4 },
      { name: 'Probability & Applied Statistics', category: 'Data & Analytics', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Machine Learning Fundamentals', category: 'AI & Machine Learning', importance: 'Core', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Exploratory Data Analysis (EDA)', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Advanced', weight: 1.3 },
      { name: 'Data Visualization (Matplotlib/Seaborn)', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Intermediate', weight: 1.1 },
      { name: 'Tableau', category: 'Data & Analytics', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.8 },
      { name: 'Power BI', category: 'Data & Analytics', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.8 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Python for Data Science & Advanced SQL',
        focusArea: 'Data Manipulation, Complex Queries & Wrangling',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ds-t1', title: 'Advanced SQL for Analytics: Window Functions & Subqueries', description: 'Write production-grade SQL queries with CTEs, partitions, aggregations, and performance joins.', skillName: 'SQL', estimatedHours: 20 },
          { taskId: 'ds-t2', title: 'Data Wrangling & Cleaning with Pandas', description: 'Handle missing values, outliers, datetime parsing, pivot tables, and multi-index dataframes.', skillName: 'Pandas & NumPy', estimatedHours: 18 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Statistics, Probability & A/B Testing',
        focusArea: 'Inferential Statistics, Distributions & Experimentation',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ds-t3', title: 'Inferential Statistics & Hypothesis Testing', description: 'Conduct t-tests, ANOVA, Chi-Square tests, and confidence interval calculations.', skillName: 'Probability & Applied Statistics', estimatedHours: 18 },
          { taskId: 'ds-t4', title: 'A/B Testing Experiment Design & Evaluation', description: 'Calculate sample sizes, statistical power, minimum detectable effects, and analyze results.', skillName: 'Probability & Applied Statistics', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Predictive Modeling & Storytelling',
        focusArea: 'Supervised Models, Feature Engineering & Dashboards',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ds-t5', title: 'Feature Engineering & Predictive Machine Learning', description: 'Implement feature scaling, encoding, XGBoost classification, and SHAP explainability.', skillName: 'Machine Learning Fundamentals', estimatedHours: 22 },
          { taskId: 'ds-t6', title: 'Data Storytelling with Seaborn & Power BI', description: 'Create dynamic analytical dashboards highlighting business trends and KPIs.', skillName: 'Data Visualization (Matplotlib/Seaborn)', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: End-to-End Business Case Studies & Portfolio',
        focusArea: 'Real-world Analytics Project & Case Study Interviews',
        durationWeeks: 4,
        tasks: [
          { taskId: 'ds-t7', title: 'Customer Churn & Revenue Forecasting Case Study', description: 'Build a complete predictive analytics pipeline predicting customer churn with executive summary.', skillName: 'Exploratory Data Analysis (EDA)', estimatedHours: 26 },
        ]
      }
    ]
  },
  {
    title: 'DevOps & Cloud Engineer',
    slug: 'devops-cloud-engineer',
    domain: 'Cloud & DevOps',
    shortDescription: 'Automate deployments, orchestrate cloud infrastructure, and maintain 99.99% system uptime.',
    detailedDescription: 'DevOps Engineers bridge software engineering and IT operations. They construct continuous integration/continuous deployment (CI/CD) pipelines, orchestrate Kubernetes clusters, provision Infrastructure as Code (Terraform), and monitor cloud health.',
    iconName: 'Cloud',
    gradient: 'from-cyan-600 via-blue-600 to-indigo-700',
    avgSalary: {
      freshers: '₹6.5 - 14 LPA / $80k - 105k',
      midLevel: '₹16 - 36 LPA / $120k - 165k',
      senior: '₹38 - 80+ LPA / $170k - 240k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+30% (Massive enterprise cloud migration)',
    difficultyLevel: 'Intermediate',
    keyResponsibilities: [
      'Design and manage automated CI/CD pipelines for zero-downtime deployments',
      'Containerize microservices with Docker and orchestrate with Kubernetes',
      'Provision and manage cloud infrastructure on AWS/GCP using Terraform (IaC)',
      'Configure logging, alerting, and observability (Prometheus, Grafana)',
      'Implement cloud security best practices and cost optimization'
    ],
    matchedJobTitles: ['Cloud Engineer', 'DevOps Specialist', 'Site Reliability Engineer (SRE)', 'Infrastructure Engineer'],
    topInterviewTopics: ['Docker Networking & Multi-Stage Builds', 'Kubernetes Pod Lifecycle & Deployments', 'CI/CD Pipeline Architecture', 'AWS Core Services (EC2, S3, IAM, VPC)', 'Linux Troubleshooting & Shell Scripting'],
    requiredSkills: [
      { name: 'Linux / Bash Scripting', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'Docker', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'AWS (Amazon Web Services)', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Git & GitHub', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'CI/CD Pipelines (GitHub Actions)', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Kubernetes', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Beginner', weight: 1.3 },
      { name: 'Terraform', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Beginner', weight: 1.2 },
      { name: 'Python', category: 'Programming Languages', importance: 'Core', minProficiency: 'Beginner', weight: 1.0 },
      { name: 'Computer Networks', category: 'Core Computer Science', importance: 'Core', minProficiency: 'Intermediate', weight: 1.1 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Linux Administration & Networking Fundamentals',
        focusArea: 'Bash Scripting, Permissions, SSH, DNS & Networking',
        durationWeeks: 4,
        tasks: [
          { taskId: 'do-t1', title: 'Linux Command Line & Bash Automation', description: 'Write automated shell scripts for system backups, log parsing, and user management.', skillName: 'Linux / Bash Scripting', estimatedHours: 18 },
          { taskId: 'do-t2', title: 'Computer Networking for Cloud: Subnets, DNS, HTTP/S', description: 'Master TCP/IP, CIDR blocks, VPC routing, load balancers, and firewall rules.', skillName: 'Computer Networks', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Containerization & Cloud Infrastructure (AWS)',
        focusArea: 'Docker Containers & Core AWS Architecture',
        durationWeeks: 4,
        tasks: [
          { taskId: 'do-t3', title: 'Docker Mastery & Container Optimization', description: 'Write multi-stage Dockerfiles, manage volume persistence, and configure docker-compose.', skillName: 'Docker', estimatedHours: 18 },
          { taskId: 'do-t4', title: 'AWS Core Services: EC2, S3, IAM & VPC', description: 'Deploy cloud VMs, configure IAM security policies, security groups, and object storage.', skillName: 'AWS (Amazon Web Services)', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: CI/CD Pipelines & Kubernetes Orchestration',
        focusArea: 'Automated Testing, GitHub Actions & K8s Clusters',
        durationWeeks: 4,
        tasks: [
          { taskId: 'do-t5', title: 'Automated CI/CD with GitHub Actions', description: 'Build automated pipelines that run linting, test suites, build Docker images, and push to ECR.', skillName: 'CI/CD Pipelines (GitHub Actions)', estimatedHours: 16 },
          { taskId: 'do-t6', title: 'Kubernetes Pods, Services & Ingress Controllers', description: 'Deploy microservice applications on local Minikube / EKS with rolling updates and auto-scaling.', skillName: 'Kubernetes', estimatedHours: 22 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: Infrastructure as Code (Terraform) & Capstone',
        focusArea: 'Terraform Automation & Production Cloud Setup',
        durationWeeks: 4,
        tasks: [
          { taskId: 'do-t7', title: 'Provision AWS Infrastructure with Terraform', description: 'Write modular Terraform templates for automated cloud infrastructure provisioning and state management.', skillName: 'Terraform', estimatedHours: 20 },
        ]
      }
    ]
  },
  {
    title: 'Cybersecurity Analyst',
    slug: 'cybersecurity-analyst',
    domain: 'Cybersecurity',
    shortDescription: 'Defend systems from cyber threats, discover vulnerabilities, and enforce enterprise digital security.',
    detailedDescription: 'Cybersecurity Analysts protect networks, applications, and cloud environments from cyberattacks. They perform ethical penetration testing, audit source code for OWASP vulnerabilities, analyze network packet logs, and architect zero-trust defense architectures.',
    iconName: 'Shield',
    gradient: 'from-rose-600 via-red-600 to-amber-600',
    avgSalary: {
      freshers: '₹6 - 13 LPA / $75k - 100k',
      midLevel: '₹15 - 34 LPA / $115k - 150k',
      senior: '₹35 - 75+ LPA / $165k - 230k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+32% (Massive global cybersecurity talent shortage)',
    difficultyLevel: 'Intermediate',
    keyResponsibilities: [
      'Perform security audits, vulnerability scans, and web penetration tests',
      'Analyze network traffic logs with Wireshark to detect intrusion attempts',
      'Audit web applications against the OWASP Top 10 security flaws (SQLi, XSS, CSRF)',
      'Implement cryptographic encryption standards and public key infrastructure (PKI)',
      'Respond to security incidents and formulate threat mitigation procedures'
    ],
    matchedJobTitles: ['Information Security Specialist', 'Ethical Hacker', 'SOC Analyst', 'Application Security Engineer'],
    topInterviewTopics: ['OWASP Top 10 Vulnerabilities & Remedies', 'Symmetric vs Asymmetric Cryptography', 'TCP 3-Way Handshake & Packet Inspection', 'Firewalls, IDS/IPS & SIEM Tools', 'Incident Response Lifecycle'],
    requiredSkills: [
      { name: 'Network Security Protocols', category: 'Cybersecurity', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'OWASP Top 10 Vulnerabilities', category: 'Cybersecurity', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.5 },
      { name: 'Linux / Bash Scripting', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Cryptography & Encryption', category: 'Cybersecurity', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Computer Networks', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Python', category: 'Programming Languages', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Ethical Hacking & Penetration Testing', category: 'Cybersecurity', importance: 'Core', minProficiency: 'Beginner', weight: 1.3 },
      { name: 'Wireshark & Packet Analysis', category: 'Cybersecurity', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 1.0 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Core Networking & Linux Security Foundations',
        focusArea: 'Network Protocols, Wireshark, Linux Hardening',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sec-t1', title: 'Deep Networking Protocols & Packet Inspection', description: 'Analyze ARP, DNS, TCP, UDP, TLS handshakes and inspect packets with Wireshark.', skillName: 'Network Security Protocols', estimatedHours: 18 },
          { taskId: 'sec-t2', title: 'Linux Security & Scripting for Penetration Testing', description: 'Learn permission models, sudo escalation risks, and write Python security automation scripts.', skillName: 'Linux / Bash Scripting', estimatedHours: 16 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Web Application Security & OWASP Top 10',
        focusArea: 'SQL Injection, XSS, CSRF, Broken Auth Prevention',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sec-t3', title: 'Master OWASP Top 10 Vulnerability Exploits & Defense', description: 'Test vulnerable web applications (DVWA) to exploit and patch SQLi, XSS, and SSRF flaws.', skillName: 'OWASP Top 10 Vulnerabilities', estimatedHours: 22 },
          { taskId: 'sec-t4', title: 'Applied Cryptography: AES, RSA, Hashing & PKI', description: 'Understand symmetric/asymmetric encryption, SHA-256 hashing, salting, and TLS certificates.', skillName: 'Cryptography & Encryption', estimatedHours: 14 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Ethical Hacking & Security Auditing',
        focusArea: 'Port Scanning, Burp Suite, Vulnerability Assessment',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sec-t5', title: 'Vulnerability Assessment with Nmap & Burp Suite', description: 'Perform authorized security scans, discover open ports, intercept HTTP requests, and analyze headers.', skillName: 'Ethical Hacking & Penetration Testing', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: SOC Analyst Capstone & Security Certification Prep',
        focusArea: 'Incident Response, SIEM Logs & Interview Scenarios',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sec-t6', title: 'SOC Incident Response Simulation & Report', description: 'Analyze breach logs, trace attacker vectors, create remediation steps, and simulate SOC analyst duties.', skillName: 'Network Security Protocols', estimatedHours: 22 },
        ]
      }
    ]
  },
  {
    title: 'Mobile App Developer',
    slug: 'mobile-app-developer',
    domain: 'Mobile App Development',
    shortDescription: 'Create fast, responsive cross-platform native mobile applications for iOS and Android.',
    detailedDescription: 'Mobile App Developers engineer fluid, touch-optimized applications that run natively on smartphones and tablets. Utilizing frameworks like React Native or Flutter, they build rich interfaces, integrate native device hardware (camera, GPS, notifications), and manage offline synchronization.',
    iconName: 'Smartphone',
    gradient: 'from-blue-600 via-sky-500 to-teal-400',
    avgSalary: {
      freshers: '₹5.5 - 12 LPA / $70k - 95k',
      midLevel: '₹14 - 28 LPA / $110k - 145k',
      senior: '₹30 - 65+ LPA / $155k - 215k+',
    },
    marketDemand: 'Very High',
    growthRate: '+21% (Continuous demand across consumer and B2B apps)',
    difficultyLevel: 'Intermediate',
    keyResponsibilities: [
      'Develop high-performance cross-platform iOS and Android mobile apps',
      'Integrate device native APIs including camera, push notifications, and geolocation',
      'Implement offline-first data caching and real-time state synchronization',
      'Optimize mobile render cycles, memory usage, and battery consumption',
      'Publish and manage application lifecycle on Google Play Store and Apple App Store'
    ],
    matchedJobTitles: ['React Native Developer', 'Flutter Developer', 'iOS/Android Engineer', 'Cross-Platform Mobile Engineer'],
    topInterviewTopics: ['React Native Bridge / New Architecture', 'State Management in Mobile', 'Offline Caching & AsyncStorage/SQLite', 'Push Notification Pipelines', 'App Store Deployment & Guidelines'],
    requiredSkills: [
      { name: 'JavaScript', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'React', category: 'Frontend', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'React Native', category: 'Mobile Development', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.6 },
      { name: 'TypeScript', category: 'Programming Languages', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'RESTful APIs', category: 'Backend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.1 },
      { name: 'Firebase', category: 'Databases', importance: 'Core', minProficiency: 'Beginner', weight: 1.0 },
      { name: 'Git & GitHub', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Intermediate', weight: 1.0 },
      { name: 'Flutter & Dart', category: 'Mobile Development', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.9 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: JavaScript/TypeScript & React Core',
        focusArea: 'Component Architecture, Hooks & Modern JS/TS',
        durationWeeks: 4,
        tasks: [
          { taskId: 'mob-t1', title: 'React Hooks & State Architecture', description: 'Master component hierarchy, custom hooks, and context state in React/TS.', skillName: 'React', estimatedHours: 18 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: React Native Fundamentals & Styling',
        focusArea: 'Native Components, Flexbox, Navigation',
        durationWeeks: 4,
        tasks: [
          { taskId: 'mob-t2', title: 'React Native Core Components & React Navigation', description: 'Build screens with View, Text, FlatList, Stack & Tab Navigation, and touchable gestures.', skillName: 'React Native', estimatedHours: 22 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Device APIs, Firebase & Offline Data',
        focusArea: 'Push Notifications, Camera, Geolocation & Firebase Auth',
        durationWeeks: 4,
        tasks: [
          { taskId: 'mob-t3', title: 'Integrate Native Hardware & Firebase Auth', description: 'Connect camera, GPS location tracking, push notifications, and Firebase backend.', skillName: 'Firebase', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: App Store Deployment & Capstone App',
        focusArea: 'Production Mobile App MVP & App Store Readiness',
        durationWeeks: 4,
        tasks: [
          { taskId: 'mob-t4', title: 'Build and Package Production Mobile Ecommerce App', description: 'Create an end-to-end mobile app with payment checkout, animations, and APK build.', skillName: 'React Native', estimatedHours: 25 },
        ]
      }
    ]
  },
  {
    title: 'Software Development Engineer (Backend & Systems)',
    slug: 'software-development-engineer',
    domain: 'Software Engineering',
    shortDescription: 'Build high-scale distributed backend systems, microservices, and high-performance algorithms.',
    detailedDescription: 'Software Development Engineers (SDEs) build mission-critical backend systems, distributed architectures, and core software services. They write scalable code in languages like Java, C++, Python, or Go, solve complex data structure problems, and design resilient APIs.',
    iconName: 'Cpu',
    gradient: 'from-slate-700 via-indigo-800 to-blue-900',
    avgSalary: {
      freshers: '₹9 - 22 LPA / $95k - 135k',
      midLevel: '₹22 - 50 LPA / $145k - 195k',
      senior: '₹50 - 110+ LPA / $210k - 320k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+25% (Foundational engineering role across all tech giants)',
    difficultyLevel: 'Hard',
    keyResponsibilities: [
      'Design and implement high-throughput, low-latency microservices',
      'Solve complex algorithmic problems with optimized time and space complexity',
      'Architect distributed databases, caching layers (Redis), and event brokers (Kafka)',
      'Write comprehensive unit, integration, and load testing suites',
      'Participate in high-level system design and architectural code reviews'
    ],
    matchedJobTitles: ['SDE-1 / SDE-2', 'Backend Systems Engineer', 'Core Platform Engineer', 'Software Engineer'],
    topInterviewTopics: ['DSA (Trees, Graphs, Dynamic Programming, Heaps)', 'System Design (Rate Limiting, Load Balancing, Sharding)', 'Concurrency, Multithreading & Thread Safety', 'Database ACID properties vs BASE', 'Microservices vs Monolith trade-offs'],
    requiredSkills: [
      { name: 'Data Structures & Algorithms (DSA)', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Advanced', weight: 1.6 },
      { name: 'Java', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Object-Oriented Programming (OOP)', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Advanced', weight: 1.4 },
      { name: 'System Design Basics', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'PostgreSQL', category: 'Databases', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Redis', category: 'Databases', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Operating Systems & Concurrency', category: 'Core Computer Science', importance: 'Core', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'RESTful APIs', category: 'Backend', importance: 'Core', minProficiency: 'Intermediate', weight: 1.1 },
      { name: 'Docker', category: 'Cloud & DevOps', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.9 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Advanced Data Structures & Algorithms Mastery',
        focusArea: 'Arrays, Linked Lists, Trees, Graphs, DP & LeetCode Patterns',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sde-t1', title: 'Master Core Linear & Non-Linear Data Structures', description: 'Implement Trees, Binary Search Trees, Heaps, and Tries with optimal complexity.', skillName: 'Data Structures & Algorithms (DSA)', estimatedHours: 25 },
          { taskId: 'sde-t2', title: 'Dynamic Programming & Graph Traversal (BFS/DFS, Dijkstra)', description: 'Solve 50+ classic algorithmic challenges on LeetCode across DP and Graph patterns.', skillName: 'Data Structures & Algorithms (DSA)', estimatedHours: 25 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Core CS Foundations (OOP, OS & Concurrency)',
        focusArea: 'Object-Oriented Design, Multithreading & Memory Management',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sde-t3', title: 'Low-Level Object Oriented Design (SOLID Principles & Design Patterns)', description: 'Design Parking Lot, Elevator System, and Tic-Tac-Toe applying Factory, Singleton, Strategy patterns.', skillName: 'Object-Oriented Programming (OOP)', estimatedHours: 18 },
          { taskId: 'sde-t4', title: 'Operating Systems, Processes, Threads & Concurrency Locks', description: 'Understand deadlocks, mutexes, semaphores, CPU scheduling, and virtual memory.', skillName: 'Operating Systems & Concurrency', estimatedHours: 16 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Scalable Backend Services & Caching',
        focusArea: 'Spring Boot / Node.js, PostgreSQL & Redis Caching',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sde-t5', title: 'Build High-Throughput RESTful Microservice with Redis Cache', description: 'Implement database indexing, connection pooling, and sub-millisecond Redis cache invalidation.', skillName: 'Redis', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 4,
        title: 'Stage 4: High-Level System Design & SDE Interview Prep',
        focusArea: 'Distributed Systems, Sharding & FAANG Technical Interviews',
        durationWeeks: 4,
        tasks: [
          { taskId: 'sde-t6', title: 'High-Level System Design: Rate Limiter & URL Shortener', description: 'Design scalable distributed systems handling 100k requests/sec with consistency guarantees.', skillName: 'System Design Basics', estimatedHours: 22 },
        ]
      }
    ]
  },
  {
    title: 'Data Analyst',
    slug: 'data-analyst',
    domain: 'Data Science & Analytics',
    shortDescription: 'Transform raw data into meaningful business intelligence, metrics, and executive dashboards.',
    detailedDescription: 'Data Analysts bridge business operations and data engineering. They query databases, clean messy data, calculate core KPIs, and build dynamic Power BI / Tableau dashboards that guide executive leadership.',
    iconName: 'BarChart2',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    avgSalary: {
      freshers: '₹4.5 - 9 LPA / $60k - 80k',
      midLevel: '₹10 - 20 LPA / $90k - 120k',
      senior: '₹22 - 45+ LPA / $130k - 180k+',
    },
    marketDemand: 'Very High',
    growthRate: '+23% (Universal demand across all corporate sectors)',
    difficultyLevel: 'Beginner Friendly',
    keyResponsibilities: [
      'Write optimized SQL queries for daily and quarterly business metrics',
      'Design interactive Power BI and Tableau dashboards with drill-down filters',
      'Cleanse, normalize, and merge disparate Excel and CSV datasets',
      'Perform exploratory data analysis and communicate insights to non-technical stakeholders'
    ],
    matchedJobTitles: ['Business Intelligence Analyst', 'BI Developer', 'Product Analyst', 'Financial Data Analyst'],
    topInterviewTopics: ['SQL Joins, Aggregations & Group By', 'Power BI DAX Functions & Data Modeling', 'Excel VLOOKUP, INDEX-MATCH & Pivot Tables', 'Data Cleaning Best Practices', 'Key Business Metrics (Churn, CAC, LTV)'],
    requiredSkills: [
      { name: 'SQL', category: 'Programming Languages', importance: 'Critical', minProficiency: 'Advanced', weight: 1.5 },
      { name: 'Power BI', category: 'Data & Analytics', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Pandas & NumPy', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Data Visualization (Matplotlib/Seaborn)', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Probability & Applied Statistics', category: 'Data & Analytics', importance: 'Core', minProficiency: 'Beginner', weight: 1.0 },
      { name: 'Tableau', category: 'Data & Analytics', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 0.9 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: SQL Mastery & Spreadsheet Power',
        focusArea: 'Advanced SQL Queries, CTEs, Joins & Excel Modeling',
        durationWeeks: 4,
        tasks: [
          { taskId: 'da-t1', title: 'SQL Aggregations, Window Functions & CTEs', description: 'Write complex analytical queries on multi-table relational databases.', skillName: 'SQL', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: Power BI & Business Dashboards',
        focusArea: 'Data Modeling, DAX Measures & Interactive Visuals',
        durationWeeks: 4,
        tasks: [
          { taskId: 'da-t2', title: 'Build Sales & Marketing Dashboards in Power BI', description: 'Connect live data sources, create star schema relationships, and write custom DAX measures.', skillName: 'Power BI', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 3,
        title: 'Stage 3: Python Data Analysis & Visual Storytelling',
        focusArea: 'Pandas Wrangling & Seaborn Statistical Charts',
        durationWeeks: 4,
        tasks: [
          { taskId: 'da-t3', title: 'Exploratory Data Analysis with Pandas & Seaborn', description: 'Analyze real-world Kaggle datasets and uncover customer behavioral trends.', skillName: 'Pandas & NumPy', estimatedHours: 18 },
        ]
      }
    ]
  },
  {
    title: 'Cloud Solutions Architect',
    slug: 'cloud-solutions-architect',
    domain: 'System Architecture',
    shortDescription: 'Design resilient, highly-available, multi-region cloud infrastructures and migration strategies.',
    detailedDescription: 'Cloud Solutions Architects design comprehensive cloud blueprints for enterprise applications. They evaluate trade-offs between cost, latency, security, and scalability across AWS, Azure, and GCP.',
    iconName: 'Globe',
    gradient: 'from-sky-600 via-indigo-600 to-blue-800',
    avgSalary: {
      freshers: '₹8 - 16 LPA / $90k - 120k',
      midLevel: '₹20 - 45 LPA / $140k - 190k',
      senior: '₹45 - 95+ LPA / $200k - 300k+',
    },
    marketDemand: 'Extremely High',
    growthRate: '+29% (Leading salary benchmarks in modern tech)',
    difficultyLevel: 'Advanced',
    keyResponsibilities: [
      'Design fault-tolerant, scalable multi-tier architectures on AWS',
      'Architect disaster recovery, data replication, and high-availability solutions',
      'Optimize enterprise cloud expenditure (FinOps) and compute allocation',
      'Enforce zero-trust enterprise security, IAM compliance, and encryption standards'
    ],
    matchedJobTitles: ['AWS Solutions Architect', 'Enterprise Cloud Architect', 'Infrastructure Consultant'],
    topInterviewTopics: ['AWS Well-Architected Framework 6 Pillars', 'Disaster Recovery RTO/RPO Strategies', 'Microservices vs Serverless Architecture', 'VPC Peering, Transit Gateway & Direct Connect', 'Cost Optimization at Scale'],
    requiredSkills: [
      { name: 'AWS (Amazon Web Services)', category: 'Cloud & DevOps', importance: 'Critical', minProficiency: 'Advanced', weight: 1.6 },
      { name: 'System Design Basics', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.4 },
      { name: 'Computer Networks', category: 'Core Computer Science', importance: 'Critical', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Docker', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Intermediate', weight: 1.2 },
      { name: 'Terraform', category: 'Cloud & DevOps', importance: 'Core', minProficiency: 'Intermediate', weight: 1.3 },
      { name: 'Kubernetes', category: 'Cloud & DevOps', importance: 'GoodToHave', minProficiency: 'Beginner', weight: 1.0 },
    ],
    standardRoadmapStages: [
      {
        stageNumber: 1,
        title: 'Stage 1: Enterprise Networking & AWS Foundations',
        focusArea: 'VPC Design, Route53, Subnets & Compute',
        durationWeeks: 4,
        tasks: [
          { taskId: 'csa-t1', title: 'Design Multi-AZ VPC Network Architecture on AWS', description: 'Configure public/private subnets, NAT Gateways, Security Groups, and Internet Gateways.', skillName: 'AWS (Amazon Web Services)', estimatedHours: 20 },
        ]
      },
      {
        stageNumber: 2,
        title: 'Stage 2: High Availability, Serverless & Storage Architecture',
        focusArea: 'Auto Scaling, ALB, S3, RDS Multi-AZ & Lambda',
        durationWeeks: 4,
        tasks: [
          { taskId: 'csa-t2', title: 'Architect Serverless Event-Driven System with SQS & Lambda', description: 'Build resilient async pipelines with AWS Lambda, EventBridge, and SQS dead-letter queues.', skillName: 'AWS (Amazon Web Services)', estimatedHours: 22 },
        ]
      }
    ]
  }
];
