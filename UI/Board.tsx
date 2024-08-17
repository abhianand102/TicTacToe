import React from 'react';
import { ImageBackground, View } from 'react-native';
import Square from './square';
import { styles } from './styles';

interface BoardProps {
  board: string[][];
  onSquarePress: (row: number, col: number) => void;
}

const Board = ({ board, onSquarePress }: BoardProps) => {
  return (
    <ImageBackground
      source={require('../assets/top1.jpg')}
      style={styles.boardContainer}
      resizeMode="cover"
    >
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              value={square}
              onPress={() => onSquarePress(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Board;