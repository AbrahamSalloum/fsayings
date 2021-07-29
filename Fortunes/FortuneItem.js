import React from 'react';
import {Box} from 'native-base';
import {Text, StyleSheet, useColorScheme} from 'react-native';
import {stringToColour} from './loadfortunes';

const FortuneItem = ({item}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const TextColor = isDarkMode ? styles.whitecolor : styles.blackcolor;

  return (
    <Box border={1}>
      <Box style={{backgroundColor: stringToColour(item.t)}}>
        <Text>{item.t}</Text>
      </Box>
      <Box px={4}>
        <Text style={TextColor}>{item.f}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  whitecolor: {
    color: '#41FF00',
  },
  blackcolor: {
    color: 'black',
  },
});

export default FortuneItem;
