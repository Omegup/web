export type Project = {
  id: string;
  title: string;
  image: string;
  technologies: readonly string[];
  summary: string;
  color: "#FEC63A" | "#949CFF" | "#FC7557";
};

export type ProjectsContent = {
  heading: string;
  intro: string;
  items: readonly Project[];
};

export const projectsContent = {
  heading: "Project Showcase",
  intro:
    "At Omegup, we take pride in our web solutions. Explore our featured projects to see the results of our collaboration with clients who entrusted us with their web development needs.",
  items: [
    {
      id: "ateliers-77",
      title: "Atéliers-77",
      image: "img1.png",
      technologies: ["HTML5", "CSS3", "React", "NodeJS", "Tailwind"],
      summary:
        "We have developed a stylish and functional website for Atelier-77 to showcase their expertise in signage and digital printing. The website provides an intuitive user experience and highlights their impressive portfolio of projects.",
      color: "#FEC63A",
    },
    {
      id: "school-online",
      title: "School Online Tn",
      image: "pc2.png",
      technologies: ["React", "NextJS", "NodeJS", "MongoDB"],
      summary:
        "Solution School is the comprehensive answer to the management needs of private schools. Our platform provides a suite of robust tools and features that enable educational institutions to efficiently manage all aspects of their operations.",
      color: "#949CFF",
    },
    {
      id: "dsf",
      title: "DSF Fr",
      image: "pc3.png",
      technologies: ["React", "NodeJS"],
      summary:
        "DSF Déménagement Services France is your trusted partner for all your moving needs in France. With many years of experience, we provide tailor-made moving solutions for businesses and individuals.",
      color: "#FC7557",
    },
    {
      id: "abc-school",
      title: "Abc school",
      image: "/work/abc-school.png",
      technologies: ["React Js", "Meteor", "MongoDB", "RxJS"],
      summary:
        "Web site for managing school internal services, including separate spaces for students, parents, and teachers.",
      color: "#FEC63A",
    },
    {
      id: "food-delivery",
      title: "Food delivery",
      image: "/work/food-delivery.png",
      technologies: ["React Js", "Meteor", "MongoDB", "RxJS"],
      summary:
        "Web app for selling food and groceries, tracking deliveries, and managing customer and provider services.",
      color: "#949CFF",
    },
    {
      id: "apia",
      title: "Apia",
      image: "/work/apia.png",
      technologies: ["React Js", ".NET Core", "JavaScript", "RxEntity"],
      summary:
        "Web application for managing APIA projects and entrepreneurs.",
      color: "#FC7557",
    },
    {
      id: "jupiter",
      title: "Jupiter",
      image: "/work/jupiter.png",
      technologies: ["React Js", "Redux", "API Platform", "Symfony"],
      summary:
        "A complete web-based business management solution, designed and developed for day-to-day operations.",
      color: "#FEC63A",
    },
    {
      id: "darinov",
      title: "Darinov",
      image: "/work/darinov.png",
      technologies: ["Angular", "RxJS", "Meteor", "MongoDB"],
      summary:
        "Web portal connecting customers, craftsmen, suppliers, and wholesalers in the building trades.",
      color: "#949CFF",
    },
    {
      id: "novnshare",
      title: "Nov'N'Share",
      image: "/work/novnshare.png",
      technologies: ["PHP", "SystemPay", "jQuery", "Bootstrap"],
      summary:
        "Nov'N'Consult gives entrepreneurs open and paid information resources, plus support formulas. Nov'N'Collect raises funds through crowdfunding or loans from individuals. Nov'N'Link is a small network connecting innovators, investors, and collaborators. Nov'N'Shop is the online sales area.",
      color: "#FC7557",
    },
    {
      id: "didasko",
      title: "Didasko",
      image: "/work/didasko.png",
      technologies: ["Angular", "RxJS", "Meteor", "MongoDB"],
      summary:
        "A tool for identifying training needs of SMEs in Abitibi-Témiscamingue with 10 to 100 employees. The pilot ran with 50 companies from November 2021 to January 2022.",
      color: "#FEC63A",
    },
    {
      id: "wazzta",
      title: "Wazzta",
      image: "/work/wazzta.jpg",
      technologies: ["React Native", "Oracle", "LoopBack"],
      summary:
        "A social network mobile application that helps students build their careers with universities, clubs, and other partners.",
      color: "#949CFF",
    },
  ],
} as const satisfies ProjectsContent;
