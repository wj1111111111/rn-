import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import Vector1110 from "../assets/vector11";
import Component202 from "../assets/";
import { Color } from "../GlobalStyles";

export type Component51Type = {
  prop?: ImageSourcePropType;
  moneyRain?: ImageSourcePropType;
  prop1?: ImageSourcePropType;
  start?: string;
  showGroupView?: boolean;
  prop2?: string;
  showVectorIcon?: boolean;
  next2100?: string;
  showNext2100?: boolean;
  showIcon?: boolean;

  /** Style props */
  groupViewTop?: number | string;
  groupViewLeft?: number | string;
  startLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component51 = ({
  groupViewTop,
  groupViewLeft,
  prop,
  moneyRain,
  prop1,
  start,
  startLeft,
  showGroupView,
  prop2,
  showVectorIcon,
  next2100,
  showNext2100,
  showIcon,
}: Component51Type) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewTop, groupViewLeft]);

  const startStyle = useMemo(() => {
    return {
      ...getStyleValue("left", startLeft),
    };
  }, [startLeft]);

  return (
    <View style={[styles.bd57270ff3cddd5d20ff7401e454dcParent, groupViewStyle]}>
      <Image
        style={[styles.bd57270ff3cddd5d20ff7401e454dcIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/569114bd57270ff3cddd5d20ff7401e454dc67a1f09dic5q4g-fw1200-1.png")}
      />
      <Image
        style={[styles.bd57270ff3cddd5d20ff7401e454dcIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/569114bd57270ff3cddd5d20ff7401e454dc67a1f09dic5q4g-fw1200-2.png")}
      />
      <Image style={styles.icon} resizeMode="cover" source={prop} />
      {!!showVectorIcon && (
        <Vector1110 style={[styles.instanceChild, styles.iconLayout]} />
      )}
      <Image
        style={[styles.moneyRainIcon, styles.iconLayout]}
        resizeMode="cover"
        source={moneyRain}
      />
      <Image
        style={[styles.icon1, styles.iconPosition]}
        resizeMode="cover"
        source={prop1}
      />
      <Text style={[styles.start, startStyle]}>{start}</Text>
      {!!showNext2100 && <Text style={styles.next2100}>{next2100}</Text>}
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text, styles.textTypo]}>99+</Text>
      </View>
      {!!showGroupView && (
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text style={[styles.text1, styles.textTypo]}>{prop2}</Text>
        </View>
      )}
      {!!showIcon && (
        <Component202 style={[styles.icon2, styles.iconPosition]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  iconPosition: {
    left: "9.92%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 16,
    width: 32,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: "#f33636",
    borderRadius: 60,
    left: 0,
    top: 0,
  },
  textTypo: {
    display: "flex",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.color,
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 29,
    position: "absolute",
  },
  groupLayout: {
    width: 16,
    height: 16,
    position: "absolute",
  },
  bd57270ff3cddd5d20ff7401e454dcIcon: {
    height: "99.17%",
    width: "99.17%",
    top: "0%",
    right: "0.83%",
    left: "0%",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "0.83%",
  },
  icon: {
    height: "81.82%",
    top: "2.48%",
    right: "12.4%",
    bottom: "15.7%",
    left: "12.4%",
    width: "75.21%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  instanceChild: {
    height: "14.79%",
    width: "83.88%",
    top: "45.12%",
    right: "8.26%",
    bottom: "40.08%",
    left: "7.85%",
    display: "none",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  moneyRainIcon: {
    height: "18.18%",
    marginLeft: -59.5,
    top: "59.5%",
    bottom: "22.31%",
    left: "50%",
    width: 118,
  },
  icon1: {
    height: "24.79%",
    width: "79.34%",
    top: "74.38%",
    right: "10.74%",
    bottom: "0.83%",
  },
  start: {
    top: "72.73%",
    left: "24.79%",
    fontSize: 16,
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    textAlign: "center",
    color: Color.color,
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 29,
    position: "absolute",
  },
  next2100: {
    height: "11.57%",
    top: "47.11%",
    left: "17.36%",
    fontSize: 14,
    color: "#fdffb8",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 29,
    display: "none",
    width: "75.21%",
    position: "absolute",
  },
  groupChild: {
    height: 16,
    width: 32,
    position: "absolute",
  },
  text: {
    top: 2,
    left: 2,
    width: 28,
    height: 12,
  },
  rectangleParent: {
    left: 80,
    top: 11,
    display: "none",
  },
  groupItem: {
    backgroundColor: "#f33636",
    borderRadius: 60,
    left: 0,
    top: 0,
  },
  text1: {
    top: 4,
    left: 6,
    width: 4,
    height: 9,
  },
  rectangleGroup: {
    left: 88,
    top: 11,
  },
  icon2: {
    height: "9.92%",
    width: "9.5%",
    top: "47.93%",
    right: "80.58%",
    bottom: "42.15%",
    display: "none",
  },
  bd57270ff3cddd5d20ff7401e454dcParent: {
    top: 440,
    left: 238,
    width: 121,
    height: 121,
    position: "absolute",
  },
});

export default Component51;