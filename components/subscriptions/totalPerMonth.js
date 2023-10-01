import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';

export default function TotalPerMonth({ subscriptionList }) {
    const getTotalCost = () => {
        let totalCost = 0
        for (const item of subscriptionList) {
            totalCost += parseInt(item.price)
        }
        return totalCost
    };

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Total: {getTotalCost()}₪ per month</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        margin: 28,

    },
    text: {
        // fontWeight: "bold",
        fontSize: 24,
        color: "white"
    }
})