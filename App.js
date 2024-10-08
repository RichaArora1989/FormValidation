// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FormExample from './FormExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FormExample/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
