export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  portrait: string;
  color: string;
};

export type TestimonialsContent = {
  heading: string;
  intro: string;
  items: readonly [Testimonial, Testimonial, Testimonial];
};

export const testimonialsContent = {
  heading: "What Our Clients Say",
  intro:
    "Discover why our clients trust us. Read what they have to say about our services, solutions, and dedication to their success. We take pride in their feedback and look forward to serving you with the same level of excellence.",
  items: [
    {
      id: "ecom-solutions",
      quote:
        "Working with Omegup was a game-changer for our business. Their web development expertise transformed our online presence, making it not only visually stunning but also incredibly user-friendly.",
      name: "John Smith",
      role: "Founder of EcomSolutions",
      portrait: "p3.png",
      color: "#FC7557",
    },
    {
      id: "tech-wizards",
      quote:
        "Chez Omegup, we found a team that not only takes pride in their work but also delivers outstanding results. Their innovative solutions and dedication to our project exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO of TechWizards Inc",
      portrait: "p2.png",
      color: "#949CFF",
    },
    {
      id: "streamline",
      quote:
        "Omegup has been a valuable partner in our online journey. Their web development skills have helped us reach new heights. They designed a website that not only looks fantastic but also performs seamlessly.",
      name: "Alex Turner",
      role: "COO of Streamline Logistics",
      portrait: "p1.png",
      color: "#FEC63A",
    },
  ],
} as const satisfies TestimonialsContent;
