import { StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import { useEffect, useState } from 'react';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '../Themed';

import SubscriptionItem from './SubscriptionItem';
import AddSubscription from './addSubscription';
import TotalPerMonth from './totalPerMonth';
import CatalogItemsInCategory from './CatalogItemsInCategory';

export default function Catalog() {
    const mockItems = [
        {
            name: "netflix",
            category: "streaming service",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FNetflix-Emblem.jpg&f=1&nofb=1&ipt=3fe8ed0564d75214729473882415bdec105f470e60bcef4f1a5c1879a64d0acc&ipo=images",
            price: "45", id: 1
        },
        {
            name: "harel insurance car",
            category: "insurance",
            logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fimi.co.il%2Fimages%2Finvestors-israel%2Fharel.png&f=1&nofb=1&ipt=14cdc7c3771093dcd58500878ee9d88de8945d28c1e40465454eadd9d0ab6efa&ipo=images",
            price: "100", id: 2
        },

        {
            name: "mastercard credit",
            category: "credit card",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
            price: "15", id: 3
        },
        {
            name: "american express credit",
            category: "credit card",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_(2018).svg/1200px-American_Express_logo_(2018).svg.png",
            price: "0", id: 4
        }
    ]

    const unique = (array) => {
        return array.map(v => v.category)
            .filter((item, index, arr) => arr.indexOf(item) === index);
    }

    const categories = unique(mockItems)
    const categoriesWithIds = categories.map((item, index) =>
    ({
        id: (index + 1).toString(),
        value: item,
        isExpanded: false
    }))
    console.log(categoriesWithIds)
    // const [isExpanded, setIsExpanded] = useState(true)

    return (
        <View style={[styles.background, styles.container]}>
            <Text style={styles.title}>Subscriptions</Text>
            <TotalPerMonth subscriptionList={mockItems}></TotalPerMonth>
            <FlatList
                data={categoriesWithIds}
                style={styles.maxHeight}
                renderItem={({ item }) =>
                    <View style={styles.categoryBox}>
                        <TouchableOpacity
                            onPress={() => {
                                item.isExpanded = !item.isExpanded
                            }}
                            style={styles.toggle}>
                            <Text style={styles.category}>{item.value}</Text>
                        </TouchableOpacity>
                        <ExpandableView
                            onClickFunction={() => { }}
                            expanded={item.isExpanded}
                            category={item.value}
                            items={mockItems}></ExpandableView>

                        {/* <CatalogItemsInCategory
                            category={item.value}
                            items={mockItems}></CatalogItemsInCategory> */}
                    </View>
                }
            />
        </View>

    );
}

const ExpandableView = ({ onClickFunction, expanded = true, category, items }) => {
    const [height] = useState(new Animated.Value(0));

    console.log(expanded)
    useEffect(() => {
        Animated.timing(height, {
            toValue: !expanded ? "90%" : 0,
            duration: 150,
            useNativeDriver: false
        }).start();
    }, [expanded, height]);

    // TODO: why is flatList generating first element of undefined 
    if (items == undefined)
        return (<Text>Undefined</Text>)

    return (
        <Animated.View style={{ height }}>
            <CatalogItemsInCategory
                category={category}
                items={items}></CatalogItemsInCategory>
        </Animated.View>
    )
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
    container: {
        // height: "80%"
    },
    background: {
        backgroundColor: COLOR_RICH_BLACK,
    },
    backgroundWhite: {
        backgroundColor: "white",
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
    }
})

