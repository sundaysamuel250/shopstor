import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import CartIterms from "../Components/CartIterms";

function CartScreen() {
	const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header  */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* If Cart is Empty */}
      {/* <CartEmpty /> */}
      {/* CartItem */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartIterms />
        {/* buttons */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $950
            </Button>
          </HStack>
        </Center>
        <Center px={5}>
          <Buttone
		  onPress={() => navigation.navigate("Shipping")}
            bg={Colors.black}
            mt={10}
            color={Colors.white}
            bold
            fontSize={20}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default CartScreen;
