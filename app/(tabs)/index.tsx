import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import SubscriptionItem from '../../components/subscriptions/SubscriptionItem';
import AddSubscription from '../../components/subscriptions/addSubscription';
import TotalPerMonth from '../../components/subscriptions/totalPerMonth';
import { Modal } from 'react-native';

export default function subscriptions() {
    const mockItems = [
        {
            name: "netflix",
            logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FNetflix-Emblem.jpg&f=1&nofb=1&ipt=3fe8ed0564d75214729473882415bdec105f470e60bcef4f1a5c1879a64d0acc&ipo=images",
            price: "45", id: 1
        },
        {
            name: "harel insurance car",
            logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fimi.co.il%2Fimages%2Finvestors-israel%2Fharel.png&f=1&nofb=1&ipt=14cdc7c3771093dcd58500878ee9d88de8945d28c1e40465454eadd9d0ab6efa&ipo=images",
            price: "100", id: 2
        },

        {
            name: "mastercard credit",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
            price: "15", id: 3
        },
        {
            name: "american express credit",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_(2018).svg/1200px-American_Express_logo_(2018).svg.png",
            price: "0", id: 4
        }
    ]

    return (
        <View>
            <Text style={styles.title}>Subscriptions</Text>
            <TotalPerMonth subscriptionList={mockItems}></TotalPerMonth>
            <FlatList
                data={mockItems}
                renderItem={({ item }) => <SubscriptionItem
                    content={item.name}
                    source={item.logo}
                    price={item.price} />}
            />
            <AddSubscription></AddSubscription>
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