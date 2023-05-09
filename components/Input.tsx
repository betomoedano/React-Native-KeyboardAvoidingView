import { TextInput } from "react-native";

export default function Input() {
  return (
    <TextInput
      placeholder="write a message"
      placeholderTextColor={"white"}
      style={{
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        padding: 15,
        color: "white",
      }}
    />
  );
}
