import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Inerpulse LLP | Simplify, Grow, and Succeed",
  description: `Discover how Inerpulse LLP’s Odoo ERP solutions empower businesses to streamline operations, boost productivity, and unlock their full potential. Learn more about our mission, values, and commitment to customer success.`,
};


const AboutPage = () => {
  const description = `
    Experience the ease of running your business with streamlined, efficient processes.<br /><br />
    With Inerpulse LLP’s Odoo ERP solutions, you gain the power to simplify operations, boost productivity, and focus on what truly matters—growing your business.<br /><br />
    Whether you're managing inventory, tracking sales, or expanding to new markets, our solutions adapt to your needs and scale effortlessly as you grow. Gain clarity, save time, and achieve more with tools designed to make your work easier.<br /><br />
    Inerpulse LLP is here to help you unlock your business’s full potential. Simplify, grow, and succeed with confidence.
  `;

  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description={<span dangerouslySetInnerHTML={{ __html: description }} />}
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
