import React from 'react';
import { Box, Heading, VStack } from '@chakra-ui/react';
import FAQItem from '../components/FAQ/FAQItem';

const faqs = [
    {
        question: "What is AI Document Chat?",
        answer: "AI Document Chat allows you to interact with your documents using AI to get insights."
    },
    {
        question: "What types of documents are supported?",
        answer: "The system supports CSV, PDF, and Excel files."
    },
    {
        question: "How secure is my data?",
        answer: "Your data is stored securely and is not shared with any third parties."
    },
    {
        question: "How do I upload documents?",
        answer: "You can upload your documents via the 'Upload Documents' section once logged in."
    },
    {
        question: "How do I create a collection?",
        answer: "After logging in, use the 'Manage Collections' feature to organize your documents."
    }
];

const FAQPage: React.FC = () => {
    return (
        <Box>
            <Heading as="h1" size="xl" mb={6}>
                Frequently Asked Questions
            </Heading>
            <VStack spacing={6} align="stretch">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </VStack>
        </Box>
    );
};

export default FAQPage;