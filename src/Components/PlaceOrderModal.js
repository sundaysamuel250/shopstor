import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Modal,
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

const PlaceOrderModal = () => {
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
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => { 
                navigation.navigate("Order")
                setShowModal(false)}
            }
              _pressed={{
                bg: Colors.main,
              }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModal;
