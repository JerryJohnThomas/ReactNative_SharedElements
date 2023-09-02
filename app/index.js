import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Image,
    Dimensions,
} from "react-native";
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import cave from "../assets/Galaxy/cave.jpg"
const cavePIC = Image.resolveAssetSource(cave).uri;
import red from "../assets/Galaxy/red.jpg";
const redPIC = Image.resolveAssetSource(red).uri;
const { width, height } = Dimensions.get("window");
import Animated, { FadeInDown, FadeInLeft } from "react-native-reanimated";

const index = () => {
    useEffect(()=>{
    },[])

  return (
      <View style={styles.container}>
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

          {/* <Text>index</Text>
          <Text>index</Text> */}
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    image:{
        width: "100%",
        height: 240,
        resizeMode: 'contain',
        marginVertical: 20,
    }
});

export default index