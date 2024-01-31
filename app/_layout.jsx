/** @format */

import { View, Text, LogBox, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
	LogBox.ignoreLogs(["Warning: Failed prop type"]);
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='exercises'
				options={{ presentation: "fullScreenModal" }}
			/>
			<Stack.Screen
				name='exerciseDetails'
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
				}}
				options={{ presentation: "modal" }}
			/>
		</Stack>
	);
}
