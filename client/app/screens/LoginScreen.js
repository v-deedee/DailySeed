import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const LoginScreen = ({ navigation, signIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password,
    );
    signIn();
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo/logo-with-text.png")}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.registerField}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.registerText}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFFD8",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#EAEAEA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#003f5c",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#50AA75",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  registerField: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  registerText: {
    color: "#008D6A",
    fontWeight: "bold",
  },
});

export default LoginScreen;
