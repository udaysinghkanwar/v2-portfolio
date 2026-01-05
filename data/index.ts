export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "/resume.pdf" },
];

export const gridItems = [
  /*{
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-4 md:col-span-6 md:row-span-4 lg:row-span-2",*/
  {
    id: 2,
    title: "I love to build systems that have global impact",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 lg:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  /*{
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },*/

  {
    id: 5,
    title:
      "Currently creating an AI-Powered Learning Management System for students worldwide",
    description: "I am always building something new",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to build something together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AWS- LLM Inference Optimization",
    subtitle:
      "Optimized LLaMA inference on AWS Trainium by re-implementing core kernels with Neuron Kernel Interface (NKI).",
    summary:
      "Re-implemented matrix multiplication and scaled dot product attention using NKI to accelerate transformer inference on AWS Trainium EC2, achieving 1.13× throughput speedup with improved benchmarking metrics.",
    keyPoints: [
      "Optimized Large Language Model (LLM) performance during the AWS NKI Competition hosted at the ASPLOS Conference.",
      "Re-implemented matrix multiplication and scaled dot product attention using Neuron Kernel Interface (NKI) to optimize transformer inference on AWS Trainium EC2 chips.",
      "Achieved 1.13× speedup in LLaMA inference throughput; improved accuracy, FLOPs ratio, and overall performance using AWS benchmarking tools.",
    ],
    tech: [
      { name: "Neuron Kernel Interface (NKI)", icon: "projects/nki.png" },
      { name: "AWS Trainium (EC2 Trn) ", icon: "projects/aws.png" },
      { name: "PyTorch", icon: "projects/pytorch.png" },
      { name: "Python", icon: "projects/python.png" },
      { name: "Numpy", icon: "projects/numpy.png" },
      { name: "AWS Benchmarking" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/udaysinghkanwar/nki-llama",
      },
    ],
    cover: "projects/llminference.png",
    screenshots: [
      { src: "projects/trainium.png", alt: "Project screenshot" },
      { src: "projects/llminference.png", alt: "Project screenshot" },
    ],
  },
  {
    id: 2,
    title: "Flight Search AI Agent",
    subtitle:
      "An AI-powered travel assistant that turns natural language into accurate flight searches, using tool-chaining, slot extraction, and robust retry/error handling for real-time results.",
    summary:
      "An AI-powered travel assistant that turns natural language into accurate flight searches, using tool-chaining, slot extraction, and robust retry/error handling for real-time results.",
    keyPoints: [
      "Developed an AI-powered travel assistant using NVIDIA AIQ Toolkit, ReAct agent architecture, and LLaMA-3.3-70B-Instruct via NVIDIA NIM to deliver real-time flight data through SerpAPI Google Flights.",
      "Engineered a YAML-configured agent workflow with tool chaining and LLM-guided slot extraction (dates, locations, travel class), enabling accurate, context-aware responses with robust error handling and retry logic.",
    ],
    tech: [
      { name: "NVIDIA AIQ Toolkit", icon: "projects/nvidia.png" },
      { name: "SerpAPI (Google Flights)", icon: "projects/serpapi.png" },
      { name: "Python", icon: "/projects/python.png" },
      { name: "NVIDIA NIM" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/udaysinghkanwar/ai-travel-agent",
      },
    ],
    cover: "/projects/flightagent.png",
    screenshots: [
      { src: "/projects/flightagent.png", alt: "Project screenshot" },
    ],
  },
  {
    id: 3,
    title: "LearnBridge- AI Agent for Students",
    subtitle:
      "AI assistant with Ask Mode + Agent Mode; integrates with Canvas, Google Classroom, Notion, and Teams.",
    summary:
      "An AI assistant that connects to learning platforms and helps students work faster with tutoring-style guidance (Ask Mode) and inline, structured writing improvements (Agent Mode) built on a full-stack monorepo architecture.",
    keyPoints: [
      "Connected to learning platforms (Canvas, Google Classroom, Notion, Teams) and provided two core features: Ask Mode (tutoring-style guidance based on assignment + rubric) and Agent Mode (inline writing improvements with structured edits).",
      "Built as a monorepo with a Next.js frontend, an Express backend, and shared TypeScript contracts, with a clean API layer between web and backend services.",
      "Implemented ReAct-based multi-agent workflows with memory, sequential/parallel execution, tool integration (Google Classroom & Calendar), and prompt tuning for context-aware task handling.",
      "Accelerated assignment workflows by 80% by extracting key concepts from assignments, announcements, and slides into formatted outputs (graphs, tables, bolded summaries) and syncing deadlines to Google Calendar.",
    ],
    tech: [
      { name: "Google Agent Development Kit (ADK)", icon: "projects/adk.png" },
      { name: "Next.js", icon: "projects/next.svg" },
      { name: "Gemini 1.5 Flash", icon: "projects/gemini.png" },
      { name: "TypeScript", icon: "projects/ts.svg" },
      { name: "Express.js" },
      { name: "TipTap" },
      { name: "Google Classroom API" },
      { name: "Google Calendar API" },
      { name: "Canvas Integration" },
      { name: "Notion Integration" },
      { name: "Microsoft Teams Integration" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/udaysinghkanwar/learnbridge",
      },
      {
        label: "Demo",
        href: "https://youtu.be/wRsyMHja9rw?si=kXgVbTUoTfVIiD8_",
      },
    ],
    cover: "projects/learnbridge.png",
    screenshots: [{ src: "projects/agents.png", alt: "Project screenshot" }],
  },
  {
    id: 4,
    title: "ML-Powered Fraud Detection",
    subtitle:
      "Credit card fraud detection on an imbalanced dataset using classical ML + a neural network. (Dec 2024)",
    summary:
      "Compared multiple classifiers and sampling strategies for highly imbalanced fraud detection, then implemented a TensorFlow neural network and data analysis pipeline for reliable validation performance.",
    keyPoints: [
      "Evaluated Logistic Regression, SVM, K-Nearest Neighbours, and Decision Trees with scikit-learn to detect fraudulent credit card transactions in a highly imbalanced dataset.",
      "Achieved 98.7% validation accuracy with Logistic Regression using SMOTE over-sampling and 94.21% with random under-sampling.",
      "Implemented a neural network with TensorFlow and achieved 92.1% validation accuracy.",
      "Performed feature scaling, outlier removal, correlation analysis, and data visualization/analytics.",
    ],
    tech: [
      { name: "Python", icon: "/projects/python.png" },
      { name: "Scikit-learn" },
      { name: "TensorFlow", icon: "projects/tensorflow.png" },
      { name: "Pandas", icon: "projects/pandas.png" },
      { name: "NumPy", icon: "projects/numpy.png" },
      { name: "Matplotlib" },
      { name: "Seaborn", icon: "projects/seaborn.png" },
      { name: "Kaggle" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/udaysinghkanwar/Payment-Fraud-Detection-Model",
      },
    ],
    cover: "/projects/fraud.png",
    screenshots: [{ src: "projects/fraud.png", alt: "Project screenshot" }],
  },
  {
    id: 5,
    title: "Bus Forecast @ BramHacks (Winner)",
    subtitle:
      "Predicting real-time public transit demand surges using events + route data for proactive bus dispatching. (Nov 2024)",
    summary:
      "A hackathon-winning app that forecasts when and where transit demand will spike (e.g., after games or concerts) so planners can dispatch extra buses before overcrowding happens.",
    keyPoints: [
      "Built a web app with a predictive model to forecast public transportation surges for the City of Brampton.",
      "Integrated Google Maps API (routes/schedules) and Facebook Events API (event locations/times) to detect demand drivers; combined with Census data to improve forecasts.",
      "Implemented a Flask-based Python backend serving predictions to a React/Vite frontend for real-time visualization.",
      "Won at BramHacks by demonstrating actionable, real-world impact (reduced wait times and avoided overcrowding through proactive dispatch).",
    ],
    tech: [
      { name: "TypeScript", icon: "projects/ts.svg" },
      { name: "Python", icon: "/projects/python.png" },
      { name: "Flask", icon: "projects/flask.png" },
      { name: "React.js", icon: "/re.svg" },
      { name: "Vite" },
      { name: "Google Maps API" },
      { name: "Facebook Events API" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/AkshayG99/BusForcast",
      },
    ],
    cover: "/projects/busforecast.png",
    screenshots: [
      { src: "/projects/busforecast.png", alt: "Project screenshot" },
    ],
  },
  {
    id: 6,
    title: "EcoCoin",
    subtitle:
      "Eco-friendly rewards platform (EcoHub) that incentivizes sustainability by awarding tokens for environmental contributions.",
    summary:
      "EcoCoin is an eco-friendly cryptocurrency concept that rewards users for participating in environmentally beneficial activities and events, helping people track impact and build sustainable habits through incentives.",
    keyPoints: [
      "Built EcoHub to incentivize eco-friendly behavior by awarding EcoCoins for participating in sustainability-focused events and activities.",
      "Designed a blockchain-like token reward system on Google Cloud to keep the reward mechanism secure while staying mindful of environmental sustainability.",
      "Integrated Mapbox geolocation + map visualization to accurately map event locations and track participation.",
      "Implemented Firebase (Firestore + Auth) for user accounts, persistence, and a smooth end-to-end prototype experience.",
    ],
    tech: [
      { name: "React", icon: "/re.svg" },
      { name: "Firebase", icon: "projects/firebase.png" },
      { name: "Firestore" },
      { name: "Firebase Auth" },
      { name: "Mapbox", icon: "projects/mapbox.png" },
      { name: "Google Cloud", icon: "projects/googlecloud.png" },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/Harsh-Is-Coding/terrahacks",
      },
      { label: "Devpost", href: "https://devpost.com/software/ecohub-ry6n8o" },
      {
        label: "Demo",
        href: "https://youtu.be/6cp7S5n_7Io?si=25jtZm9Q3e3Qs2JE",
      },
    ],
    cover: "/projects/ecocoin.png",
    screenshots: [
      { src: "/projects/ecocoin.png", alt: "EcoCoin screenshot" },
      { src: "/projects/ecocoin1.png", alt: "EcoCoin screenshot" },
      { src: "/projects/ecocoin2.png", alt: "EcoCoin screenshot" },
    ],
  },
];

