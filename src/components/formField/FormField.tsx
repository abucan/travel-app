import React from "react";
import { styles } from "./FormField.styles";
import { Entypo } from "@expo/vector-icons";
import { Control, Controller } from "react-hook-form";
import DateTimePicker from "react-native-ui-datepicker";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// import PhoneInput from "react-native-phone-number-input";
// import DateTimePicker from "@react-native-community/datetimepicker";

export enum FormFieldType {
  INPUT = "input",
  SELECT = "select",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  SKELETON = "skeleton",
  DATE_PICKER = "datePicker",
  FAKE_FIELD = "fakeField",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: any;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType;
  startDate?: Date;
  endDate?: Date;
  onPress?: () => void;
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <View style={styles.container}>
          {props.iconSrc && <Image source={props.iconSrc} />}
          <Text style={styles.label}>{props.label}</Text>
          <TextInput
            placeholder={props.placeholder}
            value={field.value}
            onChangeText={field.onChange}
            editable={!props.disabled}
            style={styles.input}
          />
        </View>
      );
    case FormFieldType.TEXTAREA:
      return (
        <View style={[styles.container, styles.textarea]}>
          <Text style={styles.label}>{props.label}</Text>
          <TextInput
            placeholder={props.placeholder}
            value={field.value}
            onChangeText={field.onChange}
            editable={!props.disabled}
            multiline
            style={styles.input}
          />
        </View>
      );
    case FormFieldType.FAKE_FIELD:
      return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
          {props.iconSrc && <Image source={props.iconSrc} />}
          <Text style={styles.label}>{props.label}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholder={props.placeholder}
              value={field.value}
              onChangeText={field.onChange}
              editable={false}
              style={styles.input}
            />
            <Entypo name="chevron-down" size={24} color="black" />
          </View>
        </TouchableOpacity>
      );
    case FormFieldType.CHECKBOX:
      return (
        <TouchableOpacity onPress={() => field.onChange(!field.value)}>
          <Text>
            {field.value ? "☑" : "☐"} {props.label}
          </Text>
        </TouchableOpacity>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <DateTimePicker
          mode="range"
          date={new Date()}
          startDate={props.startDate}
          endDate={props.endDate}
          onChange={field.onChange}
          headerButtonsPosition="right"
          headerTextStyle={{
            fontSize: 20,
            color: "black",
            fontFamily: "Helvetica-Now-Display-Bold",
          }}
        />
      );
    case FormFieldType.SELECT:
      return <View>{props.children}</View>;
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const FormField = (props: CustomProps) => {
  const { control, name, label } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <View style={{ gap: 8 }}>
          {/* {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <Text style={styles.label}>{label}</Text>
          )} */}
          <RenderInput field={field} props={props} />
          {/* Add error handling below */}
        </View>
      )}
    />
  );
};

export default FormField;
