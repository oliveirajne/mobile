import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    logoContainer: {
        height: 100,
        alignItems: 'center',
        //flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: "#333333",
        paddingTop: 0,
        width: "100%"
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
        //flex: 1,
        //alignItems: "flex-end",
        //position: "absolute",
        paddingHorizontal: 40,
        //backgroundColor: "red",
        //bottom: 5,
        flex: 1,
        justifyContent: "flex-end",
        
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        paddingHorizontal: 10,
        color: "#fff",
    },
    buttonText: {
        backgroundColor: "#ff671b",
        color: "#fff",
        paddingVertical: 10,
        textAlign: "center",
        fontWeight: '700',
        width: 180,
        top: 2,
        bottom: 2,
        alignSelf: "center",
        margin: 20,
    },
    viewTxtCod: {
        paddingVertical: 10,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "blue",
        height: 100,
        width: width,
        bottom: 0,
        marginBottom: 0,
        
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
        height: 480,
        alignItems: "center"
        
    }
});