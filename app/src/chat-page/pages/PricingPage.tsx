import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import PricingPlan from '../components/Pricing/PricingPlan';

const plans = [
    {
        name: 'Basic',
        price: 9.99,
        features: [
            'Up to 50 documents',
            'Basic AI text analysis',
            'Email support',
            '1 GB storage',
            'Monthly usage reports'
        ],
        color: 'teal',
    },
    {
        name: 'Pro',
        price: 29.99,
        features: [
            'Up to 500 documents',
            'Advanced AI text and image analysis',
            'Priority email and chat support',
            '10 GB storage',
            'Weekly usage reports',
            'API access',
            'Custom AI model training'
        ],
        color: 'purple',
        isPopular: true,
    },
    {
        name: 'Enterprise',
        price: 99.99,
        features: [
            'Unlimited documents',
            'Premium AI analysis with custom algorithms',
            '24/7 dedicated support',
            '100 GB storage',
            'Real-time usage analytics',
            'Advanced API access',
            'Custom AI model training and deployment',
            'On-premise installation option',
            'SLA guarantee'
        ],
        color: 'orange',
    },
];

const PricingPage: React.FC = () => {
    return (
        <Box>
            <Heading as="h1" size="xl" mb={6} textAlign="center">
                Choose Your Perfect Plan
            </Heading>
            <Text fontSize="lg" textAlign="center" mb={10}>
                Unlock the power of AI-driven document analysis with our flexible pricing options
            </Text>
            <SimpleGrid columns={[1, null, 3]} spacing={10} px={[4, 8, 16]}>
                {plans.map((plan) => (
                    <PricingPlan key={plan.name} {...plan} />
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default PricingPage;