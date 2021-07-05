import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    FlatList,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,

} from 'react-native';
import { Card, Icon } from 'react-native-elements'
import InputBox from '../components/input'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'

    },
    topContainer: {
        padding: '25%',
        backgroundColor: '#ffffff', // Blue
        alignItems: 'center'
    },
    bottomContainer: {
        padding: '25%',
        backgroundColor: '#0072b1',

    },
    CalculatorContainer: {
        flexDirection: "row",
        // height: '100%',
        // backgroundColor: '#ffffff',
        // flexDirection: 'column',
        // padding: '75%'

    },

    emblemHorizontal: {
        fontSize: 35,
        marginLeft: '15%',
        color: 'green',

    },
    emblemVertical:
    {
        fontSize: 35,
        marginBottom: '3%',
        padding: '5%',
        color: 'green',

    },
    item: {
        marginVertical: '5%',
        marginHorizontal: '10%',
        padding: 4,
    },
    title:{
        fontSize: 40,
        color: '#cacaca'
    },

})

const caculatorList = [
    {
        emblem: 'C',
        color: 'green'
    },
    {
        emblem: 'clear',
        color: 'green'
    },
    {
        emblem: '%',
        color: 'green'
    },
    {
        emblem: '/',
        color: 'green'
    },
    {
        emblem: 'x',
        color: 'green'
    },
    {
        emblem: '-',
        color: 'green'
    },
    {
        emblem: '+',
        color: 'green'
    },
    {
        emblem: '=',
        color: 'green'
    },

]

const numberList = [
    { number: "1" }, { number: "2" }, { number: "3" }, { number: "4" }, { number: "5" }, { number: "6" }, { number: "7" }, { number: "8" }, { number: "9" }, {number: '%'}, {number: '0'}, {number: '.'}
]

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//         <Text style={[styles.title, textColor]}>{item.title}</Text>
//     </TouchableOpacity>
// );
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Calculator = () => {
    const [list, setList] = useState([1, 2, 3, 4]);
    const [selectedId, setSelectedId] = useState(null);

    // useEffect(() => {
    //     let numberList = [];
    //     for (let i; i < 10; i++) {
    //         numberList.push({
    //             number: i,
    //             color: 'grey'
    //         });
    //     }
    //     setList(numberList)
    // }, [])

    // const renderItem = ({ item }) => {
    //     const backgroundColor = item.number === selectedId ? "#6e3b6e" : "#f9c2ff";
    //     const color = item.number === selectedId ? 'white' : 'black';
    //     console.log(item.number)
    //     return (
    //         <Item
    //             key={item.number}
    //             item={item}
    //             onPress={() => setSelectedId(item.number)}
    //             backgroundColor={{ backgroundColor }}
    //             textColor={{ color }}
    //         />
    //     );
    // };

    const renderItem = ({ item }) => (
        <Item title={item.number} />
    );


    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
            </View>
            <View style={styles.bottomContainer}>
            </View>
            <View style={{
                backgroundColor: '#ffffff',
                height: 25
            }}>
            </View>
            <View style={styles.CalculatorContainer}>
                <SafeAreaView style={{
                    backgroundColor: "white",
                    // alignItems: 'baseline',
                    // width: '75%',
                }}>
                    <View style={{
                        alignItems: 'stretch',
                        flexDirection: 'row',
                        backgroundColor: 'white'
                    }}>
                        {
                            caculatorList.splice(0, 3).map((l, i) => (
                                <TouchableOpacity>
                                    <Text
                                        style={styles.emblemHorizontal}>
                                        {l.emblem}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }

                    </View>
                    {/* GRID  DE NUMEROS */}
                    <FlatList
                        data={numberList}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.number}
                        extraData={selectedId}
                        numColumns={3}
                    />
                </SafeAreaView>
                {/* COLUMNA PARA SIMBOLOS IZQUIERDOS */}
                <View style={{
                    justifyContent: 'center',
                    // width: '25%',
                    // height: '50%',
                    alignItems: 'center',
                    flexDirection: 'column',
                    backgroundColor: 'white'
                }}>
                    {
                        caculatorList.map((l, i) => (
                            <TouchableOpacity>
                                <Text
                                    style={styles.emblemVertical}>
                                    {l.emblem}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>

        </View >
    )



};


export default Calculator
