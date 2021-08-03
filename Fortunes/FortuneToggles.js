import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Switch, StyleSheet} from 'react-native';
import {HStack, Divider, Button} from 'native-base';
import {
  catlist,
  storeFortuneSelection,
  getFortuneSelection,
} from './loadfortunes';

const FortunToggles = ({isforceddarkmode}) => {
  const [cattoggles, setCattoggles] = useState(false);
  const [all, setall] = useState(true);
  const backgroundStyle = isforceddarkmode ? styles.blackbg : styles.whitebg;

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
  return (
    <View style={{flex: 1}}>
      <HStack alignItems="center">
        <View style={{flex: 1}}>
          <Button
            onPress={() => {
              const initcattoggles = {};
              for (let i of catlist) {
                initcattoggles[i.catname] = {...i, toggle: !all};
              }
              setall(!all);
              setCattoggles(initcattoggles);
              storeFortuneSelection(initcattoggles);
            }}>
            <Text style={{color: 'black'}}>TOGGLE ALL</Text>
          </Button>
        </View>
      </HStack>
      <Divider my={2} />
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
    color: 'black',
  },
});

export default FortunToggles;
