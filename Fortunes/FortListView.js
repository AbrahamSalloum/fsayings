import React, {useState} from 'react';
import {useColorScheme, View, FlatList, StyleSheet} from 'react-native';
import {darkmode} from './fortuneretucers';
import getfortune from './loadfortunes';
import FortuneItem from './FortuneItem';
import {useSelector} from 'react-redux';

const FortListView = ({fortunes}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const isforceddarkmode = useSelector(darkmode);
  const backgroundStyle = isDarkMode || isforceddarkmode ? styles.blackbg : styles.whitebg;
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View>
      <FlatList
        data={fortunes}
        renderItem={({item}) => (
          <FortuneItem item={item} isforceddarkmode={isforceddarkmode} />
        )}
        keyExtractor={(item, i) => i}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          getfortune(200);
          setRefreshing(false);
        }}
      />
    </View>
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
    color: 'white',
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
    backgroundColor: '#332940',
  },
  whitebg: {
    backgroundColor: 'white',
  },
});

export default FortListView;
