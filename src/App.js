import React from "react";
import * as s from "./App.styles";
import * as Palette from "./assets/colors/color";

// Components
import Sidebar from "./components/Sideview/Sidebar";
import MainView from "./components/Mainview/MainView";

const App = () => {
  const backgroundImage = "images/mountain.jpg";
  const sidebarHeader = {
    fullName: "Que Bola",
    shortName: "YO",
  };
  const menuItems = [
    { name: "Home", to: "/", icon: "icons/home.svg", subMenuItems: [] },
    { name: "About", to: "/about", icon: "icons/about.svg", subMenuItems: [] },
    {
      name: "Services",
      to: "/services",
      icon: "icons/services.svg",
      subMenuItems: [],
    },
    {
      name: "Contact",
      to: "/contact",
      icon: "icons/contact.svg",
      subMenuItems: [],
    },
  ];

  const fonts = {
    header: "ZCOOL KuaiLe",
    menu: "Poppins",
  };

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.brown}
      />
      <MainView />
    </s.App>
  );
};

export default App;
