import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../style.css";

function Details() {
  const { id } = useParams();

  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = `/candidates`;
  //   navigate(path);
  // };
  

  const users = useSelector((state) => state.users);
  const currentUser = users.filter((user) => user.id === parseInt(id));
  console.log(currentUser);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Web Site</th>
          </tr>
        </thead>
        <tbody>
          {currentUser.map((user, id) => {
            return (
              <tr key={id}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Details;
