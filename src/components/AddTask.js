import { Collapse, Button, Box, useDisclosure } from '@chakra-ui/react';

const AddTask = () => {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box backgroundColor='gray.400' height={100}>
            <Button onClick={onToggle}>Add a new list</Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='teal.500'
                    rounded='md'
                    shadow='md'
                >
                    Hola
                </Box>
            </Collapse>
        </Box>
    )
}

export default AddTask;