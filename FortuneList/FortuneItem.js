import React from 'react';
import {Box, Badge} from 'native-base';
import {Text} from 'react-native';
import {stringToColour} from './loadfortunes';

const FortuneItem = ({item}) => (
  <Box border={1}>
    <Box style={{backgroundColor: stringToColour(item.t)}}>
      <Text>{item.t}</Text>
    </Box>
    <Box px={4}>
      <Text>{item.f}</Text>
    </Box>
  </Box>
);

export default FortuneItem;
