import { Redirect } from "expo-router";

const FlowScreen = () => {
  // TODO: retrieve a real user
  const user = false;

  if (user) {
    return <Redirect href={"/(tabs)"} />;
  }

  return <Redirect href={"/(auth)/onboarding"} />;
};

export default FlowScreen;
