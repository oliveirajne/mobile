import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        
    },
    viewOptions: {
        alignItems: "center",
    },
    viewTxtMenu: {
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    txtMenu: {
        color: "#fff",
        width: 200,
        textAlign: "center",
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: '700',   
        fontSize: 20,
    },
    sidebarDivider:{
        height:1,
        width:"80%",
        backgroundColor:"#ff671b",
        marginVertical:10
    },

    


    logoContainer: {
        height: 100,
        alignItems: 'center',
        //flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: "#333333",
        paddingTop: 0,
    },
    logo: {
        width: 150,
        height: 40,
    },
    slogan: {
        color: "#fff",
        marginTop: 10,
        fontWeight: "700",
        fontSize: 20,
    },
    formContainer: {
        
        paddingLeft: 40,
        paddingRight: 40,
        
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 10,
        paddingHorizontal: 10,
        color: "#fff",
    },
    buttonText: {
        backgroundColor: "#ff671b",
        color: "#fff",
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: '700',
        width: 200,
        bottom: 2,
    },
    viewTxtCod: {
        paddingVertical: 10,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        height: 100,
    },
    txtCod: {
        color: "#fff",
        width: 200,
        textAlign: "center",
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: '700',    
    },
    scanner: {
        width: width,
        height: 400,
        
    }
});