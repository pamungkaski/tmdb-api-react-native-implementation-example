/**
 * Created by iampamungkas on 11/20/17.
 */
import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Dimensions, Text } from 'react-native'

const D =Dimensions.get('window')

export class HomeFilmCard extends Component{
  render(){
    return(
      <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor:'white' }}>
        <Image style={{ width: D.width * 0.6, height: D.width * 0.6 * 1.5 }} resizeMode={"contain"} source={{uri: `https://image.tmdb.org/t/p/w500${this.props.item.poster_path}`}}/>
        <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Roboto', textAlign:'center' }}>
          {this.props.item.original_title} ({this.props.item.vote_average})
        </Text>
      </View>
    )
  }
}