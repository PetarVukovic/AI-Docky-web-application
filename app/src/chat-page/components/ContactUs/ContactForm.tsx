import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';

interface ContactFormProps {
    onSubmit: (email: string, subject: string, message: string) => Promise<void>;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await onSubmit(email, subject, message);
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            // Error handling is now managed in the parent component
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={4}>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Send Message
                </Button>
            </VStack>
        </Box>
    );
};

export default ContactForm;