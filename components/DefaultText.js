import React from 'react'
import { Text, StyleSheet } from 'react-native'

const DefaultText = props => <Text style={styles.text}>{props.children}</Text>

styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})

export default DefaultText
