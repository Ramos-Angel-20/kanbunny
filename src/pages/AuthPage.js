import { Flex, VStack, Text, Container, Center } from '@chakra-ui/react';

import { useState } from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import AuthHero from '../components/AuthHero';

const AuthPage = () => {

    const [isRegistered, setIsRegistered] = useState(false);


    const toggleRegister = () => {
        setIsRegistered(prevState => !prevState);
    }


    return (
        <Flex minH='100vh' maxH='auto' back>
            <VStack w='8xl' minH='full'>
                <Container maxW='container.sm' h='full' py={['20px', 0, 0, 0]}>
                    {isRegistered ? <LoginForm toggleMode={toggleRegister} /> : <RegisterForm toggleMode={toggleRegister} />}
                </Container>
                <Text fontWeight='600' textAlign='center' >&copy; Kanbunny</Text>
            </VStack>


            <VStack backgroundColor='red.600' w='full' minH='full' display={['none', null, null, 'block']}>
                <AuthHero />
            </VStack>

        </Flex>
    );
}

export default AuthPage;