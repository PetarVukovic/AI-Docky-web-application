import React, { useState } from 'react';
import { Box, Heading, SimpleGrid, Text, Button, VStack, HStack } from '@chakra-ui/react';
import { useAuth } from 'wasp/client/auth';
import { generateStripeCheckoutSession } from 'wasp/client/operations';
import { PaymentPlanId, paymentPlans, prettyPaymentPlanName } from './plans';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { z } from 'zod';

const bestDealPaymentPlanId: PaymentPlanId = PaymentPlanId.Pro;

const plans = [
  {
    id: PaymentPlanId.Hobby,
    name: prettyPaymentPlanName(PaymentPlanId.Hobby),
    price: 9.99,
    description: 'All you need to get started',
    features: ['Limited monthly usage', 'Basic support'],
    color: 'teal',
  },
  {
    id: PaymentPlanId.Pro,
    name: prettyPaymentPlanName(PaymentPlanId.Pro),
    price: 19.99,
    description: 'Our most popular plan',
    features: ['Unlimited monthly usage', 'Priority customer support'],
    color: 'purple',
    isPopular: true,
  },
  {
    id: PaymentPlanId.Credits10,
    name: prettyPaymentPlanName(PaymentPlanId.Credits10),
    price: 9.99,
    description: 'One-time purchase of 10 credits for your account',
    features: ['Use credits for e.g. OpenAI API calls', 'No expiration date'],
    color: 'orange',
  },
];

const PricingPage: React.FC = () => {
  const [isStripePaymentLoading, setIsStripePaymentLoading] = useState<boolean | string>(false);
  const { data: user } = useAuth();
  const history = useHistory();

  async function handleBuyNowClick(paymentPlanId: PaymentPlanId) {
    if (!user) {
      history.push('/login');
      return;
    }
    try {
      setIsStripePaymentLoading(paymentPlanId);
      let stripeResults = await generateStripeCheckoutSession(paymentPlanId);

      if (stripeResults?.sessionUrl) {
        window.open(stripeResults.sessionUrl, '_self');
      }
    } catch (error: any) {
      console.error(error?.message ?? 'Something went wrong.');
    } finally {
      setIsStripePaymentLoading(false);
    }
  }

  const handleCustomerPortalClick = () => {
    if (!user) {
      history.push('/login');
      return;
    }
    try {
      const schema = z.string().url();
      const customerPortalUrl = schema.parse(import.meta.env.REACT_APP_STRIPE_CUSTOMER_PORTAL);
      window.open(customerPortalUrl, '_blank');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box py={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Choose Your Perfect Plan
      </Heading>
      <Text fontSize="lg" textAlign="center" mb={10}>
        Unlock the power of AI-driven document analysis with our flexible pricing options
      </Text>
      <SimpleGrid columns={[1, null, 3]} spacing={10} px={[4, 8, 16]}>
        {plans.map((plan) => (
          <Box
            key={plan.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={6}
            bg={plan.isPopular ? `${plan.color}.100` : 'white'}
            boxShadow={plan.isPopular ? 'lg' : 'sm'}
          >
            <VStack spacing={4}>
              <Heading as="h3" size="md" color={`${plan.color}.500`}>
                {plan.name}
              </Heading>
              <Text fontSize="2xl" fontWeight="bold">
                ${plan.price}/month
              </Text>
              <Text>{plan.description}</Text>
              <VStack spacing={2} alignItems="flex-start">
                {plan.features.map((feature) => (
                  <HStack key={feature}>
                    <AiFillCheckCircle color={`${plan.color}.500`} />
                    <Text>{feature}</Text>
                  </HStack>
                ))}
              </VStack>
              {!!user && !!user.subscriptionStatus ? (
                <Button
                  colorScheme={plan.color}
                  variant="outline"
                  onClick={handleCustomerPortalClick}

                >
                  Manage Subscription
                </Button>
              ) : (
                <Button
                  colorScheme={plan.color}
                  onClick={() => handleBuyNowClick(plan.id)}
                  isLoading={isStripePaymentLoading === plan.id}

                >
                  {!!user ? 'Buy Plan' : 'Log in to buy plan'}
                </Button>
              )}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PricingPage;
