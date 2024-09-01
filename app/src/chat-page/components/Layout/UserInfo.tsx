import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';

interface UserInfoProps {
    username?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username = 'User' }) => {
    return (
        <Box bg="gray.700" p={3} borderRadius="md" mb={4}>
            <Flex align="center">
                <Avatar size="sm" src="https://via.placeholder.com/50" mr={3} />
                <Text>{username}</Text>
            </Flex>
        </Box>
    );
};

export default UserInfo;