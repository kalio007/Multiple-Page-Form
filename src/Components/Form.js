import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import OtherInfo from './OtherInfo';


function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        FirstName:"",
        LastName: "", 
        username: "",
        Nationality:"",
        About: "",
    })
    const FormTitles = ["Sign up", "Personal Info", "Other"]
    
    const PageDisplay = () => {
            if ( page === 0 ) {
                return <SignUpInfo setFormData={setFormData} formData={formData}/>;
            } else if (page === 1 ) {
                return <PersonalInfo setFormData={setFormData} formData={formData} />;
            } return <OtherInfo setFormData={setFormData} formData={formData} />;
            
    } 
  return (
    <div className='form'>
        <div className='progressbar'>
            <div style={{width : page === 0 ? "33.3%" : page===1 ? "66%" : "100%" }}></div>
            <div className='form-container'>
                <div className='Header'>
                    <h1>{FormTitles[page]}</h1> 
                </div>
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='footer'>
                    <button
                    disabled = {page === 0}
                    onClick={() => (setPage((currPage) => currPage -1 ))}>Prev</button>;
                    <button 
                    onClick={() => {
                        if (page === FormTitles.length -1 ){
                            alert("FORM SUBMITTED");
                        }else{ 
                            setPage((currPage) => currPage + 1)};
                        }}> 
                        {page=== FormTitles.length - 1 ? "Sumbit" : "Next" }</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form