import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Screen from './Screen';
import AppTextInput from './AppTextInput';
import PickerItem from './PickerItem';


function AppPicker({icon,items,placeholder,onSelectItem,selectedItem, ...otherProps}) {
    const [Modalvisible, setModalvisible]=useState(false);
    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalvisible(true)}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
            name={icon}
            size={20}
            color={"black"}
            style={styles.icon}/>}
            
            <Text style={styles.text}>
                {selectedItem? selectedItem.title :placeholder}</Text>

            <MaterialCommunityIcons 

            name="chevron-down"
            size={20}
            color={"black"}
            />
        </View>
        </TouchableWithoutFeedback>


        <Modal visible={Modalvisible} animationType='slide'>
            <Screen>
            <Button title="close" onPress={()=>setModalvisible(false)}/>
            <FlatList
                data={items}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({item})=> (
                <PickerItem 
                title={item.title} 
                onPress={()=> {
                    setModalvisible(false);
                    onSelectItem(item);
                }}

            />
                )}

            />
            </Screen>
        </Modal>
        </>
    );
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: "lightgrey",
        borderRadius: 25,
        flexDirection:"row",
        width:"100%",
        padding: 15,
        marginVertical: 10

    },

    icon:{
        marginRight: 10,

    },

    text:{
        flex:1,
    }


})

export default AppPicker;