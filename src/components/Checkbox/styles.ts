import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.COLORS.BLUE, 
        borderWidth: 2
    }
});