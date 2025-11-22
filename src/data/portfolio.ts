export const portfolioData = {
  personal: {
    name: "Abhishek Goklani",
    title: "Software Developer",
    description: "Dedicated Software Engineer with 3 years of professional experience in enterprise application development, microservices architecture, and cloud-native practices.",
    email: "abhishekgoklani0@gmail.com",
    phone: "8718812000",
    location: "Bangalore, India",
    socials: {
      github: "https://github.com/abhigoklani",
      linkedin: "https://linkedin.com/in/abhishek-goklani-a4060816/",
    },
  },

  summary:
    "Dedicated Software Engineer with almost 3 years of professional experience in enterprise application development, microservices architecture, and cloud-native practices. Proficient in Java core concepts, data structures, and algorithms, with hands-on experience in Node.js/Express and a strong foundation in high-performance system design. Successfully contributed to the development and maintenance of scalable enterprise microservices using modern DevOps tools (SonarQube, Snyk) and containerization technologies. Eager to apply cloud-native experience and commitment to code quality to a challenging Java-based role focused on Data Integrity solutions.",

  experience: [
    {
      position: "Software Developer",
      company: "Accenture",
      location: "Bangalore, Karnataka",
      startDate: "07/2023",
      endDate: "Present",
      highlights: [
        "Contributed to the design, development, and maintenance of scalable enterprise microservices architecture using internal frameworks (Node.js/Express), focusing on high availability and code reusability across multiple product lines.",
        "Led the development of reusable security modules for robust identity and access management (Application Security domain), implementing modern standards like Okta, JWT, and OIDC to secure enterprise REST APIs.",
        "Improved system quality and reliability by integrating CI/CD tools like SonarQube (code quality) and Snyk (vulnerability detection), actively participating in design and code reviews to enforce standards.",
        "Developed bi-fleet-management, a centralized automation framework to manage and orchestrate transformations across 100 code repositories, enhancing scalability and developer productivity.",
        "Designed and implemented standardized code transformations (e.g., addBILogger), enabling consistent logging practices and reducing manual effort across teams.",
        "Contributed to full-stack development, integrating React/Next.js portals with tRPC and .NET APIs for metrics dashboards and internal tooling.",
        "Developed an interactive codebase visualization module using D3.js that maps file, class, and function dependencies across multi-language repositories, enabling teams to understand architecture instantly.",
      ],
    },
    {
      position: "Data Science Intern",
      company: "Technocolabs Softwares Inc",
      location: "Indore, Madhya Pradesh",
      startDate: "02/2023",
      endDate: "04/2023",
      highlights: [
        "Conducted multivariate regression and PCA to uncover insights",
        "Identified data clusters and visualized insights",
      ],
    },
    {
      position: "Big Data Intern",
      company: "LTIMINDTREE",
      location: "Remote, India",
      startDate: "02/2023",
      endDate: "05/2023",
      highlights: [
        "Received training in Python programming, Shell Scripting, Cloud, and Java Language",
        "Completed training involving Java Language",
        "Gained knowledge in Data Warehousing and Big Data Engineering (Hadoop)",
      ],
    },
  ],

  skills: [
    {
      category: "Backend & Core",
      items: ["Java", "Node.js", "Express", "Python", "Django"],
    },
    {
      category: "DevOps & Security",
      items: ["SonarQube", "Snyk", "CI/CD", "Jenkins", "Shell Scripting"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "NoSQL", "RDBMS", "Data Warehousing"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "HTML", "Tailwind CSS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Visual Studio Code", "JIRA", "REST APIs"],
    },
    {
      category: "Architecture",
      items: ["Microservices", "RESTful API", "System Design", "SDLC"],
    },
  ],

  projects: [
    {
      name: "Fleet Management - Code Orchestration Framework",
      description: "A centralized automation framework that manages and orchestrates code transformations across 100+ code repositories with automatic merge/pull request generation",
      date: "At Accenture",
      highlights: [
        "Developed a sophisticated orchestration framework that takes GitHub/GitLab repositories as input and applies standardized code transformations based on user-selected recipes",
        "Designed and implemented standardized code transformations (e.g., addBILogger) enabling consistent logging practices across all teams",
        "Automated merge/pull request generation reducing manual effort and improving developer productivity",
        "Orchestrated transformations across 100+ code repositories with high scalability and reliability",
        "Reduced manual code modification time by 80% across teams",
        "Enabled developers to apply batch transformations with a single click while maintaining code consistency",
      ],
      technologies: ["Node.js", "Express", "GitHub API", "GitLab API", "Automation", "Orchestration"],
      location: "Bangalore, Karnataka",
    },
    {
      name: "Repository Graph Visualization Application",
      description: "An intelligent code analysis and visualization tool that transforms GitHub/GitLab repositories into interactive graph visualizations showing architecture and dependencies",
      date: "At Accenture",
      highlights: [
        "Developed an interactive codebase visualization module using D3.js that analyzes repository structure",
        "Implemented automatic code analysis to extract and map file, class, function, and import relationships",
        "Created node and edge representations where files, classes, and functions are nodes with connections showing their dependencies",
        "Generated dynamic HTML pages with beautiful, interactive D3 graph visualizations",
        "Enabled teams to understand complex multi-language repository architecture instantly",
        "Supports both GitHub and GitLab repositories with seamless integration",
        "Provides intuitive visualization of codebase dependencies and structure",
      ],
      technologies: ["D3.js", "React", "GitHub API", "GitLab API", "Data Visualization", "Node.js"],
      location: "Bangalore, Karnataka",
    },
    {
      name: "Internal Frameworks & Libraries Suite",
      description: "Enterprise-grade frameworks and libraries created for internal use, serving 200+ teams with comprehensive modules for security, logging, and client utilities",
      date: "At Accenture",
      highlights: [
        "Designed and built reusable security modules implementing multiple authentication methods (JWT, Basic Authentication, OAuth, and more)",
        "Developed a comprehensive logger module providing consistent logging across all enterprise applications",
        "Created client utilities module simplifying API communication and data handling",
        "Built additional utility modules for common enterprise use cases",
        "Successfully adopted by 200+ internal teams reducing development time and ensuring consistency",
        "Maintained high code quality standards using SonarQube and security scanning with Snyk",
        "Actively participated in code reviews and design discussions to maintain architecture standards",
        "Documented all modules with comprehensive API documentation and usage examples",
      ],
      technologies: ["Node.js", "Express", "JWT", "OAuth", "TypeScript", "npm", "SonarQube", "Snyk"],
      location: "Bangalore, Karnataka",
    },
    {
      name: "CollegeKart - E-Commerce Platform",
      description: "An e-commerce platform designed for college students to facilitate buying and selling of products within the college community",
      date: "01/2022 - 12/2022",
      highlights: [
        "Created a user-friendly interface for college students to buy and sell products",
        "Implemented SEO techniques that increased website traffic significantly",
        "Managed a team of developers and designers to create the platform interface",
        "Developed full-stack e-commerce features including product listings and user authentication",
      ],
      technologies: ["Full Stack", "Web Development"],
      location: "Gwalior, Madhya Pradesh",
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Madhav Institute Of Technology and Science",
      location: "Gwalior, Madhya Pradesh",
      startDate: "08/2019",
      endDate: "05/2023",
      gpa: "8.37 / 10",
    },
  ],

  certifications: [
    {
      name: "GitHub Copilot Certification",
      issuer: "Microsoft",
      issueDate: "14 November 2025",
      expiryDate: "15 November 2027",
      credentialId: "E57C8DE927086221",
      certificationNumber: "AY6641-1256D2",
      verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/",
      description: "Professional certification demonstrating expertise in GitHub Copilot and AI-assisted development",
      imagePath: "/my-portfolio/images/certifications/microsoft-github-copilot.png",
    },
  ],
};
