import dayjs from "dayjs";
import React, { useState } from "react";
import { MyModal } from "../modal/Modal";
import { useForm } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import FormField, { FormFieldType } from "../formField/FormField";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./CreateForm.styles";
import { Ionicons } from "@expo/vector-icons";

export const CreateForm = () => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      image: "",
      tripName: "",
      description: "",
      travelDestination: "",
      range: "",
      startDate: "",
      endDate: "",
      budget: 0,
      numOfPeople: 0,
    },
  });

  // move to const at some point
  const defaultImage = require("@/src/assets/Designer5.png");

  const [modalOpen, setModalOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const [imageUri, setImageUri] = useState<string>("");

  const [range, setRange] = React.useState<{
    startDate: DateType;
    endDate: DateType;
  }>({ startDate: undefined, endDate: undefined });

  const onChange = (params: any) => {
    setRange(params);

    const formattedRange = {
      startDate: dayjs(params.startDate).format("MMM D, YYYY"),
      endDate: dayjs(params.endDate).format("MMM D, YYYY"),
    };

    setValue(
      "range",
      formattedRange.startDate + " - " + formattedRange.endDate
    );
    setValue("startDate", formattedRange.startDate);
    setValue("endDate", formattedRange.endDate);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setValue("image", result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.imageWrapper}>
        <Image
          source={imageUri ? { uri: imageUri } : defaultImage}
          resizeMode="cover"
          style={styles.image}
          fadeDuration={0}
        />
        <View style={styles.overlay} />
        <View style={styles.icon}>
          <TouchableOpacity style={styles.iconWrapper} onPress={pickImage}>
            <Ionicons name="camera-outline" size={32} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formWrapper}>
        <FormField
          control={control}
          name="tripName"
          label="Trip name"
          placeholder="Enter trip name"
          fieldType={FormFieldType.INPUT}
        />
        <FormField
          control={control}
          name="description"
          label="Trip description"
          placeholder="Enter trip description"
          fieldType={FormFieldType.TEXTAREA}
        />

        <FormField
          control={control}
          name="travelDestination"
          label="Travel destination"
          placeholder="Select travel destination"
          fieldType={FormFieldType.FAKE_FIELD}
          onPress={() => setLocationModalOpen(true)}
        />

        <FormField
          control={control}
          placeholder="Select trip date"
          name="range"
          label="Trip date"
          fieldType={FormFieldType.FAKE_FIELD}
          onPress={() => setModalOpen(true)}
        />

        <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <DateTimePicker
            mode="range"
            date={new Date()}
            startDate={range.startDate}
            endDate={range.endDate}
            onChange={onChange}
            headerButtonsPosition="right"
            headerTextStyle={{
              fontSize: 20,
              color: "black",
              fontFamily: "Helvetica-Now-Display-Bold",
            }}
          />
        </MyModal>

        {/* <MyModal
          modalOpen={locationModalOpen}
          setModalOpen={setLocationModalOpen}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
            }}
          > */}
        <GooglePlacesAutocomplete
          placeholder="Search for a destination"
          onPress={(data, details = null) => {
            setValue("travelDestination", data.description);
            setLocationModalOpen(false);

            console.log(data);
          }}
          query={{
            key: "AIzaSyB7T9ISV9E-Et0ZVwhCFASabnnzVlhm8QI",
            language: "en",
            types: "(cities)",
          }}
          renderLeftButton={() => (
            <Ionicons
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
              name="search"
              size={24}
              color="black"
            />
          )}
          styles={{
            container: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 12,
              borderColor: "#CFCFCF",

              paddingHorizontal: 12,
              paddingVertical: 8,
            },
            textInput: {
              backgroundColor: "#f5f5f5",
            },
          }}
          //   styles={{
          //     container: {
          //       flex: 0,
          //     },
          //     textInput: {
          //       height: 46,
          //       fontSize: 16,
          //       backgroundColor: "#f5f5f5",
          //       borderRadius: 8,
          //       paddingHorizontal: 12,
          //     },
          //     listView: {
          //       backgroundColor: "white",
          //       marginTop: 8,
          //       borderRadius: 8,
          //     },
          //     row: {
          //       padding: 13,
          //       height: 44,
          //     },
          //     separator: {
          //       height: 0.5,
          //       backgroundColor: "#c8c7cc",
          //     },
          //   }}
          //   fetchDetails={true}
          enablePoweredByContainer={false}
        />
      </View>
      {/* </MyModal>
      </View> */}
    </>
  );
};
