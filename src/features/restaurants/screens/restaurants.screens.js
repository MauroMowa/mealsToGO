import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeAreCustomView } from "../../../components/utility/safe-area.component";

const Container = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const data = [
  {
    name: "Restaunran1",
    icon: null,
    photos: [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address: "Calle falsa 123",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Restaunran2",
    icon: null,
    photos: [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address: "Calle falsa 123",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Restaunran3",
    icon: null,
    photos: [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address: "Calle falsa 123",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
  {
    name: "Restaunran4",
    icon: null,
    photos: [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address: "Calle falsa 123",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
];

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
      <FlatList
        data={data}
        renderItem={(item) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreCustomView>
  );
};
