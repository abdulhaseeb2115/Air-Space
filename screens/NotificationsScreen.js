import React, { useState } from "react";
import Background from "../components/Background";
import MenuButton from "../components/Button/MenuButton";
import BackButtonSimple from "../components/Button/BackButtonSimple";
import Button from "../components/Button/Button";
import TextInput from "../components/Input/TextInput";
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { theme } from "../core/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Octicons } from "@expo/vector-icons";

export default function NotificationsScreen({ navigation }) {
	return (
		<Background>
			<View
				style={{ backgroundColor: theme.colors.bg0 }}
				className="h-full w-full"
			>
				{/* HEADER */}
				<LinearGradient
					style={{
						paddingTop: StatusBar.currentHeight + 10,
						height: "15%",
					}}
					className="w-full h-16 p-4 pb-6 flex-col items-center"
					colors={["rgba(46, 199, 255,1)", "rgba(197, 81, 204,0.9)"]}
					start={{ x: 0, y: 0 }}
					end={{ x: 10, y: 0 }}
				>
					{/* Top Row */}
					<View className="w-full flex-row items-center justify-betwee">
						<BackButtonSimple goBack={navigation.goBack} />
						{/* <MenuButton /> */}
					</View>

					{/* Middle Row */}
					<View
						style={{ letterSpacing: 1 }}
						className="w-full px-4 mt-2 flex-row items-center justify-between"
					>
						<Text className="text-white text-lg font-semibold">
							NOTIFICATIONS
						</Text>
					</View>
				</LinearGradient>

				{/* PAGE */}
				<ScrollView
					style={{
						height: "85%",
						borderTopRightRadius: 30,
						borderTopLeftRadius: 30,
					}}
					className="w-full bg-white"
				>
					<TouchableOpacity
						activeOpacity={1}
						className="h-full w-full p-6 pt-10 items-center"
					>
						{[1, 2, 3, 4, 5, 6].map((x) => (
							<TouchableOpacity
								key={x}
								activeOpacity={0.8}
								style={{
									backgroundColor: theme.colors.secondary,
								}}
								className="w-full p-4 shadow-md shadow-black rounded-lg flex-row items-center my-3"
							>
								<Octicons
									name="dot-fill"
									color={theme.colors.gray500}
									size={20}
								/>
								<Text className="text-base text-gray-500 ml-3 w-2/3">
									Your free trial is expired.
								</Text>

								<Text className="text-gray-500 ml-auto">10:21AM</Text>
							</TouchableOpacity>
						))}
					</TouchableOpacity>
				</ScrollView>
			</View>
		</Background>
	);
}
