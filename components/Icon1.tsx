import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

export type Icon1Type = {
  /** Variant props */
  variant?: string;
};

const Icon1 = ({ variant = "常规" }: Icon1Type) => {
  return (
    <View style={styles.icon}>
      <Image
        style={styles.unionIcon}
        resizeMode="cover"
        source={require("../assets/union5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  unionIcon: {
    width: 14,
    height: 14,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Icon1;