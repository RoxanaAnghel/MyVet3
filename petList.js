import React from 'react';
import {
	View,
	ListView,
	StyleSheet,
	Text
} from 'react-native';

import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Puppy #1',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Subtitle here'
  },
  {
    name: 'Puppy #2',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Subtitle here'
  }
]

class PetList extends React.Component{
    render(){
    		return (
					<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
		      />
		    ))
		  }
					</List>
         );
	}
}

export default PetList;
