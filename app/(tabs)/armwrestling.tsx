import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import { Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Ones</Text>
      <CompetitorImage></CompetitorImage>
      <Stats></Stats>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/subscriptions.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'blue',
    width: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  profile: {
    alignSelf: 'flex-start',
    justifySelf: 'flex-start',
    width: '98%',
    height: '98%',
    border: '2px solid red'
  },
  stats: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
    color: '#FFF'
  },
  statsText: {
    color: '#FFF',
    backgroundColor: '#4f1f25',
    fontSize: 20,
    borderRadius: 3,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    padding: 2,
    paddingLeft: 20
  }
});

const CompetitorImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile}
        source={{ uri: "https://lastminutestylist.com/wp-content/uploads/2021/07/Devon-Larratt-1200x801.jpg" }}></Image>
    </View>
  );
};
const Stats = () => {
  return (
    <View style={styles.stats}>
      <Text style={styles.statsText}>Height: 183cm</Text>
      <Text style={styles.statsText}>Weight: 75kg</Text>
      <Text style={styles.statsText}>Strength: 100</Text>
      <Text style={styles.statsText}>Side: 100</Text>
      <Text style={styles.statsText}>Rising: 100</Text>
    </View>
  )
}
