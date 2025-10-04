import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 5) {
      console.log("elemento visual");
    }
  }, [count]); 

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Contador: {count}</Text>

      <Button style={styles.button}
        title="Adicionar"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 50,
    marginBottom: 10,
    color: 'red',
  },
 
});
