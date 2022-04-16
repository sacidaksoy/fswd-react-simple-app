import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import { fetchUsers } from "./actions/userAction";

function Candidates(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  return (
    <>
      
      <UserList users={props.userReducer.users} />
    </>
  );
}

const mapStateToProps = (userReducer) => ({ userReducer });

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
