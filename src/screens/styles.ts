import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        
    },
    content: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: -30,
        
        borderRadius: 6,
        flexDirection: 'row',
        gap: 4
    },
    containerInfoTask: {
        width: '100%',
        paddingHorizontal: 24,
        marginTop: 32,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contextInfoCreateTask: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 8,
    },
    contextInfoCompletedTask: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8,
    },
    title: {
        textTransform: 'capitalize',
        fontSize: theme.FONT_SIZE.MD,
        fontFamily: theme.FONT_FAMILY.BOLD,
        color: theme.COLORS.BLUE,
    },
    countTask: {
        backgroundColor: theme.COLORS.GRAY_400,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        textAlign: 'center',
        fontSize: theme.FONT_SIZE.SM,
        fontFamily: theme.FONT_FAMILY.BOLD,
        color: theme.COLORS.GRAY_200,
    },
    lineSeparated: {
        marginHorizontal: 24,
        marginTop: 18,
        borderTopWidth: 1,
        borderTopColor: theme.COLORS.GRAY_400
    }
});