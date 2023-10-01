import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function ListItem({ content }) {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{content}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 16,
        borderStyle: 'dotted',
        borderColor: '#222',
        borderWidth: 1,
        marginHorizontal: 24,
        marginTop: 10

    }
})