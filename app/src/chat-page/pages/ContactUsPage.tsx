import React from 'react';
import { Box, Heading, useToast } from '@chakra-ui/react';
import { submitContactForm } from '../services/api';
import ContactForm from '../components/ContactUs/ContactForm';

const ContactUsPage: React.FC = () => {
    const toast = useToast();

    const handleSubmit = async (email: string, subject: string, message: string) => {
        try {
            await submitContactForm(email, subject, message);
            toast({
                title: 'Message sent',
                description: 'We\'ve received your message and will get back to you soon.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'There was an error sending your message. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Heading as="h1" size="xl" mb={6}>
                Contact Us
            </Heading>
            <ContactForm onSubmit={handleSubmit} />
        </Box>
    );
};

export default ContactUsPage;