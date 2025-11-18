import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Does Mindura work with handwritten answers?",
      answer: "Yes. Our OCR + AI engine reads handwritten English answers with high accuracy.",
    },
    {
      question: "Do teachers need training?",
      answer: "No. Mindura is extremely simple — teachers can start using it in 5 minutes.",
    },
    {
      question: "Is the evaluation fair?",
      answer: "Yes. AI evaluates consistently with predefined rubrics and keywords.",
    },
    {
      question: "Can parents upload sheets from home?",
      answer: "Yes. Parents can upload photos, and Mindura evaluates them instantly.",
    },
    {
      question: "Is student data safe?",
      answer: "Absolutely. All data is encrypted and securely stored.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Mindura
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;