import { ReactNode, useState } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import { cangeCssRootWariables } from "../model/CangeCssRootWariables";
import { storage } from "../model/Storage";

interface Props {
    children: ReactNode,
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    cangeCssRootWariables(theme);

    function cangeTheme(theme: Theme) {
        storage.setItem('theme', theme);
        setTheme(theme);
        cangeCssRootWariables(theme);
    };

    return (<ThemeContext.Provider
        value={{
            theme,
            cangeTheme,
        }}
        {...props}
    >
        {children}
    </ThemeContext.Provider>)
}

