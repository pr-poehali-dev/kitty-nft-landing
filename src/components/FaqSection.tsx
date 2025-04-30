import FaqAccordion from "@/components/FaqAccordion";

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-12">
          Часто задаваемые вопросы
        </h2>
        <FaqAccordion />
      </div>
    </section>
  );
};

export default FaqSection;
