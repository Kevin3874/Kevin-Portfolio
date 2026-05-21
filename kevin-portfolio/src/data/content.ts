export const siteContent = {
  meta: {
    title: "Kevin's Portfolio",
    description: "Learn more about my skills and experiences!",
    author: "Kevin Zhang",
  },

  hero: {
    name: "Kevin Zhang",
    photo: "https://lh6.googleusercontent.com/EjVF2hhC1YbjDmeqfIsS5cMq1idMpONh8KCWlTuai-avYRjFd9AWGFXvbSqgWtHc44o=w2400",
    titles: ["Software Engineer", "@ Meta"],
  },

  about: {
    headline: "About Me",
    bio: "Software Engineer at Meta working on Growth @ Instagram on the Graph Experiences team. Graduated from Johns Hopkins University with a BS/MSE in Computer Science.",
    highlights: [
      { line1: "Highly motivated,", line2: "a collaborative worker &", line3: "love learning new things" },
      { line1: "Experience building", line2: "across backend, frontend,", line3: "and mobile" },
    ],
  },

  experience: {
    headline: "In the past,",
    body: "I have worked on several teams across different fields of Software Engineering — mostly backend, but also frontend and mobile. Previously, I was a Software Engineer at Voyce Global and a contributor at Aimply. I also spent time as a Lead CA for Gateway: Python at Johns Hopkins.",
  },

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
      items: ["Python", "Java", "C#", "C/C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "REST API", "Firebase", "Socket.io", "Microsoft Graph API", "Puppeteer"],
    },
    {
      category: "Web Development",
      items: ["React.js", "Next.js", "HTML5", "CSS", "Tailwind CSS", "ASP .NET", "Bootstrap"],
    },
    {
      category: "Mobile Development",
      items: ["React Native", "Android Studio"],
    },
    {
      category: "DevOps & Tooling",
      items: ["Git", "Docker", "Postman", "OAuth 2.0", "HL7 FHIR", "ngrok"],
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
