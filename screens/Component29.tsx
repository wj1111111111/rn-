import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import Group736138 from "../assets/group7361";
import Component398 from "../assets/";
import Stroke25 from "../assets/stroke";
import Group8271 from "../assets/group827";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Component29 = () => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <View style={styles.r198000Parent}>
            <Text style={styles.r198000}>R$1980.00</Text>
            <Group736138 style={[styles.groupItem, styles.iconLayout]} />
            <Component398 style={[styles.icon, styles.iconLayout]} />
          </View>
        </View>
        <Stroke25 style={[styles.strokeIcon, styles.iconLayout]} />
        <Text style={[styles.pgSlots, styles.pgSlotsTypo]}>Notice</Text>
      </View>
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/-17.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
        <View style={[styles.instanceChild, styles.groupChildPosition]} />
        <View style={styles.parent}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/162.png")}
          />
          <Text style={styles.detailsTypo}>Details</Text>
        </View>
        <Text style={[styles.cashBack, styles.pgSlotsTypo]}>Cash Back</Text>
        <Image
          style={styles.instancePosition}
          resizeMode="cover"
          source={require("../assets/group-942.png")}
        />
        <View style={styles.rectanglePosition}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={styles.groupViewPosition}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text1, styles.textTypo]}>99+</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={[styles.instanceChild, styles.groupChildPosition]} />
        <View style={styles.parent}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/162.png")}
          />
          <Text style={styles.detailsTypo}>Details</Text>
        </View>
        <Text style={[styles.cashBack, styles.pgSlotsTypo]}>Notify</Text>
        <Image
          style={styles.instancePosition}
          resizeMode="cover"
          source={require("../assets/group-942.png")}
        />
        <View style={[styles.rectangleParent2, styles.rectanglePosition]}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={styles.groupViewPosition}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text1, styles.textTypo]}>99+</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <View style={[styles.instanceChild, styles.groupChildPosition]} />
        <View style={styles.parent}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/162.png")}
          />
          <Text style={styles.detailsTypo}>Details</Text>
        </View>
        <Text style={[styles.cashBack, styles.pgSlotsTypo]}>Exclusive</Text>
        <Image
          style={[styles.instanceChild2, styles.instancePosition]}
          resizeMode="cover"
          source={require("../assets/group-942.png")}
        />
        <View style={styles.rectanglePosition}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text, styles.textTypo]}>1</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.groupViewPosition]}>
          <View style={[styles.groupInner, styles.groupChildPosition]} />
          <Text style={[styles.text1, styles.textTypo]}>99+</Text>
        </View>
      </View>
      <Image
        style={[styles.group120051, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-12005-11.png")}
      />
      <Group8271
        style={[styles.child, styles.childLayout]}
        width={48}
        height={48}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  pgSlotsTypo: {
    color: Color.color,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 70,
    width: 345,
    left: 15,
    position: "absolute",
  },
  textTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_12,
    textAlign: "center",
    lineHeight: 29,
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePosition: {
    left: "92.17%",
    bottom: "58.57%",
    right: "3.19%",
    top: "18.57%",
    width: "4.64%",
    height: "22.86%",
    position: "absolute",
  },
  instancePosition: {
    left: "2.32%",
    bottom: "15.71%",
    right: "83.77%",
    top: "15.71%",
    width: "13.91%",
    height: "68.57%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupViewPosition: {
    left: "87.54%",
    width: "9.28%",
    bottom: "58.57%",
    right: "3.19%",
    top: "18.57%",
    height: "22.86%",
    position: "absolute",
  },
  childLayout: {
    height: 48,
    position: "absolute",
  },
  groupChild: {
    shadowColor: Color.colorGray2100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    backgroundColor: Color.bg1,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  r198000: {
    left: "17.25%",
    lineHeight: 18,
    color: Color.colorOrange100,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    top: "0%",
    position: "absolute",
  },
  groupItem: {
    height: "88.89%",
    width: "12.24%",
    top: "5.56%",
    right: "87.76%",
    bottom: "5.56%",
    left: "0%",
  },
  icon: {
    height: "81.11%",
    width: "12.94%",
    top: "11.11%",
    bottom: "7.78%",
    left: "87.06%",
    right: "0%",
    overflow: "hidden",
  },
  r198000Parent: {
    height: "20.93%",
    width: "34%",
    top: "54.65%",
    right: "5.47%",
    bottom: "24.42%",
    left: "60.53%",
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  strokeIcon: {
    height: "18.6%",
    width: "2.45%",
    right: "93.47%",
    bottom: "25.58%",
    left: "4.08%",
    top: "55.81%",
  },
  pgSlots: {
    left: "8.8%",
    textTransform: "capitalize",
    top: "55.81%",
  },
  groupParent: {
    top: 0,
    left: 0,
    width: 375,
    height: 86,
    position: "absolute",
  },
  icon1: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  instanceChild: {
    borderRadius: Border.br_8,
    backgroundColor: Color.bg3,
    borderStyle: "solid",
    borderColor: Color.colorGray400,
    borderWidth: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  icon2: {
    height: "96.97%",
    top: "3.03%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  detailsTypo: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textAlign: "center",
    lineHeight: 29,
    left: "22.04%",
    color: Color.color,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_16,
    top: "0%",
    position: "absolute",
  },
  parent: {
    height: "47.14%",
    width: "27.62%",
    top: "28.57%",
    right: "3.1%",
    bottom: "24.29%",
    left: "69.28%",
    position: "absolute",
  },
  cashBack: {
    top: "38.57%",
    left: "18.55%",
  },
  groupInner: {
    borderRadius: Border.br_60,
    backgroundColor: Color.colorCrimson,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  text: {
    height: "56.25%",
    width: "25%",
    top: "25%",
    left: "37.5%",
  },
  text1: {
    height: "75%",
    width: "87.5%",
    top: "12.5%",
    left: "6.25%",
  },
  rectangleGroup: {
    top: 102,
  },
  rectangleParent2: {
    display: "none",
  },
  rectangleParent1: {
    top: 182,
  },
  instanceChild2: {
    display: "none",
  },
  rectangleParent6: {
    display: "none",
  },
  rectangleParent4: {
    top: 262,
  },
  group120051: {
    top: 273,
    left: 19,
    width: 54,
  },
  child: {
    top: 193,
    left: 23,
  },
  scrollview: {
    backgroundColor: Color.bg,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default Component29;