import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

 export default function App() {
     return (         
         <View style={styles.container}>
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
                 <Text
                     style={{ fontSize: 20, lineHeight: 25, letterSpacing: 10, paddingTop: 22, color: '#ffffff', textAlign: "center" }}>
                     Read More
                 </Text>
             </View>
             <View>
                 <View style={styles.NavigationBar}/>
                    
                 <Text
                     style={{ fontSize: 15, lineHeight: 50, letterSpacing: 10, color: '#ffffff', textAlign: "center"}}>
                     Previous          Next
                 </Text>
             </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3EAEB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    RectangleLogo: {        
        marginTop: 40,
        width: 400,
        height: 50,        
        backgroundColor: '#4B9AB9',        
    },
    RectangleButton: {
        marginBottom: 120,
        width: 200,
        height: 70,
        backgroundColor: '#4B9AB9',
    },
    NavigationBar: {        
        width: 400,
        height: 60,
        backgroundColor: '#4B9AB9',
        opacity: .4,
        position:'absolute'
    }
});
