
import SignUpForm from '../signup/Sign-up-form';
import SignInForm from '../sign-in-Form/sign-in-form';
import "./auth.styles.scss";
const Authentication =()=>{
    


return(
<div className='authentication-container'>
    <SignInForm />
    <SignUpForm />
</div>
    )

}
export default Authentication ;