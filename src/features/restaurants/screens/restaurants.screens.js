import React, { useState } from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeAreCustomView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const Container = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ContainerList = styled(View)`
  flex: 1;
  flex-grow: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const changeText = (e) => {
    setSearchQuery(e);
  };
  return (
    <SafeAreCustomView>
      <Container>
        <Searchbar
          placeholder="busqueda"
          onChangeText={changeText}
          value={searchQuery}
        />
      </Container>
      <ContainerList>
        <RestaurantInfoCard />
      </ContainerList>
    </SafeAreCustomView>
  );
};
