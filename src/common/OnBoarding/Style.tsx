import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { Fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        marginTop: 70,
        width: 313,
        height: 290,
        alignSelf: 'center',
    },
    headingContainer: {
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 20,
        width: 221,
        alignSelf: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 44,
        width: '100%',
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skipButton: {
        width: 31,
        marginLeft: 32,
    },
    nextButton: {
        backgroundColor: Colors.Primary,
        borderRadius: 18,
        width: 215,
    },
    nextButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 27,
        alignSelf: 'flex-end',
    },
    nextButtonText: {
        fontSize: 15,
        fontFamily: Fonts.SfBold,
        color: Colors.White,
    },
    arrowIconContainer: {
        paddingLeft: 46,
    },
})