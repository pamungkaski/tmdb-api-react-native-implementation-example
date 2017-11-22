/**
 * Created by iampamungkas on 11/22/17.
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, FlatList, BackHandler, TouchableOpacity, Dimensions, Image, Text } from 'react-native'
import { filmListTopRated } from '../../../actions/filmActions'
import { HomeFilmCard } from './HomeFilmCard'

const D =  Dimensions.get('window')

class HomeTopRated extends Component {
  constructor(props){
    super(props)
  }
  state = {
    pages: 1,
  }
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(filmListTopRated(this.state.pages))
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
  render() {
    const { listToprated } = this.props
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
        </View>
        <FlatList
          extraData={listToprated}
          style={{ backgroundColor: '#dfdfdf' }}
          data={listToprated}
          keyExtractor={this._keyExtractor}
          renderItem={(item) => this._renderItem(item) }
          onEndReachedTresholf={0}
          onEndReached={this.onReachedBottom}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listToprated: state.film.listToprated,
  }
}

export default connect(mapStateToProps) (HomeTopRated)