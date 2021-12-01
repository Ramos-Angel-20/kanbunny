import { MdLogin } from 'react-icons/md';
import { VStack, Heading, Text, Box, Input, Button, Link, Flex } from '@chakra-ui/react';

import icon from '../assets/Kanbunny.svg';

const LoginPage = () => {
    return (
        <VStack h='100vh' justify='center' backgroundColor='gray.800' color='white' spacing='40px'>
            <div>
                <Flex direction='column' align='center'>
                    <Heading fontWeight='900' > <img src={icon} alt='Kanbunny' style={{ display: 'inline', width: '20px' }} /> Kanbunny</Heading>
                    <Text fontSize='3xl' fontWeight='900'>Sign in to your account</Text>
                </Flex>
            </div>
            <Link color='red.600' href='#' fontWeight='600'>
                Dont have an account yet?
            </Link>
            <Box bg='white' p={3} w='md' boxShadow='md' p='6' rounded='md'>
                <Text>Email:</Text>
                <Input placeholder='John@Doe.com' size='md' />
                <Text>Password</Text>
                <Input size='md' type='password' />
                <Button mt={5} colorScheme='red' leftIcon={<MdLogin />}>Login</Button>
            </Box>
        </VStack>
    );
}

export default LoginPage;