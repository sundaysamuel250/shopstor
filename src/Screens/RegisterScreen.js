import { Box, Button, Heading, Input, Pressable, Text, View, VStack } from 'native-base'
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import React from 'react'
import Colors from '../color';

function RegisterScreen({navigation}) {
  return (
	<Box
	w="full"
	h="full"
	position="absolute"
	top="0"
	px="6"
	justifyContent="center"
  >
	<Heading>SIGN UP</Heading>
	<VStack space={8} pt="6">
		 {/* USERNAME */}
		 <Input
		InputLeftElement={
		  <FontAwesome name="user" size={20} color="#48B600" />
		}
		variant="underlined"
		placeholder="Sam Shaw"
		w="70%"
		pl="2"
		color={Colors.main}
		borderBottemColor={Colors.underline}
	  />
	  {/* Email */}
	  <Input
		InputLeftElement={
		  <MaterialIcons name="email" size={20} color="#48B600" />
		}
		variant="underlined"
		placeholder="user@gmail.com"
		w="70%"
		pl="2"
		color={Colors.main}
		borderBottemColor={Colors.underline}
	  />
	  {/* PASSWORD */}
	  <Input
		InputLeftElement={
		  <Ionicons name="eye-sharp" size={24} color="#48B600" />
		}
		variant="underlined"
		placeholder="******************"
		type="password"
		w="70%"
		pl="2"
		color={Colors.main}
		borderBottemColor={Colors.underline}
	  />
	</VStack>
	<Button
	  _pressed={{ bg: "#48B600" }}
	  my={30}
	  width="40%"
	  rounded={50}
	  bg={Colors.main}
	  onPress={() => navigation.navigate("Bottom")}
	>
	  SIGN UP
	</Button>
	<Pressable mt={4} onPress={() => navigation.navigate("Login")}>
		<Text color='#C4C4C4'>LOGIN</Text>
	</Pressable>
  </Box>
  )
}

export default RegisterScreen