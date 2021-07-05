import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
} from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#e7e4e4'
    },
    backIcon: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        marginRight: '23%',
    },
    image: {
        height: 50,
        marginTop: '12%',
        marginBottom: 75,
        paddingHorizontal: 75
    },
    // REPORT HEADER STYLE
    reportHeader: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5,
        paddingBottom: 10,
    },

    textReport: {
        fontSize: 30,
        color: '#0072b1'
    },
    button: {
        backgroundColor: '#0072b1',
        height: 45,
        width: 150,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    // LIST CONTAINER
    listContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 50,
    },

    row:{
        flexDirection: "row",
        height: 100,
        padding: 15,
    },
    boxNumber: {
        backgroundColor: "#009821",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.2,
    }, 
    boxText:{
        borderWidth: 1,
        borderColor: '#8d8d8d',
        flex: 0.8,
        justifyContent: 'center'
    },

    numberList: {
        fontSize: 35,
        color: 'white',
        margin: 0,
        padding: 0,
    },
    textList: {
        fontSize: 25,
        color: '#8d8d8d'
    },
    containerSafeArea: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    
})


const list = [
    { title: 'suma ' },
    { title: 'resta' },
    { title: 'multiplicacion ' },
    { title: 'division' },
]

const listHistory = ({navigation}) => (
    <View>
        <View style={styles.container}>
            <Icon
                name='chevron-left'
                type='font-awesome'
                size={30}
                style={styles.backIcon}
            />
            <Image source={require('../assets/geko.png')} style={styles.image} />
        </View>
        <View style={styles.reportHeader}>
            <Text style={styles.textReport}> REPORT </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Calculator')}
            >
                <Icon
                    name='calculator'
                    type='font-awesome'
                    size={20}
                    color='white'
                    style={{
                        marginLeft: 10
                    }}
                />
                <Text
                    style={{ fontSize: 19, color: 'white' }}> Calculator </Text>
            </TouchableOpacity>
        </View>

        <SafeAreaView  > 
            <ScrollView style={{
                backgroundColor: 'white',
            }}>
                {
                    list.map((l, i) => (
                        <View
                            key={i}
                            style={styles.row}
                        >
                            <View style={styles.boxNumber}>
                                <Text style={styles.numberList}>{i}</Text>
                            </View>
                            <View style={styles.boxText}>
                                <Text style={styles.textList}> {l.title}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    </View>

)

export default listHistory

