import React from 'react';
import {
	View,
	ListView,
	StyleSheet,
	Text,
	RecyclerViewBackedScrollView
} from 'react-native';
import Subscribable from 'Subscribable'
import mixin from 'react-mixin'

import Cell from './Cell'

const ds = new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2
})

class PetList extends React.Component{
	constructor (props) {
	    super(props)
	    this.state = {
	      dataSource: ds.cloneWithRows(props.store.state().pets)
	    }
	    this.onStoreChanged = this.onStoreChanged.bind(this)
	  }

		componentDidMount () {
    this.addListenerOn(this.props.store.events, 'update', this.onStoreChanged)
  }

  onStoreChanged () {
    this.setState({
      dataSource: ds.cloneWithRows(this.props.store.state().pets)
    })
  }
	render () {
	return (
			<View style={styles.container}>
				<ListView
					enableEmptySections
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Cell pet={rowData}
																			onPress={() => this.props.navigator.push(
																					{ id: 'petDetail',
																						title: 'Detail',
																						props: { navEvents: this.props.navEvents,
																										item: rowData }}
																				)
																			}
																			onDelete={() => {
																				this.props.store.remove(rowData)
																			}}
																		/>}
					renderScrollComponent={(props) => <RecyclerViewBackedScrollView {...props} />}
				/>
				</View>
		)
	}
}

mixin(PetList.prototype, Subscribable.Mixin)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingTop: 64,
    flex: 1
  }
})

module.exports = PetList
