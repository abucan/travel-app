import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingSlide } from "@/components/onboarding/onboarding-slide";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Onboarding } from "@/constants/Onboarding";

const OnboardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<Swiper>(null);
  const isLastSlide = activeIndex === Onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full">
      <View className="bg-[#FDF6E6] flex-1 relative">
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-in")}
          className="absolute top-5 right-5 "
        >
          <Text className="font-helvetica-regular text-lg">Skip</Text>
        </TouchableOpacity>
        <Swiper
          ref={swiperRef}
          loop={false}
          onIndexChanged={(index) => setActiveIndex(index)}
          dots={
            <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
          }
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
        <View className="flex flex-row justify-between max-w-sm mx-auto w-full">
          <View>
            <TouchableOpacity>
              <Text className="font-helvetica-regular text-lg">Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text className="font-helvetica-regular text-lg">Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
