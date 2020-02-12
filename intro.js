import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
          <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
          <Image
              style={{ flex: 1, height: 100, width: 100, left: -10 }}
              source={require('./logo.png')}
              resizeMode="contain"
          />
              <Text
                  style={{ fontSize: 30, left: -65, bottom: -30, letterSpacing: 2 }}>
              MEMO-RY
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
});
