import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser , SignOut } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component{
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login 
            </Button>
        );      
    }

    renderuserinfo(){
        user = this.props.user;
        if (user!=null && this.props.loading == false){ 
            return(
                <Text style = { styles.errorTextStyle }  > 
                    {"logged in as "+ user.user.email }     
                </Text> 
            );
        }else if(user == null ) {
            return(
                <Text style = { styles.errorTextStyle }  > 
                        {"not logged in " }     
                </Text>
            );
        }   
    }

    onSignOutButtonPress(){
        this.props.SignOut();
    }

    renderSignOutButton(){
        if(this.props.signingOut == true){
            return <Spinner size="large" />;
        }
        else if(this.props.user!=null){
            return (
                <Button onPress={this.onSignOutButtonPress.bind(this)}>
                    SignOut      
                </Button>
            );
        }
    }

    render(){                     
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
        
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
        
                
                                       
                <CardSection>
                    {this.renderuserinfo()}
                </CardSection>

                <Text style = {styles.errorTextStyle} > 
                      {this.props.error}
                </Text> 

                {/* <CardSection>
                    <Text style = {styles.errorTextStyle} > 
                      {this.props.signOutError}
                    </Text> 
                </CardSection> */}
        
                <CardSection>
                    {this.renderButton()}
                </CardSection> 

                <CardSection>
                    {this.renderSignOutButton()}
                </CardSection>
                
            </Card>            
        );
    }

}


const styles = {
    errorTextStyle: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, user ,error, loading , signingOut , signOutError} = auth;
  
    return { email, password, error, loading , user , signingOut , signOutError };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser , SignOut
  })(LoginForm);