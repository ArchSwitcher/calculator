import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Card, Icon } from 'react-native-elements'
import InputBox from '../components/input'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    topContainer: {
        flex: 1,
        padding: 130,
        backgroundColor: '#0072b1', // Blue
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#ffffff'

    },
    cardContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginTop: '70%',
        // backgroundColor: 'grey',
        // marginHorizontal: 50,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 50, 
        width: 130,
        marginHorizontal: 90,
        marginBottom: 75, 
        paddingHorizontal: 75
    },
// STYLES ICON AND CIRCLE
circle: {
    borderWidth: 4,
    borderColor: "#cacaca",
    height: 130,
    width: 130,
    position: 'relative',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#ffffff',
}
})

const loginScreen = ({navigation}) => (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.circle}
                    onStartShouldSetResponder={() => navigation.navigate('History')}
                >
                    <Icon name={'external-link'}
                        type='font-awesome'
                        color='#ffffff'
                        size={80}
                        style={{ margin: 0, padding: 0 }}
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
            </View>
            <View style={styles.cardContainer}>
                <Card >
                    <Card.Image source={require('../assets/geko.png')} style={styles.image} ></Card.Image>
                    <InputBox label={'User'} iconName={'user'} />
                    <InputBox label={'Password'} iconName={'lock'} />
                    <View style={{ margin: 50 }}>
                        <Button
                            onPress={() => {
                                console.log('hola mundo')
                            }}
                            title="Login"
                            color="#009821"
                        />
                    </View>
                </Card>
            </View>
        </View >
    );


export default loginScreen
