import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import {Input, Button,} from 'native-base';
import {store} from './store/store.js';
import {setsearchterm} from './fortuneretucers';

const SearchFortune = () => {
  const [searchtermlocal, setSearchTermlocal] = useState('Search Keywords..');

  const handleChange = s => {
    setSearchTermlocal(s.nativeEvent.text);
  };

  const submit = () => {
    store.dispatch(setsearchterm(searchtermlocal));
  }
  return (
    <View style={{width: '100%', backgroundColor: 'grey'}}>
      <Input
        width="100%"
        placeholder={searchtermlocal}
        onChange={(s) => handleChange(s)}
        placeholder="Search Keywords"
        InputRightElement={<Button onPress={() => submit()}>GO</Button>}
      />
    </View>
  );
};

export default SearchFortune;
