import { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import ColorPicker from "react-native-wheel-color-picker";

class App extends Component {
  state = {
    currentColor: "#ffffff",
    swatchesOnly: false,
    swatchesLast: true,
    swatchesEnabled: true,
    discrete: false,
  };

  onColorChangeComplete() {
    console.log("onColorChangeComplete");
  }

  render() {
    return (
      <View style={[]}>
        <ColorPicker
          ref={(r) => {
            this.picker = r;
          }}
          color={this.state.currentColor}
          swatchesOnly={this.state.swatchesOnly}
          onColorChange={this.onColorChange}
          onColorChangeComplete={this.onColorChangeComplete}
          thumbSize={40}
          sliderSize={40}
          noSnap={true}
          row={false}
          swatchesLast={this.state.swatchesLast}
          swatches={this.state.swatchesEnabled}
          discrete={this.state.discrete}
        />
        {/* <SomeButton onPress={() => this.picker.revert()} /> */}
        <TouchableOpacity
          key="Revert"
          onPress={() => {
            console.log("Revert Button pressed");
            this.picker.revert();
          }}
        >
          <Text>Revert</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
