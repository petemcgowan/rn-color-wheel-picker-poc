import React from "react";
import { withTheme } from "@callstack/react-theme-provider";
import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Header = ({ theme, themes, onChangeTheme }) => (
  <Container textColor={theme.primaryColor} background={theme.secondaryColor}>
    <Text>CHANGE THEME: </Text>
    <Button>
      <TouchableOpacity>
        <Text>Change font</Text>
      </TouchableOpacity>
    </Button>

    <RNPickerSelect
      onValueChange={(value) => onChangeTheme(value)}
      value={themes.normal}
      items={themes.map((theme) => ({
        label: theme,
        value: theme,
        key: theme,
      }))}
    />
  </Container>
);

const Container = styled.View`
  box-sizing: border-box;
  width: 100%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  padding: 1rem;
  text-align: center;
  font-family: sans-serif;
`;
const Button = styled.View`
  width: 50%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  padding: 1rem;
  text-align: center;
  font-family: Arial;
`;

export default withTheme(Header);
