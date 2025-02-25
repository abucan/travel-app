import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView } from "react-native";
import { CreateForm } from "@/src/components/createForm/CreateForm";
import { styles } from "@/src/styles/screens/(authenticated)/CreateScreen.styles";

const CreateScreen = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <CreateForm />
      </ScrollView>
    </View>
  );
};

export default CreateScreen;
