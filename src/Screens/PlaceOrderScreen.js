import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import Colors from "../color";
import OrderInfo from "../Components/OrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderItems from "../Components/OrderItems";
import PlaceOrderModal from "../Components/PlaceOrderModal";

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.subGreen} safeArea mt={6} flex={1}>
      <Box>
        <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Shaw"
            text="shaw500@gmail.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
		     <OrderInfo
            title="SHIPPING INFO"
            subTitle="Shipping: USA"
            text="Pay Methos: PayPal"
            icon={<FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />}
          />
		  <OrderInfo
            title="DELIVER TO"
            subTitle="Address:"
            text="Kunle Ogunba St, Lekki Phase 1, Eti-Osa, Lagos State, Nigeria"
            icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
          />
        </ScrollView>
      </Box>
	  {/* Order Items */}
	  <Box px={6} pb={3} flex={1}>
		<Heading bold fontSize={15} isTruncated my={4}>
			PRODUCTS
		</Heading>
		<OrderItems />
		<PlaceOrderModal />
	  </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
