import { NavigationContainer } from "@react-navigation/native";
import FeedScreen from "../screens/FeedScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome } from "@expo/vector-icons";

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Recent Feed">
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen 
          name="Recent Feed" 
          component={FeedScreen}
          options={({navigation})=> (
            {
              headerRight: () => (
                <FontAwesome
                onPress={() => navigation.navigate("Profile")}
                name="user"
                size={24}
                color="gray"
                />
              ),  
            }
          )}

          />
          <Stack.Screen name="Create New Post" component={CreatePostScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Navigator;