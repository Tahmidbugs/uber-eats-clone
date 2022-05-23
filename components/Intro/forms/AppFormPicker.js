import React from 'react';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';
import AppPicker from '../AppPicker';

function AppFormPicker({items,name,placeholder}) {
    const{errors,setFieldValue,touched,values}= useFormikContext();
    
    
    return (
        <>
        <AppPicker
        items={items}
        onSelectItem={(item)=> setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        />
        


        </>
    );
}

export default AppFormPicker;