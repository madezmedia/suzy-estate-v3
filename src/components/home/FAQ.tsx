import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What makes your service unique?",
    answer: "We offer a comprehensive approach by combining real estate and estate planning services, specifically tailored for seniors. This integrated service saves time and ensures all aspects of your transition are handled professionally."
  },
  {
    question: "How long does the estate planning process take?",
    answer: "The basic estate planning process typically takes 2-3 weeks. However, more complex estates may require additional time. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you help with senior living communities?",
    answer: "Yes! We have extensive relationships with senior living communities in Fort Mill and can help you evaluate and choose the best option based on your lifestyle, needs, and preferences."
  },
  {
    question: "Can family members be involved in the process?",
    answer: "Absolutely! We encourage family involvement while ensuring our clients maintain their independence in decision-making. We can facilitate family meetings and provide resources for productive discussions."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <Container>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}