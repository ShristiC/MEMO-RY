import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomePage() {
    return (
        <NavigationContainer>
        <View style={styles.container}>

            <View style={styles.RectangleLogo}>
                <Text
                    style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 0, color: '#ffffff', textAlign: "center" }}>
                    MEMO-RY
                 </Text>
            </View>

            <View style={styles.blackLine}></View>
            
            <View >

                <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>To-Do List</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Memories</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View >
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Emergency Call</Text>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    // General layout
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E3EAEB',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
    },
    // Style for text (color, size, margins -- left justifies)
    instructions: {
        color: '#ffffff',
        fontSize: 30,
        marginHorizontal: 15,
        marginLeft: 20,
        justifyContent: 'flex-start',
        letterSpacing: 10,
    },
    // Style for button (organizes items in center of row, background color, dimensions)
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#329ba8',
        height: 80,
        width: 400,
        borderRadius: 5,
    },

    RectangleLogo: {
        marginTop: 40,
        width: 400,
        height: 50,
        backgroundColor: '#329ba8',
    },

    blackLine: {
        //marginTop: 40,
        width: 400,
        height: 5,
        backgroundColor: 'black',
    }

});