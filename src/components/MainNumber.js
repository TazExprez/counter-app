import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    return (
        <View>
            {/* <Text style={styles.number}>10</Text> */}
            {/* The <Text /> will now display the props.children passed down to the <MainNumber /> from the <Box />. */}
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    number: {
        color: "#2968b1",
        fontSize: 140,
        fontWeight: "100",
    },
});