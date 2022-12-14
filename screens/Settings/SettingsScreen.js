import React, { useState } from "react";
import Background from "../../components/Background";
import MenuButton from "../../components/Button/MenuButton";
import BackButtonSimple from "../../components/Button/BackButtonSimple";
import Button from "../../components/Button/Button";
import TextInput from "../../components/Input/TextInput";
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { theme } from "../../core/theme";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Switch } from "react-native-paper";

const SettingsScreen = ({ navigation }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isNotificationOn, setIsNotificationOn] = useState(true);

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
						<Text className="text-white text-lg font-semibold">SETTINGS</Text>
						<Ionicons
							name="settings-outline"
							size={20}
							color={theme.colors.surface}
						/>
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
						<Text className="text-base font-semibold w-full text-left border-b pb-2 pl-2 mb-5 border-gray-300 uppercase">
							APP SETTINGS
						</Text>

						{/* dark mode */}
						<View className="w-full flex-row items-center">
							<View
								style={{ backgroundColor: "#7C15FF" }}
								className="rounded-full p-2"
							>
								<Ionicons name="moon-sharp" size={20} color={"white"} />
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-2">
								Dark Mode
							</Text>
							<Switch
								value={isDarkMode}
								onValueChange={() => {
									setIsDarkMode(!isDarkMode);
								}}
								className="scale-125 ml-auto"
								color={isDarkMode && theme.colors.primary}
							/>
						</View>

						{/* notifications */}
						<View className="w-full flex-row items-center">
							<View
								style={{ backgroundColor: "#FC6766" }}
								className="rounded-full p-2 "
							>
								<Ionicons name="notifications" size={20} color={"white"} />
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-2">
								Notifications
							</Text>
							<Switch
								value={isNotificationOn}
								onValueChange={() => {
									setIsNotificationOn(!isNotificationOn);
								}}
								className="scale-125 ml-auto"
								color={isNotificationOn && theme.colors.primary}
							/>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</Background>
	);
};

export default SettingsScreen;
