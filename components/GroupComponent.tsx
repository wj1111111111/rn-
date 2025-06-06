import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

export type GroupComponentType = {
  group12780?: React.ReactNode;

  /** Style props */
  groupViewTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({ groupViewTop, group12780 }: GroupComponentType) => {
  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  return (
    <View style={[styles.rectangleParent, groupView3Style]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text
        style={[styles.failedToEnter, styles.gameIssuesTypo]}
      >{`Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the game
Failed to enter the gameFailed to enter the gameFailed to enter the game`}</Text>
      <Text
        style={[styles.dearTeamsWe, styles.gameIssuesTypo]}
      >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
      <View style={[styles.groupInner, styles.groupShadowBox]} />
      <Image
        style={styles.component7Icon}
        resizeMode="cover"
        source={require("../assets/component-71.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>2024-01-27 01:00:00</Text>
      <Text style={[styles.text1, styles.textTypo]}>2024-04-15 16:59:59</Text>
      <Text style={[styles.automaticallyDeleteWithin, styles.textTypo]}>
        Automatically delete within 30 days
      </Text>
      <Text style={[styles.gameIssues, styles.gameIssuesTypo]}>
        Game issues
      </Text>
      <View>{group12780 && group12780}</View>
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
  gameIssuesTypo: {
    width: 315,
    fontFamily: FontFamily.arialMT,
    textAlign: "left",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    height: 288,
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
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    height: 288,
  },
  groupItem: {
    backgroundColor: Color.bg3,
    height: 136,
  },
  failedToEnter: {
    top: 60,
    color: Color.wz1,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.arialMT,
    left: 15,
  },
  dearTeamsWe: {
    marginLeft: -157.5,
    top: 182,
    left: "50%",
    lineHeight: 18,
    color: Color.color7,
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.arialMT,
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
    top: 154,
    left: 46,
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
  gameIssues: {
    top: 36,
    fontSize: FontSize.size_16,
    lineHeight: 14,
    textTransform: "capitalize",
    color: Color.color,
    left: 15,
  },
  rectangleParent: {
    top: 402,
    height: 288,
    width: 345,
    left: 15,
    position: "absolute",
  },
});

export default GroupComponent;