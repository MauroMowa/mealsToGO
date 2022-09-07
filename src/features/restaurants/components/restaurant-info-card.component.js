import React from "react";
import { SvgXml } from "react-native-svg";
import { Card } from "react-native-paper";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  IconContainer,
  Cover,
  InfoContainer,
  Rating,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaunran",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address = "Calle falsa 123",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <Card elevation={5}>
      <InfoContainer>
        <Text variant="label">{name}</Text>
        <IconContainer>
          <Rating>
            {ratingArray.map(() => {
              return <SvgXml xml={star} width={20} height={20} />;
            })}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">Cerrado temporalmente</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          {icon && <SvgXml xml={icon} width={20} height={20} />}
        </IconContainer>
        <Text variant="caption">{address}</Text>
      </InfoContainer>
      <Cover source={{ uri: photos[0] }} />
    </Card>
  );
};
