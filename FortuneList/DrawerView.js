import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Switch,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {HStack, Heading} from 'native-base';
import {catlist, storeFortuneSelection} from './loadfortunes';

const DrawerView = () => {
  const [cattoggles, setCattoggles] = useState(false);
  const [all, setall] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  useEffect(() => {
    const initcattoggles = {};
    for (let i of catlist) {
      initcattoggles[i.catname] = {...i, toggle: true};
    }
    setCattoggles(initcattoggles);
  }, []);

  while (cattoggles === false) {
    return <Text>loading...</Text>;
  }

  const renderListItem = ({item}) => {
    return (
      <HStack alignItems="center">
        <View style={{flex: 1}}>
          <Text fontSize="lg" style={backgroundStyle}>
            {item.catname}
          </Text>
        </View>
        <View>
          <Switch
            onValueChange={v => {
              cattoggles[item.catname].toggle =
                !cattoggles[item.catname].toggle;
              const catchanged = item.catname || null;
              setCattoggles(prev => ({
                ...prev,
                catchanged: {
                  ...cattoggles[catchanged],
                  toggle: !cattoggles[catchanged].toggle,
                },
              }));
              storeFortuneSelection(cattoggles);
            }}
            value={cattoggles[item.catname].toggle}
          />
        </View>
      </HStack>
    );
  };

  return (
    <View style={backgroundStyle}>
      <Heading style={backgroundStyle}>Settings</Heading>
      <Heading size="xs" style={backgroundStyle}>
        Toggle Categorties{' '}
      </Heading>
      <HStack alignItems="center">
        <View>
          <Text style={backgroundStyle}>All</Text>
        </View>
        <View style={{flex: 1}}>
          <Switch
            onValueChange={() => {
              const initcattoggles = {};
              for (let i of catlist) {
                initcattoggles[i.catname] = {...i, toggle: !all};
              }
              setCattoggles(initcattoggles);
              setall(!all);
              storeFortuneSelection(initcattoggles);
            }}
            value={all}
          />
        </View>
      </HStack>
      <FlatList
        data={catlist}
        renderItem={renderListItem}
        keyExtractor={item => item.catname}
      />
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

export default DrawerView;
