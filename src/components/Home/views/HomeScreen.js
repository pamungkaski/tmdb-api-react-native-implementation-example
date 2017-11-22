/**
 * Created by iampamungkas on 11/20/17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StatusBar, FlatList, ToolbarAndroid, BackHandler, TouchableOpacity, Dimensions, Image, Text } from 'react-native'
import { NavigationActions }  from 'react-navigation'
import { HomeFilmCard } from './HomeFilmCard'
import { filmList } from '../../../actions/filmActions'

const mapStateToProps = (state) => {
  return {
    film: state.film
  }
}

const D = Dimensions.get('window')

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.onReachedBottom = this.onReachedBottom.bind(this)
    this.loadFilmList = this.loadFilmList.bind(this)
  }
  static navigationOptions = {
    header: null,
  }
  state = {
    pages: 1,
  }
  componentWillMount() {
    this.loadFilmList(this.state.pages)
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }
  onReachedBottom() {
    this.loadFilmList(this.state.pages + 1)
    this.setState({
      pages: this.state.pages + 1,
    })
  }
  loadFilmList(pages) {
    const{ dispatch } = this.props
    dispatch(filmList(pages))
  }
  onCardPress = (item) => {
    const { navigation } = this.props
    navigation.navigate('HomeDetailFilm', {item})
  }
  _keyExtractor = (item, index) => item.id
  _renderItem = (item) => {
    // console.log(item)
    return (
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => this.onCardPress(item)}>
          <HomeFilmCard item={item.item}/>
        </TouchableOpacity>
      </View>
    )
  }
  onBackPress = () => {
    const { dispatch, state } = this.props.navigation
    if (state.routeName === "Home") {
      BackHandler.removeEventListener()
      BackHandler.exitApp()
      return true
    } else {
      dispatch(NavigationActions.back())
      return true
    }
  }
  render(){
    const { navigation, film } = this.props
    const { listPopular } = film
    return(
      <View style={{ flex:1 }}>
        <View style={{ height: D.height * 0.03}} backgroundColor={"#0c6e7a" } />
        <View style={{ height: D.height * 0.11, flexDirection: 'row'}} backgroundColor={"#081c24" } >
          <View style={{ padding: 5 }}>
            <Image style={{ height: D.height * 0.09, width: D.height * 0.09}} resizeMode={'contain'} source={require('../../../assets/icon.png' )}/>
          </View>
          <View style={{ padding: 5, justifyContent: 'center', alignItems:'center' }}>
            <Text style={{ color: 'white', fontSize: 16 }}>
              The Movie Database
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeTopRated')}>
            <View style={{ padding: 5, justifyContent: 'center', alignItems:'center' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>
                Top Rated
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList
          extraData={listPopular}
          style={{ backgroundColor: '#dfdfdf' }}
          data={listPopular}
          keyExtractor={this._keyExtractor}
          renderItem={(item) => this._renderItem(item) }
          onEndReachedTresholf={0}
          onEndReached={this.onReachedBottom}
        />
      </View>
    )
  }
}
export default connect(mapStateToProps)(HomeScreen)