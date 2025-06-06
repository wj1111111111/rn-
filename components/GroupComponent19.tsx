import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

export type GroupComponent19Type = {
  enterTheGiftCode?: string;
  prop?: React.ReactNode;

  /** Style props */
  groupViewTop?: number | string;
  enterTheGiftColor?: string;
  enterTheGiftTextTransform?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent19 = ({
  groupViewTop,
  enterTheGiftCode,
  enterTheGiftColor,
  enterTheGiftTextTransform,
  prop,
}: GroupComponent19Type) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  const enterTheGiftStyle = useMemo(() => {
    return {
      ...getStyleValue("color", enterTheGiftColor),
      ...getStyleValue("textTransform", enterTheGiftTextTransform),
    };
  }, [enterTheGiftColor, enterTheGiftTextTransform]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView4Style]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text
        style={[
          styles.enterTheGift,
          styles.enterTheGiftTypo,
          enterTheGiftStyle,
        ]}
      >
        {enterTheGiftCode}
      </Text>
      <View style={[styles.parent, styles.iconLayout]}>
        <View>{prop && prop}</View>
        <Text style={[styles.confirmPassword, styles.giftCodeTransform]}>
          Exchange
        </Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/2-35.png")}
      />
      <Text style={[styles.giftCode, styles.giftCodeTransform]}>Gift Code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    position: "absolute",
  },
  enterTheGiftTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  iconLayout: {
    height: 34,
    width: 78,
    position: "absolute",
  },
  giftCodeTransform: {
    textTransform: "capitalize",
    lineHeight: 12,
    position: "absolute",
  },
  groupChild: {
    left: 52,
    borderRadius: Border.br_4,
    backgroundColor: Color.bg1,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray700,
    borderWidth: 1,
    width: 194,
    top: 0,
  },
  enterTheGift: {
    top: 14,
    left: 57,
    fontSize: FontSize.size_14,
    color: Color.wz1,
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  confirmPassword: {
    top: 11,
    left: 11,
    fontSize: FontSize.size_12,
    color: Color.color,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  parent: {
    top: 3,
    left: 254,
  },
  icon1: {
    top: 2,
    left: 6,
    width: 36,
    height: 36,
    position: "absolute",
  },
  giftCode: {
    top: 25,
    fontSize: 13,
    fontFamily: FontFamily.arialMT,
    color: Color.wz2,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    left: 0,
  },
  rectangleParent: {
    top: 129,
    left: 18,
    width: 332,
  },
});

export default GroupComponent19;
