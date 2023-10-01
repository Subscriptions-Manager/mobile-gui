import { Text, View, StyleSheet, FlatList } from 'react-native';
import SubscriptionItem from './SubscriptionItem';


export default function CatalogItemsInCategory({ category, items }) {
    // console.log(items.filter((item) => { return item.category == category }))
    // console.log(category);
    return (
        <FlatList
            data={items.filter((item) => { return item.category == category })}
            renderItem={({ item }) => <SubscriptionItem
                content={item.name}
                source={item.logo}
                price={item.price} />}
        />

    );
}


const COLOR_TEA_ROSE = "#F8C7CC"
const COLOR_CAMBRIDGE_BLUE = "#81A684"
const COLOR_VIRIDIAN = "#57886C"
const COLOR_FELDGRAU = "#466060"
const COLOR_RICH_BLACK = "#0E0F19"

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLOR_TEA_ROSE,
        padding: 16,
        borderStyle: 'dotted',
        borderColor: '#222',
        borderWidth: 1,
        marginHorizontal: 24,
        marginTop: 10

    }
})