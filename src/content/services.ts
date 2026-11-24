export type ServicePoint = {
  label: string;
  body: string;
};

export type Service = {
  id: string;
  title: string;
  icon: string;
  points: readonly ServicePoint[];
};

export type ServicesContent = {
  heading: string;
  intro: string;
  items: readonly Service[];
};

const services = [
  {
    id: "web",
    title: "Web Development",
    icon: "/image50.png",
    points: [
      {
        label: "Website Design & Development",
        body: "Craft websites that leave a lasting impression and drive results.",
      },
      {
        label: "Web App Development",
        body: "Build dynamic and powerful web applications to meet your unique needs.",
      },
      {
        label: "Responsive Design",
        body: "Ensure your web presence is seamless across all devices.",
      },
    ],
  },
  {
    id: "design",
    title: "UX/UI Design",
    icon: "/image51.png",
    points: [
      {
        label: "User-Centric Design",
        body: "We create intuitive and visually stunning user interfaces that captivate and engage.",
      },
      {
        label: "User Research",
        body: "Uncover insights to inform design decisions and enhance user experiences.",
      },
      {
        label: "Prototyping & Testing",
        body: "Refine designs through iterative prototyping and user testing.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: "/image49.png",
    points: [
      {
        label: "iOS & Android Apps",
        body: "Develop mobile apps that shine on every platform and provide exceptional user experiences.",
      },
      {
        label: "Mobile Strategy",
        body: "Create strategies to conquer the mobile market and reach your audience effectively.",
      },
      {
        label: "App Optimization",
        body: "Enhance app performance.",
      },
    ],
  },
] as const;

export const servicesContent = {
  heading: "Our Services",
  intro:
    "At Omegup, we specialize in crafting exceptional digital experiences. Our core services include:",
  items: services,
} satisfies ServicesContent;
