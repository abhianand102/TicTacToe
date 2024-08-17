import React, { useState } from 'react';
import { View, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
import Game from './UI/Game';
import { styles } from './UI/styles';

const App = () => {
  const [showGame, setShowGame] = useState(false);

  const handlePlayButtonPress = () => {
    setShowGame(true);
  };

  const handleBackButtonPress = () => {
    setShowGame(false);
  }

  return (
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1, // set opacity here
      }}
      resizeMode="cover"
    >
      <ImageBackground
            source={require('./assets/name.png')}
            style={styles.topImage}
            resizeMode="cover"
          >
            <Text style={styles.text}>Tic-Tac-Toe</Text>
          </ImageBackground>
          <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={handleBackButtonPress}>
            </TouchableOpacity>
      
      {!showGame ? (
        <ImageBackground
        source={require('./assets/button.png')}
        style={styles.buttonImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={handlePlayButtonPress}
        >
          <Text style={styles.buttonText}>Play Game</Text>
        </TouchableOpacity>
        </ImageBackground>
      ) : (
        <View style={{flex:1}}>
          <Game />
        </View>
      )}

    </ImageBackground>
  );
};

export default App;