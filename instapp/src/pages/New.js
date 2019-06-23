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
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30
    },
    selectButton: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        borderStyle: 'dashed',
        height: 42,

        justifyContent: 'center',
        alignItems: 'center'
    },
    selectButtonText: {
        fontSize: 16,
        color: '#666'
    },
    preview: {
        width: 100,
        height: 100,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 4
    },
    input: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 16
    },
    shareButton: {
        backgroundColor: '#7159c1',
        borderRadius: 4,
        height: 42,
        marginTop: 15,

        justifyContent: 'center',
        alignItems: 'center'
    },
    shareButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF'
    }
});
