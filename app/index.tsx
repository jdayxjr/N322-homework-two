import { Text, View, StyleSheet, Image } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image style={styles.logo} source={require("./../assets/images/Jays Outer Space_transparent-.png")} />
      </View>
      <View>
        <Text>Learn <Text>CODE!!!</Text>
        </Text>
        <Text>Come and check us out</Text>
        <Text>Are located in the heart of the big city. that is wher it all happens.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
   
  },

  LogoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -50,
  },

  logo:{
width: 300,
height: 300,
  },

  SubContainer:{
    padding: 20,
    marginTop:-20,
  }
})