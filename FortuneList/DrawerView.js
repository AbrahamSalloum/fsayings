import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Switch,
  useColorScheme,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';
import {HStack, Heading} from 'native-base';
import {
  catlist,
  storeFortuneSelection,
  getFortuneSelection,
} from './loadfortunes';

const DrawerView = () => {
  const [cattoggles, setCattoggles] = useState(false);
  const [all, setall] = useState(true);

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  useEffect(() => {
    const getsettingsorloaddefaults = async () => {
      const settings = await getFortuneSelection();
      if (settings) {
        setCattoggles(settings);
        storeFortuneSelection(settings);
      } else {
        const initcattoggles = {};
        for (let i of catlist) {
          initcattoggles[i.catname] = {...i, toggle: true};
        }
        setCattoggles(initcattoggles);
        storeFortuneSelection(initcattoggles);
      }
    };
    getsettingsorloaddefaults();
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
    <SafeAreaView style={backgroundStyle}>
      <Heading style={backgroundStyle}>Settings</Heading>
      <Heading size="xs" style={backgroundStyle}>
        Toggle Categorties{' '}
      </Heading>
      <HStack alignItems="center">
        <View style={{flex: 1}}>
          <Button
            title="Toggle All"
            onPress={() => {
              const initcattoggles = {};
              for (let i of catlist) {
                initcattoggles[i.catname] = {...i, toggle: !all};
              }
              setall(!all);
              setCattoggles(initcattoggles);
              storeFortuneSelection(initcattoggles);
            }}
          />
        </View>
      </HStack>
      <FlatList
        data={catlist}
        renderItem={renderListItem}
        keyExtractor={item => item.catname}
      />
    </SafeAreaView>
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
