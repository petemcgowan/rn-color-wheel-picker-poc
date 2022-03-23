import React from "react";
// import styled from "styled-components";
import styled from "styled-components/native";

import { Text, View, TextInput } from "react-native";
import { withTheme } from "@callstack/react-theme-provider";

const Header = ({ theme, colorScheme }) => (
  <View>
    <Container textColor={theme.textColor} background={theme.backgroundColor}>
      <Text>Text Switching Themes </Text>
    </Container>
    <ContainerDynamic textColor={colorScheme[0]} background={colorScheme[0]}>
      <Text>Text with Dynamic Colors </Text>
    </ContainerDynamic>

    <TextDynamic
      textColor={colorScheme[0]}
      background={colorScheme[0]}
      multiline={true}
      numberOfLines={2}
      value="textOne"
    />
    <TextDynamic
      textColor={colorScheme[1]}
      background={colorScheme[1]}
      multiline={true}
      numberOfLines={2}
      value="textTwo"
    />
    <TextDynamic
      textColor={colorScheme[2]}
      background={colorScheme[2]}
      multiline={true}
      numberOfLines={2}
      value="textThree"
    />
    <TextDynamic
      textColor={colorScheme[3]}
      background={colorScheme[3]}
      multiline={true}
      numberOfLines={2}
      value="textFour"
    />
  </View>
);

const Container = styled.View`
  box-sizing: border-box;
  width: 100%;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

const ContainerDynamic = styled.View`
  box-sizing: border-box;
  width: 100%;
  color: ${(props) => "#" + props.textColor};
  background-color: ${(props) => "#" + props.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

const TextDynamic = styled.TextInput`
  textalignvertical: "top";
  height: 80;
  width: 80;
  color: ${(props) => "#" + props.textColor};
  background-color: ${(props) => "#" + props.background};
  padding: 4rem;
  text-align: center;
  font-size: 2rem;
`;

const ColourScheme1 = styled.TextInput``;

const ColourScheme2 = styled.TextInput``;

const ColourScheme3 = styled.TextInput``;

const ColourScheme4 = styled.TextInput``;

{
  /* style={{ flexWrap: "wrap", maxHeight: 160, flexDirection: "row" }} */
}

export default withTheme(Header);
