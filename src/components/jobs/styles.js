import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(244,244,244	)'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    avatar: {
        flex: 0.7,
        paddingRight: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    info: {
        flex: 3,
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingVertical: 10,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'rgb(244,244,244	)',

    },
    infoMeta: {
        flex: 0.5,
        justifyContent: 'space-around',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingLeft: 10,

        // backgroundColor: 'blue'
    },
    image: {
        // width: 50,
        height: 35,

        resizeMode: 'stretch',

        justifyContent: 'space-around',
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgb(234,109,57)'
    }

});

export default styles;
