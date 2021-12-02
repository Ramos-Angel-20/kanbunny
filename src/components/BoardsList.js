import { Flex } from '@chakra-ui/react';

import EmptyList from './EmptyList';

const BoardsList = () => {
    return (
        <Flex minH='full' align='center' backgroundColor='red' w='full' justifyContent='center'>
            <EmptyList/>
        </Flex>
    );
}

export default BoardsList;