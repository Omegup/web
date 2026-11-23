export type ServicePoint = {
  label: string;
  body: string;
};

export type Service = {
  id: string;
  title: string;
  icon: string;
  color: string;
  points: readonly ServicePoint[];
};

export type ServicesContent = {
  heading: string;
  intro: string;
  items: readonly Service[];
};

export const servicesContent = {
  heading: "Our Services",
  intro:
    "At Omegup, we specialize in crafting exceptional digital experiences. Our core services include:",
  items: [
    {
      id: "web",
      title: "Web Development",
      icon: "/image50.png",
      color: "#949CFF",
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
        {
          label: "WordPress & Magento",
          body: "Design and build on WordPress and Magento, from the front of the site through to the back.",
        },
        {
          label: "Proof of concept & MVP",
          body: "Launch a proof of concept or a first product quickly, then scale it with a stronger team.",
        },
        {
          label: "SEO & hosting",
          body: "Cover search visibility, social presence, email, and the hosting that keeps the product online.",
        },
      ],
    },
    {
      id: "design",
      title: "UX/UI Design",
      icon: "/image51.png",
      color: "#FC7557",
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
        {
          label: "Brand identity",
          body: "Shape the logo, the visual identity, and the photography so the brand stays consistent.",
        },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: "/image49.png",
      color: "#FEC63A",
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
  ],
} as const satisfies ServicesContent;
