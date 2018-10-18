import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { Platform, StyleSheet, Text, View, TouchableOpacity, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Remote debugger']);

type Props = {};
export default class App extends Component<Props> {
	state = {
		count: 0,
	}
	
	changeCount(arg) {
		console.log('arg, this', arg, this);
		const { count } = this.state;
		
		this.setState({
			count: count + arg,
		});
	}
	
	render() {
		const { count } = this.state;
		
		return  <View style={styles.container}>
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(1)}>
				<Text>+</Text>
			</TouchableOpacity>
			
			<Text style={styles.welcome}>{count}</Text>
				
			<TouchableOpacity onPress={() => this.changeCount.bind(this)(-1)}>
				<Text>-</Text>
			</TouchableOpacity>
		</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
