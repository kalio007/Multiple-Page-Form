import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div className='otherInfo'>
        <div className='other-info-container'>
      <input type="text" 
      placeholder="Nationality"
      value={formData.Nationlity}
      onChange={(event) => setFormData({...FormData, Nationlity: event.target.value})} />
      <input type="text" 
      placeholder="Tell Us a little about yourslef"
      value={formData.About}
      onChange={(event) => setFormData({...formData, About: event.target.value})} />
    </div>
    </div>
  )
}

export default OtherInfo