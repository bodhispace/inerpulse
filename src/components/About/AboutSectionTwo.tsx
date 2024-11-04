import Image from "next/image";

const AboutSectionTwo = () => {
  const Industry = ({ title, description, imageSrc }) => (
    <div className="flex items-center mb-9">
      <div className="w-12 h-12 mr-4">
        <Image
          src={imageSrc}
          alt={`${title} icon`}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Industry
                title="Transforming Garments & Textiles"
                description="Odoo solutions streamline inventory management, optimize production, and enhance supply chain efficiency for the Garments and Textiles industry."
                imageSrc="/images/icons/garments.png"
              />
              <Industry
                title="Empowering Retail Businesses"
                description="Manage POS systems, track sales, and improve customer experience with tailored Odoo ERP solutions for the Retail sector."
                imageSrc="/images/icons/garments.png"
              />
              <Industry
                title="Enhancing Manufacturing Efficiency"
                description="From production planning to quality control, Odoo helps manufacturers streamline operations, reduce costs, and increase productivity."
                imageSrc="/images/icons/garments.png"
              />
              <Industry
                title="Optimizing FMCG Operations"
                description="Odoo helps FMCG businesses efficiently manage stock levels, distribution networks, and multi-channel sales."
                imageSrc="/images/icons/garments.png"
              />
              <Industry
                title="Streamlining Pharmaceutical Processes"
                description="Ensure compliance, manage inventory, and enhance the supply chain in the Pharmaceutical sector with Odoo's robust solutions."
                imageSrc="/images/icons/garments.png"
              />
              <Industry
                title="Improving Wholesale & Distribution"
                description="Odoo simplifies supply chain management, order processing, and inventory tracking for wholesale and distribution businesses."
                imageSrc="/images/icons/garments.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
