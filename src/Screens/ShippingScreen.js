import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
  {
    label: "ENTER CITY",
    type: "text",
  },
  {
    label: "ENTER COUNTRY",
    type: "text",
  },
  {
    label: "ENTER POSTAL CODE",
    type: "text",
  },
  {
    label: "ENTER ADDRESS",
    type: "text",
  },
];

function ShippingScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeArea py={5} bg={Colors.main}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Input */}
      <Box bg={Colors.white} h="full" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label>{i.label}</FormControl.Label>
                <Input
                  borderWidth={0.2}
                  color={Colors.main}
                  bg={Colors.subGreen}
				  type={i.type}
                  borderColor={Colors.main}
                  py={4}
                  _focus={{
                    bg: Colors.subGreen,
                    border: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
			 <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={() => navigation.navigate("Checkout")}>CONTINUE</Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
