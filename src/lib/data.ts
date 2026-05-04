export const restaurant = {
  name: "The Smokey Cauldron",
  tagline: "A Magical Dining Experience",
  description: "Nestled in the heart of Islamabad, The Smokey Cauldron is a sanctuary for those who appreciate the finer side of the magical arts. From our legendary Butterbeer to our charcoal-fired burgers, every detail is crafted to transport you to another world.",
  hours: {
    weekday: "11:00 AM - 11:30 PM",
    weekend: "11:00 AM - 12:30 AM"
  },
  address: "F-6 Markaz, Islamabad",
  phone: "+92 312 5555666",
};

export const menuItems = [
  {
    category: "Starters & Platters",
    items: [
      {
        name: "Molly's Wings Platter",
        price: "Rs. 1250",
        description: "9 succulent chicken wings tossed in a trio of magical sauces, served with a side of house-made ranch.",
      },
      {
        name: "Dynamite Chicken",
        price: "Rs. 950",
        description: "Crispy chicken bites glazed in a spicy, sriracha-infused magical sauce.",
      },
      {
        name: "Loaded Forbidden Fries",
        price: "Rs. 750",
        description: "Golden fries topped with melted cheese, jalapenos, and a drizzle of secret cauldron sauce.",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Fluffy's Carbonara Pasta",
        price: "Rs. 1450",
        description: "Fettuccine in a creamy black pepper carbonara with grilled chicken and sautéed mushrooms.",
      },
      {
        name: "Sprout's Spicy Chicken Pasta",
        price: "Rs. 1350",
        description: "Penne pasta tossed in a fiery arrabbiata sauce with garden-fresh herbs and grilled chicken.",
      },
      {
        name: "Dark Arts Chicken Burger",
        price: "Rs. 1150",
        description: "A charcoal-bun burger featuring a crispy chicken fillet, spicy mayo, and mysterious dark slaw.",
      },
      {
        name: "Dobby's Delight Burger",
        price: "Rs. 1050",
        description: "A classic juicy chicken burger with lettuce, tomato, and Dobby's favorite secret sauce.",
      },
    ],
  },
  {
    category: "Potions & Beverages",
    items: [
      {
        name: "Signature Butterbeer",
        price: "Rs. 650",
        description: "Our world-famous caramel and vanilla milkshake topped with a thick, frothy magical cream.",
      },
      {
        name: "Red Lion Margarita",
        price: "Rs. 550",
        description: "A Gryffindor-inspired strawberry margarita with a zesty citrus twist.",
      },
      {
        name: "Snakebite Margarita",
        price: "Rs. 550",
        description: "A Slytherin-inspired refreshing mint and lime margarita with a dangerous kick.",
      },
      {
        name: "The Goblet of Fire",
        price: "Rs. 450",
        description: "Sparkling green apple lemonade that glows with a mysterious inner fire.",
      },
    ],
  },
];

export const houses = [
  { name: "Gryffindor", color: "#740001", accent: "#ae0001" },
  { name: "Slytherin", color: "#1a472a", accent: "#2a623d" },
  { name: "Ravenclaw", color: "#0e1a40", accent: "#222f5b" },
  { name: "Hufflepuff", color: "#ecb939", accent: "#f0c75e" },
];

export const galleryImages = [
  { 
    title: "The Great Hall", 
    image: "/images/gallery/great-hall.png",
    alt: "Our main dining area with floating candles and house banners." 
  },
  { 
    title: "Potions Lab", 
    image: "/images/gallery/potions-lab.png",
    alt: "An interactive bar area for brewing your own magical beverages." 
  },
  { 
    title: "The Common Room", 
    image: "/images/gallery/common-room.png",
    alt: "A cozy lounge area for relaxing with a warm Butterbeer." 
  },
  { 
    title: "The Forbidden Forest", 
    image: "/images/gallery/great-hall.png",
    alt: "Our outdoor terrace with atmospheric lighting and greenery." 
  },
];
