import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function Button(props) {
  return (
    <TouchableOpacity style={
      (props.value == '=' || props.value == 'C') ?
      [styles.button, styles.buttonColor]:
      styles.button
    }
    onPress = {
      props.onPress
    }>
      <Text style={
        (props.value == '=' || props.value == 'C') ?
        [styles.buttonText, styles.buttonTextColor]:
        styles.buttonText
      }>{props.value}</Text>
    </TouchableOpacity>
  );
}
