import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  }, []) // <- dispatch only once
  console.log("USER DATA: ", userData);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData && userData.data && userData.data.map((user) => 
            <p key={user.id}>{user.name}</p>
        )}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    userData: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)