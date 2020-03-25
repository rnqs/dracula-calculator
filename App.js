import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";

import styles from "./styles";

import Button from "./components/Button";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [previousInputValue, setPreviousInputValue] = useState(0);
  const [operationSelected, setOperationSelected] = useState(null);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{inputValue}</Text>
      </View>
      <SafeAreaView style={styles.inputContainer}>
        {renderButtons([
          ["C", "%", "/"],
          [7, 8, 9, "*"],
          [4, 5, 6, "-"],
          [1, 2, 3, "+"],
          [".", 0, "="]
        ])}
      </SafeAreaView>
    </View>
  );

  function renderButtons(inputButtons) {
    const views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      const row = inputButtons[r];

      const inputRow = [];
      for (var i = 0; i < row.length; i++) {
        const input = row[i];

        inputRow.push(
          <Button
            value={input}
            key={r + "-" + i}
            onPress={() => buttonPressed(input)}
          />
        );
      }

      views.push(
        <View style={styles.inputRow} key={"row-" + r}>
          {inputRow}
        </View>
      );
    }

    return views;
  }

  function buttonPressed(input) {
    switch (typeof input) {
      case "number":
        return handleNumberInput(input);
      case "string":
        return handleStringInput(input);
    }
  }

  function handleNumberInput(num) {
    setInputValue(inputValue * 10 + num);
  }

  function handleStringInput(string) {
    if (string == "=") {
      if (operationSelected) {
        setInputValue(
          eval(previousInputValue + operationSelected + inputValue)
        );
      }
      return;
    }
    if (string == "C") {
      setOperationSelected(null);
      setPreviousInputValue(0);
      setInputValue(0);
    } else {
      if (!operationSelected) {
        setPreviousInputValue(inputValue);
        setInputValue(0);
      }
      setOperationSelected(string);
    }
  }
}
