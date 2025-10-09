// src/components/StyledText.js

import React from 'react';
import { Text } from 'react-native';
import styles from './StyledTextStyle';

const StyledText = () => {
  return (
    // 1. O Text pai define o estilo base (tamanho 20, cor cinza).
    <Text style={styles.baseText}>
      Este é um texto com estilo base. A palavra{' '}
      
      {/* 2. Este Text filho herda o fontSize, mas define seu próprio fontWeight e color. */}
      <Text style={styles.importantText}>
        IMPORTANTE
      </Text>
      
      {' '}herda o tamanho da fonte, mas tem sua própria cor e peso definidos.
    </Text>
  );
};

export default StyledText;