import * as React from 'react';
import { Alert, Button, Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import placesPic from './assets/placesPic.jpg';
import groupPic from './assets/groupPic.jpg';
import partyPic from './assets/partyPic.jpg';
import globePic from './assets/globePic.jpg';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Options')} style={styles.homeButton} >
                    <Image
                        style={{ flex: 1, height: 100, width: 100, right: 30, bottom: 4}}
                        source={require('./logo.png')}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: 30, right: 80, letterSpacing: 2 }}>
                        MEMO-RY </Text>
                </TouchableOpacity>
                
                
            </View>
        </View>
    );
}

function OptionsScreen({ navigation }) {
    return (
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
                    <TouchableOpacity onPress={() => navigation.navigate('List')} style={styles.button} >
                        <Text style={styles.instructions} activeOpacity={0.5}>To-Do List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity onPress={() => navigation.navigate('Memories')} style={styles.button}>
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
    );
}

function ListScreen({ navigation }) {
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
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.titleText} activeOpacity={0.5}>To Do List</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View>
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>7:00: Take Medication</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>7:30: Brush Teeth</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>11:00: DR. Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>1:30: Lunch with Robyn</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>3:00: Visit Family</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>5:00: Gardening Club</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.listButton}>
                        <Text style={styles.listText} activeOpacity={0.5}>9:00: Medication</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function MemoriesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.RectangleLogo}>
                <Text
                    style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 0, color: '#ffffff', textAlign: "center" }}>
                    MEMO-RY
                 </Text>
            </View>
            <View style={{
                backgroundColor: '#E3EAEB', marginTop: 0,
            }}></View>
            <View >
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('People')} style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>People</Text>
                        <Image source={groupPic} style={styles.groupPic} />
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Places</Text>
                        <Image source={placesPic} style={styles.placesPic} />
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>Events</Text>
                        <Image source={partyPic} style={styles.partyPic} />
                    </TouchableOpacity>
                </View>
            </View>
            <View >
                <View >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.instructions} activeOpacity={0.5}>All</Text>
                        <Image source={globePic} style={styles.globePic} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
function PeopleScreen({ navigation }) {
    return (
        <View style={styles.peopleContainer}>
            <View style={styles.RectangleLogo}>
                <Text
                    style={{ fontSize: 30, lineHeight: 50, letterSpacing: 15, paddingTop: 0, color: '#ffffff', textAlign: "center" }}>
                    MEMO-RY
                 </Text>
            </View>
            <Image
                style={{ flex: 1, height: 100, width: 350, top: 0 }}
                source={require('./testPic.jpg')}
                resizeMode="contain"
            />
            <View style={styles.RectangleButton}>
                <TouchableOpacity onPress={() => Alert.alert('Robyn, Shristi, Victoria, and Pranooha','We are 4 freshmen CS majors, and this is our first app!')}>
                <Text
                    style={{ fontSize: 20, lineHeight: 25, letterSpacing: 10, paddingTop: 22, color: '#ffffff', textAlign: "center",}}>
                    Read More
                 </Text>
                    </TouchableOpacity>
            </View>
            <View>
                <View style={styles.NavigationBar} />
                <Text
                    style={{ fontSize: 15, lineHeight: 50, letterSpacing: 10, color: '#ffffff', textAlign: "center" }}>
                    Previous          Next
                 </Text>
            </View>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Options" component={OptionsScreen} />
                <Stack.Screen name="List" component={ListScreen} />
                <Stack.Screen name="Memories" component={MemoriesScreen} />
                <Stack.Screen name="People" component={PeopleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    // Styles for pictures (sets width, height, right-justifies)
    placesPic: {
        width: 152,
        height: 80,
        marginLeft: 45,
        justifyContent: 'flex-start',
    },

    groupPic: {
        width: 152,
        height: 80,
        marginLeft: 40,
        justifyContent: 'flex-start',
    },

    partyPic: {
        width: 152,
        height: 80,
        marginLeft: 44,
        justifyContent: 'flex-start',
    },

    globePic: {
        width: 152,
        height: 80,
        marginLeft: 131,
        justifyContent: 'flex-start',
    },
    peopleContainer: {
        flex: 1,
        backgroundColor: '#E3EAEB',
        alignItems: 'center',
        justifyContent: 'center',
    },
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
    listButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3EAEB',
        height: 40,
        width: 400,
    },
    homeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3EAEB',
        height: 100,
        width: 400,
        borderRadius: 5,
    },
    RectangleLogo: {
        marginTop: 40,
        width: 400,
        height: 50,
        backgroundColor: '#329ba8',
    },
    RectangleButton: {
        marginBottom: 120,
        width: 200,
        height: 70,
        backgroundColor: '#329ba8',
        top: 55,
    },
    //Title
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    },
    listText: {
        color: 'black',
        fontSize: 30,
        marginHorizontal: 15,
        marginLeft: 20,
    },
    NavigationBar: {
        width: 500,
        height: 60,
        backgroundColor: '#329ba8',
        opacity: .4,
        position: 'absolute',
        marginLeft: -10,
    }
});
export default App;
