import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import ListItem from '../../components/subscriptions/ListItem';

export default function ToDoTab() {
    const mockItems = [
        { name: "thomas", id: 1 },
        { name: "edi", id: 2 },
        { name: "son", id: 3 },
    ]

    return (
        <View>
            <Text style={styles.title}>To Do</Text>
            <FlatList
                data={mockItems}
                renderItem={({ item }) => <ListItem content={item.name} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "900",
        marginHorizontal: 24,
        backgroundColor: "Coral"
    },
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