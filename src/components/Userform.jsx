import React from 'react'

const UserForm = () => {

  const [userFormData, setUserFormData] = React.useState({
    userName: '',
    password: '',
    email: '',
  })

  const formValueChanged = (e) => {
    const { name, value } = e.target
    setUserFormData({ ...userFormData, [name]: value })
  }

  const saveUser = () => {
    console.log(userFormData)
  }

  return (
    <div className="article">
      <form className="form">
        <h2>User Form</h2>
        <div className="row">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            className="input"
            onChange={formValueChanged}   // to the state
            value={userFormData.userName} // from the state
          />
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            onChange={formValueChanged}
            value={userFormData.email}
          />
        </div>
        <div className="row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            onChange={formValueChanged}
            value={userFormData.password}
          />
        </div>
        <button type="button" className="button" onClick={saveUser}>
          Save
        </button>
        <p className="para"></p>
      </form>
    </div>
  )
}

export default UserForm
