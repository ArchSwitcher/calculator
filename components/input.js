import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';



const styles = StyleSheet.create({
    containerText: {
        height: 45,
        position: 'relative',
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#cacaca",
        borderRadius: 3,
        marginHorizontal: 50,
    },
    labelContainer: {
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 5
    },
    textInput: {
        fontSize: 20
    }
});

const InputBox = ({ label, iconName, ...props }) => (
    <View style={styles.containerText}>
        <View style={styles.labelContainer}>
            <Icon name={iconName}
                type='font-awesome'
                color='#8d8d8d'
                size={25}
                style={{ marginHorizontal: 6, padding: 0 }}
            />
            <TextInput style={styles.textInput} placeholder={label} />
        </View>
    </View>
);


export default InputBox