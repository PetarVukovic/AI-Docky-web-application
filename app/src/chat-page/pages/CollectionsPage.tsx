import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, Button, useToast } from '@chakra-ui/react';
import { getCollections, createCollection } from '../services/api';
import { Collection } from '../utils/types';
import CollectionsList from '../components/Collections/CollectionsList';
import CollectionForm from '../components/Collections/CollectionForm';

const CollectionsPage: React.FC = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const toast = useToast();

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = async () => {
        try {
            const { data } = await getCollections();
            setCollections(data);
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to fetch collections',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleCreateCollection = async (collection: { name: string; documentType: string }) => {
        try {
            await createCollection(collection.name, collection.documentType);
            fetchCollections();
            setIsFormOpen(false);
            toast({
                title: 'Success',
                description: 'Collection created successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to create collection',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Heading as="h1" size="xl" mb={6}>
                Your Collections
            </Heading>
            <VStack spacing={6} align="stretch">
                <Button colorScheme="blue" onClick={() => setIsFormOpen(true)}>
                    Create New Collection
                </Button>
                {isFormOpen && (
                    <CollectionForm onSubmit={handleCreateCollection} onCancel={() => setIsFormOpen(false)} />
                )}
                <CollectionsList collections={collections} />
            </VStack>
        </Box>
    );
};

export default CollectionsPage;
