import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    FormControl,
    FormLabel
} from '@chakra-ui/react'

import useInput from '../hooks/use-input';


const ProjectModal = ({ isOpen, onClose }) => {



    return (
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />

            <ModalContent>

                <ModalHeader>Create a new project</ModalHeader>
                <ModalCloseButton />

                <ModalBody>

                    <FormControl>
                        <FormLabel>Your project title:</FormLabel>
                        <Input type='text' placeholder='An awesome name!' />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Your thumbnail:</FormLabel>
                        <Input type='file' />
                    </FormControl>

                </ModalBody>

                <ModalFooter width='full' justifyContent='space-between'>
                    <Button
                        colorScheme='green'
                    >
                        Create!
                    </Button>
                    <Button variant='ghost' onClick={onClose} >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ProjectModal;