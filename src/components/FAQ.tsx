import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="max-w-xl text-base mx-auto"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            What is this product?
          </AccordionTrigger>
          <AccordionContent>
            This is where you answer the first question in detail.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent>
            Explain the getting started process here.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            Is there a free trial?
          </AccordionTrigger>
          <AccordionContent>
            Provide information about your trial or pricing here.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
