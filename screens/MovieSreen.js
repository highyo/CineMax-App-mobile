import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";

import { stylesCine, theme } from "../theme";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
// const topMargin = ios ? "" : "marginTop:3";

const MovieSreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  useEffect(() => {
    // Call the api to fetch the movie details here
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1, backgroundColor: "black" }}
    >
      {/* Back button and movie poster */}
      <View style={{ width: "100%" }}>
        <SafeAreaView
          style={[
            {
              position: "absolute",
              zIndex: 20,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
            },
            ios ? { marginTop: 0 } : { marginTop: 5 },
          ]}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              { borderRadius: 7, padding: 1, marginLeft: 10 },
              stylesCine.background,
            ]}
          >
            <ChevronLeftIcon size={25} color="white" strokeWidth={3.5} />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() =>
            //   isFavourite ? toggleFavourite(false) : toggleFavourite(true)
            // }
            onPress={() => toggleFavourite(!isFavourite)}
          >
            <HeartIcon
              size={35}
              color={isFavourite ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/captain.jpg")}
            style={{
              width,
              height: height * 0.55,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieSreen;

const styles = StyleSheet.create({});
