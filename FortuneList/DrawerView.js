import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Switch} from 'react-native';
import {HStack, Heading} from 'native-base';
import {catlist} from './loadfortunes';

const DrawerView = () => {
  const [cattoggles, setCattoggles] = useState(false);

  useEffect(() => {
    const initcattoggles = {};
    for (let i of catlist) {
      initcattoggles[i.catname] = {...i, toggle: true};
    }
    setCattoggles(initcattoggles);
  }, []);

  while (cattoggles == false) {
    return <Text>loading...</Text>;
  }

  const renderListItem = ({item}) => {
    return (
      <HStack alignItems="center">
        <View style={{flex: 1}}>
          <Text fontSize="lg">{item.catname}</Text>
        </View>
        <View style={{flex: 1}}>
          <Switch
            onValueChange={v => {
              cattoggles[item.catname].toggle = !cattoggles[item.catname].toggle;
              setCattoggles(cattoggles);
            }}
            value={cattoggles[item.catname].toggle}
          />
        </View>
      </HStack>
    );
  };

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
