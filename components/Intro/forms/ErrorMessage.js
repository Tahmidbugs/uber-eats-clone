import React from 'react';
import { Text, StyleSheet} from 'react-native';


function ErrorMessage({error, visible}) {

    if (!visible || !error) return null;
    return (
        <Text style={styles.text}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"red",
        fontStyle:"italic"

    }
})

export default ErrorMessage;