// import React from "react";
// Here we are also importing the useState(), this React Hook will allow us to use state with functional components.
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNumber from "./MainNumber";
import Button from "./Button";

export default props => {
    // The number, or state, is going to start at 0 by default.
    const [number, setNumber] = useState(0);

    // The plus() will increment the number const, the state, by 1 when we press the <Button /> with the plus sign.
    function plus() {
        setNumber(number + 1);
    }

    // The minus() will decrement the number const, the state, by 1 when we press the <Button /> with the minus sign.
    function minus() {
        setNumber(number - 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            {/* <MainNumber /> */}
            {/* Here we are passing down the number const, the state, to the <MainNumber /> so that it could display this.  We could pass this down through a prop, or we can pass this down through the children, like we did here. */}
            <MainNumber>{number}</MainNumber>
            {/* Here we are creating a <View /> that will act like a separator. */}
            <View style={styles.buttonSection}>
                {/* <Button>-</Button> */}
                {/* We want the <Button /> to be reusable, so we are using the action property and assigning it a different function for each instance of the <Button />.  The <Button /> below will get the minus() assigned to the action property. */}
                <Button action={minus}>-</Button>
                {/* <Button>+</Button> */}
                {/* The <Button /> below will get the plus() assigned to the action property. */}
                <Button action={plus}>+</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // We removed this so that the <Box /> would take up less space vertically.  If we leave it on, it will occupy the entire vertical height of the app.
        // flex: 1,
        backgroundColor: "#5ba0e7",
        alignItems: "center",
        // alignItems: "stretch",
        justifyContent: "center",
        padding: 20,
        borderRadius: 10,
    },
    title: {
        color: "white",
    },
    buttonSection: {
        // We are doing this backgroundColor:"black" property just to see where the <View /> that contains the <Button />s is located.
        // backgroundColor: "black",
        // Here we are putting both <Button />s side by side, in a row.
        flexDirection: "row",
        justifyContent: "space-evenly",
        minWidth: 200,
    },
});

