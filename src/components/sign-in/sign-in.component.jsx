import React from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component{
    
    
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an acount</h2>
                <span>Sign in with Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     
                     label="email" 
                     type="email" 
                    
                     name="email" 
                     required
                    />
                    
                    <FormInput 
                    
                     label="password"
                     type="password"
                     
                     name="password" 
                     required 
                    />  
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton  >
                            Google Sign-In
                        </CustomButton>
                    </div>
                    
                </form> 
            </div>
        )
    }

}
export default SignIn;