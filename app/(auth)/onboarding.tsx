import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { MyModal } from "@/components/modal/Modal";
import { Onboarding } from "@/constants/Onboarding";
import { globalStyles } from "@/styles/global.styles";
import { AppButton } from "@/components/buttons/AppButton";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpButtons } from "@/components/signUpBtn/SignUpBtn";
import { styles } from "@/styles/screens/OnboardingScreen.styles";
import { OnboardingSlide } from "@/components/onboarding/OnboardingSlide";

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === Onboarding.length - 1;

  const [showModal, setShowModal] = useState(false);

  const onNextPress = () => {
    if (isLastSlide) {
      setShowModal(true);
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Swiper
          ref={swiperRef}
          loop={false}
          onIndexChanged={(index) => {
            setActiveIndex(index);
          }}
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
        {!isLastSlide && (
          <TouchableOpacity
            style={{ flex: 2 }}
            onPress={() => swiperRef.current?.scrollTo(Onboarding.length - 1)}
          >
            <Text style={styles.backBtnText}>Skip</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onNextPress} style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>
            {isLastSlide ? "Get Started" : "Continue"}
          </Text>
        </TouchableOpacity>
      </View>
      <MyModal modalOpen={showModal} setModalOpen={setShowModal}>
        <View
          style={{
            gap: 12,
          }}
        >
          <AppButton
            title="Create Account"
            variant="link"
            onPress={() => {
              router.replace("/(auth)/sign-up");
            }}
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
