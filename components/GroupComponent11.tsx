import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

export type GroupComponent11Type = {
  /** Style props */
  groupViewTop?: number | string;
  rectangleViewTop?: number | string;
  groupViewLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent11 = ({
  groupViewTop,
  rectangleViewTop,
  groupViewLeft,
}: GroupComponent11Type) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewTop, groupViewLeft]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleViewTop),
    };
  }, [rectangleViewTop]);

  return (
    <View style={[styles.rectangleParent, groupView2Style]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View
        style={[styles.groupItem, styles.groupPosition, rectangleViewStyle]}
      />
      <Text
        style={[styles.failedToEnter, styles.gameIssuesTypo]}
        numberOfLines={1}
      >{`Failed to enter the gameFailed to enter the game
Failed `}</Text>
      <View style={[styles.groupInner, styles.groupShadowBox]} />
      <Image
        style={styles.component7Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>2024-01-27 01:00:00</Text>
      <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
        Automatically delete within 30 days
      </Text>
      <Text style={[styles.gameIssues, styles.gameIssuesTypo]}>
        Game issues
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderBottomLeftRadius: Border.br_10,
    borderBottomRightRadius: Border.br_10,
    borderTopRightRadius: Border.br_8,
    borderTopLeftRadius: Border.br_8,
    left: 0,
    width: 345,
    position: "absolute",
  },
  gameIssuesTypo: {
    width: 315,
    fontFamily: FontFamily.arialMT,
    textAlign: "left",
    left: 15,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    top: 0,
    height: 89,
  },
  textTypo: {
    color: Color.wz2,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: 12,
    position: "absolute",
  },
  groupChild: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.bg,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    top: 0,
    height: 89,
    borderBottomRightRadius: Border.br_10,
    borderTopRightRadius: Border.br_8,
    borderTopLeftRadius: Border.br_8,
  },
  groupItem: {
    top: 1,
    backgroundColor: Color.bg3,
    height: 88,
  },
  failedToEnter: {
    top: 60,
    fontSize: FontSize.size_14,
    color: Color.wz1,
    overflow: "hidden",
  },
  groupInner: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_8,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray300,
    borderWidth: 1.2,
    left: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    top: 0,
    width: 345,
    position: "absolute",
  },
  component7Icon: {
    top: 37,
    left: 313,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    left: 15,
    color: Color.wz2,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    top: 12,
  },
  automaticallyDeleteWithin: {
    left: 127,
    textAlign: "right",
  },
  gameIssues: {
    top: 36,
    fontSize: FontSize.size_16,
    lineHeight: 14,
    textTransform: "capitalize",
    color: Color.color,
  },
  rectangleParent: {
    top: 250,
    left: 56,
    height: 89,
    width: 345,
    position: "absolute",
  },
});

export default GroupComponent11;
