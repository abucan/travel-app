export const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
  
    sectionGap: 24,
    componentGap: 12,
    containerGap: 16,
    screenPadding: 20,
    
    verticalGap: {
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 48
    },
  
    margin: {
      sm: 8,
      md: 16,
      lg: 24
    },
  
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      round: 9999
    }
  } as const;
  
  export type SpacingType = keyof typeof Spacing;