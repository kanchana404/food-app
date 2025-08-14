import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from 'clsx';
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]} style={{ paddingTop: insets.top }}>




      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {

          const isEven = index % 2 === 0;

          return (
            <View key={item.id}>
              <Pressable className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")} style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}>
                {({ pressed }) => (
                  <Fragment>
                    <View className="w-1/2 h-full">
                      <Image source={item.image} className="size-full" resizeMode="contain" />
                    </View>

                    <View className={cn("offer-card__info", isEven ? 'pl-10' : 'pr-10')}>
                      <Text className="leading-tight text-white h1-bold">{item.title}</Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="white"


                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="flex-row w-full my-5 flex-between">
            <View className="flex-start">
              <Text className="small-bold text-primary">Delivery To</Text>
              <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                <Text className="paragraph-bold text-dark-100">Nawalapitiya</Text>
                <Image source={images.arrowDown} className="size-3" resizeMode="contain" />

              </TouchableOpacity>
            </View>

            <CartButton />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
