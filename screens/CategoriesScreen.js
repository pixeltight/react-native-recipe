import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
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

// This can be set in main navigator file...
// CategoriesScreen.navigationOptions = {
//   headerTitle: 'Meal Categories'
// }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoriesScreen
