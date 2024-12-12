import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/OnboardingModal.styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
            backgroundColor: "#FDF6E6",
          }}
        >
          <BottomSheetView style={styles.bottomSheetView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                router.replace("/(auth)/sign-up");
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.outlineBtn]}
              onPress={() => {
                router.replace("/(auth)/sign-in");
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text style={[styles.buttonText, { color: "#1e3a8a" }]}>
                Already have an account? Sign in
              </Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
