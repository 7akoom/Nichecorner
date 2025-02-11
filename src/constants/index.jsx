import MP1 from "../assets/1.png";
import MP2 from "../assets/2.png";
import MP3 from "../assets/3.png";
import MP4 from "../assets/4.png";
import MP5 from "../assets/5.png";
import MP6 from "../assets/6.png";
import MP7 from "../assets/7.png";
import MP8 from "../assets/8.png";
import MP9 from "../assets/9.png";
import MP10 from "../assets/10.png";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Collection", targetId: "collection" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const Man = [
  {
    image: MP1,
    title: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon and cheese",
    price: "150$",
  },
  {
    image: MP2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
    price: "150$",
  },
  {
    image: MP3,
    title: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
    price: "150$",
  },
  {
    image: MP4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
    price: "150$",
  },
  {
    image: MP5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
    price: "150$",
  },
  {
    image: MP6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
    price: "150$",
  },
  {
    image: MP7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
    price: "150$",
  },
  {
    image: MP8,
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
    price: "150$",
  },
  {
    image: MP9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
    price: "150$",
  },
  {
    image: MP10,
    title: "Tiramisu",
    description: "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
    price: "150$",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: Gullan Mall - Floor 2" },
  { key: "phone", value: "Phone: +964 751-706-5163" },
  { key: "email", value: "Email: a7akoom96@gmail.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
