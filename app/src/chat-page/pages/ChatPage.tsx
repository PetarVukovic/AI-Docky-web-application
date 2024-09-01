import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, useToast } from '@chakra-ui/react';
import ChatWindow from '../components/Chat/ChatWindow';
import MessageInput from '../components/Chat/MessageInput';
import { getMessages, sendMessage } from '../services/api';
import { Message } from '../utils/types';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentCollectionId, setCurrentCollectionId] = useState<number | null>(null);
    const toast = useToast();

    useEffect(() => {
        if (currentCollectionId) {
            fetchMessages(currentCollectionId);
        }
    }, [currentCollectionId]);

    const fetchMessages = async (collectionId: number) => {
        try {
            const { data } = await getMessages(collectionId);
            setMessages(data);
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to fetch messages',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleSendMessage = async (content: string) => {
        if (!currentCollectionId) return;
        try {
            const { data } = await sendMessage(currentCollectionId, content);
            setMessages([...messages, data]);
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send message',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Heading as="h1" size="xl" mb={6}>
                Chat with Your Documents
            </Heading>
            <VStack spacing={6} align="stretch">
                <ChatWindow messages={messages} />
                <MessageInput onSendMessage={handleSendMessage} />
            </VStack>
        </Box>
    );
};

export default ChatPage;