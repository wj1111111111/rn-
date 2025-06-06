import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import Group127805 from "../assets/group12780";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

export type GroupComponent141Type = {
  union?: React.ReactNode;

  /** Style props */
  groupViewLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent141 = ({ groupViewLeft, union }: GroupComponent141Type) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("left", groupViewLeft),
    };
  }, [groupViewLeft]);

  return (
    <View style={[styles.rectangleParent, groupView1Style]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text
        style={[styles.myMoneyIsContainer, styles.withdrawalIssuesTypo]}
        numberOfLines={1}
      >
        My money is missing my money is missing 
        <Text style={styles.myMoney}>{`my money `}</Text>
      </Text>
      <View style={[styles.groupInner, styles.groupShadowBox]} />
      <View style={[styles.unionParent, styles.unionLayout]}>
        <View>{union && union}</View>
        <Text style={styles.r}>New reply</Text>
      </View>
      <Image
        style={styles.component7Icon}
        resizeMode="cover"
        source={require("../assets/component-7.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>2024-01-27 01:00:00</Text>
      <Text style={[styles.text1, styles.textTypo]}>2024-04-15 16:59:59</Text>
      <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
        Automatically delete within 30 days
      </Text>
      <Text style={[styles.withdrawalIssues, styles.withdrawalIssuesTypo]}>
        Withdrawal issues
      </Text>
      <Group127805 style={styles.groupIcon} width={24} height={24} />
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
    top: 0,
    width: 345,
    position: "absolute",
  },
  withdrawalIssuesTypo: {
    width: 315,
    textAlign: "left",
    fontFamily: FontFamily.arialMT,
    left: 15,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    height: 136,
  },
  unionLayout: {
    height: 18,
    width: 97,
  },
  textTypo: {
    color: Color.wz2,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    position: "absolute",
  },
  groupChild: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: Color.bg,
    display: "none",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    height: 136,
  },
  groupItem: {
    backgroundColor: Color.bg3,
    height: 88,
  },
  myMoney: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 60,
    color: Color.wz1,
    overflow: "hidden",
    fontSize: FontSize.size_14,
    width: 315,
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
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    width: 345,
    position: "absolute",
  },
  r: {
    marginLeft: -39.5,
    left: "50%",
    lineHeight: 18,
    textTransform: "uppercase",
    color: Color.bg,
    textAlign: "left",
    fontFamily: FontFamily.arialMT,
    fontSize: FontSize.size_14,
    top: 0,
    position: "absolute",
  },
  unionParent: {
    left: 49,
    top: 103,
    width: 97,
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
    top: 12,
    color: Color.wz2,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    textAlign: "left",
    left: 15,
  },
  text1: {
    top: 106,
    left: 156,
    textAlign: "left",
  },
  automaticallyDeleteWithin: {
    left: 127,
    textAlign: "right",
    top: 12,
    color: Color.wz2,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
  },
  withdrawalIssues: {
    top: 36,
    fontSize: FontSize.size_16,
    lineHeight: 14,
    color: Color.color,
    textTransform: "capitalize",
  },
  groupIcon: {
    top: 100,
    left: 15,
    position: "absolute",
  },
  rectangleParent: {
    left: 56,
    height: 136,
    width: 345,
    top: 103,
    position: "absolute",
  },
});

export default GroupComponent141;
