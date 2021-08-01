import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {setsearchterm, setargs} from './fortuneretucers';
import {SearchFortuneText} from './loadfortunes';

const SearchFortune = ({drawer}) => {
  const [searchtermlocal, setSearchTermlocal] = useState('Search Keywords..');
  const dispatch = useDispatch();
  const handleChange = s => {
    setSearchTermlocal(s.nativeEvent.text);
  };

  const submit = () => {
    dispatch(setsearchterm(searchtermlocal));
    SearchFortuneText();
    drawer.current.closeDrawer();
    dispatch(setsearchterm(false));
    dispatch(setargs(`-im /${searchtermlocal}/`));
  };
  return (
    <View>
      <Input
        width="100%"
        onChange={s => handleChange(s)}
        InputRightElement={<Button onPress={() => submit()}>GO</Button>}
        placeholder={'Search..'}
      />
    </View>
  );
};

export default SearchFortune;
