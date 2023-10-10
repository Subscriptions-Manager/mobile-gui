import { StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useEffect, useState } from 'react';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';

import SubscriptionItem from './SubscriptionItem';
import AddSubscription from './addSubscription';
import TotalPerMonth from './totalPerMonth';
import CatalogItemsInCategory from './CatalogItemsInCategory';
import getMockItems from '../../constants/MockData'
import Colors from '../../constants/Colors'

export default function Catalog() {

    // const [items, setItems] = useState([])
    // fetch("http://localhost:8091/subs", { mode: 'no-cors', Headers: [{ ""}] }).then(
    //     response => {
    //         console.log(`got ${response}`)
    //         return response.json()
    //     }).then(responseJson => {
    //         console.log(responseJson)
    //         // this.setItems(responseJson)
    //     })
    const runId = Math.ceil(Math.random() * 1000, 1000)
    const mockItems = getMockItems()
    const categoriesWithIds = getCategoriesEnumerated(mockItems)

    return (
        <View style={[Colors.background, styles.container]}>
            <Text style={Colors.title1}>Available Subscriptions</Text>
            <FlatList
                data={categoriesWithIds}
                style={styles.maxHeight}
                renderItem={({ item }) =>
                    <View style={styles.categoryBox}>
                        <TouchableOpacity
                            onPress={() => {
                                item.setCategory({
                                    ...item.category, isExpanded: !item.category.isExpanded
                                })
                            }}
                            style={styles.toggle}>
                            <Text style={styles.category}>{item.category.value}</Text>
                        </TouchableOpacity>
                        <ExpandableView
                            item={item.category}
                            items={mockItems}></ExpandableView>

                        {/* <NormalView
                            item={item.category}
                            // expanded={item.isExpanded}
                            // category={item.value}
                            items={mockItems}></NormalView> */}
                        {/* <CatalogItemsInCategory
                            category={item.value}
                            items={mockItems}></CatalogItemsInCategory> */}
                    </View>
                }
            />
        </View>

    );
}

const NormalView = ({ item, items }) => {
    return (
        <View style={styles.content}>
            <CatalogItemsInCategory
                category={item.value}
                items={items}></CatalogItemsInCategory>
        </View>
    )
}

function getCategoriesEnumerated(catalogItems) {
    const categories = uniqueByField(catalogItems, "category")

    const categoriesWithIds = categories.map((item, index) =>
    ({
        id: (index + 1).toString(),
        value: item,
        isExpanded: true
    }))

    const statefulCategories = []
    for (const i in categoriesWithIds) {
        if (Object.hasOwnProperty.call(categoriesWithIds, i)) {
            const [category, setCategory] = useState(categoriesWithIds[i]);
            statefulCategories.push({ category, setCategory })
        }
    }

    return statefulCategories
}

function uniqueByField(array, field) {
    return array.map(v => v[field])
        .filter((item, index, arr) => arr.indexOf(item) === index);
}

const ExpandableView = ({ item, items }) => {
    var height = 0
    if (item.isExpanded) {
        height = "auto"
    }
    else {
        height = 0
    }

    return (
        <Animated.View style={{ height: height }}>
            <CatalogItemsInCategory
                category={item.value}
                items={items}></CatalogItemsInCategory>
        </Animated.View>
    )
}

function printItemStates(items, runId) {
    console.log(`---${runId}---`)
    for (const i in items) {
        console.log(`${items[i].category} ${items[i].category.value}: isExpanded [${items[i].category.isExpanded}]`)
    }
    console.log("<><><><><>")
}

const COLOR_TEA_ROSE = "#F8C7CC"
const COLOR_CAMBRIDGE_BLUE = "#81A684"
const COLOR_VIRIDIAN = "#57886C"
const COLOR_FELDGRAU = "#466060"
const COLOR_RICH_BLACK = "#0E0F19"


const styles = StyleSheet.create({
    maxHeight: {
        flexGrow: 0
    },
    title: {
        fontSize: 24,
        fontWeight: "900",
        marginHorizontal: 100,
        marginTop: 20,
        // backgroundColor: COLOR_RICH_BLACK,
        color: "white",

    },
    item: {
        backgroundColor: "white",
        padding: 16,
        borderStyle: 'dotted',
        borderColor: '#222',
        borderWidth: 1,
        marginHorizontal: 24,
        marginTop: 10
    },
    category: {
        paddingVertical: 4,
        paddingHorizontal: 16,
        backgroundColor: COLOR_FELDGRAU,
        color: "white",
        fontSize: 24,
        // fontWeight: 'bold',
        marginTop: 2
    },
    categoryBox: {
        backgroundColor: COLOR_FELDGRAU,
        justifyContent: 'center',
        alignContent: 'center',
    },
    toggle: {
        justifyContent: "center",
        alignItems: "center"
    },
    toggleText: {
        color: "#fff"
    },
    content: {
        // flex: 1,
        height: "auto"
    }
})

