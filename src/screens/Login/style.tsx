import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    paddingHorizontal: {
        paddingHorizontal: 20,
    },
    marginVertical: {
        marginVertical: 38,
    },
    inputContainer: {
        marginTop: 35,
        marginBottom: 30,
    },
    marginTop20: {
        marginTop: 20,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        width: '100%',
    },
    socialIconContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
      },

})

export default styles