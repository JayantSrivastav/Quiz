import { StyleSheet, Text, View, Pressable } from "react-native";

type AnswerOption = {
  option: string;
  isSelected?: boolean;
  onPress: () => void;
};

export default function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerOption) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.conatiner,
        isSelected && {
          backgroundColor: "#E1F396",
          borderColor: "3E1F396",
        },
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
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
