import React from "react";
import * as s from "./App.styles";
import * as Palette from "./assets/colors/color";

// Components
import Sidebar from "./components/Sideview/Sidebar";
import MainView from "./components/Mainview/MainView";

const App = () => {
  const backgroundImage = "images/img.jpg";
  const sidebarHeader = {
    fullName: "Limitless SoftWash",
    shortName: "LS",
  };
  const menuItems = [
    { name: "Home", to: "/", icon: "icons/home.svg", subMenuItems: [] },
    {
      name: "Services",
      to: "/services",
      icon: "icons/services.svg",
      subMenuItems: [],
    },
    {
      name: "Contact",
      to: "/contact",
      icon: "icons/contacts.svg",
      subMenuItems: [],
    },
    {
      name: "Social Media",
      to: "https://www.instagram.com/limitlesssoftwash/",
      icon: "icons/IG.png",
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
        colorPalette={Palette.orange}
      />
      <MainView />
    </s.App>
  );
};

export default App;
