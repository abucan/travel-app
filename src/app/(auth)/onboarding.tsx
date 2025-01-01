import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { useEffect, useRef, useState } from "react";
import { MyModal } from "@/src/components/modal/Modal";
import { Onboarding } from "@/src/constants/Onboarding";
import { globalStyles } from "@/src/styles/global.styles";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "@/src/components/buttons/AppButton";
import { SignUpButtons } from "@/src/components/signUpBtn/SignUpBtn";
import { styles } from "@/src/styles/screens/OnboardingScreen.styles";
import { OnboardingSlide } from "@/src/components/onboarding/OnboardingSlide";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

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

  useEffect(() => {
    dotWidths[0].value = withSpring(20);
  }, []);

  const dotWidths = useRef(
    Onboarding.map(() => useSharedValue(10)) // Default width for all dots
  ).current;

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);

    // Reset all dots and animate the active one
    dotWidths.forEach((width, i) => {
      width.value = i === index ? withSpring(20) : withSpring(10);
    });
  };

  const animatedDotStyles = dotWidths.map((width) =>
    useAnimatedStyle(() => ({
      width: width.value,
    }))
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Swiper
          ref={swiper}
          loop={false}
          onIndexChanged={handleSlideChange}
          activeDotColor={Colors.light.brand}
          showsPagination={true}
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
        {/* <View style={styles.indicatorContainer}>
          {Onboarding.map((_, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.dot,
                  index === slideIndex && styles.activeDot,
                  animatedDotStyles[index],
                ]}
              />
            );
          })}
        </View> */}
      </View>
      <View style={styles.footer}>
        <AppButton
          key={isLastSlide ? "last" : "continue"}
          title={isLastSlide ? "Get Started" : "Continue"}
          onPress={handleNextPress}
          shouldAnimate
        />
        <TouchableOpacity
          onPress={() => swiper.current?.scrollTo(Onboarding.length - 1)}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <MyModal modalOpen={showModal} setModalOpen={setShowModal}>
        <View style={{ gap: Spacing.md, width: "100%" }}>
          <AppButton
            title="Create Account"
            onPress={() => router.replace("/(auth)/sign-up")}
          />
          <SignUpButtons />
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
      </MyModal>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
