import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { MyModal } from "@/src/components/modal/Modal";
import { Onboarding } from "@/src/constants/Onboarding";
import { globalStyles } from "@/src/styles/global.styles";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "@/src/components/buttons/AppButton";
import { SignUpButtons } from "@/src/components/signUpBtn/SignUpBtn";
import { styles } from "@/src/styles/screens/OnboardingScreen.styles";
import { OnboardingSlide } from "@/src/components/onboarding/OnboardingSlide";

const OnboardingScreen = () => {
  const swiper = useRef<Swiper>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const isLastSlide = slideIndex === Onboarding.length - 1;

  const [showModal, setShowModal] = useState(false);

  const handleNextPress = () => {
    if (isLastSlide) {
      setShowModal(true);
    } else {
      swiper.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Swiper
          ref={swiper}
          loop={false}
          onIndexChanged={(index) => setSlideIndex(index)}
        >
          {Onboarding.map((slide) => (
            <OnboardingSlide
              key={slide.id}
              source={slide.image}
              header={slide.header}
              description={slide.description}
            />
          ))}
        </Swiper>
      </View>
      <View style={styles.sliderBtnContainer}>
        <AppButton
          key={isLastSlide ? "last" : "continue"}
          title={isLastSlide ? "Get Started" : "Continue"}
          onPress={handleNextPress}
          shouldAnimate
        />
        <TouchableOpacity
          onPress={() => swiper.current?.scrollTo(Onboarding.length - 1)}
        >
          <Text style={styles.backBtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <MyModal modalOpen={showModal} setModalOpen={setShowModal}>
        <View style={{ gap: 12, width: "100%" }}>
          <AppButton
            title="Create Account"
            variant="link"
            onPress={() => router.replace("/(auth)/sign-up")}
          />
          <SignUpButtons />
          <View style={{ marginTop: 12 }}>
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
      </MyModal>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
