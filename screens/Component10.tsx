import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Component382 from "../assets/";
import Component383 from "../assets/";
import Component384 from "../assets/";
import { Color } from "../GlobalStyles";

const Component10 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.enterTheGift}>Enter the gift code</Text>
        <View style={[styles.parent, styles.iconLayout]}>
          <Component382
            style={[styles.icon, styles.iconPosition]}
            width={78}
            height={34}
          />
          <Text style={[styles.confirmPassword, styles.xxxTypo]}>Exchange</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/2-35.png")}
        />
        <Text style={styles.giftCode}>Gift Code</Text>
      </View>
      <Text style={[styles.text, styles.textTypo]}>01 未输入-按钮状态</Text>
      <Text style={[styles.text1, styles.textTypo]}>02 输入-按钮状态</Text>
      <Text style={[styles.text2, styles.textTypo]}>03 验证码过期提示</Text>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.xxx, styles.xxxTypo]}>123456789xxx</Text>
        <View style={[styles.parent, styles.iconLayout]}>
          <Component383
            style={[styles.icon, styles.iconPosition]}
            width={78}
            height={34}
          />
          <Text style={[styles.confirmPassword, styles.xxxTypo]}>Exchange</Text>
        </View>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/2-35.png")}
        />
        <Text style={styles.giftCode}>Gift Code</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={styles.theRedemptionCode}>
          The redemption code has expired
        </Text>
      </View>
      <View style={[styles.container, styles.icon4Layout]}>
        <Component384
          style={[styles.icon4, styles.icon4Layout]}
          width={77}
          height={34}
        />
        <Text style={styles.confirmPassword2}>send</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    height: 34,
    width: 78,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  xxxTypo: {
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    position: "absolute",
  },
  textTypo: {
    fontSize: 18,
    color: Color.color,
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Arial",
    lineHeight: 12,
    left: 18,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 58,
    width: 258,
    left: "50%",
    position: "absolute",
  },
  icon4Layout: {
    width: 77,
    height: 34,
    position: "absolute",
  },
  groupChild: {
    left: 52,
    backgroundColor: Color.bg1,
    borderStyle: "solid",
    borderColor: "#292f36",
    borderWidth: 1,
    width: 194,
    borderRadius: 4,
    top: 0,
  },
  enterTheGift: {
    color: Color.wz1,
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    fontSize: 14,
    left: 57,
    top: 14,
    position: "absolute",
  },
  icon: {
    borderRadius: 60,
    position: "absolute",
  },
  confirmPassword: {
    left: 11,
    fontSize: 12,
    top: 11,
    textTransform: "capitalize",
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
    color: Color.wz2,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    left: 0,
    fontFamily: "Arial",
    lineHeight: 12,
    position: "absolute",
  },
  rectangleParent: {
    top: 129,
    width: 332,
    left: 18,
    height: 40,
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
  xxx: {
    textTransform: "capitalize",
    fontSize: 14,
    left: 57,
    top: 14,
  },
  rectangleGroup: {
    top: 277,
    width: 332,
    left: 18,
    height: 40,
  },
  groupInner: {
    marginLeft: -129,
    borderRadius: 8,
    backgroundColor: Color.wz1,
    opacity: 0.98,
    top: 0,
  },
  theRedemptionCode: {
    marginLeft: -115,
    top: 16,
    lineHeight: 22,
    width: 230,
    height: 26,
    left: "50%",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.color,
    textTransform: "capitalize",
    fontFamily: "Arial",
    fontWeight: "700",
    position: "absolute",
  },
  rectangleContainer: {
    marginLeft: -128.5,
    top: 429,
  },
  icon4: {
    left: 0,
    top: 0,
    borderRadius: 4,
  },
  confirmPassword2: {
    left: 24,
    textAlign: "center",
    color: Color.color,
    textTransform: "capitalize",
    fontSize: 12,
    top: 11,
    fontFamily: "Arial",
    fontWeight: "700",
    lineHeight: 12,
    position: "absolute",
  },
  container: {
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