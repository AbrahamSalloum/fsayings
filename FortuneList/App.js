import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  DrawerLayoutAndroid,
  View,
  FlatList,
} from 'react-native';

import fortune from './loadfortunes';
import {NativeBaseProvider} from 'native-base';
import Prompt from './Prompt';
import FortuneItem from './FortuneItem';
import DrawerView from './DrawerView';

const AppStart = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const drawer = useRef(null);
  const backgroundStyle = isDarkMode ? styles.blackbg : styles.whitebg;

  const [fortunes, setFortunes] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getandfortunes = async num => {
    const f = await fortune(num);
    setFortunes(f);
  };

  useEffect(() => {
    getandfortunes(200);
  }, []);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => <DrawerView />}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <View>
          <Prompt drawer={drawer} />
          <FlatList
            data={fortunes}
            renderItem={({item}) => <FortuneItem item={item} />}
            keyExtractor={(item, i) => i}
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              getandfortunes(200)
              setRefreshing(false);
            }}
          />
        </View>
      </SafeAreaView>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  blackbg: {
    backgroundColor: 'black',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStart />
    </NativeBaseProvider>
  );
};
export default App;
