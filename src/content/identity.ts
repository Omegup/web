export type IdentityPanel = {
  id: string;
  image: string;
  objective: string;
  title: string;
  subtitle: string;
  body: string;
};

export type IdentityContent = {
  kicker: string;
  heading: string;
  intro: string;
  panels: readonly IdentityPanel[];
};

const panels = [
  {
    id: "panel1",
    image: "/image1.jpeg",
    objective: "Our mission",
    title: "🚀 Unleashing Digital Dreams 🌟",
    subtitle: "Eradicate regrets. Fuel ambitions. Ignite dreams.",
    body: "At Omegup, our mission is to turn your digital dreams into extraordinary realities. We're not just developers; we're dreamweavers, crafting digital marvels that defy expectations.",
  },
  {
    id: "panel2",
    image: "/image2.jpeg",
    objective: "Our vision",
    title: "🌐 Pioneering the Digital Frontier 🚀",
    subtitle: "A world where ambition knows no bounds.",
    body: "Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds, where every pixel tells a story, and where your online presence is nothing short of legendary.",
  },
  {
    id: "panel3",
    image: "/image3.jpeg",
    objective: "Our vibe",
    title: "🎨 Where Creativity Meets Code 🤝",
    subtitle: "A world where ambition knows no bounds.",
    body: "Our vibe is a fusion of artistry and technology. We're a creative powerhouse where collaboration fuels innovation, where every idea has the potential to reshape the digital universe.",
  },
  {
    id: "panel4",
    image: "/image4.jpeg",
    objective: "Our ambition",
    title: "🌟 Elevate, Innovate, Impact 🚀",
    subtitle: "Pioneer excellence. Set benchmarks.",
    body: "Our ambition knows no limits. We aspire to elevate your brand, innovate without compromise, and leave a lasting impact on the digital world. Together, we'll conquer the impossible.",
  },
] as const;

export const identityContent = {
  kicker: "What shapes our identity!",
  heading: "Our objectives have remained unwavering",
  intro:
    "Imagine, explore, delve into particulars, chase the next wild adventure, forever absorb wisdom, and leave an indelible mark on the world!",
  panels,
} satisfies IdentityContent;

export type IdentityPanelId = (typeof identityContent.panels)[number]["id"];
