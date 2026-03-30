export const profile = {
  name: "Thanh Luong",
  shortName: "Thanh",
  title: "Creative Producer building immersive, story-driven brand experiences",
  roles: ["Creative Producer", "Brand Experience Builder", "Story-Driven Maker"],
  location: "San Francisco, CA",
  intro:
    "I build worlds people can step into, blending storytelling, design, and production into experiences people can feel both online and in person.",
  bio: [
    "I build worlds people can step into. I am drawn to turning ideas into real, lived experiences, blending storytelling, design, and production into something people can feel both online and in person.",
    "From growing a vintage fashion community of 5,000+ to designing products shipped worldwide, I have learned by building and refining as I go. Most recently, I founded mamī, a matcha pop-up in San Francisco where I create immersive, community-driven events shaped by thoughtful details and shared moments.",
    "I am currently studying film production to deepen how I tell stories and bring ideas to life, continuing to explore how physical experiences and digital content can work together as one.",
  ],
  email: "thanhluong1905@gmail.com",
  instagram: "https://www.instagram.com/thnh.nl/",
  linkedin: "https://www.linkedin.com/in/thanh-luong/",
};

export const stats = [
  { label: "Vintage fashion community grown through Cham Studio", value: "5K+" },
  { label: "Brands and ventures built from concept to launch", value: "3" },
  { label: "Disciplines blended into one creative practice", value: "4" },
];

export const featuredProjects = [
  {
    id: "cham-studio",
    name: "Cham Studio",
    category: "Fashion / Curation / Taste",
    year: "2020-2022",
    description:
      "I explore taste through curation.\nCham is an online vintage bag studio rooted in personal style, where each piece was selected, styled, and photographed as part of a growing visual identity, generating $30,000+ in revenue within 6 months and reaching an audience of over 5,000.\n\nWorking on Cham became a way of learning my eye in public, understanding what resonates, and shaping a point of view through what I chose to put into the world.",
    palette: "Walnut, cream, oxblood",
    tools: ["Curator", "Creative Direction", "Stylist", "Visual Design"],
    image: "/cham%20studio%20cover.mov",
    galleryImages: [
      "/cham%20studio%20cover.mov",
      "/IMG_3714.jpg",
      "/IMG_1772.jpg",
      "/IMG_3561.jpg",
      "/IMG_3601.jpg",
      "/IMG_3613.jpg",
      "/IMG_3553.jpg",
      "/IMG_2290.jpg",
      "/IMG_2273%20(1).jpg",
      "/IMG_1764.jpg",
    ],
    link: "https://www.instagram.com/chamstudioco/",
  },
  {
    id: "mooshie-co",
    name: "Mooshie Co.",
    category: "Product / Creative Direction",
    year: "2021 - 2022",
    description:
      "I turn ideas into something people can hold.\nAt its core, Mooshie is about encouraging young creators to take what exists in their imagination and bring it into the real world. What started as a childhood drawing became a product shared globally, with over 400 units sold through a self-built brand.\n\nEach piece explores how something small can carry comfort, connection, and meaning beyond the screen.",
    palette: "Powder blue, oat, blush",
    tools: ["Product Development", "Brand Identity", "Production", "Direct-to-Consumer", "Marketing"],
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80",
      "/mooshie%20concept%20video.mp4",
      "/IMG_1753.jpg",
      "/IMG_12C27EE4F379-1.jpeg",
      "/mooshie%20gallery.png",
      "/mooshie%20gallery%202.png",
    ],
    link: "https://mooshie-company.myshopify.com/",
  },
  {
    id: "mami-matcha",
    name: "Mamī Matcha",
    category: "Pop-up / Community / Storytelling",
    year: "2025 - Present",
    description:
      "Founded a San Francisco-based matcha pop-up designed as an immersive, community-driven space. Each event brings together drinks, spatial flow, and storytelling to shape a shared experience. I lead end-to-end production across concept, menu design, and execution.",
    palette: "Matcha, stone, cedar",
    tools: ["Experience Designer", "Creative Producer", "Brand Builder", "Storyteller"],
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    ],
    link: "https://www.instagram.com/mamimatchasf/",
  },
];

export function getFeaturedProjectById(id: string) {
  return featuredProjects.find((project) => project.id === id);
}

