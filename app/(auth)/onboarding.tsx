import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
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
    <SafeAreaView className="flex h-full bg-[#FDF6E6]">
      <View className="flex-1 relative">
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
          className="absolute top-5 right-5 "
        >
          <Text className="font-helvetica-regular text-gray-500 text-lg">
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row justify-between items-center max-w-sm mx-auto w-full my-10">
        <View>
          <TouchableOpacity onPress={() => swiperRef.current?.scrollBy(-1)}>
            <Text className="font-helvetica-regular text-gray-500 text-lg">
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => swiperRef.current?.scrollBy(1)}
            className="rounded-[24px] bg-slate-500 px-8 py-2"
          >
            <Text className="font-helvetica-regular text-lg">Lets's Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
