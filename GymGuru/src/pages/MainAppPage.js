// src/pages/MainAppPage.js
import React, { useState, useEffect } from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import CommonStyles from '../styles/GlobalStyles';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutScreen from './WorkoutScreen';

const HomeScreen = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    workoutsCompleted: 5,
    totalTimeSpent: '2 hours',
    avatarUrl: 'https://via.placeholder.com/150',
  });

  useEffect(() => {
    // Fetch user data and workout progress from the database
    // setUserData(fetchedUserData);
  }, []);

  return (
    <View style={styles.homeContainer}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
        <Text style={CommonStyles.title}>Welcome, {userData.name}!</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={CommonStyles.title}>Your Workout Progress:</Text>
        <Text>Workouts completed: {userData.workoutsCompleted}</Text>
        <Text>Total time spent: {userData.totalTimeSpent}</Text>
        {/* Display recent achievements here */}
      </View>
    </View>
  );
};

const WorkoutsScreen = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch workouts data from the database
    // setWorkouts(fetchedWorkouts);
  }, []);
  const categories = ['All', 'Strength Training', 'Cardio', 'Flexibility'];

  const filterWorkouts = (category) => {
    setSelectedCategory(category);
    // Fetch workouts data for the selected category from the database
    // setWorkouts(filteredWorkouts);
  };
  const renderItem = ({ item }) => <WorkoutCard workout={item} />;

  return (
    <SafeAreaView style={styles.workoutsContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category
                ? styles.selectedFilterButton
                : null,
            ]}
            onPress={() => filterWorkouts(category)}
          >
            <Text style={CommonStyles.title}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const ProgressScreen = () => <Text>Progress Screen</Text>;
const ProfileScreen = () => <Text>Profile Screen</Text>;

const Tab = createBottomTabNavigator();

const MainAppPage = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  workoutsContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  filterButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20, // Add borderRadius
    marginHorizontal: 5, // Add marginHorizontal
  },
  selectedFilterButton: {
    backgroundColor: '#eee',
  },
  workoutCard: {
  padding: 15,
  borderBottomWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#fff',
  borderRadius: 5,
  marginBottom: 10,
  elevation: 2,
},
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  progressContainer: {
    paddingHorizontal: 20,
  },
});

export default MainAppPage;
