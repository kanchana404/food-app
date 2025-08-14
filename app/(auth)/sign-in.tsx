import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const signin = () => {
    return (
        <View>
            <Text>sign in</Text>
            <Button title='sign in' onPress={() => router.push('/sign-up')} />
        </View>
    )
}

export default signin;