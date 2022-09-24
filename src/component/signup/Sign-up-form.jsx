import { useState } from "react";
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./signup.styles.jsx";
import { SignUpContainer } from "./signup.styles.jsx";
import Button from "../button/button";

const defaultFields ={
    displayName :"",
    email : "",
    password:"",
    confirmPassword:""
};
function SignUpForm(){
    const [formFields , setFormFields] = useState(defaultFields);
    const {displayName , email , password , confirmPassword} = formFields;



function returnFields (){
  setFormFields(defaultFields)}; 

const HandleSubmit =async(event)=>{
    event.preventDefault();
if(password !== confirmPassword){
    alert("Passwords Do not Match");
    return;
}
try {
    const {user} = await createAuthUserWithEmailAndPassword(email , password);

    
    await createUserDocumentFromAuth(user , {displayName});
    returnFields();
} catch (error) {
    if(error.code === "auth/email-already-in-use"){
        alert("email Exists already");
    }
    console.log(error.message);
}

}
    function handleChange(event){
     const{name , value} = event.target;

setFormFields({...formFields , [name]:value});
    };

    return(
        <SignUpContainer>
            <h2>Don't Have an Account</h2>
            <span>Sign Up With Your Email and Password</span>
            <form onSubmit={HandleSubmit}>
            <FormInput 
                label="Display Name"
                 required 
                 type= "text" 
                 onChange={handleChange} 
                 name="displayName" 
                 value={displayName}
                  />
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
                  <FormInput 
                label="Confirm Password"
                 required 
                 type= "password" 
                 onChange={handleChange} 
                 name="confirmPassword" 
                 value={confirmPassword}
                  />
                <Button type='submit'>SignUp</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;