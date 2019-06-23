import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import camera from '../assets/camera.png';

export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
                <Image source={camera} />
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <View>
                <Text />
            </View>
        );
    }
}

const styles = StyleSheet.create({});
