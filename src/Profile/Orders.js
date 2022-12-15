import React from "react";
import { Box, Button, HStack, ScrollView, Text } from "native-base";
import { Pressable } from "react-native";
import Colors from "../color";

export default function Orders() {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
			bg={Colors.deepGray}
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              670093755380678544
            </Text>
            <Text fontSize={12} color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              SEP 15 2022
            </Text>
            <Button
              px={5}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
			  _pressed={{
				bg: Colors.main,
			  }}
            >
              $950
            </Button>
          </HStack>
        </Pressable>
        {/* NOT PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
			textAlign="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              6700937553805 
            </Text>
            <Text fontSize={12} color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              JAN 16 2022
            </Text>
            <Button
              px={5}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{
                color: Colors.white,
              }}
			  _pressed={{
				bg: Colors.red,
			  }}
            >
              $750
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
}
