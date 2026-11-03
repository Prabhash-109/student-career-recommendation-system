export const questionsData = [
  // --- QUICK QUIZ (Questions 1 to 10) ---
  {
    questionNumber: 1,
    category: 'Daily Activity',
    questionText: 'When working on a software project, which part excites you the most?',
    subtitle: 'Choose what intuitively feels most satisfying to build.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q1-a',
        text: 'Designing and polishing the user interface, styling animations, and making it responsive on mobile.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 8, systemDesign: 2 }
      },
      {
        optionId: 'q1-b',
        text: 'Architecting database schemas, building secure RESTful APIs, and managing server data flows.',
        icon: 'Server',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 5, cybersecurity: 3, mobileDevelopment: 4, systemDesign: 8 }
      },
      {
        optionId: 'q1-c',
        text: 'Training neural networks, experimenting with generative AI / LLM prompts, and analyzing data patterns.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 8, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 3 }
      },
      {
        optionId: 'q1-d',
        text: 'Automating deployments with CI/CD, configuring cloud servers, Docker containers, and ensuring 24/7 uptime.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 6, mobileDevelopment: 1, systemDesign: 7 }
      },
      {
        optionId: 'q1-e',
        text: 'Finding security loopholes, testing vulnerabilities, analyzing network traffic, and protecting user privacy.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 4, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 4 }
      }
    ]
  },
  {
    questionNumber: 2,
    category: 'Problem Solving',
    questionText: 'Which type of challenge would you happily spend an entire weekend solving?',
    subtitle: 'Think about where your deep focus flows effortlessly.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q2-a',
        text: 'Optimizing client-side rendering speed, fixing layout glitches, and perfecting micro-interactions.',
        icon: 'Sparkles',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 2, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 2 }
      },
      {
        optionId: 'q2-b',
        text: 'Building a predictive model to forecast market trends or classify real-world image datasets.',
        icon: 'TrendingUp',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 9, dataScience: 10, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 2 }
      },
      {
        optionId: 'q2-c',
        text: 'Simulating a cyber attack on a web server to verify if SQL injection or XSS can breach it.',
        icon: 'Lock',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 3, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 3 }
      },
      {
        optionId: 'q2-d',
        text: 'Designing a high-throughput microservice architecture capable of handling 50,000 requests/sec with Redis caching.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 6, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 6, cybersecurity: 2, mobileDevelopment: 2, systemDesign: 10 }
      }
    ]
  },
  {
    questionNumber: 3,
    category: 'Project Vision',
    questionText: 'If you had full freedom to build your dream graduation capstone project, what would it be?',
    subtitle: 'Your dream outcome says a lot about your ideal career.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q3-a',
        text: 'A full-stack collaborative web platform (like Figma or Notion) with real-time editing and rich UI.',
        icon: 'Layers',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 3, dataScience: 2, cloudDevOps: 4, cybersecurity: 2, mobileDevelopment: 5, systemDesign: 6 }
      },
      {
        optionId: 'q3-b',
        text: 'An AI autonomous assistant powered by fine-tuned LLMs, RAG embeddings, and voice agents.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 4, artificialIntelligence: 10, dataScience: 7, cloudDevOps: 3, cybersecurity: 1, mobileDevelopment: 2, systemDesign: 4 }
      },
      {
        optionId: 'q3-c',
        text: 'A native mobile fitness tracker with live GPS map routes, health metrics, and instant push notifications.',
        icon: 'Smartphone',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 10, systemDesign: 3 }
      },
      {
        optionId: 'q3-d',
        text: 'An automated cloud deployment orchestrator that monitors infrastructure health and auto-scales server clusters.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 5, mobileDevelopment: 1, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 4,
    category: 'Technical Interest',
    questionText: 'How comfortable and interested are you in working with mathematical data, statistics & probability?',
    subtitle: 'Rate your affinity towards data-driven mathematics.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q4-a',
        text: 'Love it! I enjoy statistical distributions, calculus, matrix calculations, and extracting patterns from raw numbers.',
        icon: 'Percent',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 9, dataScience: 10, cloudDevOps: 1, cybersecurity: 2, mobileDevelopment: 1, systemDesign: 3 }
      },
      {
        optionId: 'q4-b',
        text: 'Moderate. I prefer practical logic and building features over heavy math formulas.',
        icon: 'Code',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 4, dataScience: 4, cloudDevOps: 6, cybersecurity: 5, mobileDevelopment: 7, systemDesign: 7 }
      },
      {
        optionId: 'q4-c',
        text: 'I prefer visual design, interface aesthetics, and human-computer interactions over deep math.',
        icon: 'Palette',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 8, systemDesign: 2 }
      },
      {
        optionId: 'q4-d',
        text: 'I prefer systems, networks, protocols, and terminal automation rather than math formulas.',
        icon: 'Terminal',
        domainWeights: { webDevelopment: 4, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 9, cybersecurity: 8, mobileDevelopment: 2, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 5,
    category: 'Work Style & Preference',
    questionText: 'What kind of work environment and day-to-day impact sounds most rewarding to you?',
    subtitle: 'The feeling of accomplishment at the end of the day.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q5-a',
        text: 'Seeing millions of users visually interact with and praise the beauty and smoothness of my web interface.',
        icon: 'Eye',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 2 }
      },
      {
        optionId: 'q5-b',
        text: 'Knowing my AI model or data insights helped a company uncover multi-million dollar business opportunities.',
        icon: 'PieChart',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 8, dataScience: 10, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 3 }
      },
      {
        optionId: 'q5-c',
        text: 'Being the silent guardian who prevents devastating ransomware and data breach attacks.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 4, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 3 }
      },
      {
        optionId: 'q5-d',
        text: 'Ensuring global applications never crash during Black Friday surges with bulletproof cloud scalability.',
        icon: 'Activity',
        domainWeights: { webDevelopment: 4, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 5, mobileDevelopment: 1, systemDesign: 9 }
      }
    ]
  },
  {
    questionNumber: 6,
    category: 'Technical Interest',
    questionText: 'When working with databases, which aspect draws your curiosity most?',
    subtitle: 'Data storage, querying, or caching mechanics.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q6-a',
        text: 'Writing complex SQL queries, window functions, and generating analytical report aggregates.',
        icon: 'Database',
        domainWeights: { webDevelopment: 4, artificialIntelligence: 4, dataScience: 10, cloudDevOps: 3, cybersecurity: 1, mobileDevelopment: 2, systemDesign: 5 }
      },
      {
        optionId: 'q6-b',
        text: 'Designing schema models in MongoDB/PostgreSQL and integrating them with Node.js controllers.',
        icon: 'Layers',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 4, cybersecurity: 2, mobileDevelopment: 5, systemDesign: 7 }
      },
      {
        optionId: 'q6-c',
        text: 'Implementing vector databases (Pinecone, ChromaDB) to store high-dimensional embeddings for LLMs.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 10, dataScience: 7, cloudDevOps: 3, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 4 }
      },
      {
        optionId: 'q6-d',
        text: 'Setting up database replication, automated backups, and zero-loss failover clusters.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 10, cybersecurity: 4, mobileDevelopment: 1, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 7,
    category: 'Problem Solving',
    questionText: 'How do you feel about learning low-level networking and operating system concepts?',
    subtitle: 'Protocols, TCP/IP, Linux command line, and memory.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q7-a',
        text: 'I find it fascinating! I love understanding how packets move, how firewalls filter ports, and Linux security.',
        icon: 'Terminal',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 8, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 7 }
      },
      {
        optionId: 'q7-b',
        text: 'I care about it for high-scale backend performance, thread safety, and system design concurrency.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 5, artificialIntelligence: 3, dataScience: 2, cloudDevOps: 7, cybersecurity: 4, mobileDevelopment: 2, systemDesign: 10 }
      },
      {
        optionId: 'q7-c',
        text: 'I prefer higher-level abstractions, UI components, and frontend state over low-level networking.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 8, systemDesign: 1 }
      }
    ]
  },
  {
    questionNumber: 8,
    category: 'Project Vision',
    questionText: 'What kind of tools do you enjoy having open during your coding sessions?',
    subtitle: 'Your daily tooling preference.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q8-a',
        text: 'Browser DevTools, React Component Tree, Color Pickers, and CSS inspect tabs.',
        icon: 'Monitor',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 0, dataScience: 0, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 6, systemDesign: 1 }
      },
      {
        optionId: 'q8-b',
        text: 'Jupyter Notebooks, Pandas DataFrames, Matplotlib scatter plots, and PyTorch training logs.',
        icon: 'FileText',
        domainWeights: { webDevelopment: 0, artificialIntelligence: 10, dataScience: 10, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 0, systemDesign: 1 }
      },
      {
        optionId: 'q8-c',
        text: 'Postman / Insomnia API tester, MongoDB Compass / DBeaver, and VS Code server files.',
        icon: 'Send',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 4, cybersecurity: 2, mobileDevelopment: 4, systemDesign: 7 }
      },
      {
        optionId: 'q8-d',
        text: 'Multiple Linux bash terminals, Docker Desktop, AWS Console, and Wireshark / Burp Suite.',
        icon: 'Terminal',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 2, dataScience: 1, cloudDevOps: 9, cybersecurity: 9, mobileDevelopment: 1, systemDesign: 6 }
      }
    ]
  },
  {
    questionNumber: 9,
    category: 'Technical Interest',
    questionText: 'Which aspect of mobile application engineering appeals to you the most?',
    subtitle: 'Smartphones, gestures, and handheld hardware.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q9-a',
        text: 'Building smooth mobile experiences with React Native or Flutter that feel native on iOS & Android.',
        icon: 'Smartphone',
        domainWeights: { webDevelopment: 5, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 10, systemDesign: 3 }
      },
      {
        optionId: 'q9-b',
        text: 'I prefer building web applications that run in desktop browsers rather than dedicated mobile apps.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 3, dataScience: 2, cloudDevOps: 3, cybersecurity: 2, mobileDevelopment: 2, systemDesign: 4 }
      },
      {
        optionId: 'q9-c',
        text: 'I care mostly about the backend APIs and cloud services that feed data to mobile clients.',
        icon: 'Server',
        domainWeights: { webDevelopment: 6, artificialIntelligence: 4, dataScience: 4, cloudDevOps: 7, cybersecurity: 3, mobileDevelopment: 4, systemDesign: 9 }
      }
    ]
  },
  {
    questionNumber: 10,
    category: 'Work Style & Preference',
    questionText: 'When learning a new technology stack, what gives you the greatest sense of mastery?',
    subtitle: 'Your personal measure of technical achievement.',
    isQuickQuiz: true,
    options: [
      {
        optionId: 'q10-a',
        text: 'Shipping a live, publicly accessible website with flawless responsive design that anyone can use.',
        icon: 'Sparkles',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 1, cloudDevOps: 4, cybersecurity: 1, mobileDevelopment: 7, systemDesign: 3 }
      },
      {
        optionId: 'q10-b',
        text: 'Achieving 95%+ accuracy on a complex dataset model and writing research-backed evaluations.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 9, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 2 }
      },
      {
        optionId: 'q10-c',
        text: 'Setting up an automated pipeline that tests, builds, and deploys zero-downtime microservices to AWS.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 4, mobileDevelopment: 2, systemDesign: 8 }
      },
      {
        optionId: 'q10-d',
        text: 'Uncovering a hidden security flaw before malicious hackers can exploit user records.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 3, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 4 }
      }
    ]
  },

  // --- ADDITIONAL COMPREHENSIVE ASSESSMENT QUESTIONS (Questions 11 to 22) ---
  {
    questionNumber: 11,
    category: 'Technical Interest',
    questionText: 'How interested are you in Natural Language Processing (NLP) & Large Language Models (LLMs)?',
    subtitle: 'Prompt engineering, embeddings, transformers, and AI agents.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q11-a',
        text: 'Extremely interested! I want to build RAG pipelines, fine-tune models, and integrate agentic AI.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 10, dataScience: 7, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 2, systemDesign: 4 }
      },
      {
        optionId: 'q11-b',
        text: 'Interested as an API consumer (e.g. calling Gemini/OpenAI API inside a web app).',
        icon: 'Code',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 6, dataScience: 4, cloudDevOps: 3, cybersecurity: 2, mobileDevelopment: 5, systemDesign: 5 }
      },
      {
        optionId: 'q11-c',
        text: 'Neutral. I prefer traditional deterministic software logic and core CS architecture.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 6, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 6, cybersecurity: 6, mobileDevelopment: 4, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 12,
    category: 'Problem Solving',
    questionText: 'When an unexpected production bug occurs, where do you start investigating first?',
    subtitle: 'Your intuitive debugging methodology.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q12-a',
        text: 'Check browser console errors, React component state, and UI DOM layout elements.',
        icon: 'Monitor',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 6, systemDesign: 2 }
      },
      {
        optionId: 'q12-b',
        text: 'Inspect server application logs, API response payloads, and database query latency.',
        icon: 'Server',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 3, dataScience: 4, cloudDevOps: 5, cybersecurity: 3, mobileDevelopment: 4, systemDesign: 9 }
      },
      {
        optionId: 'q12-c',
        text: 'Analyze Docker container status, server CPU/memory spikes, and Nginx proxy configs.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 10, cybersecurity: 4, mobileDevelopment: 1, systemDesign: 8 }
      },
      {
        optionId: 'q12-d',
        text: 'Check authentication tokens, firewall access logs, and input sanitization filters.',
        icon: 'Lock',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 4, cybersecurity: 10, mobileDevelopment: 2, systemDesign: 5 }
      }
    ]
  },
  {
    questionNumber: 13,
    category: 'Work Style & Preference',
    questionText: 'What is your perspective on Software Testing and Quality Assurance (QA)?',
    subtitle: 'Unit tests, end-to-end testing, and automated test runners.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q13-a',
        text: 'Essential! I enjoy writing automated test suites (Jest, Cypress, PyTest) for bulletproof reliability.',
        icon: 'Sparkles',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 4, dataScience: 4, cloudDevOps: 8, cybersecurity: 6, mobileDevelopment: 6, systemDesign: 8 }
      },
      {
        optionId: 'q13-b',
        text: 'I prefer building features rapidly and testing manually before release.',
        icon: 'Code',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 3, dataScience: 3, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 6, systemDesign: 3 }
      },
      {
        optionId: 'q13-c',
        text: 'I focus on security fuzzing, penetration tests, and vulnerability scanners.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 4, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 4 }
      }
    ]
  },
  {
    questionNumber: 14,
    category: 'Project Vision',
    questionText: 'Which type of software architecture appeals to you most for large-scale systems?',
    subtitle: 'Monoliths, serverless, microservices, or event-driven.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q14-a',
        text: 'Event-driven microservices with Kafka, RabbitMQ, and Redis distributed caching.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 5, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 7, cybersecurity: 3, mobileDevelopment: 2, systemDesign: 10 }
      },
      {
        optionId: 'q14-b',
        text: 'Clean Next.js / Full-Stack SSR Monolith with server actions and PostgreSQL.',
        icon: 'Layers',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 3, cybersecurity: 2, mobileDevelopment: 4, systemDesign: 6 }
      },
      {
        optionId: 'q14-c',
        text: 'Serverless cloud functions (AWS Lambda) tied to event queues and cloud storage.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 4, artificialIntelligence: 3, dataScience: 2, cloudDevOps: 9, cybersecurity: 4, mobileDevelopment: 3, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 15,
    category: 'Technical Interest',
    questionText: 'How do you feel about working with Cloud Infrastructure as Code (Terraform, CloudFormation)?',
    subtitle: 'Automating cloud provisioning with code templates.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q15-a',
        text: 'Love it! Defining cloud infrastructure through declarative code is clean and reliable.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 10, cybersecurity: 5, mobileDevelopment: 1, systemDesign: 7 }
      },
      {
        optionId: 'q15-b',
        text: 'I know it is useful, but I would rather focus on writing application backend code.',
        icon: 'Server',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 3, dataScience: 3, cloudDevOps: 4, cybersecurity: 2, mobileDevelopment: 4, systemDesign: 8 }
      },
      {
        optionId: 'q15-c',
        text: 'I prefer building interactive frontend interfaces and user workflows.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 1 }
      }
    ]
  },
  {
    questionNumber: 16,
    category: 'Daily Activity',
    questionText: 'When working with data charts and visualizations, what is your main focus?',
    subtitle: 'Storytelling, metric tracking, or dashboard interactivity.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q16-a',
        text: 'Designing executive KPI dashboards with drill-downs in Power BI, Tableau, or Seaborn.',
        icon: 'PieChart',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 4, dataScience: 10, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 2, systemDesign: 3 }
      },
      {
        optionId: 'q16-b',
        text: 'Building rich, interactive SVG / Canvas charting components in React with Recharts / Chart.js.',
        icon: 'BarChart',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 4, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 6, systemDesign: 3 }
      },
      {
        optionId: 'q16-c',
        text: 'Visualizing model loss curves, confusion matrices, and ROC-AUC curves in TensorBoard.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 8, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 0, systemDesign: 2 }
      }
    ]
  },
  {
    questionNumber: 17,
    category: 'Problem Solving',
    questionText: 'How do you approach securing a modern web application against cyber attacks?',
    subtitle: 'Authentication, authorization, and protection strategies.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q17-a',
        text: 'Implement OWASP best practices: sanitize inputs, use HttpOnly cookies, CSRF tokens, and rate limiting.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 5, cybersecurity: 10, mobileDevelopment: 4, systemDesign: 7 }
      },
      {
        optionId: 'q17-b',
        text: 'Set up automated Web Application Firewalls (WAF), Cloudflare DDoS protection, and SSL/TLS.',
        icon: 'Lock',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 9, cybersecurity: 9, mobileDevelopment: 2, systemDesign: 7 }
      },
      {
        optionId: 'q17-c',
        text: 'Use Firebase or Auth0 for standard out-of-the-box user login and session management.',
        icon: 'Code',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 2, dataScience: 1, cloudDevOps: 3, cybersecurity: 3, mobileDevelopment: 8, systemDesign: 3 }
      }
    ]
  },
  {
    questionNumber: 18,
    category: 'Technical Interest',
    questionText: 'Which area of Computer Vision (CV) or Multimedia excites you most?',
    subtitle: 'Images, video analysis, and generative visual AI.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q18-a',
        text: 'Object detection, facial recognition, and image classification with Convolutional Neural Networks (CNNs).',
        icon: 'Eye',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 7, cloudDevOps: 1, cybersecurity: 3, mobileDevelopment: 3, systemDesign: 3 }
      },
      {
        optionId: 'q18-b',
        text: 'Building camera upload features, photo galleries, and image compression for mobile/web apps.',
        icon: 'Smartphone',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 2, dataScience: 1, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 9, systemDesign: 3 }
      },
      {
        optionId: 'q18-c',
        text: 'I prefer text-based business data and server computation over image processing.',
        icon: 'Server',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 3, dataScience: 6, cloudDevOps: 6, cybersecurity: 4, mobileDevelopment: 2, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 19,
    category: 'Work Style & Preference',
    questionText: 'When collaborating in a tech team, which responsibility would you naturally gravitate toward?',
    subtitle: 'Your natural team contribution.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q19-a',
        text: 'Taking charge of the user-facing features, component styling, and UX accessibility.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 2 }
      },
      {
        optionId: 'q19-b',
        text: 'Designing the data architecture, API contracts, and high-performance server logic.',
        icon: 'Server',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 3, dataScience: 4, cloudDevOps: 5, cybersecurity: 3, mobileDevelopment: 4, systemDesign: 10 }
      },
      {
        optionId: 'q19-c',
        text: 'Managing cloud infrastructure, deployment pipelines, and release stability.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 5, mobileDevelopment: 1, systemDesign: 7 }
      },
      {
        optionId: 'q19-d',
        text: 'Building analytics models and deriving business metrics from application event data.',
        icon: 'PieChart',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 8, dataScience: 10, cloudDevOps: 1, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 3 }
      }
    ]
  },
  {
    questionNumber: 20,
    category: 'Problem Solving',
    questionText: 'How do you handle API performance optimization when a query takes too long (>2 seconds)?',
    subtitle: 'Speed and database optimization.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q20-a',
        text: 'Add database indexes, optimize SQL queries (EXPLAIN ANALYZE), and add Redis in-memory caching.',
        icon: 'TrendingUp',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 2, dataScience: 5, cloudDevOps: 6, cybersecurity: 2, mobileDevelopment: 3, systemDesign: 10 }
      },
      {
        optionId: 'q20-b',
        text: 'Implement client-side skeleton loaders, pagination, and debounce/cache with React Query.',
        icon: 'Monitor',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 4 }
      },
      {
        optionId: 'q20-c',
        text: 'Scale up cloud instances, add a load balancer, and configure auto-scaling rules.',
        icon: 'Cloud',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 10, cybersecurity: 3, mobileDevelopment: 1, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 21,
    category: 'Project Vision',
    questionText: 'What excites you most about modern Web3, Decentralized Systems, or Distributed Ledgers?',
    subtitle: 'Blockchain, smart contracts, and cryptographic trust.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q21-a',
        text: 'Cryptography, consensus algorithms (Proof of Stake), and smart contract security auditing.',
        icon: 'Lock',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 4, cybersecurity: 9, mobileDevelopment: 2, systemDesign: 8 }
      },
      {
        optionId: 'q21-b',
        text: 'Building decentralized web applications (dApps) with React, Wagmi, and wallet connectors.',
        icon: 'Layers',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 2, cybersecurity: 3, mobileDevelopment: 4, systemDesign: 5 }
      },
      {
        optionId: 'q21-c',
        text: 'I prefer traditional centralized web & cloud architectures with proven reliability.',
        icon: 'Server',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 4, dataScience: 5, cloudDevOps: 7, cybersecurity: 3, mobileDevelopment: 5, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 22,
    category: 'Daily Activity',
    questionText: 'Which long-term engineering career trajectory inspires you most?',
    subtitle: 'Your 5-year vision in the tech ecosystem.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q22-a',
        text: 'Lead Frontend / Full Stack Architect crafting consumer apps loved by millions worldwide.',
        icon: 'Sparkles',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 3, cybersecurity: 1, mobileDevelopment: 6, systemDesign: 6 }
      },
      {
        optionId: 'q22-b',
        text: 'Staff AI/ML Research Engineer leading frontier model training and intelligent systems.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 8, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 1, systemDesign: 4 }
      },
      {
        optionId: 'q22-c',
        text: 'Principal Cloud / Systems Architect designing high-availability global distributed infrastructure.',
        icon: 'Globe',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 9, cybersecurity: 5, mobileDevelopment: 2, systemDesign: 10 }
      },
      {
        optionId: 'q22-d',
        text: 'Chief Information Security Officer (CISO) protecting enterprise networks and sensitive data.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 4, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 5 }
      }
    ]
  },
  {
    questionNumber: 23,
    category: 'Technical Interest',
    questionText: 'When working on projects that interface with physical hardware, smart sensors, or microcontrollers (ESP32/Arduino/Raspberry Pi), what is your preference?',
    subtitle: 'Hardware integration and IoT telemetry.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q23-a',
        text: 'I love IoT telemetry, sensor readings, and low-level firmware communicating with cloud endpoints.',
        icon: 'Cpu',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 3, dataScience: 4, cloudDevOps: 8, cybersecurity: 6, mobileDevelopment: 5, systemDesign: 9 }
      },
      {
        optionId: 'q23-b',
        text: 'I prefer building the mobile dashboard or web application that visualizes the device data.',
        icon: 'Smartphone',
        domainWeights: { webDevelopment: 8, artificialIntelligence: 2, dataScience: 3, cloudDevOps: 2, cybersecurity: 1, mobileDevelopment: 9, systemDesign: 4 }
      },
      {
        optionId: 'q23-c',
        text: 'I prefer pure cloud and software engineering without physical hardware constraints.',
        icon: 'Server',
        domainWeights: { webDevelopment: 9, artificialIntelligence: 6, dataScience: 6, cloudDevOps: 7, cybersecurity: 4, mobileDevelopment: 3, systemDesign: 8 }
      }
    ]
  },
  {
    questionNumber: 24,
    category: 'Project Vision',
    questionText: 'If you were building open-source developer tooling, which type of tool would you want to author?',
    subtitle: 'Developer Experience (DX) and tooling innovation.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q24-a',
        text: 'A high-performance CLI tool, code formatter, or compiler plugin in Rust/Go/Node.js.',
        icon: 'Terminal',
        domainWeights: { webDevelopment: 5, artificialIntelligence: 2, dataScience: 2, cloudDevOps: 9, cybersecurity: 5, mobileDevelopment: 2, systemDesign: 10 }
      },
      {
        optionId: 'q24-b',
        text: 'A rich UI component library with accessible micro-animations and themes for React/Next.js.',
        icon: 'Layout',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 3 }
      },
      {
        optionId: 'q24-c',
        text: 'An AI evaluation harness to benchmark and stress-test LLM outputs and prompt pipelines.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 3, artificialIntelligence: 10, dataScience: 8, cloudDevOps: 3, cybersecurity: 2, mobileDevelopment: 1, systemDesign: 5 }
      },
      {
        optionId: 'q24-d',
        text: 'A security vulnerability scanner that detects leaked secrets and dependencies flaws in git repos.',
        icon: 'Shield',
        domainWeights: { webDevelopment: 2, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 6, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 6 }
      }
    ]
  },
  {
    questionNumber: 25,
    category: 'Problem Solving',
    questionText: 'When monitoring live production systems, which metrics matter most to you for health validation?',
    subtitle: 'System observability, telemetry, and uptime.',
    isQuickQuiz: false,
    options: [
      {
        optionId: 'q25-a',
        text: 'API p99 latency, database connection pool saturation, and Redis cache hit ratios.',
        icon: 'Server',
        domainWeights: { webDevelopment: 7, artificialIntelligence: 3, dataScience: 4, cloudDevOps: 7, cybersecurity: 3, mobileDevelopment: 3, systemDesign: 10 }
      },
      {
        optionId: 'q25-b',
        text: 'Core Web Vitals (LCP, FID, CLS), client render FPS, and user bounce rate.',
        icon: 'Monitor',
        domainWeights: { webDevelopment: 10, artificialIntelligence: 1, dataScience: 2, cloudDevOps: 1, cybersecurity: 0, mobileDevelopment: 7, systemDesign: 3 }
      },
      {
        optionId: 'q25-c',
        text: 'Model inference latency, data drift metrics, and GPU VRAM utilization.',
        icon: 'Brain',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 10, dataScience: 8, cloudDevOps: 3, cybersecurity: 0, mobileDevelopment: 1, systemDesign: 5 }
      },
      {
        optionId: 'q25-d',
        text: 'Network anomaly spikes, unauthorized SSH login attempts, and firewall drop rates.',
        icon: 'Lock',
        domainWeights: { webDevelopment: 1, artificialIntelligence: 1, dataScience: 1, cloudDevOps: 5, cybersecurity: 10, mobileDevelopment: 1, systemDesign: 5 }
      }
    ]
  }
];
