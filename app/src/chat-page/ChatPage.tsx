import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Switch se koristi umesto Routes u verziji 5
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Layout/Sidebar';
import CollectionsPage from './pages/CollectionsPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import UserSettingsPage from './pages/UserSettingsPage';

const ChatPage = () => {
    return (
        <Router>
            <Flex>
                <Sidebar />
                <Box flex={1} p={4}>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/collections" component={CollectionsPage} />
                        <Route path="/faq" component={FAQPage} />
                        <Route path="/contact" component={ContactUsPage} />
                        <Route path="/pricing" component={PricingPage} />
                        <Route path="/settings" component={UserSettingsPage} />
                    </Switch>
                </Box>
            </Flex>
        </Router>
    );
}

export default ChatPage;
