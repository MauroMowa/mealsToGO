import styled from "styled-components";
import { Card } from "react-native-paper";

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Cover = styled(Card.Cover)``;

export const InfoContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const CustomCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
`;
