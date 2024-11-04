import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Our Mission",
        path: "/about-us",
        newTab: false,
      },
      {
        id: 22,
        title: "Why Choose Inerpulse",
        path: "/why-choose-us",
        newTab: false,
      },
      {
        id: 23,
        title: "Our Team",
        path: "/our-team",
        newTab: false,
      },
      {
        id: 24,
        title: "Success Stories",
        path: "/success-stories",
        newTab: false,
      },
    ],
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Consulting Services",
        path: "/services/consulting",
        newTab: false,
        submenu: [
          {
            id: 311,
            title: "Odoo Consultation",
            path: "/services/consulting/odoo-consultation",
            newTab: false,
          },
          {
            id: 312,
            title: "Business Process Analysis",
            path: "/services/consulting/business-process-analysis",
            newTab: false,
          },
        ],
      },
      {
        id: 32,
        title: "Odoo Implementation",
        path: "/services/implementation",
        newTab: false,
        submenu: [
          {
            id: 321,
            title: "Odoo ERP Integration",
            path: "/services/implementation/odoo-erp-integration",
            newTab: false,
          },
          {
            id: 322,
            title: "Custom Module Development",
            path: "/services/implementation/custom-module-development",
            newTab: false,
          },
          {
            id: 323,
            title: "Odoo Configuration",
            path: "/services/implementation/odoo-configuration",
            newTab: false,
          },
        ],
      },
      {
        id: 33,
        title: "Support & Maintenance",
        path: "/services/support",
        newTab: false,
        submenu: [
          {
            id: 331,
            title: "Odoo Support Services",
            path: "/services/support/odoo-support",
            newTab: false,
          },
          {
            id: 332,
            title: "System Monitoring & Maintenance",
            path: "/services/support/system-monitoring",
            newTab: false,
          },
        ],
      },
      {
        id: 34,
        title: "Training & Resources",
        path: "/services/training",
        newTab: false,
        submenu: [
          {
            id: 341,
            title: "Odoo User Training",
            path: "/services/training/odoo-user-training",
            newTab: false,
          },
          {
            id: 342,
            title: "Technical Documentation",
            path: "/services/training/technical-documentation",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Solutions",
    path: "/solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Industry Solutions",
        path: "/solutions/industry",
        newTab: false,
        submenu: [
          {
            id: 411,
            title: "Manufacturing",
            path: "/solutions/industry/manufacturing",
            newTab: false,
          },
          {
            id: 412,
            title: "Retail & E-Commerce",
            path: "/solutions/industry/retail-ecommerce",
            newTab: false,
          },
          {
            id: 413,
            title: "Healthcare",
            path: "/solutions/industry/healthcare",
            newTab: false,
          },
        ],
      },
      {
        id: 42,
        title: "Business Solutions",
        path: "/solutions/business",
        newTab: false,
        submenu: [
          {
            id: 421,
            title: "CRM & Sales",
            path: "/solutions/business/crm-sales",
            newTab: false,
          },
          {
            id: 422,
            title: "Accounting & Finance",
            path: "/solutions/business/accounting-finance",
            newTab: false,
          },
          {
            id: 423,
            title: "Supply Chain Management",
            path: "/solutions/business/supply-chain-management",
            newTab: false,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Products",
    path: "/products",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Odoo Apps",
        path: "/products/odoo-apps",
        newTab: false,
        submenu: [
          {
            id: 511,
            title: "Odoo CRM",
            path: "/products/odoo-apps/odoo-crm",
            newTab: false,
          },
          {
            id: 512,
            title: "Odoo Inventory",
            path: "/products/odoo-apps/odoo-inventory",
            newTab: false,
          },
          {
            id: 513,
            title: "Odoo Accounting",
            path: "/products/odoo-apps/odoo-accounting",
            newTab: false,
          },
        ],
      },
      {
        id: 52,
        title: "Custom Solutions",
        path: "/products/custom-solutions",
        newTab: false,
      },
    ],
  },
  {
    id: 6,
    title: "Resources",
    path: "/resources",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "Case Studies",
        path: "/resources/case-studies",
        newTab: false,
      },
      {
        id: 62,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 63,
        title: "FAQs",
        path: "/resources/faqs",
        newTab: false,
      },
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
