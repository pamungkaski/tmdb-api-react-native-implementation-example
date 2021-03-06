/**
 * Created by iampamungkas on 11/20/17.
 */
'use strict'

// Replace Login with the component name

import { StackNavigator } from 'react-navigation'

// Screens
import HomeScreen from './views/HomeScreen'
import HomeTopRated from './views/HomeTopRated'
import { HomeDetailFilm } from './views/HomeDetailFilm'

const routeConfiguration = {
  HomeScreen: { screen: HomeScreen },
  HomeDetailFilm: { screen: HomeDetailFilm },
  HomeTopRated: { screen: HomeTopRated }
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'HomeScreen'
}

export const NavigatorHome = StackNavigator(routeConfiguration,stackNavigatorConfiguration)