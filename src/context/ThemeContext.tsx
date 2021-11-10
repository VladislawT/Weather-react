import { createContext } from "react";

interface Props {
    theme: Theme,
    cangeTheme: (theme: Theme) => void,
};

export enum Theme{
    LIGHT='light',
    DARK = 'dark',
}

export const ThemeContext = createContext<Props>({
    theme: Theme.LIGHT,
    cangeTheme: () => {},
});