import React, { useState } from 'react';
import { Box, Input, Button, HStack } from '@chakra-ui/react';

interface MessageInputProps {
    onSendMessage: (content: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <HStack>
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                />
                <Button type="submit" colorScheme="blue">
                    Send
                </Button>
            </HStack>
        </Box>
    );
};

export default MessageInput;