//import libraries for making a component

import React from 'react';
import {Text,View} from 'react-native';

//Make a component

const Header = (props) => { 

    const { textStyle , viewStyle } = styles;

    return (
        <View style = {viewStyle} >
            <Text style ={textStyle} >{ props.headerText }</Text>
        </View> 
    );
};

const styles =  {

    viewStyle : {
        backgroundColor: 'skyblue',
        justifyContent : 'center',
        alignItems : 'center',

    },
    textStyle : {
        
        fontSize : 30 

    }

};

//Make the component available to other parts of app ie., export 

export { Header };