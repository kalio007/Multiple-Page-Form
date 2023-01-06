import React from 'react'

function PersonalInfo({formData, setFormData}) {
  return (
    <div className='personalInfo'>
      <div className='personal-info-container'>
      <input type="text" 
      placeholder="FirstName"
      value={formData.FirstName}
      onChange={(event) => setFormData({...formData, FirstName: event.target.value})} />
      <input type="text" 
      placeholder="LastName" 
      value={formData.LastName}
      onChange={(event) => setFormData({...formData, LastName: event.target.value})}/>
      <input type="text" placeholder="Username" />
    </div>
    </div>
  )
}

export default PersonalInfo