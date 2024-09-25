import { StyleSheet } from "react-native";
import { Fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    button: {
        borderRadius: 18,
        shadowColor: 'rgba(13, 63, 103, 0.1)',
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
        width: '100%',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 24,
    }, text: {
        fontSize: 15,
        fontFamily: Fonts.SfBold,
        lineHeight: 16,
    },
})