import { useState } from "react";
import FormInput from "../form-input/form-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { ButtonsContainer, SignInContainer } from "./signin.styles.jsx";
import { useDispatch } from "react-redux";
import { emailSigninStart, googleSigninStart } from "../../store/user/user-action";

const defaultFields ={
    email : "",
    password:""
}

function SignInForm(){
    const [formFields , setFormFields] = useState(defaultFields);
    const {email , password} = formFields;
    
    const dispatch = useDispatch();

function returnFields (){
  setFormFields(defaultFields)}; 

  const signinWithGoogle = async()=> {
    dispatch(googleSigninStart());
   
  } 

const HandleSubmit =async(event)=>{
    event.preventDefault();

try {
    dispatch(emailSigninStart(email, password))
    returnFields();

} catch (error) {
    switch(error.code){
        case 'auth/wrong-password':
            alert("Incorrect Password");
            break;
        case 'auth/user-not-found':
            alert("No User Found");
            break;
            default :
            console.log(error.message);
    }
    
}

}
    function handleChange(event){
     const{name , value} = event.target;

setFormFields({...formFields , [name]:value});
    };

    return(
        <SignInContainer>
            <h2>Already Have an Account</h2>
            <span>Sign In With Your Email and Password</span>
            <form onSubmit={HandleSubmit}>
                 <FormInput  
                label="Email"
                 required 
                 type= "email" 
                 onChange={handleChange} 
                 name="email" 
                 value={email}
                  />
                  <FormInput 
                label="Password"
                 required 
                 type= "password" 
                 onChange={handleChange} 
                 name="password" 
                 value={password}
                  />
                  <ButtonsContainer>
                <Button  type='submit'>SignIn</Button>
                <Button onClick ={signinWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Google Sign-in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}
export default SignInForm;