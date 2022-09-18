import { ScrollView, FlatList } from "react-native";
import FeedPost from "../components/FeedPost";
import posts from "../../assets/data/posts.json";


const FeedScreen = () => {
  return (
    <ScrollView>
     <FlatList
     data={posts}
     renderItem = {({item})=> <FeedPost post={item}/>}
     />
    </ScrollView>
  )
};

export default FeedScreen;