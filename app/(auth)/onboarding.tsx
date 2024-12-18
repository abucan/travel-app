import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { useRef, useState } from "react";
import { Onboarding } from "@/constants/Onboarding";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "@/styles/screens/OnboardingScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingSlide } from "@/components/onboarding/OnboardingSlide";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === Onboarding.length - 1;

  let presentModal: () => void;

  const onNextPress = () => {
    if (isLastSlide) {
      if (presentModal) {
        presentModal();
      }
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <OnboardingModal
        snapPoints={["35%"]}
        onPresent={(present) => (presentModal = present)}
      >
        <View style={styles.container}>
          <Swiper
            ref={swiperRef}
            loop={false}
            onIndexChanged={(index) => setActiveIndex(index)}
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
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/sign-in")}
            style={styles.skipBtn}
          >
            <Text style={styles.skipBtnText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sliderBtnContainer}>
          <View>
            <TouchableOpacity onPress={() => swiperRef.current?.scrollBy(-1)}>
              <Text style={styles.backBtnText}>
                {activeIndex !== 0 && "Back"}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={onNextPress} style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>
                {isLastSlide ? "Get Started" : "Continue"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </OnboardingModal>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
