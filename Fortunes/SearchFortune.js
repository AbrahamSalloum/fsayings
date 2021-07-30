import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {setsearchterm} from './fortuneretucers';
import {SearchFortuneText} from './loadfortunes';
const SearchFortune = () => {
  const [searchtermlocal, setSearchTermlocal] = useState('Search Keywords..');
  const dispatch = useDispatch();
  const handleChange = s => {
    setSearchTermlocal(s.nativeEvent.text);
  };

  const submit = () => {
    dispatch(setsearchterm(searchtermlocal));
    SearchFortuneText();
  };
  return (
    <View style={{width: '100%', backgroundColor: 'grey'}}>
      <Input
        width="100%"
        placeholder={searchtermlocal}
        onChange={s => handleChange(s)}
        InputRightElement={<Button onPress={() => submit()}>GO</Button>}
      />
    </View>
  );
};

export default SearchFortune;
