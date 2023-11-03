
import { useState } from "react";
import useDarkSide from "../../Hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const DarkMode = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
 
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    return ( 
        <DarkModeSwitch
        moonColor= "#fed7aa"
        className="text-orange-200"
        checked={darkSide}
        onChange={toggleDarkMode}
        size={32}
    />
     );
}
 
export default DarkMode;