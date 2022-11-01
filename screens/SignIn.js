import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignIn = ({ navigation }) => {
  function navigate() {
    navigation.navigate("signUp");
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}></View>
      <Image
        style={styles.ImageStyle}
        source={require("../assets/Images/logo.png")}
      />
      <View style={styles.BottomView}>
        <Text style={styles.Heading}>
          Welcome{"\n"}
          Back
        </Text>
        <View style={styles.FormView}>
          <TextInput
            placeholder={"Email adress"}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.BotomText}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.TextButton} onPress={navigate}>
          <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  TopView: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomView: {
    width: "100%",
    height: "80%",
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ImageStyle: {
    width: "200%",
    resizeMode: "contain",
  },
  Heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 30,
    color: "#fff",
  },
  TextInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20,
    color: "#fff",
  },
  FormView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 20,
  },
  Button: {
    width: "90%",
    color: "#000",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BotomText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  SignUpText: {
    color: "gray",
  },
  TextButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
});

export default SignIn;
