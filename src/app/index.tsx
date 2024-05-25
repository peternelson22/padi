import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { defaultStyles } from '../constants/Styles';
import Colors from '../constants/Colors';
const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);
  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isLooping
          isMuted
          shouldPlay
          source={{ uri: assets[0].uri }}
          resizeMode={ResizeMode.COVER}
          style={styles.video}
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Are you ready to up your game?</Text>
      </View>
      <View style={styles.buttons}>
        <Link
          href={'/login'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={[styles.loginText, { color: 'black' }]}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  header: {
    fontSize: 36,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: '600',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 16,
    padding: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
