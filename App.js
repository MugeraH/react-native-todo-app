import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Buffer } from "buffer";
import { motion } from "framer-motion";
global.Buffer = Buffer;

export default function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <View style={styles.container}>
      <motion.Text
        initial="hidden"
        animate="visible"
        variants={variants}
        style={styles.text}
      >
        Hi Hughes
      </motion.Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});
