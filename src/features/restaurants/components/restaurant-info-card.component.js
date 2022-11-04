import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  IconContainer,
  Cover,
  InfoContainer,
  Rating,
  CustomCard,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    rating,
    isClosedTemporarily,
    isOpenNow,
    icon,
    photos,
    vicinity,
  } = restaurant.item;

  const ratingArray = Array.from(
    new Array(Math.floor(rating > 0 ? rating : 0))
  );

  return (
    <CustomCard elevation={5}>
      <InfoContainer>
        <Text variant="label">{name}</Text>
        <IconContainer>
          <Rating>
            {ratingArray.map((_, index) => {
              return (
                <SvgXml
                  key={`star-${name}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              );
            })}
          </Rating>
          {isClosedTemporarily && (
            <Text variant="error">Cerrado temporalmente</Text>
          )}
          {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          {icon && <Icon source={{ uri: icon }} />}
        </IconContainer>
        <Text variant="caption">{vicinity}</Text>
      </InfoContainer>
      <Cover source={{ uri: photos && photos[0] }} />
    </CustomCard>
  );
};
