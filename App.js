import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Box from "./src/components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Counter</Text> */}
      <Box />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // This will make the <Box /> take up the entire width of the <App />, excluding any padding.
    alignItems: "stretch",
    justifyContent: 'center',
    // This will apply a 20px padding around the <App />.  This will not let the <Box /> take up the entire width of the <App />.
    padding: 20,
  },
});
