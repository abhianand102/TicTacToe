import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface SquareProps {
  value: string;
  onPress: () => void;
}

const Square = ({ value, onPress }: SquareProps) => {
  return (
    <TouchableOpacity style={styles.squareContainer} onPress={onPress}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;