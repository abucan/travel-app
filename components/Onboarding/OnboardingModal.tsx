import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";
import React, { useCallback, useRef } from "react";
import { View } from "react-native";
import { styles } from "./styles/onboardingModal.styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogoIcon } from "../Logo/LogoIcon";
import { AppButton } from "../buttons/AppButton";
import { Header } from "../Header/Header";

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

  // Expose control methods
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
            {/* <LogoIcon /> */}
            <Header
              title="Welcome to Tripster"
              description="Choose one of the options below to get started."
              // position="left"
            />
            <View style={styles.buttonContainer}>
              <AppButton
                title="Create Account"
                onPress={() => {
                  router.replace("/(auth)/sign-up");
                  bottomSheetModalRef.current?.dismiss();
                }}
              />
              <AppButton
                title="Sign In"
                variant="link"
                onPress={() => {
                  router.replace("/(auth)/sign-in");
                  bottomSheetModalRef.current?.dismiss();
                }}
              />
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
