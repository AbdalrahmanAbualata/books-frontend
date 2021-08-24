import React from 'react';
import{Modal,Button,Form } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";

class SelectBook extends React.Component {
    addBook=(e)=>{
        this.props.handleAddBook(e);
        this.props.handleClose();
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Your Book</Modal.Title>
            </Modal.Header>
            <Form onSubmit={this.addBook}  >
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Email address (the sign in email by default)
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
                    placeholder="Lord of the Ring"
                    id="title"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="In Stock"
                    id="status"
                    required
                    
                  />
                </Form.Group>
    
                <Form.Group className="mb-3">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control as="textarea" rows={5} id="desc" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>Discard </Button>
                <Button type="submit"  variant="primary"> Add </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )
    }
}

export default withAuth0(SelectBook);