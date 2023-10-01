import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Modal, Pressable } from 'react-native';
import { useState } from 'react';
import SubscriptionItem from './SubscriptionItem';
import Catalog from './Catalog';

export default function addSubscription() {
    const onChangeText = () => console.log("a")
    const [modalVisible, setModalVisible] = useState(true)
    return (
        <View style={styles.inputBlock}>
            <TextInput onChangeText={onChangeText} style={styles.textBox}></TextInput>
            <Button title='Add' onPress={() => setModalVisible(true)} style={styles.Button}>
            </Button >
            <Modal
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Hello World!</Text>
                        <Catalog></Catalog>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.modalButton}>
                            <Text style={styles.hideButton}>Hide</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
/**
 * Palette
 * 5EFC8D - spring green
 * 8EF9F3 - ice blue
 * 93BEDF - powder blue
 * 8377D1 - Tropical indigo
 * 6D5A72 - Chinese Violet
 */

/**
 * Palette 2
 * F8C7CC - Tea rose
 * 81A684 - Cambridge blue
 * 57886C - Viridian
 * 466060 - Feldgrau
 * 0E0F19 - Rich Black
 */

const COLOR_TEA_ROSE = "#F8C7CC"
const COLOR_CAMBRIDGE_BLUE = "#81A684"
const COLOR_VIRIDIAN = "#57886C"
const COLOR_FELDGRAU = "#466060"
const COLOR_RICH_BLACK = "#0E0F19"

const styles = StyleSheet.create({
    inputBlock: {
        backgroundColor: COLOR_RICH_BLACK
    },
    textBox: {
        borderBottomWidth: 1,
        padding: 30,
        margin: 10,
        backgroundColor: "#dee"
    },
    Button: {
        marginHorizontal: 20
    },
    hideButton: {
        backgroundColor: COLOR_FELDGRAU,
        justifyContent: "center",
        alignItems: "center",
        padding: 28,
        textAlign: "center",
        width: "100%",
        color: "white",
        fontSize: 24
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    }
})