import React from 'react';

import Input from './components/Input.js'
import Button from './components/Button.js'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailValue: '',
            passwordValue: ''
        }

        this.handleEmailChange    = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleEmailChange (e) {
        let currentValue = e.target.value;

        this.setState(prevState => ({
            ...prevState, emailValue: currentValue
        }))
    }

    handlePasswordChange (e) {
        let currentValue = e.target.value;

        this.setState(prevState => ({
            ...prevState, passwordValue: currentValue
        }))
    }

    handleSendData (e) {
        console.log('logic')
    }

    
    render () {
        return (
            <>
                <Input type={'email'}
                    name={'email-field'}
                    value={this.state.emailValue}
                    placeholder={'Enter your email'}
                    handleChange={this.handleEmailChange}
                /> {/* Input user email */}

                <Input type={'password'}
                    name={'password-field'}
                    value={this.state.passwordValue}
                    placeholder={'Enter your Password'}
                    handleChange={this.handlePasswordChange}
                /> {/* Input user password */}

                <Button 
                    id={'login'}
                    value={'Login'}
                    callBack={function(){}}
                /> {/* Send user data */}
                
            </>
        );
    }
}

export default Login;