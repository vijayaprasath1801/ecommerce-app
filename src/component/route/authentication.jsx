import SignUpForm from '../signup/Sign-up-form';
import SignInForm from '../sign-in-Form/sign-in-form';
import { AuthenticationContainer } from './auth.styles';
const Authentication =()=>{
    


return(
<AuthenticationContainer>
    <SignInForm />
    <SignUpForm />
</AuthenticationContainer>
    )

}
export default Authentication ;