import React from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading } from '@chakra-ui/react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  href?: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is AI Document Chat?",
    answer: "AI Document Chat allows you to interact with your documents using AI to get insights."
  },
  {
    id: 2,
    question: "What types of documents are supported?",
    answer: "The system supports CSV, PDF, and Excel files."
  },
  {
    id: 3,
    question: "How secure is my data?",
    answer: "Your data is stored securely and is not shared with any third parties."
  },
  {
    id: 4,
    question: "How do I upload documents?",
    answer: "You can upload your documents via the 'Upload Documents' section once logged in."
  },
  {
    id: 5,
    question: "How do I create a collection?",
    answer: "After logging in, use the 'Manage Collections' feature to organize your documents."
  }
];

export default function FAQComponent() {
  return (
    <Box mt={32} mx="auto" maxW="7xl" px={{ base: 6, lg: 8 }} py={{ base: 8, sm: 24, lg: 32 }}>
      <Heading as="h2" size="xl" mb={8} textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} border="none">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="bold">{faq.question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>{faq.answer}</Text>
              {faq.href && (
                <a href={faq.href} className="text-yellow-500 hover:text-yellow-600">
                  Learn more →
                </a>
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
