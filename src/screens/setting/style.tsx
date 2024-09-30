import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    contentWrapper: {
        paddingHorizontal: 20,
        marginTop: 19,
    },
    optionsWrapper: {
        marginTop: 30,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 22,
    },
    optionText: {
        marginLeft: 10,
        fontFamily: Fonts.SfSemibold,
    },
})