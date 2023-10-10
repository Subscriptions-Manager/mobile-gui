import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import * as Colors from '../../constants/Colors'


export default function TotalPerMonth({ subscriptionList }) {
    const getTotalCost = () => {
        let totalCost = 0
        for (const item of subscriptionList) {
            totalCost += parseInt(item.price)
        }
        return totalCost
    };

    return (
        <View style={Colors.default.content}>
            <Text style={Colors.default.contentText}>Total: <Text style={styles.importantText}>{getTotalCost()}₪</Text> per month</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    importantText: {
        fontWeight: "bold",

    }
})