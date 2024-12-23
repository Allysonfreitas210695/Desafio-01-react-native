import { StyleSheet } from "react-native";

import theme from "src/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: theme.COLORS.GRAY_500,
        fontSize: theme.FONT_SIZE.LG,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        padding: 16,
        borderRadius: 6,
        color: theme.COLORS.GRAY_100,
        height: 54,
    }
})