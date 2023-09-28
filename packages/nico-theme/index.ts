interface BaseTokens {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

interface AliasTokens {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface Theme {
  base: BaseTokens;
  alias: AliasTokens;
}

export const THEME = {
  base: {
    color: {
      primary: "red",
      secondary: "blue",
      tertiary: "green",
    },
  },
  alias: {
    color: {
      primary: "red",
      secondary: "blue",
      tertiary: "green",
    },
  },
} as Theme;
