import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
// import { VictoryBar } from "victory-native";
// import { VictoryChart} from "victory-native";
// import { VictoryTheme } from "victory-native";

import { chartData } from "../data/chartData";

const data = [
  { month: 1, earnings: 13000 },
  { month: 2, earnings: 16500 },
  { month: 3, earnings: 14250 },
  { month: 4, earnings: 19000 },
  { month: 5, earnings: 15000 },
  { month: 6, earnings: 16500 },
  { month: 7, earnings: 18050 },
  { month: 8, earnings: 20000 },
  { month: 9, earnings: 19000 },
  { month: 10, earnings: 18500 },
  { month: 11, earnings: 20250 },
  { month: 12, earnings: 20500 },
];

export default class ChartExample extends React.Component {
  render() {
    console.log("data:" + JSON.stringify(data));

    return (
      <View style={styles.container}>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryBar data={data} x="month" y="earnings" />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
