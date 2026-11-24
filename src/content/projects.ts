export type Project = {
  id: string;
  title: string;
  image: string;
  shots: readonly string[];
  technologies: readonly string[];
  summary: string;
  description: readonly string[];
};

export type ProjectsContent = {
  heading: string;
  intro: string;
  items: readonly Project[];
};

const shot = (folder: string, count: number, ext = "png") =>
  Array.from(
    { length: count },
    (_, index) => `/work/${folder}/${index + 1}.${ext}`,
  );

const projectItems = [
    {
      id: "forfellow",
      title: "Forfellow",
      image: "/work/forfellow.jpg",
      shots: [
        "/work/forfellow/1.jpg",
        "/work/forfellow/2.jpg",
        "/work/forfellow/3.png",
        "/work/forfellow/4.png",
        "/work/forfellow/5.png",
      ],
      technologies: ["React", "Meteor", "MongoDB", "RxJS", "React Native"],
      summary:
        "An all-in-one school platform that brings administrators, teachers, parents, and students into one space for courses, timetables, grades, messaging, and billing.",
      description: [
        "Forfellow is an all-in-one application that brings administrators, teachers, parents, and students into the same digital space. Course management, timetables, grade tracking, messaging, and billing sit together, so daily school life is simpler and the people around a student stay in touch.",
        "Administrators manage schedules, follow students and teachers, control billing, and open reports. Teachers reach their classes, enter grades, share resources, and write to families. Parents follow grades, absences, schedules, and invoices. Students see their courses, timetable, and results.",
        "The platform works on a computer and on a phone, and it supports more than one language, so each person can reach their school from anywhere.",
      ],
    },
    {
      id: "darinov",
      title: "Darinov",
      image: "/work/darinov.png",
      shots: shot("darinov", 4),
      technologies: ["Angular", "RxJS", "Meteor", "MongoDB"],
      summary:
        "Web portal connecting customers, craftsmen, suppliers, and wholesalers in the building trades.",
      description: [
        "Web portal connecting customers, craftsmen, suppliers, and wholesalers in the building trades.",
      ],
    },
    {
      id: "apia",
      title: "Apia",
      image: "/work/apia.png",
      shots: shot("apia", 4),
      technologies: ["React Js", ".NET Core", "JavaScript", "RxEntity"],
      summary: "Web application for managing APIA projects and entrepreneurs.",
      description: [
        "Web application for managing APIA projects and entrepreneurs.",
      ],
    },
    {
      id: "dsf",
      title: "DSF Fr",
      image: "/pc3.png",
      shots: ["/pc3.png"],
      technologies: ["React", "NodeJS"],
      summary:
        "DSF Déménagement Services France is your trusted partner for all your moving needs in France. With many years of experience, we provide tailor-made moving solutions for businesses and individuals.",
      description: [
        "DSF Déménagement Services France is your trusted partner for all your moving needs in France. With many years of experience, we provide tailor-made moving solutions for businesses and individuals.",
      ],
    },
    {
      id: "food-delivery",
      title: "Food delivery",
      image: "/work/food-delivery.png",
      shots: shot("food-delivery", 7),
      technologies: ["React Js", "Meteor", "MongoDB", "RxJS"],
      summary:
        "Web app for selling food and groceries, tracking deliveries, and managing customer and provider services.",
      description: [
        "Web app for selling food and groceries, tracking deliveries, and managing customer and provider services.",
      ],
    },
    {
      id: "jupiter",
      title: "Jupiter",
      image: "/work/jupiter.png",
      shots: shot("jupiter", 6),
      technologies: ["React Js", "Redux", "API Platform", "Symfony"],
      summary:
        "A complete web-based business management solution, designed and developed for day-to-day operations.",
      description: [
        "A complete web-based business management solution, designed and developed for day-to-day operations.",
      ],
    },
    {
      id: "ateliers-77",
      title: "Atéliers-77",
      image: "/img1.png",
      shots: ["/img1.png"],
      technologies: ["HTML5", "CSS3", "React", "NodeJS", "Tailwind"],
      summary:
        "We have developed a stylish and functional website for Atelier-77 to showcase their expertise in signage and digital printing. The website provides an intuitive user experience and highlights their impressive portfolio of projects.",
      description: [
        "We have developed a stylish and functional website for Atelier-77 to showcase their expertise in signage and digital printing. The website provides an intuitive user experience and highlights their impressive portfolio of projects.",
      ],
    },
    {
      id: "novnshare",
      title: "Nov'N'Share",
      image: "/work/novnshare.png",
      shots: shot("novnshare", 5),
      technologies: ["PHP", "SystemPay", "jQuery", "Bootstrap"],
      summary:
        "Four spaces for entrepreneurs: information and support, crowdfunding, a network of innovators and investors, and an online shop.",
      description: [
        "Nov'N'Consult: a space offering the entrepreneur access to open and paid information resources, as well as different support formulas.",
        "Nov'N'Collect: a co-funding space for collecting funds through crowdfunding or borrowing from individuals.",
        "Nov'N'Link: a mini-social network to bring innovators together with investors and other collaborators.",
        "Nov'N'Shop: an online sales area.",
      ],
    },
    {
      id: "didasko",
      title: "Didasko",
      image: "/work/didasko.png",
      shots: shot("didasko", 8),
      technologies: ["Angular", "RxJS", "Meteor", "MongoDB"],
      summary:
        "A tool for identifying training needs of SMEs in Abitibi-Témiscamingue with 10 to 100 employees. The pilot ran with 50 companies from November 2021 to January 2022.",
      description: [
        "A tool for identifying training needs intended for SMEs in Abitibi-Témiscamingue that employ 10 to 100 employees. This is a pilot tool deployed with 50 companies from November 2021 to January 2022.",
      ],
    },
    {
      id: "wazzta",
      title: "Wazzta",
      image: "/work/wazzta.jpg",
      shots: [
        ...shot("wazzta", 3, "jpg"),
        "/work/wazzta/4.jpeg",
        ...shot("wazzta", 5, "jpg").map(
          (_, index) => `/work/wazzta/${index + 5}.jpg`,
        ),
      ],
      technologies: ["React Native", "Oracle", "LoopBack"],
      summary:
        "A social network mobile application that helps students build their careers with universities, clubs, and other partners.",
      description: [
        "A social network mobile application that helps students build their careers with the collaboration of universities, clubs, and other partners.",
      ],
    },
  ] as const;

export const projectsContent1 = {
  heading: "Project Showcase",
  intro:
    "At Omegup, we take pride in our web solutions. Explore our featured projects to see the results of our collaboration with clients who entrusted us with their web development needs.",
  items: projectItems,
} satisfies ProjectsContent;
export const projectsContent = {
  ...projectsContent1,
  items: projectsContent1.items.slice(0, -3),
};
export function projectById(id: string) {
  return projectsContent.items.find((project) => project.id === id);
}
