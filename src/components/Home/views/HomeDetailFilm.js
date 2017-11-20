/**
 * Created by iampamungkas on 11/20/17.
 */
import React from 'react'
import { View, Dimensions, Image, Text } from 'react-native'

const D = Dimensions.get('window')

export const HomeDetailFilm = (props) => {
  const { item } = props.navigation.state.params.item
  return(
    <View style={{flex:1, backgroundColor:'#f4f4f4'}}>
      <View style={{width: D.width, height: D.height * 0.03}} backgroundColor={"#0c6e7a"} />
      <View style={{width: D.width, height: D.height * 0.11, flexDirection: 'row'}} backgroundColor={"#081c24"} >
        <View style={{padding: 5}}>
          <Image style={{ height: D.height * 0.09, width: D.height * 0.09}} resizeMode={'contain'} source={require('../../../assets/icon.png')}/>
        </View>
        <View style={{padding: 5, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: 'white', fontSize: 16}}>
            The Movie Database
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', margin: 10, padding: 10, justifyContent: 'center', alignItems:'center'}} >
        <Image key={{uri: `https://image.tmdb.org/t/p/w500${item.poster_view}`}} style={{width: D.width * 0.7}} resizeMode={"contain"} source={{uri: `https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg`}}/>
        <Text>
          {item.original_title} ({(item.release_date).split("-")[0]})
        </Text>
        <Text>
          {item.overview}
        </Text>
      </View>
    </View>
  )
}
