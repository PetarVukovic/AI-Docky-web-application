import React, { useState } from 'react';
import { Box, VStack, Button, Icon, Text, Collapse } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaHome, FaFolder, FaRobot, FaQuestionCircle, FaEnvelope, FaCreditCard, FaCog, FaSignOutAlt, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';
import UserInfo from './UserInfo';

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to control sidebar visibility
    const isLoggedIn = false; // Replace with actual auth logic

    const menuItems = [
        { label: 'Home', icon: FaHome, path: '/' },
        { label: 'Collections', icon: FaFolder, path: '/collections' },
        { label: 'Chat', icon: FaRobot, path: '/chat' },
        { label: 'FAQ', icon: FaQuestionCircle, path: '/faq' },
        { label: 'Contact Us', icon: FaEnvelope, path: '/contact' },
        { label: 'Pricing', icon: FaCreditCard, path: '/pricing' },
        { label: 'Settings', icon: FaCog, path: '/settings' },
    ];

    return (
        <Box
            position="relative"
            width={isSidebarOpen ? "320px" : "0"}  // Adjust width based on state
            bg="gray.800"
            color="white"
            height="100vh"
            p={4}
            borderRadius="md"
            borderTopLeftRadius="lg"
            borderBottomLeftRadius="lg"
            boxShadow="md"
            mx={isSidebarOpen ? 4 : 0} // Margin only when open
            mt={4}
            mb={24}  // Increased bottom margin to ensure visibility
            overflow="hidden"
            transition="width 0.3s ease" // Smooth transition for opening/closing
        >
            <Button
                position="absolute"
                top={4}
                right={4}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                colorScheme="blue"
                variant="solid"
                size="sm"
                borderRadius="full"
                iconSpacing={isSidebarOpen ? "1" : "0"}
                ml={isSidebarOpen ? 0 : "auto"}
            >
                <Icon as={isSidebarOpen ? FaTimes : FaBars} />
            </Button>

            <Collapse in={isSidebarOpen}>
                {isLoggedIn && <UserInfo />}
                <VStack spacing={4} align="stretch">
                    {menuItems.map((item) => (
                        <Button
                            key={item.label}
                            as={Link}
                            to={item.path}
                            leftIcon={<Icon as={item.icon} w={6} h={6} color={getIconColor(item.label)} />} // Vibrant colors
                            justifyContent="flex-start"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: 'gray.700' }}
                            fontSize="lg"
                            px={4}
                        >
                            <Text fontSize="lg" fontWeight="medium">
                                {item.label}
                            </Text>
                        </Button>
                    ))}
                    {isLoggedIn ? (
                        <Button
                            leftIcon={<Icon as={FaSignOutAlt} w={6} h={6} color="red.400" />} // Vibrant color
                            justifyContent="flex-start"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: 'gray.700' }}
                            fontSize="lg"
                            px={4}
                        >
                            <Text fontSize="lg" fontWeight="medium">
                                Logout
                            </Text>
                        </Button>
                    ) : (
                        <Button
                            as={Link}
                            to="/login"
                            leftIcon={<Icon as={FaSignInAlt} w={6} h={6} color="green.400" />} // Vibrant color
                            justifyContent="flex-start"
                            variant="ghost"
                            color="white"
                            _hover={{ bg: 'gray.700' }}
                            fontSize="lg"
                            px={4}
                        >
                        </Button>
                    )}
                </VStack>
            </Collapse>
        </Box>
    );
};

// Helper function to get different colors for icons
const getIconColor = (label: string) => {
    switch (label) {
        case 'Home':
            return 'blue.300';
        case 'Collections':
            return 'purple.300';
        case 'Chat':
            return 'teal.300';
        case 'FAQ':
            return 'orange.300';
        case 'Contact Us':
            return 'pink.300';
        case 'Pricing':
            return 'yellow.300';
        case 'Settings':
            return 'cyan.300';
        default:
            return 'white';
    }
};

export default Sidebar;
