import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationsContext } from "../../../services/location/location.context";

const Container = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationsContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  const changeText = (e) => {
    setSearchQuery(e);
  };

  useEffect(() => {
    search(searchQuery);
  }, []);

  return (
    <Container>
      <Searchbar
        placeholder="busqueda"
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          changeText(text);
        }}
        value={searchQuery}
      />
    </Container>
  );
};
