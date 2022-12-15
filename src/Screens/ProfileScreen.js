import { Box, Center, Heading, Image, Text } from "native-base";
import React from "react";
import Colors from "../color";
import Tabs from "../Profile/Tabs";

function ProfileScreen() {
  return (
    <>
      <Center bg={Colors.main} pt={5}>
        <Image
          source={{
            uri: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png"
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
		<Heading bold isTruncated fontSize={15} color={Colors.white} my={2}>Admin Shaw</Heading>
		<Text italic fontSize={10} color={Colors.white}>Joined Sep 15 2022</Text>
      </Center>
	  {/* Tabs */}
	  <Tabs />
    </>
  );
}

export default ProfileScreen;
