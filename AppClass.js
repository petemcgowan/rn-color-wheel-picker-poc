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

  onColorChange() {
    console.log("onColorChange");
    console.log("this.state" + JSON.stringify(this.state));
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
          onColorChangeComplete={this.onColorChange.bind(this)}
          thumbSize={40}
          sliderSize={40}
          noSnap={true}
          row={false}
          swatchesLast={this.state.swatchesLast}
          swatches={this.state.swatchesEnabled}
          discrete={this.state.discrete}
        />
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
