import React from 'react';
import { Box, Icon, Heading, Text, VStack } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface FeatureBoxProps {
    icon?: IconType;
    title: string;
    description: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description }) => {
    return (
        <Box
            borderWidth={2}
            borderColor="orange.500"
            borderRadius="lg"
            p={6}
            width="30%"
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
        >
            <VStack spacing={4}>
                {icon && <Icon as={icon} boxSize={12} color="orange.500" />}
                <Heading as="h3" size="md">
                    {title}
                </Heading>
                <Text>{description}</Text>
            </VStack>
        </Box>
    );
};

export default FeatureBox;