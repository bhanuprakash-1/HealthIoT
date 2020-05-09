import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';  
import { View , Text } from 'react-native';
import { Header } from './components/common';
import  LoginForm  from './components/LoginForm';
import reducers from './reducers'

class App extends Component {

    UNSAFE_componentWillMount(){ 
        const config = {           
            apiKey: "AIzaSyAb5Kk0xb_xKKZPd1hpAHzMtdMHRgs-D7w", 
            authDomain: "authentication-c17af.firebaseapp.com",
            databaseURL: "https://authentication-c17af.firebaseio.com",
            projectId: "authentication-c17af",
            storageBucket: "authentication-c17af.appspot.com",
            messagingSenderId: "840615717542",
            appId: "1:840615717542:web:63a7fc2a8f506732196267",
            measurementId: "G-LEV2DG5WCD"            
          };

          if (!firebase.apps.length) {
              console.log(firebase.apps.length) 
            firebase.initializeApp(config);
         }
        

    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // const store = createStore(reducers);  
        return(
            <Provider store={store}>
                <View>
                    <Header headerText = "HealthIoT" />
                    <LoginForm /> 
                </View>
            </Provider>

            

        )
    }

}

export default App;