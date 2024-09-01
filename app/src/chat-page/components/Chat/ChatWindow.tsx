import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import MessageBubble from './MessageBubble';
import { Message } from '../../utils/types';

interface ChatWindowProps {
    messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
    return (
        <Box height="60vh" overflowY="auto" borderWidth={1} borderRadius="md" p={4}>
            <VStack spacing={4} align="stretch">
                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        content={message.content}
                        sender={message.sender}
                    />
                ))}
            </VStack>
        </Box>
    );
};

export default ChatWindow;