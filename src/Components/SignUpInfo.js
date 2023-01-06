import React from 'react'

function SignUpInfo({formData, setFormData}) {
  return (
    <div className="sign-up-container">
      <input type="email" 
      placeholder="enter your email" 
      value={formData.email}/>
      <input type="text" 
      placeholder="enter password" 
      value={formData.password} 
      onChange={(event) => setFormData({...formData, password: event.target.value})}/>
      <input type="text" 
      placeholder="confirm Password" 
      value={formData.confirmPassword}
      onChange={(event) => setFormData({...formData, confirmPassword: event.target.value})}/>
    </div>
  )
}

export default SignUpInfo