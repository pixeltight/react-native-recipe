import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CategoryGridTile from '../components/CategoryGridTile'
import HeaderButton from '../components/HeaderButton'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = props => {
  const renderGridItem = itemData => (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: { categoryId: itemData.item.id }
        })
      }}
    />
  )

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      // not necessary in newer versions of RN
      keyExtractor={(item, index) => item.id}
    />
  )
}

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          size={36}
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
