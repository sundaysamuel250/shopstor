import { Box, Button, Center, Image, Text, View, VStack } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../color'
import Buttone from '../Components/Buttone';

function NotVerifyScreen() {
  return (
	<Box flex={1} bg={Colors.main} safeAreaTop>
		<Center w='full' h={250}>
		{/* <FontAwesome name="shopping-bag" size={24} color={Colors.main}/> */}
		<Image source={require("../../assets/images/cart_bag2.png")} 
		size='lg'
		alt='logo image'
		/>
		</Center>
		<VStack space={6} px={5} alignItems="center">
			<Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
			<Buttone bg={Colors.white} color={Colors.black}>LOGIN</Buttone>
		</VStack>
	</Box>
  )
}

export default NotVerifyScreen