import React from 'react'
import { Button, Modal, Form} from 'react-bootstrap'

export class EditUserModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            fullName: '',
            phoneNumber: '',
            profilePicture: '',
            show: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            row: nextProps.row,
            email: nextProps.row.email,
            fullName: nextProps.row["full name"],
            phoneNumber: nextProps.row["phone number"],
            profilePicture: nextProps.row["profile picture"],
            show: nextProps.show,
        });
    }

    onSubmit(){
        const user = { 
            email:this.state.email,
            "full name": this.state.fullName,
            "phone number": this.state.phoneNumber,
            "profile picture": this.state.profilePicture,
        }
        this.props.saveChanges(user)
    }

    onClose(){
        this.props.closeChanges()
    }

    fullNameHandler(e){
        this.setState({ fullName: e.target.value});
    }

    phoneNumberHandler(e){
        this.setState({ phoneNumber: e.target.value});
    }
    render(){
        return(
            <div>
            <Modal style={{opacity:1}} show={this.state.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={this.state.profilePicture}  class="img-fluid" alt="Profile" />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" readOnly defaultValue={this.state.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Full name</Form.Label>
                        <Form.Control  defaultValue={this.state.fullName} onChange={(e) => this.fullNameHandler(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control  defaultValue={this.state.phoneNumber} onChange={(e) => this.phoneNumberHandler(e)} />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.onSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}

export default EditUserModal;
