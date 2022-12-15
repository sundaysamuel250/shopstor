import React, { useState } from "react";
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "../Notification/Message";
import Buttone from "./Buttone";

export default function Review() {
  const [ratings, setRatings] = useState(0);
  return (
    <Box my={9}>
      <Heading color={Colors.black} bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      <Message
        color={Colors.main}
        bg={Colors.deepGray}
        size={10}
        children={"NO REVIEW"}
      />
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Shaw
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Sep 15 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Designed with an oversize fit, this piece features the white and red Gucci Blade print—a recurring motif of this season."
          }
        />
      </Box>
      <Box mt={5}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="2 - Good" value="3" />
            </Select>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: Colors.black,
                }}
              >
                Comment
              </FormControl.Label>
              <TextArea
                h={24}
                w="full"
                placeholder="This product is good............"
                borderWidth={0}
                color={Colors.subGreen}
				py={4}
				_focus={{
					bg: Colors.subGreen,
				}}
              />
            </FormControl>
			<Buttone bg={Colors.main} color={Colors.white}>
				SUBMIT
			</Buttone>
          </FormControl>
		  <Message
          color={Colors.white}
          bg={Colors.black}
          size={10}
          children={
            "Please 'Login' to write a Review"
          }
        />
        </VStack>
      </Box>
    </Box>
  );
}
