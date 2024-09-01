import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface MessageBubbleProps {
    content: string;
    sender: 'user' | 'ai';
}

const MessageBubble: React.FC<MessageBubbleProps> = React.memo(({ content, sender }) => {
    const isUser = sender === 'user';
    return (
        <Box
            bg={isUser ? 'blue.500' : 'gray.200'}
            color={isUser ? 'white' : 'black'}
            borderRadius="lg"
            p={3}
            maxW="70%"
            alignSelf={isUser ? 'flex-end' : 'flex-start'}
        >
            <Text>{content}</Text>
        </Box>
    );
});

MessageBubble.displayName = 'MessageBubble';

export default MessageBubble;