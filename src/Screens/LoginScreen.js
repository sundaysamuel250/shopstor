import { Box, Button, Heading, Image, Input, Text, VStack } from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function LoginScreen({navigation}) {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/images/bg_cover1.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color="#48B600" />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl="2"
            color="#48B600"
            borderBottemColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye-sharp" size={24} color="#48B600" />
            }
            variant="underlined"
            placeholder="******************"
            type="password"
            w="70%"
            pl="2"
            color="#48B600"
            borderBottemColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{ bg: "#48B600" }}
          my={30}
          width="40%"
          rounded={50}
          bg="#48B600"
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
		<Pressable mt={4}  onPress={() => navigation.navigate("Register")}>
			<Text color='#C4C4C4'>SIGN UP</Text>
		</Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
