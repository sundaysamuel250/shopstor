import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Buttone from "./Buttone";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";


const OrdersInfos = [
  {
    title: "Products",
    price: 850,
    color: "black",
  },

  {
    title: "Shipping",
    price: 200,
    color: "black",
  },
  {
    title: "Tax",
    price: 100,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 2500,
    color: "main",
  },
];

const OrderModal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation()
  return (
    <Center>
      <Buttone
        onPress={() => setShowModal(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={6}>
              {OrdersInfos.map((info, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text frontWeight="medium">{info.title}</Text>
                  <Text
                    color={info.color === "main" ? Colors.main : Colors.black}
                    bold
                    fontSize={12}
                  >
                    ${info.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
			rounded={4}
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              onPress={() => setShowModal(false)}
            >
              <Image
                source={require("../../assets/images/Pay.png")}
                alt="missing-image"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
			mt={2}
              w="full"
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Home")
                setShowModal(false)}
              }
              _pressed={{
                bg: Colors.main,
              }}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;
