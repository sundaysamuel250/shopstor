import {
  Box,
  Center,
  FormControl,
  HStack,
  Image,
  Input,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PaymentInputs = [
  {
    image: require("../../assets/images/Pay.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/Bitcoin.jpg"),
    alt: "bitcoin",
    icon: "FontAwesome",
  },
  {
    image: require("../../assets/images/cardPayment.jpg"),
    alt: "card payment",
    icon: "FontAwesome",
  },
];

function PaymentScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeArea py={5} bg={Colors.main}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* Selected */}
      <Box bg={Colors.subGreen} h="full" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {PaymentInputs.map((pay, index) => (
              <HStack
                key={index}
                alignItems="center"
                justifyContent="space-between"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
              >
                <Box>
                  <Image
                    source={pay.image}
                    alt={pay.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {pay.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={24}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}
            <Buttone bg={Colors.main} color={Colors.white} mt={5} onPress={() => navigation.navigate("Placeorder")}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
