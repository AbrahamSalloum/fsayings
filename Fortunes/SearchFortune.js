import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Input} from 'native-base';
import {catlist} from './loadfortunes';

const SearchFortune = () => {
  const [searchterm, setSearchTerm] = useState('Search Keywords..');

  const handleChange = s => {
    setSearchTerm(s);
  };
  return (
    <View style={{width: '100%', backgroundColor: 'grey'}}>
      <Input
        width="100%"
        value={searchterm}
        onChange={handleChange}
        placeholder="Search Keywords"
      />
    </View>
  );
};

export default SearchFortune;
