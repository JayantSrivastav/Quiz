import { StyleSheet, Text, View } from "react-native";

export default function AnswerOption() {
  return (
    <View style={styles.conatiner}>
      <Text>This is an answer option.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 1,
    padding: 20,
    borderColor: "lightgray",
    borderRadius: 100,
  },
});
