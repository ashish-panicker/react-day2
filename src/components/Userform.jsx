import React from 'react'

const UserForm = () => {
  const [userFormData, setUserFormData] = React.useState({
    userName: '',
    password: '',
    email: '',
    gender: '',
    discount: false,
    promotion: false,
  })

  const formValueChanged = (e) => {
    const { name, value, type, checked } = e.target
    setUserFormData({
      ...userFormData,
      [name]: type === 'checkbox' ? checked : value,
    })
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
            onChange={formValueChanged} // to the state
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
        <div className="row">
          <label htmlFor="gender">Gender</label>
          <span>Male</span>
          <input
            className="radio"
            type="radio"
            name="gender"
            value="Male"
            onChange={formValueChanged}
            checked={userFormData.gender === 'Male'}
          />
          <span>Female</span>
          <input
            className="radio"
            type="radio"
            name="gender"
            value="Female"
            onChange={formValueChanged}
            checked={userFormData.gender === 'Female'}
          />
        </div>
        <div className="row">
          <label htmlFor="preferences">Options</label>
          <input
            type="checkbox"
            name="promotion"
            className="radio"
            value="yes"
            onChange={formValueChanged}
            checked={userFormData.promotion}
          />
          <span>Promotions</span>
          <input
            type="checkbox"
            name="discount"
            className="radio"
            value="yes"
            onChange={formValueChanged}
            checked={userFormData.discount}
          />
          <span>Discounts</span>
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
