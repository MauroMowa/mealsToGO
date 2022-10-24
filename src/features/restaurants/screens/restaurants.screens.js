import React, { useState, useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreCustomView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";

const Container = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoaderContainer = styled(View)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

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
      {isLoading ? (
        <LoaderContainer>
          <Loader size={50} animating={true} />
        </LoaderContainer>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={(item) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeAreCustomView>
  );
};
