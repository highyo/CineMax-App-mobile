import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { TouchableWithoutFeedback } from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";

var { width, height } = Dimensions.get("window");

const TrendingMovies = ({ data }) => {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text
        style={{
          color: "white",
          marginHorizontal: 4,
          marginBottom: 5,
          textDecorationStyle: "dotted",
          fontWeight: "500",
        }}
      >
        Trending
      </Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.5}
        sliderWidth={600}
        itemWidth={400}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const MovieCard = () => {
  return (
    <TouchableWithoutFeedback>
      {/* <Text style={{ color: "white" }}>Movie</Text> */}
      <Image
        source={require("../assets/captain.jpg")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
