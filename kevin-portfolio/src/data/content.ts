export const siteContent = {
  meta: {
    title: "Kevin's Portfolio",
    description: "Learn more about my skills and experiences!",
    author: "Kevin Zhang",
  },

  hero: {
    name: "Kevin Zhang",
    photo:
      "https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400",
    titles: ["Software Engineer", "@ Meta"],
  },

  about: {
    headline: "About Me",
    bio: "Software Engineer at Meta on the Instagram New User Experiences and Friending team, driving growth through A/B experimentation and product development. BS/MSE in Computer Science from Johns Hopkins University, May 2025.",
    highlights: [
      { line1: "Highly motivated,", line2: "a collaborative worker &", line3: "love learning new things" },
      { line1: "Experience building", line2: "across mobile, backend,", line3: "and full-stack" },
    ],
  },

  experience: {
    headline: "In the past,",
    body: "I've worked across mobile iOS, full-stack web, and AI/data engineering. Previously at Potions building AI-powered newsletter tooling, at Aimply.io running a data pipeline processing 10,000+ URLs daily for 15,000+ users, and at Voyce leading user management development for 1,000+ clients.",
  },

  workExperience: [
    {
      company: "Meta",
      role: "Software Engineer, Instagram Growth",
      period: "July 2025 – Present",
      location: "Menlo Park, CA",
      highlight:
        "On the Instagram New User Experiences & Friending team — drove +16,000 DAU increase through onboarding surfaces, push notification upsells, and A/B experimentation at scale.",
      url: "https://about.meta.com/",
    },
    {
      company: "Potions",
      role: "Software Engineer",
      period: "May 2024 – Nov 2024",
      location: "Remote",
      highlight:
        "Built an AI agent interviewer for extracting user insights and generating social media content; developed intelligent newsletter blueprint generation via web scraping.",
      url: "https://withpotions.com/",
    },
    {
      company: "Voyce",
      role: "Software Engineer Intern",
      period: "May 2024 – Nov 2024",
      location: "Sunrise, FL",
      highlight:
        "Led development of a user signup and dashboard system serving 1,000+ clients; scaled a SQL Server to handle 10,000+ monthly transactions with Stripe payment integration.",
      url: "https://web.voyceglobal.com/",
    },
    {
      company: "Aimply.io",
      role: "Software Engineer",
      period: "Jan 2024 – Nov 2024",
      location: "Remote",
      highlight:
        "Built a data pipeline processing 10,000+ URLs daily for 15,000+ users; improved newsletter accuracy 20% via OpenAI & Tavily integration; cut processing time 500% with multi-threading.",
      url: "https://briefs.aimply.io/",
    },
  ],

  projects: [
    {
      name: "TechStack",
      description:
        "A website that scrapes tech products from popular sites such as Amazon, Newegg, and BestBuy.",
      url: "https://techstackshop.com",
      linkLabel: "Check it out!",
    },
    {
      name: "Flashcard Fighter",
      description:
        "A gamified flashcard web app — create your own flashcards and battle against other users.",
      url: "https://flashcard-fighter.vercel.app/",
      linkLabel: "Battle now!",
    },
    {
      name: "HopDrop",
      description:
        "A mobile food delivery app targeted at Hopkins students, built with React Native.",
      url: "https://github.com/Kevin3874/HopDrop-React-Native",
      linkLabel: "See the source code!",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["Swift", "Objective-C", "Python", "JavaScript", "TypeScript", "C#", "C", "C++"],
    },
    {
      category: "Full-Stack Development",
      items: ["React.js", "Node.js", "Express", ".NET", "RESTful Services", "Firebase", "SQL Server", "OAuth 2.0"],
    },
    {
      category: "Platforms & Tooling",
      items: ["LangChain", "OpenAI", "Stripe API", "Microsoft Graph API", "Redis", "Docker"],
    },
  ],

  links: {
    resume:
      "https://drive.google.com/file/d/1GvNdp-DH8GlxglWUYtUFaywgS9ZPYoRN/view?usp=sharing",
    github: "https://github.com/Kevin3874",
    linkedin: "https://www.linkedin.com/in/kevinzhang25/",
    notion:
      "https://kevinzhang25.notion.site/kevinzhang25/Kevin-Zhang-80f3a8cf8e704dc4bede040bc411037e",
  },

  contact: {
    headline: "Reach out to me!",
    subtext: ["Want to learn more about me?", "Have a project you want to work on?"],
    email: "zzsshwkevin@gmail.com",
    phone: "(813) 842-6045",
  },
};
