import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { TouchableOpacity } from "react-native";
import { stylesCine } from "../theme";
import { ScrollView } from "react-native";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../navigation/movieList";

const ios = Platform.OS == "ios";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [toprated, setToprated] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      <SafeAreaView style={ios ? { marginBottom: -2 } : { marginBottom: 3 }}>
        <StatusBar style="light" />
        <View style={styles.subContainer}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={{ color: "#fff", fontSize: 25, fontWeight: "bold" }}>
            <Text style={stylesCine.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={3} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />
        {/* Upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />
        {/* Top rated movies row */}
        <MovieList title="Top Rated" data={toprated} />
      </ScrollView>
      {/* <Text style={styles.title}>HomeScreen</Text> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 20,
  },
  title: {
    color: "#fff",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 4,
  },
});
