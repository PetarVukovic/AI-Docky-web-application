import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react';

interface CollectionFormProps {
    onSubmit: (collection: { name: string; documentType: string }) => void;
    onCancel: () => void;
}

const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [documentType, setDocumentType] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, documentType });
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={4}>
                <FormControl>
                    <FormLabel>Collection Name</FormLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Document Type</FormLabel>
                    <Select
                        value={documentType}
                        onChange={(e) => setDocumentType(e.target.value)}
                        required
                    >
                        <option value="">Select a document type</option>
                        <option value="pdf">PDF</option>
                        <option value="word">Word</option>
                        <option value="excel">Excel</option>
                    </Select>
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Create Collection
                </Button>
                <Button onClick={onCancel}>Cancel</Button>
            </VStack>
        </Box>
    );
};

export default CollectionForm;
