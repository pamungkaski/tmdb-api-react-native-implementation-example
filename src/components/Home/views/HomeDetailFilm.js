/**
 * Created by iampamungkas on 11/20/17.
 */
import React from 'react'
import { View, Dimensions, Image, Text, ScrollView } from 'react-native'

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
      <ScrollView>
        <View style={{backgroundColor: 'white', margin: 10, padding: 10, justifyContent: 'center', alignItems:'center'}} >
          <Image style={{ width: D.width * 0.6, height: D.width * 0.6 * 1.5 }} resizeMode={"contain"} source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}/>
          <Text style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Roboto', textAlign:'center' }}>
            {item.original_title} ({(item.release_date).split("-")[0]})
          </Text>
          <Text>
            {item.overview}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}
