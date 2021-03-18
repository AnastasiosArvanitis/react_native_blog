import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{blogPost.title}</Text>
            <Text style={styles.textStyle}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() =>
                navigation.navigate('Edit', { id: navigation.getParam('id') })
                }
            >
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'gray'
    },
    textStyle: {}
});

export default ShowScreen;
