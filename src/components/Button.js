import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// Here we are also importing the <TouchableHighlight /> from React Native.  The <TouchableHighlight /> handles touch screen presses.
// import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from "react-native";

export default props => {
    return (
        // This <TouchableHighlight /> will handle touchscreen presses.
        // <TouchableHighlight onPress={() => alert("Pressed Button!")}>
        // This <TouchableHighlight /> will execute the props.action that is passed down to an instance of the <Button />.  It may decrement, or increment the number, the state, depending on whether the minus() or the plus() is passed down, respectively.
        // <TouchableHighlight onPress={() => props.action()}>
        // <TouchableHighlight onPress={() => props.action()} style={styles.touch}>
        // We added the underlayColor property to this <TouchableHighlight />.  This is the color that will show through when the touch is active.  Joe said that the underlay color is basically whatever is in the background.  We set it to the background color of the parent <Box />.  This way we won't get the black borders around the buttons when we press them.  We are basically saying that the color that will be behind the <TouchableHightlight /> will be the light blue, #5ba0e7, which is the same color as the parent <Box />.
        <TouchableHighlight underlayColor="#5ba0e7" onPress={() => props.action()}>
        {/* Instead of using an underlayColor property for the <TouchableHighlight />, we can also use the <TouchableOpacity /> to get rid of the black borders when a button is being touched.  The <TouchableOpacity /> will lower the opacity of a button, probably to 0.1, whenever it gets pressed.  There are other techniques we can use to get rid of the black borders when we press the buttons.  Joe seems to prefer the <TouchableHighlight />. */}
        {/* <TouchableOpacity onPress={() => props.action()}> */}
            <View style={styles.container}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableHighlight>
        // </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#5193d5",
        alignItems: "center",
        justifyContent: "center",
        // We removed the padding so that the plus and the minus signs on the <Button />s would be perfectly aligned and centered.
        // padding: 20,
        borderRadius: 10,
        // We added the width and the height properties because the <Button /> with the plus sign was larger than the <Button /> with the minus sign.
        width: 80,
        height: 80,
    },
    text: {
        color: "white",
        fontSize: 40,
        fontWeight: "700",
    },
    // touch: {
    //     borderRadius: 10,
    // },
});

// The fonts for iOS and Android may look different if we use the default fonts.