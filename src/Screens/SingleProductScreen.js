import {
  Box,
  Heading,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Text,
  View,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box bg={Colors.white} flex={1} safeArea>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="missing iamge"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReview} reviews`} />
        <HStack size={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
            onChange={setValue}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price}
          </Heading>
        </HStack>
        <Text>{product.description}</Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
