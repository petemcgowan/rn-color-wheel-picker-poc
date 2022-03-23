import * as React from "react";
import { Component, useState } from "react";
import { ThemeProvider } from "@callstack/react-theme-provider";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ColorScheme from "color-scheme";
import Header from "./Header";
import ThemeChanger from "./ThemeChanger";
import ColorPicker from "react-native-wheel-color-picker";
import { themes } from "./themes";
const App = () => {
  const initialColor = "#8162ff";
  // initial colour scheme
  // var colorScheme = [
  //   "6c6e93",
  //   "5d6080",
  //   "d1d2e6",
  //   "6a6fbf",
  //   "ccac8f",
  //   "806c59",
  //   "e6dacf",
  //   "bf8e60",
  //   "ccc58f",
  //   "807b59",
  //   "e6e3cf",
  //   "bfb460",
  // ];
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [swatchesOnly, setSwatchesOnly] = useState(false);
  const [swatchesLast, setSwatchesLast] = useState(true);
  const [swatchesEnabled, setSwatchesEnabled] = useState(true);
  const [discrete, setDiscrete] = useState(false);
  const [theme, setTheme] = useState(themes.normal);
  const [colorScheme, setColorScheme] = useState([
    "6c6e93",
    "5d6080",
    "d1d2e6",
    "6a6fbf",
    "ccac8f",
    "806c59",
    "e6dacf",
    "bf8e60",
    "ccc58f",
    "807b59",
    "e6e3cf",
    "bfb460",
  ]);
  const [backgroundColour, setBackgroundColour] = useState(
    themes.normal.backgroundColor
  );

  const onColorChangeComplete = () => {
    console.log("onColorChangeComplete, currentColor:" + currentColor);
  };

  const handleThemeChange = (themeName: string) => {
    console.log("Before" + backgroundColour);
    setTheme(themes[themeName]);
    console.log(
      "themes[themeName].backgroundColor" + themes[themeName].backgroundColor
    );
    setBackgroundColour(themes[themeName].backgroundColor);
    console.log("After" + backgroundColour);
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={[]}>
        <Header colorScheme={colorScheme} />
        <ThemeChanger
          onChangeTheme={handleThemeChange}
          themes={Object.keys(themes)}
        />
        <ColorPicker
          color={currentColor}
          swatchesOnly={swatchesOnly}
          onColorChangeComplete={onColorChangeComplete}
          onColorChange={setCurrentColor}
          thumbSize={40}
          sliderSize={40}
          noSnap={true}
          row={false}
          swatchesLast={swatchesLast}
          swatches={swatchesEnabled}
          discrete={discrete}
        />

        <TouchableOpacity
          key="ColourScheme"
          onPress={() => {
            var scheme = new ColorScheme();
            scheme
              .from_hex(currentColor.substring(1)) // Start the scheme
              .scheme("triade") // Use the 'triade' scheme, that is, colors
              // selected from 3 points equidistant around
              // the color wheel.
              .variation("soft"); // Use the 'soft' color variation

            setColorScheme(scheme.colors());
            console.log("colors:" + JSON.stringify(colorScheme));
          }}
        >
          <Text>ColourScheme</Text>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
};

export default App;
