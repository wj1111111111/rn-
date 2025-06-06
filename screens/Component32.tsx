import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Group73613 from "../assets/group7361";
import Component402 from "../assets/";
import Stroke110 from "../assets/stroke1";
import Component403 from "../assets/";
import Vector232 from "../assets/vector23";
import Ellipse872 from "../assets/ellipse87";
import Ellipse873 from "../assets/ellipse87";
import Group7361140 from "../assets/group73611";
import Component404 from "../assets/";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Component32 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <Text style={[styles.accountEditor, styles.loginTypo]}>
        Account editor
      </Text>
      <View style={[styles.rectangleParent, styles.register1Position]}>
        <View style={styles.instanceChild} />
        <Text style={[styles.register, styles.textClr]}>General</Text>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.r198000Parent, styles.groupChildPosition]}>
            <Text style={[styles.r198000, styles.text2Clr]}>R$1980.00</Text>
            <Group73613 style={[styles.groupChild, styles.groupChildLayout]} />
            <Component402 style={[styles.icon, styles.iconPosition]} />
          </View>
        </View>
        <Text style={[styles.register1, styles.textTypo]}>Bank Account</Text>
        <Text style={[styles.register2, styles.textTypo]}>Security</Text>
        <Image
          style={[styles.icon1, styles.icon1Position]}
          resizeMode="cover"
          source={require("../assets/-16.png")}
        />
        <View style={[styles.instanceItem, styles.childBorder1]} />
        <Stroke110 style={[styles.strokeIcon, styles.groupChildLayout]} />
        <Text style={[styles.setting, styles.loginTypo]}>Setting</Text>
      </View>
      <View style={[styles.child, styles.childBorder1]} />
      <View style={[styles.item, styles.itemLayout]} />
      <View style={[styles.inner, styles.innerChildLayout]} />
      <View style={[styles.lineView, styles.innerChildLayout]} />
      <View style={[styles.child1, styles.innerChildLayout]} />
      <View style={[styles.child2, styles.innerChildLayout]} />
      <Text style={[styles.type, styles.accountTypo]}>Type:</Text>
      <Text style={[styles.brazilpxi, styles.brazilpxiLayout]}>BrazilPXI</Text>
      <Text style={[styles.pixtype, styles.cpfTypo]}>PixType:</Text>
      <Text style={[styles.cpf, styles.cpfLayout]}>CPF</Text>
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      <Text style={[styles.remark, styles.remarkTypo]}>Remark:</Text>
      <Text style={[styles.lucasMartinsNunes, styles.lucasLayout]}>
        Lucas Martins Nunes
      </Text>
      <Text style={[styles.account, styles.accountTypo]}>Account:</Text>
      <Text style={[styles.text, styles.textLayout]}>07447461598</Text>
      <Text style={[styles.cancel, styles.text2Typo]}>Cancel</Text>
      <View style={[styles.lineParent, styles.itemLayout]}>
        <View style={[styles.frameChild, styles.innerChildLayout]} />
        <View style={[styles.frameItem, styles.innerChildLayout]} />
        <View style={[styles.frameInner, styles.innerChildLayout]} />
        <View style={[styles.frameChild1, styles.innerChildLayout]} />
        <Text style={[styles.type1, styles.type1Position]}>Type:</Text>
        <Text style={[styles.brazilpxi1, styles.type1Typo]}>BrazilPXI</Text>
        <Text style={[styles.pixtype1, styles.cpf1Typo]}>PixType:</Text>
        <Text style={[styles.cpf1, styles.cpf1Typo]}>CPF</Text>
        <Text style={[styles.name1, styles.name1Typo]}>Name:</Text>
        <Text style={[styles.remark1, styles.type1Position]}>Remark:</Text>
        <Text style={[styles.lucasMartinsNunes1, styles.name1Typo]}>
          Lucas Martins Nunes
        </Text>
        <Text style={[styles.account1, styles.type1Position]}>Account:</Text>
        <Text style={[styles.text1, styles.textLayout]}>07447461598</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.parent}>
          <Component403 style={styles.icon2} width={240} height={42} />
          <View style={styles.vectorParent}>
            <Vector232
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              width={14}
              height={14}
            />
            <Text style={[styles.login, styles.loginTypo]}>
              Add Bank Account
            </Text>
          </View>
        </View>
        <Text style={[styles.forYourPrivacy, styles.textTypo]}>
          For your privacy and security, some information cannot be modified
          after confirmation. If you need help, please contact customer
          service。
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.ellipseLayout]}>
        <Ellipse872 style={styles.ellipseLayout} width={22} height={22} />
        <View style={[styles.rectangleView, styles.vectorIconLayout]} />
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseLayout]}>
        <Ellipse873 width={22} height={22} />
        <View style={[styles.rectangleView, styles.vectorIconLayout]} />
      </View>
      <View style={[styles.group, styles.groupPosition]}>
        <Text style={[styles.text2, styles.text2Typo]}>₱1980.00</Text>
        <Group7361140 style={[styles.instanceInner, styles.icon1Position]} />
        <Component404 style={[styles.icon3, styles.iconPosition]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  register1Position: {
    left: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.wz1,
    position: "absolute",
  },
  groupPosition: {
    right: "5.47%",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  text2Clr: {
    color: Color.wz,
    lineHeight: 18,
    top: "0%",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "7.78%",
    top: "11.11%",
    height: "81.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  icon1Position: {
    top: "5.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childBorder1: {
    borderTopWidth: 2,
    borderColor: Color.color3,
    borderStyle: "solid",
    width: "18.13%",
    position: "absolute",
  },
  itemLayout: {
    height: 208,
    width: 345,
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
    left: 15,
    position: "absolute",
  },
  innerChildLayout: {
    height: 1,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
    position: "absolute",
  },
  accountTypo: {
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  brazilpxiLayout: {
    lineHeight: 14,
    width: 61,
    color: Color.wz1,
  },
  cpfTypo: {
    top: 275,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  cpfLayout: {
    width: 29,
    lineHeight: 14,
    color: Color.wz1,
  },
  nameTypo: {
    top: 315,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  remarkTypo: {
    width: 57,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  lucasLayout: {
    width: 141,
    lineHeight: 14,
    color: Color.wz1,
  },
  textLayout: {
    width: 86,
    lineHeight: 14,
    height: 16,
  },
  text2Typo: {
    textAlign: "right",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    position: "absolute",
  },
  type1Position: {
    left: 16,
    color: Color.wz2,
    lineHeight: 12,
  },
  type1Typo: {
    top: 57,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  cpf1Typo: {
    top: 97,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  name1Typo: {
    top: 137,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIconLayout: {
    width: 14,
    borderRadius: Border.br_8,
  },
  ellipseLayout: {},
  accountEditor: {
    top: 142,
    textTransform: "capitalize",
    display: "flex",
    width: 115,
    height: 24,
    alignItems: "center",
    color: Color.color,
    lineHeight: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    left: 15,
    position: "absolute",
  },
  instanceChild: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.bg1,
    shadowOpacity: 1,
    shadowColor: Color.colorGray2100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  register: {
    left: "8.8%",
    top: "75.4%",
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
  },
  r198000: {
    left: "16.24%",
    fontSize: FontSize.size_18,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    width: "12.92%",
    right: "87.08%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  icon: {
    width: "12.18%",
    left: "87.82%",
  },
  r198000Parent: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  groupWrapper: {
    height: "14.29%",
    width: "36.13%",
    top: "37.3%",
    bottom: "48.41%",
    left: "58.4%",
    display: "none",
  },
  register1: {
    marginLeft: -46.5,
    top: "75.4%",
    lineHeight: 16,
    left: "50%",
    position: "absolute",
    color: Color.color,
  },
  register2: {
    left: "74.93%",
    color: Color.wz1,
    position: "absolute",
    top: "75.4%",
    lineHeight: 16,
  },
  icon1: {
    height: "10.32%",
    width: "94.93%",
    right: "2.4%",
    bottom: "84.13%",
    left: "2.67%",
  },
  instanceItem: {
    height: "1.59%",
    top: "99.21%",
    right: "74.13%",
    bottom: "-0.79%",
    left: "7.73%",
    display: "none",
  },
  strokeIcon: {
    height: "10.56%",
    width: "2.05%",
    top: "38.89%",
    right: "93.87%",
    bottom: "50.56%",
    left: "4.08%",
  },
  setting: {
    top: "38.1%",
    left: "8.27%",
    color: Color.color,
    lineHeight: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -187.5,
    top: 0,
    width: 375,
    height: 126,
  },
  child: {
    height: "0.23%",
    top: "14.62%",
    right: "40.8%",
    bottom: "85.15%",
    left: "41.07%",
  },
  item: {
    top: 178,
  },
  inner: {
    top: 223,
    left: 30,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
  },
  lineView: {
    top: 263,
    left: 30,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
  },
  child1: {
    top: 303,
    left: 30,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
  },
  child2: {
    top: 343,
    left: 30,
    width: 316,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: Color.colorDarkslategray700,
    borderStyle: "dashed",
  },
  type: {
    width: 37,
    color: Color.wz2,
    lineHeight: 12,
    left: 31,
    top: 235,
    height: 16,
  },
  brazilpxi: {
    left: 74,
    width: 61,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    top: 235,
  },
  pixtype: {
    width: 58,
    color: Color.wz2,
    lineHeight: 12,
    left: 31,
  },
  cpf: {
    left: 95,
    top: 275,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  name: {
    width: 43,
    color: Color.wz2,
    lineHeight: 12,
    left: 31,
  },
  remark: {
    top: 355,
    color: Color.wz2,
    lineHeight: 12,
    left: 31,
  },
  lucasMartinsNunes: {
    left: 80,
    top: 315,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  account: {
    top: 195,
    width: 61,
    color: Color.wz2,
    lineHeight: 12,
    left: 31,
  },
  text: {
    top: 194,
    left: 98,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.wz1,
    position: "absolute",
  },
  cancel: {
    top: 146,
    left: 269,
    color: Color.wz4,
    width: 86,
    lineHeight: 14,
    height: 16,
  },
  frameChild: {
    top: 45,
    left: 15,
  },
  frameItem: {
    top: 85,
    left: 15,
  },
  frameInner: {
    top: 125,
    left: 15,
  },
  frameChild1: {
    top: 165,
    left: 15,
  },
  type1: {
    top: 57,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
    width: 37,
  },
  brazilpxi1: {
    left: 59,
    width: 61,
    lineHeight: 14,
    color: Color.wz1,
  },
  pixtype1: {
    left: 16,
    color: Color.wz2,
    lineHeight: 12,
    width: 58,
  },
  cpf1: {
    left: 80,
    width: 29,
    lineHeight: 14,
    color: Color.wz1,
  },
  name1: {
    left: 16,
    color: Color.wz2,
    lineHeight: 12,
    width: 43,
  },
  remark1: {
    top: 177,
    width: 57,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  lucasMartinsNunes1: {
    left: 65,
    width: 141,
    lineHeight: 14,
    color: Color.wz1,
  },
  account1: {
    top: 17,
    width: 61,
    height: 16,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  text1: {
    top: 16,
    left: 83,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    color: Color.wz1,
    position: "absolute",
  },
  lineParent: {
    top: 398,
  },
  icon2: {
    borderRadius: Border.br_60,
  },
  vectorIcon: {},
  login: {
    width: 149,
    height: 17,
    color: Color.color,
    lineHeight: 16,
    fontSize: FontSize.size_16,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  vectorParent: {
    width: 171,
    flexDirection: "row",
    gap: 8,
    marginTop: -29,
    height: 17,
    alignItems: "center",
  },
  parent: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    justifyContent: "flex-end",
    height: 42,
    width: 240,
    shadowOpacity: 1,
    shadowColor: Color.colorGray2100,
    alignItems: "center",
  },
  forYourPrivacy: {
    width: 315,
    height: 65,
    lineHeight: 16,
  },
  frameParent: {
    top: 626,
    height: 189,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 25,
    width: 345,
    backgroundColor: Color.bg3,
    borderRadius: Border.br_8,
    alignItems: "center",
    left: 15,
    position: "absolute",
  },
  rectangleView: {
    height: 2,
    marginTop: -11,
    backgroundColor: Color.bg,
    width: 14,
  },
  ellipseParent: {
    top: 190,
    left: 324,
    width: 22,
    justifyContent: "flex-end",
    position: "absolute",
  },
  ellipseGroup: {
    top: 410,
    left: 324,
    width: 22,
    justifyContent: "flex-end",
    position: "absolute",
  },
  text2: {
    left: "18.72%",
    color: Color.wz,
    lineHeight: 18,
    top: "0%",
  },
  instanceInner: {
    height: "88.89%",
    width: "13.28%",
    right: "86.72%",
    bottom: "5.56%",
    left: "0%",
  },
  icon3: {
    width: "14.04%",
    left: "85.96%",
  },
  group: {
    width: "31.33%",
    bottom: 790,
    left: "63.2%",
    height: 18,
  },
  safeareaview: {
    flex: 1,
    height: 855,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component32;