import { HStack } from '@chakra-ui/react';

import Column from './Column';

const Project = () => {
    return (
        <HStack minW='full' maxH='calc(100vh - 60px)' paddingX={4} paddingY={0} spacing={4} overflow='auto'>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            <Column/>
            
        </HStack>
    );
}

export default Project;