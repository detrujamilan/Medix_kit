import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
    blurView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    padding: {
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 40,
    },
    contentContainer: {
        backgroundColor: Colors.White,
        paddingHorizontal: 20,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },
    personalInfoContainer: {
        marginVertical: 30,
    },
    genderContainer: {
        marginVertical: 20,
        marginLeft: 19,
    },
    genderRow: {
        flexDirection: 'row',
        marginTop: 10,
    },
    genderItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    medicalInfoContainer: {
        marginVertical: 20,
    },
    button: {
        marginTop: 29,
        marginBottom: 10,
    },
});
