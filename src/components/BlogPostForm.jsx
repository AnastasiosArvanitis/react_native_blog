import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from "react-native";


const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View style={styles.createContainer}>
            <Text style={styles.textStyle}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style={styles.textStyle}>Enter Content: </Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => {
                        onSubmit(title, content)
                    }
                }
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    createContainer: {
        margin: 10,
        flex: 1,
        backgroundColor: 'gray'
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 5
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
    }
});

export default BlogPostForm;
