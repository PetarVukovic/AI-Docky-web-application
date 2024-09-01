import React from 'react';
import { Box, Button, Heading, Text, VStack, List, ListItem, ListIcon, Badge } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

interface PricingPlanProps {
    name: string;
    price: number;
    features: string[];
    color: string;
    isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, features, color, isPopular }) => {
    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            textAlign="center"
            bg="white"
            shadow="xl"
            position="relative"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
                transform: 'translateY(-5px)',
                boxShadow: 'xl',
                borderColor: `${color}.500`
            }}
        >
            {isPopular && (
                <Badge
                    colorScheme={color}
                    position="absolute"
                    top="-3"
                    right="-3"
                    px={3}
                    py={1}
                    borderRadius="full"
                    fontWeight="bold"
                >
                    Most Popular
                </Badge>
            )}
            <VStack spacing={4}>
                <Heading as="h2" size="lg" color={`${color}.500`}>
                    {name}
                </Heading>
                <Text fontSize="5xl" fontWeight="bold" color={`${color}.600`}>
                    ${price.toFixed(2)}
                    <Text as="span" fontSize="md" fontWeight="normal" color="gray.500">
                        /month
                    </Text>
                </Text>
                <Button
                    colorScheme={color}
                    size="lg"
                    width="full"
                    _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg'
                    }}
                >
                    Choose {name}
                </Button>
                <List spacing={3} textAlign="left" pt={4} width="100%">
                    {features.map((feature, index) => (
                        <ListItem key={index} display="flex" alignItems="center">
                            <ListIcon as={FaCheckCircle} color={`${color}.500`} fontSize="1.2em" marginRight={2} />
                            <Text fontSize="sm">{feature}</Text>
                        </ListItem>
                    ))}
                </List>
            </VStack>
        </Box>
    );
};

export default PricingPlan;