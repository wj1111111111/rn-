import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupComponent19 from "../components/GroupComponent19";
import Component127 from "../assets/";
import Component128 from "../assets/";
import Component343 from "../assets/";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Component10 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <GroupComponent19
        enterTheGiftCode="Enter the gift code"
        prop={<Component127 width={78} height={34} />}
      />
      <Text style={[styles.text, styles.textTypo]}>01 未输入-按钮状态</Text>
      <Text style={[styles.text1, styles.textTypo]}>02 输入-按钮状态</Text>
      <Text style={[styles.text2, styles.textTypo]}>03 验证码过期提示</Text>
      <GroupComponent19
        groupViewTop={277}
        enterTheGiftCode="123456789xxx"
        enterTheGiftColor="#fff"
        enterTheGiftTextTransform="capitalize"
        prop={<Component128 width={78} height={34} />}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.theRedemptionCode, styles.confirmPasswordTypo]}>
          The redemption code has expired
        </Text>
      </View>
      <View style={[styles.parent, styles.iconLayout]}>
        <Component343
          style={[styles.icon, styles.iconLayout]}
          width={77}
          height={34}
        />
        <Text style={[styles.confirmPassword, styles.confirmPasswordTypo]}>
          send
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.color,
    fontFamily: FontFamily.arialMT,
    textTransform: "capitalize",
    fontSize: FontSize.size_18,
    left: 18,
    position: "absolute",
    lineHeight: 12,
  },
  groupChildLayout: {
    height: 58,
    width: 258,
    left: "50%",
    position: "absolute",
  },
  confirmPasswordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.color,
    textTransform: "capitalize",
    position: "absolute",
  },
  iconLayout: {
    height: 34,
    width: 77,
    position: "absolute",
  },
  text: {
    top: 83,
  },
  text1: {
    top: 238,
  },
  text2: {
    top: 367,
  },
  groupChild: {
    marginLeft: -129,
    borderRadius: Border.br_8,
    backgroundColor: Color.wz1,
    opacity: 0.98,
    top: 0,
  },
  theRedemptionCode: {
    marginLeft: -115,
    top: 16,
    lineHeight: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    height: 26,
    left: "50%",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_18,
  },
  rectangleParent: {
    marginLeft: -128.5,
    top: 429,
  },
  icon: {
    left: 0,
    borderRadius: Border.br_4,
    top: 0,
  },
  confirmPassword: {
    top: 11,
    left: 24,
    fontSize: FontSize.size_12,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
  },
  parent: {
    top: 532,
    left: 263,
  },
  safeareaview: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Component10;