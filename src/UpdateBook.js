import React from 'react';
import{Modal,Button,Form } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";

class UpdateBook extends React.Component {
    handleUpdateBook=(e)=>{
        e.preventDefault();
        let updatedBook = { _id:this.props.bookInf._id ,status: e.target.status.value, description: e.target.desc.value, email: e.target.email.value, title: e.target.title.value, }
        console.log(updatedBook);
        this.props.handleUpdateBook(updatedBook);
        this.props.handleClose();
    }
    render() {
        return (
            <Modal show={this.props.showUpdate} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>update Your Book data</Modal.Title>
            </Modal.Header>
            <Form onSubmit={this.handleUpdateBook}  >
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>
                    your email address 
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="enter your email"
                    value={this.props.auth0.user.email}
                    // defaultValue={this.props.auth0.user.email}
                    id="email"
                    readOnly
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={this.props.bookInf.title}
                    id="title"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={this.props.bookInf.status}
                    placeholder="In Stock"
                    id="status"
                    required
                    
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control as="textarea" rows={5} id="desc"  defaultValue={this.props.bookInf.description}/>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>Discard </Button>
                <Button type="submit"  variant="primary"> Update  </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )
    }
}

export default withAuth0(UpdateBook);