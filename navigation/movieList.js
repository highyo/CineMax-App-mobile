import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { stylesCine } from "../theme";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");

const MovieList = ({ title, data }) => {
  let movieName = "Ant-Man and Wasp: Quantumania";
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginBottom: 8,
        justifyContent: "space-evenly",
        marginTop: 10,
        // marginHorizontal: 10,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          marginHorizontal: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>{title}</Text>
        <TouchableOpacity>
          <Text style={[stylesCine.text, { fontWeight: "500" }]}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Movie", item)}
            >
              <View style={{ marginHorizontal: 7, marginTop: 10 }}>
                <Image
                  source={require("../assets/grifon.jpg")}
                  style={{
                    width: width * 0.3,
                    height: height * 0.22,
                    borderRadius: 20,
                  }}
                />
                <Text style={{ color: "#fff", marginTop: 10 }}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + "..."
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
