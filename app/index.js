import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Dimensions,
    ScrollView,
} from "react-native";
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import cave from "../assets/Galaxy/cave.jpg"
const cavePIC = Image.resolveAssetSource(cave).uri;

import red from "../assets/Galaxy/red.jpg";
const redPIC = Image.resolveAssetSource(red).uri;

import mountain from "../assets/Galaxy/mountain.jpg";
const mountainPIC = Image.resolveAssetSource(mountain).uri;


const { width, height } = Dimensions.get("window");
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";

const index = () => {


  return (
      <ScrollView contentContainerStyle={styles.container}>
          <Link href="/modal" asChild>
              <Pressable>
                  <Animated.Image
                      sharedTransitionTag="tag1"
                      source={{ uri: cavePIC }}
                      style={styles.image}
                  />
              </Pressable>
          </Link>

          <Link href="/modal2" asChild>
              <Pressable>
                  <Animated.Image
                      sharedTransitionTag="tag2"
                      source={{ uri: redPIC }}
                      style={styles.image}
                  />
              </Pressable>
          </Link>

          <Link href="/modal3" asChild>
              <Pressable>
                  <Animated.Image
                      sharedTransitionTag="tag3"
                      source={{ uri: mountainPIC }}
                      style={styles.image}
                  />
              </Pressable>
          </Link>

          {/* <Text>index</Text>
          <Text>index</Text> */}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        justifyContent: "center",
        marginVertical: 20,
        marginBottom: 100,
        paddingBottom: 50,
    },
    image: {
        width: "100%",
        height: 240,
        resizeMode: "contain",
        marginVertical: 20,
    },
});

export default index