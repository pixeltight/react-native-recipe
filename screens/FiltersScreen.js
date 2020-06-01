import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import FilterSwitch from '../components/FilterSwitch'
import { setFilters } from '../store/actions/meals'

const FiltersScreen = props => {
  // extracting navigation key from props object to avoid
  // rerendering any time props change in useEffect

  const { navigation } = props
  const [isGlutenFree, setIsGlutenFree] = useState(false)
  const [isVegan, setIsVegan] = useState(false)
  const [isVegetarian, setIsVegetarian] = useState(false)
  const [isLactoseFree, setIsLactoseFree] = useState(false)

  const dispatch = useDispatch()

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log(
      `appliedFilters - filters screen: ${JSON.stringify(appliedFilters)}`
    )

    dispatch(setFilters(appliedFilters))
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  useEffect(() => {
    navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Filter Recipe Requirements</Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Filters',
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
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Save'
          iconName='ios-save'
          size={30}
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    margin: 10,
    textAlign: 'center'
  }
})

export default FiltersScreen
