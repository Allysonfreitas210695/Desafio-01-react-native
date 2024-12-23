import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
    container: {
        width: 54,
        height: 54,
        backgroundColor: theme.COLORS.BLUE_DARK,
        color: theme.COLORS.WHITE,
        justifyContent: "center",
        borderRadius: 6,

        shadowColor: theme.COLORS.GRAY_300,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        alignItems: "center"
    }
});