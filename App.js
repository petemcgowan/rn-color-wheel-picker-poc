import { Component, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import ColorScheme from "color-scheme";

import ColorPicker from "react-native-wheel-color-picker";

const App = () => {
  const initialColor = "#8162ff";
  // initial colour scheme
  var colorScheme = [
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
  ];
  const [currentColor, setCurrentColor] = useState(initialColor);
  const [swatchesOnly, setSwatchesOnly] = useState(false);
  const [swatchesLast, setSwatchesLast] = useState(true);
  const [swatchesEnabled, seSwatchesEnabled] = useState(true);
  const [discrete, setDiscrete] = useState(false);

  const onColorChangeComplete = () => {
    console.log("onColorChangeComplete, currentColor:" + currentColor);
  };

  return (
    <View style={[]}>
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

      <View style={{ flexWrap: "wrap", maxHeight: 160, flexDirection: "row" }}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value="textOne"
          style={[
            {
              height: 80,
              width: 80,
              textAlignVertical: "top",
              backgroundColor: colorScheme[0],
            },
          ]}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          value="textTwo"
          style={[
            {
              height: 80,
              width: 80,
              textAlignVertical: "top",
              backgroundColor: colorScheme[1],
            },
          ]}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          value="textThree"
          style={[
            {
              height: 80,
              width: 80,
              textAlignVertical: "top",
              backgroundColor: colorScheme[2],
            },
          ]}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          value="textFour"
          style={[
            {
              height: 80,
              width: 80,
              textAlignVertical: "top",
              backgroundColor: colorScheme[3],
            },
          ]}
        />
      </View>
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

          colorScheme = scheme.colors();
          console.log("colors:" + JSON.stringify(colorScheme));
        }}
      >
        <Text>ColourScheme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
