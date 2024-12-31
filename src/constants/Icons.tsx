import { AntDesign } from "@expo/vector-icons";

type TabRouteName = "index" | "explore" | "profile";

export const Icons: Record<
  TabRouteName,
  (props: { color: string; size: number }) => JSX.Element
> = {
  index: (props) => <AntDesign name="home" {...props} />,
  explore: (props) => <AntDesign name="search1" {...props} />,
  profile: (props) => <AntDesign name="user" {...props} />,
};
