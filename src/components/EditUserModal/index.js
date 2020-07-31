import React from 'react'
import { Button, Modal, Form} from 'react-bootstrap'
import notFound from './notFound.png'

export class EditUserModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            fullName: '',
            phoneNumber: '',
            profilePicture: '',
            status: '',
            srcProfile:'',
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
            status: (nextProps.row.blocked === "1")? "Deshabilitado":"Habilitado",
            srcProfile: nextProps.row["profile picture"],
            show: nextProps.show,
        });
    }

    onSubmit(){
        const user = { 
            email:this.state.email,
            "full_name": this.state.fullName,
            "phone_number": this.state.phoneNumber,
            "profile_picture": this.state.profilePicture,
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

    addDefaultSrc(event){
        event.target.src = {notFound};
        event.target.onerror = null;
        this.setState({srcProfile: notFound})
    }
    render(){
        return(
            <div>
            <Modal style={{opacity:1}} show={this.state.show} size="sm" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={this.state.srcProfile} onError={(e) => this.addDefaultSrc(e)} class="profileCircle"  alt="profile"/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" readOnly defaultValue={this.state.email} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control  defaultValue={this.state.fullName} onChange={(e) => this.fullNameHandler(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control  defaultValue={this.state.phoneNumber} onChange={(e) => this.phoneNumberHandler(e)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control  readOnly defaultValue={this.state.status}/>
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
