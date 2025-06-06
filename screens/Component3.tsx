import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupComponent121 from "../components/GroupComponent121";
import GroupComponent13 from "../components/GroupComponent13";
import Union22 from "../assets/union2";
import Group127804 from "../assets/group12780";
import GroupComponent from "../components/GroupComponent";
import Group1278011 from "../assets/group127801";
import Group1278021 from "../assets/group127802";
import Group127865 from "../assets/group12786";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Component3 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <GroupComponent121 />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-11.png")}
      />
      <GroupComponent13 groupViewBottom={747} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.myMoneyIsContainer, styles.withdrawalIssuesTypo]}>
          My money is missing my money is missing 
          <Text style={styles.myMoneyIs}>
            my money is missing my money is missing .my money is missing my
            money is missing.My money is missing my money is missing 
          </Text>
        </Text>
        <Text
          style={[styles.dearTeamsWe, styles.rTypo]}
        >{`Dear Teams, we have received your question!
We have not found any abnormalities in the game.
You can try to check whether the network is normal.
Good luck!`}</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.unionParent, styles.unionLayout]}>
          <Union22 style={styles.unionLayout} width={97} height={18} />
          <Text style={[styles.r, styles.rTypo]}>New reply</Text>
        </View>
        <Image
          style={styles.component7Icon}
          resizeMode="cover"
          source={require("../assets/component-71.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>2024-01-27 01:00:00</Text>
        <Text style={[styles.text1, styles.textTypo]}>2024-04-15 16:59:59</Text>
        <Text
          style={[styles.automaticallyDeleteWithin, styles.textTypo]}
        >{`Automatically delete within 30 daysAutomatically delete `}</Text>
        <Text style={[styles.withdrawalIssues, styles.withdrawalIssuesTypo]}>
          Withdrawal issues
        </Text>
        <Group127804 style={styles.groupIcon} width={24} height={24} />
      </View>
      <GroupComponent
        groupViewTop={414}
        group12780={<Group1278011 width={24} height={24} />}
      />
      <GroupComponent
        groupViewTop={714}
        group12780={<Group1278021 width={24} height={24} />}
      />
      <Group127865 style={styles.child} width={40} height={40} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    borderRadius: Border.br_8,
    left: 0,
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
  icon: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    height: 288,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    borderRadius: Border.br_8,
    left: 0,
    top: 12,
    backgroundColor: Color.bg,
  },
  groupItem: {
    backgroundColor: Color.bg3,
    height: 148,
    top: 0,
    borderRadius: Border.br_8,
    left: 0,
  },
  myMoneyIs: {
    textTransform: "capitalize",
  },
  myMoneyIsContainer: {
    top: 72,
    color: Color.wz1,
    width: 315,
    textAlign: "left",
    fontSize: FontSize.size_14,
    fontFamily: FontFamily.arialMT,
  },
  dearTeamsWe: {
    marginLeft: -157.5,
    top: 194,
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
    top: 0,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: Color.colorGray2100,
    borderRadius: Border.br_8,
    left: 0,
    height: 300,
  },
  r: {
    marginLeft: -39.5,
    textTransform: "uppercase",
    color: Color.bg,
    top: 0,
  },
  unionParent: {
    top: 163,
    left: 49,
    position: "absolute",
  },
  component7Icon: {
    top: 49,
    left: 313,
    width: 20,
    height: 20,
    position: "absolute",
  },
  text: {
    textAlign: "left",
    top: 12,
    left: 15,
  },
  text1: {
    top: 166,
    left: 156,
    textAlign: "left",
  },
  automaticallyDeleteWithin: {
    left: 128,
    textAlign: "right",
    width: 202,
    top: 12,
  },
  withdrawalIssues: {
    top: 48,
    fontSize: FontSize.size_16,
    lineHeight: 14,
    color: Color.color,
    textTransform: "capitalize",
    width: 315,
    textAlign: "left",
  },
  groupIcon: {
    top: 160,
    left: 15,
    position: "absolute",
  },
  rectangleParent: {
    top: 102,
    height: 300,
    width: 345,
    left: 15,
    position: "absolute",
  },
  child: {
    top: 613,
    left: 320,
    position: "absolute",
  },
  safeareaview: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.bg,
  },
});

export default Component3;