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
    },
    detailItem:{
      backgroundColor: '#fff',
      marginTop: 6,
      padding: 15
    },
    detailAvatar:{
      marginBottom: 10
    },
    detailImage: {
      height: 60,
      resizeMode: 'contain',
    },
    detailTitle: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 2
    },
    detailMeta: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 2
    },
    detailKm: {
      color: 'rgb(237,113,72)',
      fontWeight: 'bold'
    },
    detailSalary: {
      marginHorizontal: 10,
    },
    detailDate: {
      color: 'rgb(120,120,120)',
    },
    detailMeta1: {
      flexDirection: 'row',
      marginBottom: 2
    },
    orange: {
      color: 'rgb(236,98,52)',
      marginRight: 5
    },
    gray: {
      color: 'rgb(63,63,63)'
    },
    detailMeta2:{
      flexDirection:'row',
      flex: 1
    },
    detailMeta3:{
      flex: 1
    },
    h1: {
      fontWeight: 'bold',
      marginLeft: 5,
      marginBottom: 10,
    },
    detailTop: {
      flexDirection: 'row',
    },
    detailBottom: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      // position: 'absolute',
      bottom: 0,

    },
    detailButton1: {
      flexDirection: 'row',
      backgroundColor: 'rgb(81,186,162)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10
    },
    detailButton2: {
      flexDirection: 'row',
      backgroundColor: 'rgb(236,98,52)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 10
    },
    detailButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    detailContainer: {
      flex: 1,
      backgroundColor: 'rgb(224,224,224)'
    }


});

export default styles;
