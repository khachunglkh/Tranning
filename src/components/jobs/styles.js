import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebeb'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#fff',
        padding: 10,
    },
    avatar: {
        flex: 1,
    },
    info: {
        flex: 2,
        justifyContent: 'space-around',
        flexDirection: 'column',

    },
    infoMeta: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        resizeMode: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold',
    }

});

export default styles;
