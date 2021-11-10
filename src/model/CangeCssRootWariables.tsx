import { Theme } from "../context/ThemeContext";

export function cangeCssRootWariables(theme: Theme){
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
        `body-background`,
        `components-background`,
        `components-text`,
        `icons-background`];

    components.forEach(item => {
        root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
    });

}