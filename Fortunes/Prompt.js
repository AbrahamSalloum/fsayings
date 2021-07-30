import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import {IconButton, HamburgerIcon, HStack, Heading, Center } from 'native-base';

const Prompt = ({drawer}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const TextColor = isDarkMode ? styles.greencolor : styles.blackcolor;
  const Iconbg = isDarkMode ? styles.darkiconcolor : styles.lighticoncolor;
  return (
    <View border={1}>
      <HStack>
        <Center>
          <IconButton
            variant="solid"
            icon={<HamburgerIcon style={Iconbg} />}
            onPress={() => {
              drawer.current.openDrawer();
            }}
            color="white"
            style={Iconbg}
          />
        </Center>
        <Center>
          <Heading size="md">
            <Text style={TextColor}>root@android:# fortune</Text>
          </Heading>
        </Center>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  greencolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
  darkiconcolor: {
    backgroundColor: '#332940',
    color: 'white',
  },
  lighticoncolor: {
    backgroundColor: 'white',
    color: 'black',
  },
});

export default Prompt;
