import React from 'react'
import { Box, Center, Text} from 'native-base'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons';
import Buttone from '../Components/Buttone'

const CartEmpty = () => {
  return (
	<Box flex={1} px={4}>
		<Center h="90%">
		<Center bg={Colors.white} w={200} h={200} rounded="full" >
			<FontAwesome name="shopping-basket" size={64} color={Colors.main} />
		</Center>
		<Text color={Colors.main} mt={5}>CART IS EMPTY</Text>
		</Center>
		<Buttone color={Colors.white} bg={Colors.black}>START SHOPPING</Buttone>
	</Box>
  )
}

export default CartEmpty