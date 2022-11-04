import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreCustomView } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoaderContainer = styled(View)`
  position: absolute;
  left: 50%;
  top: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeAreCustomView>
      <Search />
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
