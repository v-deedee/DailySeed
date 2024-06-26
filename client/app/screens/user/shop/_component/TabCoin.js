import { View, Text, StyleSheet } from "react-native";
import CoinCard from "./CoinCard";

export default function TabCoin() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Coins</Text>
            <CoinCard value={'200'} vnd={"110000"} />
            <CoinCard value={'300'} vnd={"210000"} />
            <CoinCard value={'400'} vnd={"310000"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#474838",
        paddingTop: 10,
    },
});