import { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  isAnimationEnabled: boolean;
  toggleAnimations: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

  const toggleAnimations = () => {
    setIsAnimationEnabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isAnimationEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
};
