import { VStack, Heading, Container, Image, Text } from '@chakra-ui/react';

import kanbanExample from '../assets/kanbanExample.png';

const AuthHero = () => {
    return (
        <Container h='full' maxW='container.md'>
            <VStack h='full' justify='center' spacing='40px'>

                <Heading fontWeight='900' color='white'>All your projects in one place!</Heading>
                <Image src={kanbanExample} alt='app demo' objectFit='cover' borderRadius='md' />
                <Text color='white' fontWeight='600' fontSize='xl' >Join us and discover a new way to manage your projects</Text>
            </VStack>
        </Container>
    );
}

export default AuthHero;