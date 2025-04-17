'use client'

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "Can I get HIV from sweat or saliva?",
      answer: "No. It is not passed through sweat or saliva. Body fluids such as blood or blood like semen, vagina fluid, breastmilk, contain high concentrations of HIV. Kissing, sharing a glass, sneezing, or physical contact can not transmit HIV unless there are open wounds."
    },
    {
      question: "Will I die from HIV?",
      answer: "No. HIV can not kill you, it makes your immune system more vulnerable to other diseases. With proper treatment, a person with HIV can live a normal life span."
    },
    {
      question: "What's the difference between HIV and AIDS?",
      answer: "HIV causes AIDS. Essentially AIDS is the final and most serious stage of HIV. AIDS is a result of an HIV infection when your immune system has severely weakened, more at risk especially without proper treatment. You can not get AIDS on its own unless you're infected with HIV."
    },
    {
      question: "Can HIV be passed through Genetics?",
      answer: "HIV is not a genetic disease nor is it hereditary. Although a birthing parent can transmit HIV to their baby through breastfeeding, during pregnancy or delivery."
    },
    {
      question: "How do I get tested and what is the process?",
      answer: "There are multiple organizations in the Philippines that actually provide both free testing and treatment. In our website you will see we have provided a list of organizations who provide free testing services. For the test/screening itself, a blood or oral fluid sample will be taken and checked."
    },
    {
      question: "When should I test and who should get tested?",
      answer: "Anyone and everyone should get tested and it is also best to test after every sexual interaction. You can test anytime. For women, it is also required to test during pregnancy. Anyone can get tested for this is a disease that does not rely on gender or age."
    },
    {
      question: "Is there a cure for HIV?",
      answer: "HIV can be controlled (through Antiretroviral Therapy or ART), but there is still no general cure for HIV, but it is still being researched to come to life."
    },
    {
      question: "What are symptoms to look out for?",
      answer: (
        <>
          There is a possibility of asymptomatic HIV infection (meaning no symptoms but you are infected), but examples of symptoms that are common to those affected by HIV (1st stage) are Flu-like symptoms come 1-4 weeks after the infection of HIV. Such as headache, fatigue, body ache, sore throat, fevers, ulcers, weight-loss, a red rash (yet does not itch). For the full list of symptoms in each stage <a href="https://www.webmd.com/hiv-aids/understanding-aids-hiv-symptoms" className="text-blue-600 hover:underline">click here</a>.
        </>
      ),
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-bc-1">Frequently Asked Questions About HIV</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              {typeof faq.answer === 'string' ? faq.answer : faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}