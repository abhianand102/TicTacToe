import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Animated, Easing, Image } from 'react-native';
import Board from './Board';
import { styles } from './styles';

interface GameState {
  board: string[][];
  currentPlayer: 'X' | 'O';
  winner: string | null;
}

const initializeBoard = () => {
  return Array.from({ length: 3 }, () => Array(3).fill(''));
};

const Game = () => {
  const [gameState, setGameState] = useState<GameState>({
    board: initializeBoard(),
    currentPlayer: 'X',
    winner: null,
  });

  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState(false);

  // Animation variables
  const messageOpacity = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handleSquarePress = (row: number, col: number) => {
    if (gameState.winner || gameState.board[row][col] !== '' || gameOver) return;

    const newBoard = gameState.board.map((row) => [...row]);
    newBoard[row][col] = gameState.currentPlayer;

    setGameState((prevState) => ({
      ...prevState,
      board: newBoard,
      currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
    }));

    checkGameState(newBoard, row, col);
  };

  const checkGameState = (board: string[][], row: number, col: number) => {
    const currentPlayer = board[row][col];

    // Check row
    if (board[row].every((square) => square === currentPlayer)) {
      setGameState({ ...gameState, winner: currentPlayer });
      setGameOver(true);
      return;
    }

    // Check column
    if (board.every((r) => r[col] === currentPlayer)) {
      setGameState({ ...gameState, winner: currentPlayer });
      setGameOver(true);
      return;
    }

    // Check diagonals
    if ((row === col || row + col === 2) &&
      ((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer))) {
      setGameState({ ...gameState, winner: currentPlayer });
      setGameOver(true);
      return;
    }

    // Check for draw
    if (board.flat().every((square) => square !== '')) {
      setDraw(true);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGameState({
      board: initializeBoard(),
      currentPlayer: 'X',
      winner: null,
    });
    setGameOver(false);
    setDraw(false);

    // Reset animations
    Animated.timing(messageOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonScale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (gameOver) {
      // Animate the message opacity
      Animated.sequence([
        Animated.timing(messageOpacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(messageOpacity, {
          toValue: 0,
          duration: 300,
          delay: 2000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // After the message fades out, show the button
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });

      // Animate the button scale
      Animated.spring(buttonScale, {
        toValue: 1.2,
        friction: 3,
        tension: 50,
        useNativeDriver: true,
      }).start();
    }
  }, [gameOver]);

  return (
    <View style={styles.gameContainer}>
      {!gameOver && <Board board={gameState.board} onSquarePress={handleSquarePress} />}
      {gameOver && (
        <View>
          <Animated.View
            style={[
              styles.messageContainer,
              { opacity: messageOpacity }
            ]}
          >
            <Text style={styles.winnerText}>
              {gameState.winner ? `Winner: ${gameState.winner}` : "It's a Draw!"}
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.buttonImage,
              { opacity: buttonOpacity, transform: [{ scale: buttonScale }] }
            ]}
          >
            <ImageBackground
              source={require('../assets/button.png')}
              style={styles.buttonImage}
              resizeMode="cover"
            >
              <TouchableOpacity style={styles.replayButton} onPress={resetGame}>
                <Text style={styles.buttonText}>Replay Game</Text>
                <Image source={require('../assets/undo.png')} style={styles.retryImage} />
              </TouchableOpacity>
            </ImageBackground>
          </Animated.View>
        </View>
      )}
    </View>
  );
};

export default Game;