import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import GroupComponent15 from "./GroupComponent15";
import Vector20 from "../assets/vector20";
import Vector211 from "../assets/vector21";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GroupComponent16 = () => {
  return (
    <View style={styles.rectangleParent}>
      <LinearGradient
        style={[styles.groupChild, styles.groupPosition]}
        locations={[0, 1]}
        colors={["#fff0d6", "#ffc58b"]}
        useAngle={true}
        angle={180}
      />
      <LinearGradient
        style={[styles.groupItem, styles.groupPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 51, 102, 0.5)", "rgba(255, 110, 48, 0.5)"]}
      />
      <LinearGradient
        style={[styles.groupInner, styles.groupLayout]}
        locations={[0, 1]}
        colors={["rgba(255, 51, 102, 0.2)", "rgba(255, 110, 48, 0.2)"]}
        useAngle={true}
        angle={-90}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.groupLayout]}
        locations={[0, 1]}
        colors={["rgba(255, 51, 102, 0.2)", "rgba(255, 110, 48, 0.2)"]}
        useAngle={true}
        angle={-90}
      />
      <LinearGradient
        style={[styles.groupChild1, styles.groupLayout]}
        locations={[0, 1]}
        colors={["rgba(255, 51, 102, 0.2)", "rgba(255, 110, 48, 0.2)"]}
        useAngle={true}
        angle={-90}
      />
      <LinearGradient
        style={styles.groupChild2}
        locations={[0, 1]}
        colors={["rgba(255, 51, 102, 0.2)", "rgba(255, 110, 48, 0.2)"]}
        useAngle={true}
        angle={-90}
      />
      <Text style={[styles.mon, styles.monTypo]}>Mon.</Text>
      <Text style={[styles.tues, styles.monTypo]}>Tues.</Text>
      <Text style={[styles.wed, styles.monTypo]}>Wed.</Text>
      <Text style={[styles.fri, styles.monTypo]}>Fri.</Text>
      <Text style={[styles.sat, styles.monTypo]}>Sat.</Text>
      <Text style={[styles.sun, styles.monTypo]}>Sun.</Text>
      <GroupComponent15
        prop="01:00-02:59"
        vector={<Vector20 width={13} height={75} />}
      />
      <GroupComponent15
        groupViewTop={154}
        prop="05:00-05:59"
        textColor="#ff0b00"
        vector={<Vector211 width={13} height={75} />}
      />
      <GroupComponent15
        groupViewTop={82}
        prop="03:00-03:59"
        textColor="#ff0b00"
        vector={<Vector211 width={13} height={75} />}
      />
      <GroupComponent15
        groupViewTop={46}
        prop="02:00-02:59"
        textColor="#c9a4a4"
        vector={<Vector20 width={13} height={75} />}
      />
      <GroupComponent15
        groupViewTop={190}
        prop="06:00-06:59"
        textColor="#ff0b00"
        vector={<Vector211 width={13} height={75} />}
      />
      <GroupComponent15
        groupViewTop={118}
        prop="04:00-04:59"
        textColor="#ff0b00"
        vector={<Vector211 width={13} height={75} />}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-12782.png")}
      />
      <Text style={[styles.thu, styles.monTypo]}>Thu.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    backgroundColor: "transparent",
    top: 0,
    height: 226,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 236,
    left: 60,
    backgroundColor: "transparent",
    position: "absolute",
  },
  monTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -148,
    shadowColor: Color.colorGray2100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    borderRadius: Border.br_8,
    width: 296,
    left: "50%",
    backgroundColor: "transparent",
  },
  groupItem: {
    left: 0,
    borderTopLeftRadius: Border.br_8,
    borderBottomLeftRadius: Border.br_8,
    width: 60,
  },
  groupInner: {
    borderTopRightRadius: Border.br_8,
    top: 0,
    height: 36,
  },
  rectangleLineargradient: {
    top: 72,
  },
  groupChild1: {
    top: 144,
  },
  groupChild2: {
    top: 216,
    borderBottomRightRadius: Border.br_8,
    height: 10,
    width: 236,
    left: 60,
    backgroundColor: "transparent",
    position: "absolute",
  },
  mon: {
    top: 9,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  tues: {
    top: 41,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  wed: {
    top: 73,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  fri: {
    top: 137,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  sat: {
    top: 169,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  sun: {
    top: 201,
    color: Color.bg3,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  groupIcon: {
    top: 97,
    left: 4,
    width: 52,
    height: 32,
    position: "absolute",
  },
  thu: {
    top: 105,
    color: Color.color1,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    fontSize: FontSize.size_14,
    left: 9,
  },
  rectangleParent: {
    marginLeft: -147.5,
    top: 284,
    height: 226,
    width: 296,
    left: "50%",
    position: "absolute",
  },
});

export default GroupComponent16;
