import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  displayContainer: {
    flex: 4,
    backgroundColor: "#282a36",
    justifyContent: "flex-end"
  },
  displayText: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "right",
    padding: 20
  },
  inputContainer: {
    flex: 5,
    backgroundColor: "#44475a",
    elevation: 100
  },
  inputRow: {
    flex: 1,
    flexDirection: "row"
  }
});

export default styles;
