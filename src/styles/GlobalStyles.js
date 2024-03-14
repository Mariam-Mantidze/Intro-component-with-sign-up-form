import { createGlobalStyle } from "styled-components";
import MobileBackgroundTheme from "/images/bg-intro-mobile.png";
import DesktopBackgroundTheme from "/images/bg-intro-desktop.png";

export const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
 body {
    padding-top: 88px;
    background-color: rgba(255, 121, 121, 1);
    background-image: url(${MobileBackgroundTheme});
    font-family: "Poppins", sans-serif;
    background-repeat: no-repeat;
    background-size: cover;

 }
`;
