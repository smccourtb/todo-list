import darkIcon from "./images/icon-moon.svg";
import lightIcon from "./images/icon-sun.svg";
import mobileBgDark from "./images/bg-mobile-dark.jpg";
import mobileBgLight from "./images/bg-mobile-light.jpg";
import desktopBgDark from "./images/bg-desktop-dark.jpg";
import desktopBgLight from "./images/bg-desktop-light.jpg";

export const lightTheme = {
  backgroundColor: `hsl(236, 33%, 92%)`,
  containerBackgroundColor: `hsl(0, 0%, 98%)`,
  createTaskTextColor: `hsl(235, 19%, 35%)`,
  taskBorderColor: `hsl(233, 11%, 84%)`,
  completeTextColor: `hsl(234, 39%, 85%)`,
  incompleteTextColor: `hsl(234, 11%, 52%)`,
  modeIcon: lightIcon,
  mobileBackgroundImage: mobileBgLight,
  backgroundImage: desktopBgLight,
};

export const darkTheme = {
  backgroundColor: `hsl(235, 21%, 11%)`,
  containerBackgroundColor: `hsl(237, 14%, 26%)`,
  createTaskTextColor: `hsl(234, 39%, 85%)`,
  taskBorderColor: `hsl(233, 14%, 35%)`,
  completeTextColor: `hsl(234, 11%, 52%)`,
  incompleteTextColor: `hsl(234, 39%, 85%)`,
  modeIcon: darkIcon,
  mobileBackgroundImage: mobileBgDark,
  backgroundImage: desktopBgDark,
};
