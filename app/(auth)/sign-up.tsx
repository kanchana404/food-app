import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

const signup = () => {
    return (
        <View>
            <Text>sign Up</Text>
            <Button title='Sign Up' onPress={() => router.push('/sign-in')} />
        </View>
    )
}

export default signup;