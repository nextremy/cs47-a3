import { SafeAreaView, StyleSheet } from "react-native";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import { useSpotifyAuth } from "./utils";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  return (
    <SafeAreaView style={styles.container}>
      {token ? null : <SpotifyAuthButton authFunction={getSpotifyAuth} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Themes.colors.background,
    flex: 1,
    justifyContent: "center",
  },
});
