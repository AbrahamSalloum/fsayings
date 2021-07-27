import React from 'react';
import {Text, View} from 'react-native';
import {IconButton, HamburgerIcon, HStack, Heading, Center} from 'native-base';
const Prompt = ({drawer}) => {
  return (
    <View border={1}>
      <HStack>
        <Center>
          <IconButton
            variant="solid"
            icon={<HamburgerIcon />}
            onPress={() => {
              drawer.current.openDrawer();
            }}
            color="white"
            style={{backgroundColor: 'white'}}
          />
        </Center>
        <Center>
          <Heading size="md">root@android:# fortune fortune</Heading>
        </Center>
      </HStack>
    </View>
  );
};

export default Prompt;
