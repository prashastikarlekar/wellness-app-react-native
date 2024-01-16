/** @format */

import { View, Text } from "react-native";
import React from "react";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
	return (
		<View className='flex-1 justify-center items-center'>
			<Text>Index</Text>
		</View>
	);
}
