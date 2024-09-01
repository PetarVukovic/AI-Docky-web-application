import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

interface Collection {
    id: number;
    name: string;
    documentType: string;
}

interface CollectionsListProps {
    collections: Collection[];
}

const CollectionsList: React.FC<CollectionsListProps> = ({ collections }) => {
    return (
        <VStack spacing={4} align="stretch">
            {collections.map((collection) => (
                <Box key={collection.id} p={4} borderWidth={1} borderRadius="md">
                    <Text fontWeight="bold">{collection.name}</Text>
                    <Text>Document Type: {collection.documentType}</Text>
                </Box>
            ))}
        </VStack>
    );
};

export default CollectionsList;