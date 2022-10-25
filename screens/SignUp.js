import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import BackIcon from "react-native-vector-icons/Feather";

const SignUp = ({ navigation }) => {
  function navigate() {
    navigation.navigate("signIn");
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}></View>
      <Image
        style={styles.ImageStyle}
        source={require("../assets/Images/logo.png")}
      />
      <ScrollView style={styles.BottomView}>
        <BackIcon
          onPress={navigate}
          style={styles.Icon}
          name="chevron-left"
          size={50}
          color={"#fff"}
        />
        <Text style={styles.Heading}>
          Welcome{"\n"}
          Back
        </Text>
        <View style={styles.FormView}>
          <TextInput
            placeholder={"Full name"}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Email adress"}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Mobile"}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={"Confrim Password"}
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.BotomText}> SignUP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  BottomView: {
    width: "100%",
    height: "95%",
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ImageStyle: {
    width: "100%",
    resizeMode: "contain",
  },
  Heading: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 25,
    color: "#fff",
  },
  TextInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    height: 52,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
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
  Icon: {
    marginLeft: 5,
    marginTop: 10,
  },
});

export default SignUp;
