import { useNavigation } from "@react-navigation/native";
import { Flex, Image, Box, Pressable, Heading, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import products from "../data/Product";
import Rating from "./Rating";


function HomeProducts() {
  const navigation = useNavigation()
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        direction="row"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={2}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{uri: product.image}}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box>
              <Heading size="sm" semiBold>
                ${product.price}
              </Heading>
              <Text fontSize={10} wt={1} isTruncated>
                {product.name}
              </Text>
			  <Rating value={product.rating}/>
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
