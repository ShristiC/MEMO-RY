import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false
        }
        this.handleshow = this.handleshow.bind(this);
    }

    handleshow() {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.RectangleLogo}>
                    <Text
                        style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 0, color: '#ffffff', textAlign: "center" }}>
                        MEMO-RY
                 </Text>
                </View>

                <View >
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.titleText} activeOpacity={0.5}>To Do List</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View>
                        <TouchableOpacity onPress={() => alert('Places Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>7:00: Take Medication</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('Places Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>7:30: Brush Teeth</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('All Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>11:00: DR. Appointment</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('All Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>1:30: Lunch with Robyn</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('All Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>3:00: Visit Family</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('All Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>5:00: Gardening Club</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View >
                    <View >
                        <TouchableOpacity onPress={() => alert('All Selected')} style={styles.button}>
                            <Text style={styles.instructions} activeOpacity={0.5}>9:00: Medication</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
} export default ToDoList;

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
        color: 'black',
        fontSize: 30,
        marginHorizontal: 15,
        marginLeft: 20,
        //justifyContent: 'flex-start',
        //letterSpacing: 10,
    },
    noShow: {
        color: '#ffffff',
        fontSize: 30,
        marginHorizontal: 15,
        marginLeft: 20,
        //justifyContent: 'flex-start',
        //letterSpacing: 10,
    },
    // Style for button (organizes items in center of row, background color, dimensions)
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3EAEB',
        height: 40,
        width: 400,
        //borderRadius: 5,
    },
    //Title
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        //textAlign: 'center',
        color: 'black',
        marginLeft: 10,
        //marginTop: 10,
    },
    RectangleLogo: {
        marginTop: 40,
        width: 400,
        height: 50,
        backgroundColor: '#329ba8',
    },
});