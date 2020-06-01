import React, { useEffect, useCallback } from 'react'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import DefaultText from '../components/DefaultText'
import { toggleFavorite } from '../store/actions/meals'

const ListItem = props => (
  <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
)

const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals)
  const mealId = props.navigation.getParam('mealId')
  const selectedMeal = availableMeals.find(meal => meal.id === mealId)
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  )

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite })
  }, [currentMealIsFavorite])

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  )
}

MealDetailsScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam('mealId')
  // const selectedMeal = MEALS.find(meal => meal.id === mealId)
  const mealTitle = navigationData.navigation.getParam('mealTitle')
  const toggleFavorite = navigationData.navigation.getParam('toggleFav')
  const isFavorite = navigationData.navigation.getParam('isFav')

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          size={23}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  detail: {
    flexDirection: 'row',
    paddingVertical: 4,
    justifyContent: 'space-around',
    backgroundColor: '#D8D8D8'
  },
  title: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 8
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    marginBottom: 6,
    marginHorizontal: 14,
    padding: 5
  }
})

export default MealDetailsScreen
