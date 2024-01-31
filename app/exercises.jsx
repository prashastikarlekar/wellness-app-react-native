/** @format */

import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";

export default function Exercises() {
	const router = useRouter();
	const [exercises, setExercises] = useState([]);
	const item = useLocalSearchParams();
	// console.log("got item", item);
	const getExercises = async (bodyPart) => {
		let data = await fetchExercisesByBodypart(bodyPart);
		// console.log("got data: ", data);
		setExercises(data);
	};

	useEffect(() => {
		if (item) {
			getExercises(item.name);
		}
	}, [item]);
	return (
		<ScrollView>
			<StatusBar style='light' />
			<Image
				source={item.image}
				style={{ width: wp(100), height: hp(45) }}
				className='rounded-b-[40px]'
			/>
			<TouchableOpacity
				onPress={() => router.back()}
				className='bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full'
				style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}>
				<Ionicons name='caret-back-outline' size={hp(4)} color='white' />
			</TouchableOpacity>

			{/* exercises */}
			<View className='mx-4 space-y-3 mt-4'>
				<Text
					style={{ fontSize: hp(3) }}
					className='font-semibold text-neutral-700'>
					{item.name.charAt(0).toUpperCase() + item.name.slice(1)} Exercises
				</Text>
				<View className='mb-10'>
					<ExerciseList data={exercises} />
				</View>
			</View>
		</ScrollView>
	);
}
