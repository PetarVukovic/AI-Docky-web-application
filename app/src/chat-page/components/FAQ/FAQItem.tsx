import React from 'react';
import { Box, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <Text fontWeight="bold">{question}</Text>
                        </Box>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Text>{answer}</Text>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default FAQItem;