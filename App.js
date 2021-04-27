import React from 'react'
import { View, Text } from 'react-native'
import * as Progress from 'react-native-progress';

const App = () => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <Progress.Circle 
        size={80} 
        indeterminate={true} 
        borderWidth={3}
        thickness={100}
      />
      <Progress.CircleSnail 
        color={['red', 'green', 'blue']} 
        thickness={10}
        size={100} 
        duration={500}
      />
    </View>
  )
}

export default App
