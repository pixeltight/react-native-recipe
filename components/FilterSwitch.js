import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

import Colors from '../constants/colors'

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#CCC',
    borderWidth: 1,
    width: '90%',
    paddingVertical: 7,
    paddingHorizontal: 8,
    backgroundColor: '#E9E9E9',
    borderRadius: 15,
    marginTop: 15
  }
})

export default FilterSwitch
