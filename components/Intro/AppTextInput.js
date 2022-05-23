import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
            name={icon}
            size={20}
            color={"black"}
            style={styles.icon}/>}
            <TextInput 
            style={styles.input}
            {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E0E0E0",
        borderRadius: 25,
        flexDirection:"row",
        width:"100%",
        padding: 15,
        marginVertical: 10

    },

    input:{
        fontSize: 18,
        fontFamily: "Avenir",
        color: "black"
    },

    icon:{
        marginRight: 10,

    }


})

export default AppTextInput;