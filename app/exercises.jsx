/** @format */

import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Exercises() {
	const router = useRouter();
	const item = useLocalSearchParams();
	console.log("got item", item);
	return (
		<View className='mt-20'>
			<TouchableOpacity onPress={() => router.back()}>
				<Text>Go back</Text>
			</TouchableOpacity>
			<Text>Exercises</Text>
		</View>
	);
}
