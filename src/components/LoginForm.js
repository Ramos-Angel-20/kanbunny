import { FormControl, FormLabel, Input, VStack, Heading, Text, Flex, Button, Tooltip, Container } from '@chakra-ui/react';
import { MdLogin } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

import icon from '../assets/Kanbunny.svg';


const LoginForm = ({ toggleAuthMode }) => {
    return (
        <VStack h='full' justify='center' spacing='20px' width='100%'>
            <Flex direction='column' align='center'>
                <Heading fontWeight='900'>
                    <Tooltip label='Anótalo Mario Hugo...' hasArrow placement='top-start' pr='10px'>
                        <img src={icon} alt='Kanbunny' style={{ display: 'inline', width: '20px', margin: '0 5px' }} />
                    </Tooltip>
                    Kanbunny
                </Heading>
                <Text fontSize='3xl' fontWeight='900' textAlign='center'>Sign in to your account</Text>
            </Flex>

            <Button onClick={toggleAuthMode} variant='link' color='red.600' fontWeight='600' href='/register'>Need an accout? Get One for free!</Button>

            <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input type='email' placeholder='johnDoe@domain.com' />
            </FormControl>
            <FormControl>
                <FormLabel>Password:</FormLabel>
                <Input type='password' />
            </FormControl>
            <Button colorScheme='red' leftIcon={<MdLogin />}>Sign In</Button>

            <Text>or continue with...</Text>

            <Button leftIcon={<FcGoogle />} w='full' _hover={{
                background: "#216bdb",
                color: 'white',
                boxShadow: 'base',
            }}>Sign in with Google</Button>

            <Button leftIcon={<BsGithub />} w='full' _hover={{
                background: "green.400",
                color: 'white',
                boxShadow: 'base',
            }}>Sign in with Github</Button>
        </VStack>
    );
}

export default LoginForm;