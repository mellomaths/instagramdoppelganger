import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default class New extends Component {
    static navigationOptions = {
        headerTitle: 'New Post'
    };

    state = {
        author: '',
        place: '',
        description: '',
        hashtags: ''
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.selectButton} onPress={() => {}}>
                    <Text style={styles.selectButtonText}>Select a image</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Author"
                    placeholderTextColor="#999"
                    value={this.state.author}
                    onChangeText={author => this.setState({ author })}
                />
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Place"
                    placeholderTextColor="#999"
                    value={this.state.place}
                    onChangeText={place => this.setState({ place })}
                />
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Description"
                    placeholderTextColor="#999"
                    value={this.state.description}
                    onChangeText={description => this.setState({ description })}
                />
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Hashtags"
                    placeholderTextColor="#999"
                    value={this.state.hashtags}
                    onChangeText={hashtags => this.setState({ hashtags })}
                />

                <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
                    <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {}
});
