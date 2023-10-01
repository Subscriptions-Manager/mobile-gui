import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SubscriptionItem({ content, source, price }) {
    return (
        <TouchableOpacity>
            <View style={[styles.container, styles.background]}>
                <View style={styles.item}>
                    {/* <Text>{content}</Text> */}
                    {/* <Logo url={source}></Logo> */}
                    {/* <View style={styles.container}> */}
                    {/* <View style={styles.logoCover}></View> */}
                    <Image style={styles.logo}
                        source={{ uri: source }}></Image>
                    {/* </View> */}
                </View>
                <View style={[styles.information, styles.free]}>
                    <Text>{price} ₪</Text>
                </View>
            </View>
        </TouchableOpacity >

    );
}
const Logo = (url) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
                source={{ uri: { url } }}></Image>
        </View>
    );
};

const COLOR_TEA_ROSE = "#F8C7CC"
const COLOR_CAMBRIDGE_BLUE = "#81A684"
const COLOR_VIRIDIAN = "#57886C"
const COLOR_FELDGRAU = "#466060"
const COLOR_RICH_BLACK = "#0E0F19"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    background: {
        backgroundColor: COLOR_CAMBRIDGE_BLUE
    },
    item: {
        backgroundColor: "white",
        padding: 0,
        borderStyle: 'solid',
        borderColor: COLOR_CAMBRIDGE_BLUE,
        borderWidth: 1,
        borderRadius: 2,
        marginHorizontal: 24,
        marginTop: 5,
        width: 80,
        height: 80
    },
    logo: {
        width: "100%",
        height: "100%",
        borderRadius: 2,
        color: COLOR_CAMBRIDGE_BLUE,
        overflow: "hidden",
        display: "inline",
    },

    information: {
        borderColor: COLOR_CAMBRIDGE_BLUE,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        marginEnd: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80
    },
    free: {
        backgroundColor: COLOR_VIRIDIAN,
        borderColor: "rgba(7,219,247,0.4)",

    },
    paid: {
        backgroundColor: COLOR_VIRIDIAN,
    },
})