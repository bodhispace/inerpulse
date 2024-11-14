
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  { id: 1, title: "Home", path: "/", newTab: false },
  { id: 2, title: "About Us", path: "/about", newTab: false },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      { id: 31, title: "Odoo Implementation", path: "/services/implementation", newTab: false },
      { id: 32, title: "Odoo Customization", path: "/services/customization", newTab: false },
      { id: 33, title: "Odoo Migration", path: "/services/migration", newTab: false },
      { id: 34, title: "Odoo Support & Maintenance", path: "/services/support", newTab: false },
      { id: 35, title: "Odoo Training", path: "/services/training", newTab: false },
    ],
  },
  {
    id: 4,
    title: "Industries",
    newTab: false,
    submenu: [
      { id: 41, title: "Manufacturing", path: "/industries/manufacturing", newTab: false },
      { id: 42, title: "Retail", path: "/industries/retail", newTab: false },
      { id: 43, title: "Healthcare", path: "/industries/healthcare", newTab: false },
      { id: 44, title: "E-commerce", path: "/industries/ecommerce", newTab: false },
      { id: 45, title: "Education", path: "/industries/education", newTab: false },
    ],
  },
  { id: 5, title: "Contact Us", path: "/contact", newTab: false },
];

export default menuData;