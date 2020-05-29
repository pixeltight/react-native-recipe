import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

import DefaultText from './DefaultText'

const MealItem = props => (
  <View style={styles.mealItem}>
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <DefaultText>
            <Text style={{ fontSize: 12 }}>{props.duration}m</Text>
          </DefaultText>
          <DefaultText>
            <Text style={{ fontSize: 12 }}>
              {props.complexity.toUpperCase()}
            </Text>
          </DefaultText>
          <DefaultText>
            <Text style={{ fontSize: 12 }}>
              {props.affordability.toUpperCase()}
            </Text>
          </DefaultText>
        </View>
      </View>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#d9d9d9',
    marginBottom: 10,
    borderRadius: 7,
    overflow: 'hidden'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '88%'
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '12%',
    fontSize: 8
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 3
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  }
})

export default MealItem
