import { StatusBar, View } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_700Bold  
} from '@expo-google-fonts/inter';


import theme from 'src/theme';

import { Home } from './src/screens/Home';
import { Loading } from '@components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  return (
    <View 
      style={{
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600
      }}
    >
        <StatusBar
          barStyle={"light-content"}
          translucent
        />
        {fontsLoaded ? <Home/> : <Loading/>}
    </View>
  );
}