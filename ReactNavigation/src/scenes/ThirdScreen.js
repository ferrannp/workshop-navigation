/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ThirdScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Look ma! I'm the Third screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
