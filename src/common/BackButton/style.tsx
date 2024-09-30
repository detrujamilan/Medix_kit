import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shadowBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        padding: 12,
        shadowColor: 'rgb(13, 63, 103, 0.1)',
        shadowOffset: {
            width: 0,
            height: 16,
        },
        shadowOpacity: 0.1,
        shadowRadius: 40,
        elevation: 4,
    },
    labelContainer: {
        marginLeft: 20,
    },
});

export default styles;
