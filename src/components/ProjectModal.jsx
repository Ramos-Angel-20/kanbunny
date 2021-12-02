import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input
} from '@chakra-ui/react'


const ProjectModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
            <ModalOverlay />

            <ModalContent>

                <ModalHeader>Create a new project</ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                    <Input type='file'/>
                </ModalBody>

                <ModalFooter>
                    <Button
                        backgroundColor='green.300'
                        color='white'
                    >
                        Add
                    </Button>
                    <Button variant='ghost' onClick={onClose} >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ProjectModal;