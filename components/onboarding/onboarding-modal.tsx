import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
          <BottomSheetView className="px-6 flex flex-col items-center justify-center w-full h-full">
            <TouchableOpacity
              className="w-full bg-blue-900 py-4 rounded-[24px]"
              onPress={() => {
                router.replace("/(auth)/sign-up");
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text className="font-helvetica-regular text-lg text-white text-center">
                Create Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-full py-4 border border-blue-900 rounded-[24px] mt-4"
              onPress={() => {
                router.replace("/(auth)/sign-in");
                bottomSheetModalRef.current?.dismiss();
              }}
            >
              <Text className="font-helvetica-regular text-lg text-black text-center">
                Already have an account? Sign in
              </Text>
            </TouchableOpacity>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
