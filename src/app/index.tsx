import { Header } from "@/components/header";
import { Section} from "@/components/section";
import { Text, View, ScrollView } from "react-native";
import  Constants  from 'expo-constants'



export default function Index() {
  return (
    <ScrollView 
    style={{flex: 1}} 
    className="bg-stale-200" 
    showsVerticalScrollIndicator={false}
    > 
    <View>
      <Header/>
    </View>




    </ScrollView>
  );
}
