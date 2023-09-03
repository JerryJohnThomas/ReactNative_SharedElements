import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Image,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
const { width, height } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";
import { BlurView } from "@react-native-community/blur";

import cave from "../assets/Galaxy/cave.jpg";
const cavePIC = Image.resolveAssetSource(cave).uri;

import red from "../assets/Galaxy/red.jpg";
const redPIC = Image.resolveAssetSource(red).uri;

import mountain from "../assets/Galaxy/mountain.jpg";
const mountainPIC = Image.resolveAssetSource(mountain).uri;


const modal2 = () => {
    const router = useRouter();



    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.back()}>
                <Animated.Image
                    sharedTransitionTag="tag3"
                    source={{ uri: mountainPIC }}
                    style={styles.image}
                />
                <Animated.Text
                    entering={FadeInLeft.duration(400).delay(500)}
                    style={styles.text}
                >
                    This is Jerry John Thomas
                </Animated.Text>
            </Pressable>
            <Animated.View
                entering={FadeInDown.duration(400).delay(600)}
                style={styles.card}
            >
                <Text>
                    AI is the leading edge technology in Computer Science.
                    Generative AI and large language models have taken over the
                    AI is the leading edge technology in Computer Science.
                    Generative AI and large language models have taken over the
                    World World AI is the leading edge technology in Computer
                    Science. Generative AI and large language models have taken
                    over the World
                </Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        height,
        // paddingTop: height / 4,
        alignContent: "center",
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 240,
        resizeMode: "contain",
    },
    text: {
        fontSize: 20,
        margin: 20,
    },
    card: {
        width: "auto",
        marginHorizontal: 20,
        height: 200,
        fontSize: 13,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default modal2;
