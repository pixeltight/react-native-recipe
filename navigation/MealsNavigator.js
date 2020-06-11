import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/colors'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyles: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitles: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions: {
      //   headerTitle: 'Meal Categories'
      // }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetails: {
      screen: MealDetailsScreen
    }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const FavNavigaton = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        // tabBarLabel: 'Meals!', // overrides text on tab
        tabBarIcon: tabInfo => (
          <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor} />
        )
      }
    },
    Favorites: {
      screen: FavNavigaton,
      navigationOptions: {
        tabBarIcon: tabInfo => (
          <Ionicons name='ios-star' size={20} color={tabInfo.tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: { fontFamily: 'open-sans-bold' }
    }
  }
)

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
)

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
)

export default createAppContainer(MainNavigator)
