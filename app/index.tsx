import { Redirect } from "expo-router";

const FlowScreen = () => {
  // TODO: retrieve a real user
  const user = true;

  if (user) {
    return <Redirect href={"/(auth)/verify-otp"} />;
  }

  return <Redirect href={"/(auth)/onboarding"} />;
};

export default FlowScreen;
