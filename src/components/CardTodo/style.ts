import { StyleSheet } from "react-native";
import theme from "src/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 6,
  },
  description: {
    flex: 1, 
    marginLeft: 10, 
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    flexShrink: 1
  },
  trashIcon: {
    padding: 4
  },
});