export type ProjectLink = { label: string; href: string };
export type ProjectImage = { src: string; alt?: string };
export type ProjectTech = { name: string; icon?: string };
export type Project = {
  id: number | string;
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  tech: ProjectTech[];
  links: ProjectLink[];
  cover: string;
  screenshots: ProjectImage[];
};

export type TimelineEntry = {
  id: number | string;
  role: string;
  company: string;
  location?: string;
  dateRange: string;
  bullets: string[];
  images?: { src: string; alt?: string }[];
  links?: { label: string; href: string }[];
};

export const workTimeline: TimelineEntry[] = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "IBM",
    location: "Markham, ON",
    dateRange: "Sep 2025 – Present",
    bullets: [
      "Led end-to-end development of a production-grade content creation platform for 2500+ authors and 10M+ learners, delivering a dual-mode WYSIWYG/Markdown editor built using Next.js, React, TypeScript, TipTap and Codemirror.",
      "Shipped AI-assisted authoring features with document-level text-to-speech and content suggestions using GPT-4o-mini-TTS and OpenAI API, achieving 90% consistency with the source technical content and improved accessibility.",
      "Built secure RESTful backend services with Express.js and OAuth2/JWT, integrating with a host authoring platform to enable draft, publish, and retrieval workflows with type-safe TypeScript contracts, reducing lab publishing time to less than 10 minutes.",
      "Improved developer velocity with dockerized deployments and Playwright E2E tests, reducing regression bugs by 40%.",
    ],
    links: [
      { label: "IBM", href: "https://www.ibm.com" },
      {
        label: "IBM Skills Network",
        href: "https://skills.network/lab-tools",
      },
      {
        label: "Live Site",
        href: "https://author.skills.network/",
      },
    ],
  },
  {
    id: 2,
    role: "Open Source Research Developer",
    company: "Google Developers Group (Glassbox LLMs)",
    location: "Toronto, ON",
    dateRange: "Sep 2025 – Present",
    bullets: [
      "Built a transformer attention inspection pipeline on DistilBERT (6 layers, 12 heads) using Hugging Face Transformers and PyTorch to extract per-layer, per-head attention tensors for static and interactive visualizations via Matplotlib, Seaborn and BertViz.",
      "Investigated long-context attention behaviour, analyzing inter-sentence attention to study how coherence and representations evolve with increasing sequence length, contributing reproducible analysis to an active area of interpretability research.",
      "Developed a local, API-independent LLM evaluation pipeline by integrating DeepEval with a custom Ollama-backed model wrapper, enabling explainable LLM-as-a-judge evaluation using GEval metrics with thresholded pass/fail signals.",
    ],
    links: [
      {
        label: "Google Developers Group",
        href: "https://gdg.community.dev/",
      },

      {
        label: "Github Repository",
        href: "https://github.com/DSC-McMaster-U/glassbox-llms",
      },
    ],
  },
  {
    id: 3,
    role: "AI Engineer Intern",
    company: "Blu Creative",
    location: "Toronto, ON",
    dateRange: "May 2025 – Aug 2025",
    bullets: [
      "Developed an RAG chatbot using OpenAI API, LlamaIndex, LangChain, and SQLAlchemy, providing natural language query support over company data and RFPs, deployed across 50+ organizations.",
      "Engineered AI-powered FastAPI endpoints with structured prompt engineering, chat history summarization, and query caching, enabling context-aware query handling, seamless Next.js integration, and a 30% improvement in response efficiency.",
      "Built LLM screening to automate screening of 100+ daily documents into PostgreSQL, reducing manual processing time by 85%.",
    ],
    links: [
      { label: "Blu Creative", href: "https://blucreative.dev/" },
      {
        label: "Project Site",
        href: "https://offeriorfp.com/offerioassistant/",
      },
    ],
  },
  {
    id: 4,
    role: "Machine Learning Engineer",
    company: "McMaster Aerial Robotics and Drone Team",
    location: "Hamilton, ON",
    dateRange: "Jan 2025 – Present",
    bullets: [
      "Compared blob detection, hough circle transform, and connected-components methods for circular target detection, tuning parameters to avoid background false positives and achieving 90–95% accuracy on 100+ validation images.",
      "Benchmarked detection accuracy and latency across approaches, selecting a blob-based pipeline that reduced inference time by 30% while maintaining stable detections under varied lighting conditions in images captured by a drone camera.",
    ],
    links: [
      { label: "McMaster Drone Club", href: "https://www.macdrones.ca/" },
    ],
  },
  {
    id: 5,
    role: "Software Engineer Intern",
    company: "Learning Mode AI",
    location: "Toronto, ON",
    dateRange: "Jan 2025 – Mar 2025",
    bullets: [
      "Built 3+ Go and Python based RESTful APIs to enable dynamic quiz generation, concise video summaries, and real-time Q&A by leveraging Redis and GPT-4o LLM integration, working in a docker based environment.",
      "Developed 10+ UI features and resolved 15+ bugs, improving responsiveness by 30% using React and JavaScript.",
    ],
    links: [{ label: "Learning Mode AI", href: "https://learningmodeai.com/" }],
  },
  {
    id: 6,
    role: "Embedded Full-Stack Engineer",
    company: "Human Endeavour",
    location: "Vaughan, ON",
    dateRange: "Jun 2024 – Oct 2024",
    bullets: [
      "Optimized a MySQL database for 15+ IoT sensors, boosting query performance by 40% via indexing and schema design.",
      "Developed a C++ fall detection algorithm using an ESP32 micro-controller and accelerometer with 95% accuracy and implemented an automated email alert service via the Gmail SMTP server.",
      "Developed a trilateration algorithm with Ultra-Wideband, AT Commands, and C++ for indoor tracking at 80% accuracy.",
    ],
    links: [
      { label: "Human Endeavour", href: "https://www.humanendeavour.org/" },
    ],
  },
];

export const slideshowImages = [
  { src: "/slideshow/1.png", alt: "Slideshow image 1" },
  { src: "/slideshow/2.png", alt: "Slideshow image 2" },
  { src: "/slideshow/3.png", alt: "Slideshow image 3" },
  { src: "/slideshow/4.png", alt: "Slideshow image 4" },
  { src: "/slideshow/5.png", alt: "Slideshow image 5" },
  { src: "/slideshow/6.png", alt: "Slideshow image 6" },
  { src: "/slideshow/7.png", alt: "Slideshow image 7" },
  { src: "/slideshow/8.png", alt: "Slideshow image 8" },
];
