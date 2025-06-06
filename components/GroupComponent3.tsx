import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Polygon109 from "../assets/polygon10";
import Vector210 from "../assets/vector2";
import { Color } from "../GlobalStyles";

export type GroupComponent3Type = {
  /** Style props */
  rectangleLinearGradientTransform?: string;
  rectangleLinearGradientTransform1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent3 = ({
  rectangleLinearGradientTransform,
  rectangleLinearGradientTransform1,
}: GroupComponent3Type) => {
  const rectangleLinearGradientStyle = useMemo(() => {
    return {
      ...getStyleValue("transform", rectangleLinearGradientTransform),
    };
  }, [rectangleLinearGradientTransform]);

  const rectangleLinearGradient1Style = useMemo(() => {
    return {
      ...getStyleValue("transform", rectangleLinearGradientTransform1),
    };
  }, [rectangleLinearGradientTransform1]);

  return (
    <View style={[styles.groupParent, styles.parentPosition]}>
      <View style={[styles.polygonParent, styles.parentPosition]}>
        <Polygon109 style={styles.groupChild} width={9} height={15} />
        <LinearGradient
          style={[
            styles.groupItem,
            styles.groupLayout,
            rectangleLinearGradientStyle,
          ]}
          locations={[0, 1]}
          colors={["#373d42", "#2c3136"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <LinearGradient
        style={[
          styles.groupInner,
          styles.groupLayout,
          rectangleLinearGradient1Style,
        ]}
        locations={[0, 1]}
        colors={["#ffc61e", "#ffa001"]}
        useAngle={true}
        angle={180}
      />
      <View style={styles.vectorParent}>
        <Vector210 style={styles.vectorIcon} />
        <Text style={[styles.hot, styles.hotTypo]}>Hot</Text>
      </View>
      <View style={styles.collectParent}>
        <Text style={[styles.collect, styles.hotTypo]}>Collect</Text>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/11.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    width: 72,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 64,
    width: 66,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    left: 66,
    position: "absolute",
  },
  hotTypo: {
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
    position: "absolute",
  },
  groupChild: {
    top: 93,
    left: 63,
    position: "absolute",
  },
  groupItem: {
    top: 0,
  },
  polygonParent: {
    height: 108,
    top: 0,
  },
  groupInner: {
    top: 68,
  },
  vectorIcon: {
    height: "70.59%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "29.41%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  hot: {
    top: 39,
    left: 5,
  },
  vectorParent: {
    height: "38.64%",
    width: "42.78%",
    top: "57.58%",
    right: "32.22%",
    bottom: "3.79%",
    left: "25%",
    position: "absolute",
  },
  collect: {
    top: 40,
    color: Color.wz1,
    left: 0,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 12,
  },
  icon: {
    left: 3,
    width: 36,
    height: 36,
    top: 0,
    position: "absolute",
  },
  collectParent: {
    top: 7,
    left: 13,
    width: 41,
    height: 52,
    position: "absolute",
  },
  groupParent: {
    top: 350,
    height: 132,
  },
});

export default GroupComponent3;