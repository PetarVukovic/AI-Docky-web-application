import React, { useState, useEffect } from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Switch, Select, Button, useToast } from '@chakra-ui/react';
import { updateUserSettings } from '../services/api';
import { User } from '../utils/types';

const UserSettingsPage: React.FC = () => {
    const [settings, setSettings] = useState<User>({
        id: 0,
        username: '',
        email: '',
        emailNotifications: false,
        theme: 'system',
    });
    const toast = useToast();

    useEffect(() => {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            setSettings(user);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSettings((prev) => ({ ...prev, [name]: value }));
    };

    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSettings((prev) => ({ ...prev, emailNotifications: e.target.checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await updateUserSettings(settings);
            localStorage.setItem('user', JSON.stringify(data));
            toast({
                title: 'Settings updated',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error updating settings',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <Heading as="h1" size="xl" mb={6}>
                User Settings
            </Heading>
            <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4} align="stretch">
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input name="username" value={settings.username} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input name="email" value={settings.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="email-notifications" mb="0">
                            Email Notifications
                        </FormLabel>
                        <Switch
                            id="email-notifications"
                            isChecked={settings.emailNotifications}
                            onChange={handleSwitchChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Theme</FormLabel>
                        <Select name="theme" value={settings.theme} onChange={handleChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </Select>
                    </FormControl>
                    <Button type="submit" colorScheme="blue">
                        Save Changes
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default UserSettingsPage;