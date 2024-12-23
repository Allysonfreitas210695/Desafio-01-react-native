import { StyleSheet } from "react-native";
import theme from "src/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    iconInfo: {
        marginTop: 48,
    },
    textoInfo: {
        maxWidth: 300,
        width: 300,
        marginTop: 16,
        color: theme.COLORS.GRAY_300,
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        textAlign: 'center',
    }
})