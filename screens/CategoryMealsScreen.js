import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data'
import MealList from '../components/MealList'
import DefalutText from '../components/DefaultText'

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(meal => {
    return meal.categoryIds.indexOf(catId) >= 0
  })

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefalutText customText={styles.title}>
          No meals found. Please check your saved filters.
        </DefalutText>
      </View>
    )
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14
  },
  title: {
    marginTop: 20,
    fontSize: 16,
    margin: 10,
    textAlign: 'center'
  }
})

export default CategoryMealsScreen
