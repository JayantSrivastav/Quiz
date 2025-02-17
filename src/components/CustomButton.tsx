import { Pressable, Text, StyleSheet, View } from "react-native";

type CustomButton = {
  title: string;
  rightIcon?: React.ReactNode;
  onPress: () => void;
};

export default function CustomButton({
  title,
  rightIcon,
  onPress,
}: CustomButton) {
  return (
    <Pressable
      onPress={onPress}
      //   onLongPress={() => console.warn("LONG Pressed")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>

      <View style={styles.rightIcon}>{rightIcon}</View>

      {/* <FontAwesome6
            name="arrow-right-long"
            size={16}
            color="white"
            style={styles.buttonIcon}
          /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
