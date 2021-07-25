import React from 'react';
import {Box, Badge} from 'native-base';
import {Text} from 'react-native';

const FortuneItem = ({item}) => (
  <Box border={1}>
    <Box style={{'backgroundColor': "lightgrey"}}>
    {item.t}
    </Box>
    <Box px={4}>
      <Text>{item.f}</Text>
    </Box>
  </Box>
);

export default FortuneItem;
