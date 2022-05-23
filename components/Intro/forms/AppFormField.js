import React from 'react';
import ErrorMessage from './ErrorMessage';
import {useFormikContext} from 'formik';
import AppTextInput from '../AppTextInput';

function AppFormField({name,...otherProps}) {
    const{handleChange,setFieldTouched,touched,errors}= useFormikContext()
    return (
        <>
            <AppTextInput
            onChangeText={handleChange(name)}
            onBlur={()=> setFieldTouched(name)}
            {...otherProps}
            />

            <ErrorMessage error={errors[name]} visible={touched[name]}/>

        </>
    );
}

export default AppFormField;