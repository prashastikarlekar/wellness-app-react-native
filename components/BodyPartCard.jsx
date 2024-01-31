/** @format */

import { View, Text, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function BodyPartCard({ item, index, router }) {
	return (
		<Animated.View
			entering={FadeInDown.duration(400)
				.delay(index * 200)
				.springify()}>
			<TouchableOpacity
				onPress={() => router.push({ pathname: "/exercises", params: item })}
				style={{ width: wp(44), height: wp(52) }}
				className='flex justify-end p-4 mb-4'>
				<Image
					source={item.image}
					resizeMode='cover'
					style={{ width: wp(44), height: wp(52) }}
					className='rounded-[35px] absolute'
				/>
				<LinearGradient
					colors={["transparent", "rgba(0,0,0,0.9)"]}
					style={{ width: wp(44), height: hp(15) }}
					start={{ x: 0.5, y: 0 }}
					end={{ x: 0.5, y: 1 }}
					className='absolute bottom-0 rounded-b-[35px]'
				/>
				<Text
					style={{ fontSize: hp(2.3) }}
					className='text-white font-semibold text-center tracking-wide'>
					{item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}
				</Text>
			</TouchableOpacity>
		</Animated.View>
	);
}
