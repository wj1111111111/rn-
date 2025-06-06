import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Union4 from "../assets/union";
import Group127806 from "../assets/group12780";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const GroupComponent14 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <View style={[styles.groupItem, styles.groupPosition]} />
      <Text style={[styles.myMoneyIsContainer, styles.withdrawalIssuesTypo]}>
        My money is missing my money is missing 
        <Text style={styles.myMoneyIs}>
          my money is missing my money is missing .my money is missing my money
          is missing.My money is missing my money is missing 
        </Text>
      </Text>
      <Text
        style={[styles.dearTeamsWe, styles.rTypo]}
      >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
      <View style={[styles.groupInner, styles.groupPosition]} />
      <View style={[styles.unionParent, styles.unionLayout]}>
        <Union4 style={styles.unionLayout} width={97} height={18} />
        <Text style={[styles.r, styles.rTypo]}>New reply</Text>
      </View>
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
      <Text style={[styles.withdrawalIssues, styles.withdrawalIssuesTypo]}>
        Withdrawal issues
      </Text>
      <Group127806 style={styles.groupIcon} width={24} height={24} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    borderRadius: Border.br_8,
    left: 0,
    top: 0,
    width: 345,
    position: "absolute",
  },
  withdrawalIssuesTypo: {
    fontFamily: FontFamily.arialMT,
    width: 315,
    textAlign: "left",
    left: 15,
    position: "absolute",
  },
  rTypo: {
    lineHeight: 18,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.arialMT,
    fontSize: FontSize.size_14,
    position: "absolute",
  },
  unionLayout: {},
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
    borderRadius: Border.br_8,
    left: 0,
    height: 288,
  },
  groupItem: {
    backgroundColor: Color.bg3,
    height: 136,
    borderRadius: Border.br_8,
    left: 0,
  },
  myMoneyIs: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 60,
    color: Color.wz1,
    width: 315,
    textAlign: "left",
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.arialMT,
  },
  dearTeamsWe: {
    marginLeft: -157.5,
    top: 182,
    color: Color.color7,
    width: 315,
  },
  groupInner: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray300,
    borderWidth: 1.2,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    borderRadius: Border.br_8,
    left: 0,
    height: 288,
  },
  r: {
    marginLeft: -39.5,
    textTransform: "uppercase",
    color: Color.bg,
    top: 0,
    left: "50%",
  },
  unionParent: {
    top: 151,
    left: 49,
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
    width: 315,
    textAlign: "left",
  },
  groupIcon: {
    top: 148,
    left: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 102,
    height: 288,
    width: 345,
    left: 15,
    position: "absolute",
  },
});

export default GroupComponent14;