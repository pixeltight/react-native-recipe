import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'
import colors from '../constants/colors'
import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)
  const starSymbol = '\u2605'

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <DefaultText customText={styles.title}>
          No favorite meals found. Add some with the{' '}
          <Text style={styles.purple}>{starSymbol}</Text> icon in the details
          screen!
        </DefaultText>
      </View>
    )
  }
  return <MealList listData={favMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          size={36}
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

export default FavoritesScreen

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
  },
  purple: {
    color: colors.primaryColor
  }
})
