import { Text, View, StyleSheet, Image } from "react-native";
import {Colors} from "@/constants/Colors";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.LogoContainer}>
        <Image style={styles.logo} source={require("./../assets/images/Jays Outer Space_transparent-.png")} />
      </View>
      <View style={styles.SubContainer}>
      <Text style={styles.tagLineTop}>
        Learn<Text style={styles.brownText}>CODE!!!</Text>
        </Text>
        <Text style={styles.tagLineTop}>Come and check us out</Text>
        <Text style={styles.tagLine}>Are located in the heart of the big city. that is wher it all happens.
        </Text>
        <Button 
        mode="text" 
        style={styles.btn}
        onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.WhiteText}>Sign In</Text>
        </Button>
        
        <Button 
        mode="text" 
        style={styles.btn}
        onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.WhiteText}>Sign Up Today!</Text>
        </Button>
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
    
  },

  tagLineTop:{
    fontSize: 30,
    textAlign:"center",
  },

  tagLine:{
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.DEV_GRAY,
  },
  
  brownText:{
    color: Colors.DEV_PRIMARY,
  },

  btn: {
backgroundColor: Colors.DEV_PRIMARY,
padding: 10,
borderRadius: 50,
marginTop: 50,
  },

  WhiteText:{
    color: "#fff",
    textAlign:"center",
  },
})