import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupComponent121 from "../components/GroupComponent121";
import GroupComponent13 from "../components/GroupComponent13";
import GroupComponent141 from "../components/GroupComponent141";
import Union1 from "../assets/union1";
import GroupComponent11 from "../components/GroupComponent11";
import Ellipse1253 from "../assets/ellipse125";
import Group127761 from "../assets/group12776";
import Ellipse1254 from "../assets/ellipse125";
import Ellipse1255 from "../assets/ellipse125";
import Group9111 from "../assets/group911";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Component1 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <GroupComponent121 />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-16.png")}
      />
      <GroupComponent13 />
      <GroupComponent141 union={<Union1 width={97} height={18} />} />
      <GroupComponent11 />
      <GroupComponent11
        groupViewTop={352}
        rectangleViewTop={0}
        groupViewLeft={56}
      />
      <Ellipse1253
        style={[styles.child, styles.itemLayout]}
        width={20}
        height={20}
      />
      <Group127761
        style={[styles.item, styles.itemLayout]}
        width={20}
        height={20}
      />
      <Ellipse1254
        style={[styles.inner, styles.itemLayout]}
        width={20}
        height={20}
      />
      <Text style={styles.allLoaded}>All loaded</Text>
      <View style={styles.rectangleView} />
      <Ellipse1255
        style={[styles.ellipseIcon, styles.itemLayout]}
        width={20}
        height={20}
      />
      <Text style={[styles.selectAll, styles.deleteTypo]}>Select all</Text>
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["#e33f3f", "#c52e2e"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.delete, styles.deleteTypo]}>Delete</Text>
      <Group9111
        style={[styles.groupIcon, styles.childLayout]}
        width={40}
        height={40}
      />
      <Image
        style={[styles.child1, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-12706.png")}
      />
      <Image
        style={[styles.child2, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-12707.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  deleteTypo: {
    color: Color.color,
    lineHeight: 16,
    fontSize: FontSize.size_16,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  childLayout: {
    height: 40,
    width: 40,
    left: 320,
    position: "absolute",
  },
  icon: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  child: {
    top: 161,
    left: 20,
  },
  item: {
    top: 283,
    left: 20,
  },
  inner: {
    top: 361,
    left: 20,
  },
  allLoaded: {
    top: 754,
    left: 160,
    fontSize: FontSize.size_14,
    lineHeight: 14,
    color: Color.color6,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    top: 748,
    left: 0,
    shadowColor: Color.colorGray2000,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.bg3,
    width: 375,
    height: 64,
    position: "absolute",
  },
  ellipseIcon: {
    top: 770,
    left: 15,
  },
  selectAll: {
    top: 772,
    left: 43,
    textTransform: "capitalize",
  },
  rectangleLineargradient: {
    top: 763,
    left: 265,
    borderRadius: Border.br_6,
    width: 95,
    height: 35,
    backgroundColor: "transparent",
    position: "absolute",
  },
  delete: {
    top: 773,
    left: 288,
  },
  groupIcon: {
    top: 613,
  },
  child1: {
    top: 493,
  },
  child2: {
    top: 549,
  },
  safeareaview: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Component1;