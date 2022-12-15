import React from "react";
import { Box, Button, Center, HStack, Image, Pressable, Text, VStack } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from '@expo/vector-icons';
import products from "../data/Product";
import Colors from "../color";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    renderItem={renderItems}
    renderHiddenItem={hiddenItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data, rowMap) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
       <Center w="25%" bg={Colors.deepGray}>
        <Image source={{uri: data.item.image}} alt={data.item.name} w="full" h={24} resizeMode="contain" />
	   </Center>
     <VStack w="60%" px={2} space={2}>
      <Text isTruncated color={Colors.black} bold fontSize={13}>{data.item.name}</Text>
      <Text bold color={Colors.lightBlack}>${data.item.price}</Text>
     </VStack>
     <Center>
      <Button bg={Colors.main} _pressed={{bg: Colors.main}} _text={{color: Colors.white}}>5</Button>
     </Center>
      </HStack>
    </Box>
  </Pressable>
);
const hiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent={"center"}
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);
const CartIterms = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default CartIterms;
