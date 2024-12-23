import { StyleSheet } from "react-native";

import theme from "src/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 175,
        backgroundColor: theme.COLORS.GRAY_700,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logoImg: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%', 
        height: '100%',
      },
      image: {
        resizeMode: 'contain'
      },
});