export const personalWorks = [
  {
    title: "A Love Letter to San Francisco, the City I Almost Left Behind",
    format: "Video / Visual Essay",
    video: "/love%20letter%20to%20sf%20portfolio%20cover.mov",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.youtube.com/watch?v=l0I7aZU_X4M",
    blurb:
      "A personal reflection on rediscovering San Francisco through everyday moments, atmosphere, and a softer, more intentional lens.",
  },
  {
    title: "The Art of Meaningful Connections",
    format: "Video / Visual Essay",
    video: "/art%20of%20meaningful%20connections.mov",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.instagram.com/p/DFwDjq-Sn3q/?img_index=1",
    blurb:
      "A reflective piece exploring what it means to genuinely connect with others in a fast-moving world through quiet, observational moments and layered storytelling.",
  },
  {
    title: "Postcards From Cavallo Point",
    format: "Photo + Video / Visual Essay",
    video: "/freda%20b.mov",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.instagram.com/p/DI4cWz8Tg5s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    blurb:
      "A visual storytelling project capturing quiet, reflective moments through curated imagery and text overlays, exploring memory, place, and feeling.",
  },
  {
    title: "Shibuya City Walk",
    format: "Photo Carousel / Visual Essay",
    video: "/shibuya%20city%20walk.mov",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.instagram.com/p/DKTbwvCxITG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    blurb:
      "A cinematic walkthrough of Tokyo, blending movement, environment, and styling into a narrative-driven visual experience.",
  },
  {
    title: "casual(ty) - TANNY SS25",
    format: "Photo Carousel / Editorial Series",
    image: "/casualty%20cover.PNG",
    link: "https://www.instagram.com/p/DHcOVruvXxi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    blurb:
      "The first release from TANNY SS25, exploring the death of casual through styled outfits across contrasting environments.",
  },
  {
    title: "How Do You Find Your Personal Style? - TANNY FW25",
    format: "Photo Carousel / Editorial Series",
    image: "/personal%20style%20cover.PNG",
    link: "https://www.instagram.com/p/DOzRKcnD3DV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    blurb:
      "Part of the ongoing TANNY magazine series, reflecting on personal style as something shaped over time through observation, experimentation, and self-trust.",
  },
];

export const services = [
  {
    title: "Creative Direction",
    description:
      "Translating an idea into a cohesive world through visual language, mood, storytelling, and production detail.",
  },
  {
    title: "Experiential Branding",
    description:
      "Shaping physical and digital touchpoints so an event, pop-up, or brand moment feels immersive from end to end.",
  },
  {
    title: "Visual Storytelling",
    description:
      "Building narrative across stills, motion, copy, and content so each project lands with emotional clarity.",
  },
  {
    title: "Brand and Product Launches",
    description:
      "Taking ideas from concept to launch across product development, branding, e-commerce, and audience growth.",
  },
];

export const principles = [
  "A portfolio should feel like a world, not a folder.",
  "Strong pacing matters as much as strong visuals.",
  "Clarity and atmosphere can coexist in the same interface.",
];

export const experience = [
  {
    role: "Founder and Creative Producer",
    company: "Mamī Matcha",
    period: "2024 - Present",
    description:
      "Creating immersive, community-driven pop-up experiences in San Francisco through event production, storytelling, menu design, and brand content.",
  },
  {
    role: "Founder and Designer",
    company: "Mooshie Co.",
    period: "2021 - 2023",
    description:
      "Designed plush toy products from original character sketches and managed branding, production, Shopify operations, and international fulfillment.",
  },
  {
    role: "Founder and Creative Lead",
    company: "Cham Studio",
    period: "2020 - 2022",
    description:
      "Built and grew a vintage fashion community through sourcing, styling, photography, and consistent social storytelling.",
  },
];

export const capabilities = [
  "Creative direction",
  "Event production",
  "Brand design",
  "Content creation",
  "Art direction",
  "Social strategy",
  "Photography",
  "Visual storytelling",
  "Product development",
];

export const contactOptions = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Instagram",
    value: "@thnh.nl",
    href: profile.instagram,
  },
  {
    label: "LinkedIn",
    value: "Thanh Luong",
    href: profile.linkedin,
  },
];
