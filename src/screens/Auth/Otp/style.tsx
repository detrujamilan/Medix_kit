import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        paddingHorizontal: 20
    },
    input: {
        backgroundColor: Colors.AthensGray,
        borderRadius: 18,
        textAlign: 'center',
        width: 48,
        height: 64,
        flex: 1,
    },
    submitButton: {
        marginTop: 30
    }
})