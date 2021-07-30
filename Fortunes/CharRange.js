import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';
import {HStack, VStack, Heading, Input, Button, Text} from 'native-base';

const CharRange = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  const submit = () => {
    console.log('OK');
  };

  return (
    <View>
      <Heading size="sm" style={backgroundStyle}>
        Character Range:
      </Heading>
      <HStack>
        <VStack style={{flex: 1}}>
          <Heading size="xs" style={backgroundStyle}>
            Minimum
          </Heading>
          <Input keyboardType="numeric" />
        </VStack>
        <VStack style={{flex: 1}}>
          <Heading size="xs" style={backgroundStyle}>
            Maximum
          </Heading>
          <Input keyboardType="numeric" />
        </VStack>
        <VStack>
        <Text></Text>
        <Button onPress={() => submit()}>GO</Button>
        </VStack>
      </HStack>
    </View>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
  blackbg: {
    backgroundColor: '#332940',
    color: 'white',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

export default CharRange;
