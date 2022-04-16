import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBInput } from "mdbreact";
import Details from "./Details";

export default function UserList({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();
  const routeChange = (id) => {
    let path = `/candidates/${id}`;
    navigate(path);
  };

  return (
    <>
      <MDBCol md="6">
        <MDBInput
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          hint="Search by Full Name"
          type="text"
          containerClass="active-pink active-pink-2 mt-0 mb-0"
        />
      </MDBCol>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .filter((user) => {
              if (searchTerm === '') {
                return user;
              } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return user;
              }
            })
            .map((user, id) => {
              return (
                <tr key={id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button onClick={() => { handleShow(); routeChange(user.id);}} variant="primary" size="sm">
                      Detail
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Details/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}
