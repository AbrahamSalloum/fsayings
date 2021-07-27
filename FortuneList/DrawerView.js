import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Switch, HStack, Flex, Heading} from 'native-base';
import {catlist} from './loadfortunes';

const renderListItem = ({item}) => {
  return (
    <HStack alignItems="center">
      <View style={{flex: 1}}>
        <Text fontSize="lg">{item.catname}</Text>
      </View>
      <View style={{flex: 1}}>
        <Switch />
      </View>
    </HStack>
  );
};

const DrawerView = () => {
  return (
    <View style={{flex: 1}}>
      <Heading>Settings</Heading>
      <Heading size="xs">Toggle Categorties </Heading>
      <FlatList
        data={catlist}
        renderItem={renderListItem}
        keyExtractor={item => item.catname}
      />
    </View>
  );
};

export default DrawerView;
