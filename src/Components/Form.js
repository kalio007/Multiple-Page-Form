import React, {useState} from 'react';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';


function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Sign up", "Personal Info", "Other"]
    
    const PageDisplay = () => {
            if ( page === 0 ) {
                return <SignUpInfo/>;
            } else if (page === 1 ) {
                return <PersonalInfo />;
            }
            
    } 
  return (
    <div className='form'>
        <div className='progressbar'>
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
                    onClick={() => (setPage((currPage) => currPage -1 ))}>Prev</button>
                    <button 
                    disabled = {page === FormTitles.length -1}
                    onClick={() => {setPage((currPage) => currPage + 1 )}}>Next</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form