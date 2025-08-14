import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CartButton = () => {

    const totalItems = 10;

  return (
    <TouchableOpacity className='cart-btn' onPress={() => {}}>
        {totalItems > 0 && (
            <View className='cart-btn__badge'>
                <Text className='text-white small-bold'>{totalItems}</Text>
            </View>
        )}
    </TouchableOpacity>
  )
}

export default CartButton