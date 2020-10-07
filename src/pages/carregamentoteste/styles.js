import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        height: 50,
    },
    logo: {
        width: 300,
        height:80,
    },
    slogan: {
        color: "#fff",
        marginTop: 15,
    },
    formContainer: {
        flex: 1,
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
    buttonText1: {
        width: 200,
        alignSelf: "center",
        backgroundColor: "#ff671b",
        color: "#fff",
        paddingVertical: 15,
        textAlign: "center",
        fontWeight: '700',
    },
    buttonText2: {
        top: 40,
        width: 200,
        alignSelf: "center",
        backgroundColor: "#ff671b",
        color: "#fff",
        paddingVertical: 15,
        textAlign: "center",
        fontWeight: '700',
    },
    viewSignUp: {
        flex: 1,
        paddingTop: 20,
        alignItems: "center",
    },
    signUp: {
        color: "#fff",
        paddingVertical: 15,
        textAlign: "center",
        fontWeight: '700',
    },
    viewCarregando: {
        height: 180,
        width: width,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
    
    },
});