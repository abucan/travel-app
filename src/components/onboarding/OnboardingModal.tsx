import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { Headline } from "../headline/Headline";
import { AppButton } from "../buttons/AppButton";
import React, { useCallback, useRef } from "react";
import { styles } from "./styles/OnboardingModal.styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SignUpButtons } from "../signUpBtn/SignUpBtn";
import { globalStyles } from "@/src/styles/global.styles";

export const OnboardingModal = ({
  children,
  snapPoints,
  onPresent,
  onDismiss,
}: {
  children: React.ReactNode;
  snapPoints: string[];
  onPresent?: (present: () => void) => void;
  onDismiss?: (dismiss: () => void) => void;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    if (onPresent) {
      onPresent(() => bottomSheetModalRef.current?.present());
    }
    if (onDismiss) {
      onDismiss(() => bottomSheetModalRef.current?.dismiss());
    }
  }, [onPresent, onDismiss]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.6}
      />
    ),
    []
  );

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        {children}
        <BottomSheetModal
          index={1}
          snapPoints={snapPoints}
          ref={bottomSheetModalRef}
          enablePanDownToClose={true}
          backdropComponent={renderBackdrop}
          backgroundStyle={{
            backgroundColor: Colors.light.background,
          }}
        >
          <BottomSheetView style={styles.bottomSheetView}>
            <View style={styles.buttonContainer}>
              <AppButton
                title="Create Account"
                variant="link"
                onPress={() => {
                  router.replace("/(auth)/sign-up");
                  bottomSheetModalRef.current?.dismiss();
                }}
              />
              <Text style={globalStyles.smallText}>Or using other method</Text>
              <SignUpButtons />
              <View>
                <Text style={globalStyles.smallText}>
                  Already have an account?{" "}
                  <Text
                    style={globalStyles.signText}
                    onPress={() => router.push("/(auth)/sign-in")}
                  >
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
