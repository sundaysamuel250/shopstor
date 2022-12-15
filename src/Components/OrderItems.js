import { Box, Button, Center, FlatList, HStack, Image, Slide, Text, VStack } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../color";
import products from "../data/Product";

const OrderItems = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 4)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              rounded={10}
              bg={Colors.white}
              shadow={1}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
			  <VStack w="60%" px={2}>
				<Text color={Colors.black} bold isTruncated fontSize={12}>
				{item.name}
				</Text>
				<Text color={Colors.lightBlack} mt={1.2} fontSize={13} bold>
				${item.price}
				</Text>
			  </VStack>
			  <Button rounded="full" w={10} h={10} bg={Colors.main} _pressed={{bg: Colors.main}} _text={{
				color: Colors.white
			  }}>5</Button>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderItems;
