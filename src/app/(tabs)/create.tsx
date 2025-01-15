import dayjs from "dayjs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DateType } from "react-native-ui-datepicker";
import { MyModal } from "@/src/components/modal/Modal";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import FormField, { FormFieldType } from "@/src/components/formField/FormField";
import { styles } from "@/src/styles/screens/(authenticated)/CreateScreen.styles";

// TODO
const CreateScreen = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      image: "",
      tripName: "",
      description: "",
      travelDestination: "",
      range: {
        startDate: dayjs(),
        endDate: dayjs(),
      },
      budget: 0,
      numOfPeople: 0,
    },
  });

  const [tripStartDate, setTripStartDate] = useState(dayjs());
  const [tripEndDate, setTripEndDate] = useState(dayjs());

  const [modalOpen, setModalOpen] = useState(false);

  const [range, setRange] = React.useState<{
    startDate: DateType;
    endDate: DateType;
  }>({ startDate: undefined, endDate: undefined });
  const [dates, setDates] = useState<DateType[] | undefined>();

  const onChange = (params: any) => {
    setRange(params);
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("@/src/assets/Designer5.png")}
            resizeMode="cover"
            style={styles.image}
            fadeDuration={0}
          />
          <View style={styles.overlay} />
          <View style={styles.icon}>
            <TouchableOpacity style={styles.iconWrapper}>
              <Ionicons name="camera-outline" size={32} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            paddingHorizontal: 20,
            gap: 16,
          }}
        >
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
          />

          <FormField
            control={control}
            name="range"
            placeholder="Select trip date"
            fieldType={FormFieldType.FAKE_FIELD}
            label="Trip date"
            onPress={() => setModalOpen(true)}
          />

          <MyModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <FormField
              control={control}
              name="tripDate"
              label="Trip date"
              fieldType={FormFieldType.DATE_PICKER}
              startDate={tripStartDate.toDate()}
              endDate={tripEndDate.toDate()}
            />
          </MyModal>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateScreen;
