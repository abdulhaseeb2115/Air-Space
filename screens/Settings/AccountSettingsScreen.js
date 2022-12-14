import React, { useState } from "react";
import Background from "../../components/Background";
import BackButtonSimple from "../../components/Button/BackButtonSimple";
import {
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { theme } from "../../core/theme";
import { LinearGradient } from "expo-linear-gradient";
import {
	AntDesign,
	MaterialIcons,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function AccountSettingsScreen({ navigation }) {
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
						<Text className="text-white text-lg font-semibold">ACCOUNT</Text>
						<Ionicons
							name="person-outline"
							size={20}
							color={theme.colors.surface}
						/>
					</View>
				</LinearGradient>

				{/* SETTINGS AREA */}
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
							ACCOUNT SETTINGS
						</Text>

						{/* username */}
						<TouchableOpacity
							activeOpacity={0.9}
							className="w-full flex-row items-center my-3"
						>
							<View
								style={{ backgroundColor: "#F6F6F6" }}
								className="rounded-full p-2"
							>
								<Ionicons
									name="person-outline"
									size={25}
									color={theme.colors.bg0}
								/>
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-3 uppercase">
								USERNAME
							</Text>
							<View className="ml-auto">
								<AntDesign name="right" size={20} color={"#BDBDBD"} />
							</View>
						</TouchableOpacity>

						{/* email */}
						<TouchableOpacity
							activeOpacity={0.9}
							className="w-full flex-row items-center my-3"
						>
							<View
								style={{ backgroundColor: "#F6F6F6" }}
								className="rounded-full p-2"
							>
								<MaterialIcons
									name="alternate-email"
									size={25}
									color={theme.colors.bg0}
								/>
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-3 uppercase">
								EMAIL
							</Text>
							<View className="ml-auto">
								<AntDesign name="right" size={20} color={"#BDBDBD"} />
							</View>
						</TouchableOpacity>

						{/* phone */}
						<TouchableOpacity
							activeOpacity={0.9}
							className="w-full flex-row items-center my-3"
						>
							<View
								style={{ backgroundColor: "#F6F6F6" }}
								className="rounded-full p-2"
							>
								<MaterialIcons
									name="phone"
									size={25}
									color={theme.colors.bg0}
								/>
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-3 uppercase">
								PHONE NO.
							</Text>
							<View className="ml-auto">
								<AntDesign name="right" size={20} color={"#BDBDBD"} />
							</View>
						</TouchableOpacity>

						{/* password */}
						<TouchableOpacity
							activeOpacity={0.9}
							className="w-full flex-row items-center my-3"
						>
							<View
								style={{ backgroundColor: "#F6F6F6" }}
								className="rounded-full p-2"
							>
								<MaterialCommunityIcons
									name="form-textbox-password"
									size={25}
									color={theme.colors.bg0}
								/>
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-3 uppercase">
								PASSWORD
							</Text>
							<View className="ml-auto">
								<AntDesign name="right" size={20} color={"#BDBDBD"} />
							</View>
						</TouchableOpacity>

						{/* biometric login */}
						<TouchableOpacity
							activeOpacity={0.9}
							className="w-full flex-row items-center my-3"
						>
							<View
								style={{ backgroundColor: "#F6F6F6" }}
								className="rounded-full p-2"
							>
								<MaterialCommunityIcons
									name="fingerprint"
									size={25}
									color={theme.colors.bg0}
								/>
							</View>
							<Text className="text-left text-gray-500 font-bold text-base ml-3 uppercase">
								BIOMETRIC LOGIN
							</Text>
							<View className="ml-auto">
								<AntDesign name="right" size={20} color={"#BDBDBD"} />
							</View>
						</TouchableOpacity>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</Background>
	);
}
