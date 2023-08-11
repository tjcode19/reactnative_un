import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalsItem(props) {
  return (
    <Pressable android_ripple={color='#ff000000'} onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalsItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#aaaaaa",
    
    marginBottom: 6,
    borderRadius: 8,
  },
  goalText: {
    color: "#fff",
    padding: 6,
  },
});
