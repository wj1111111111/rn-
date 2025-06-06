import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent7 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.rectangleParent, styles.iconPosition]}>
        <View style={styles.frameChild} />
        <Image
          style={styles.image218Icon}
          resizeMode="cover"
          source={require("../assets/image-218.png")}
        />
        <Image
          style={[styles.icon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/2333-18.png")}
        />
      </View>
      <View style={styles.groupWrapper}>
        <View style={styles.rectangleGroup}>
          <LinearGradient
            style={[styles.groupChild, styles.groupPosition]}
            locations={[0, 1]}
            colors={["#52d800", "#097500"]}
            useAngle={true}
            angle={180}
          />
          <LinearGradient
            style={[styles.groupItem, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(255, 249, 242, 0.6)", "rgba(255, 245, 234, 0)"]}
            useAngle={true}
            angle={180}
          />
          <Text style={[styles.details, styles.detailsPosition]}>Details</Text>
        </View>
      </View>
      <Text style={[styles.giftCode, styles.detailsPosition]}>gift code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: "transparent",
    borderRadius: Border.br_30,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  detailsPosition: {
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 4,
    left: 5,
    borderRadius: 88,
    backgroundColor: Color.colorGray1200,
    borderStyle: "solid",
    borderColor: Color.colorYellowgreen,
    borderWidth: 2,
    width: 78,
    height: 78,
    position: "absolute",
  },
  image218Icon: {
    top: 6,
    left: 7,
    borderRadius: 97,
    width: 74,
    height: 74,
    position: "absolute",
  },
  icon: {
    height: "70.73%",
    width: "65.91%",
    top: "14.63%",
    right: "17.05%",
    bottom: "14.63%",
    left: "17.05%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleParent: {
    top: 0,
    left: 1,
    width: 88,
    height: 82,
  },
  groupChild: {
    marginLeft: -45,
    marginTop: -14,
    borderRadius: Border.br_30,
    height: 28,
    width: 90,
  },
  groupItem: {
    marginTop: -10,
    marginLeft: -38.7,
    width: 77,
    height: 14,
  },
  details: {
    marginTop: -11,
    marginLeft: -23,
    fontSize: FontSize.size_14,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.color,
    textShadowColor: "#3e434e",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 0,
  },
  rectangleGroup: {
    left: "50%",
    top: "50%",
    marginLeft: -45,
    marginTop: -14,
    height: 28,
    width: 90,
    position: "absolute",
  },
  groupWrapper: {
    top: 68,
    left: 0,
    height: 28,
    overflow: "hidden",
    width: 90,
    position: "absolute",
  },
  giftCode: {
    marginTop: 6,
    marginLeft: -37,
    fontSize: FontSize.size_12,
    lineHeight: 20,
    textTransform: "uppercase",
    fontWeight: "900",
    fontFamily: FontFamily.microsoftYaHei,
  },
  frameParent: {
    top: 608,
    left: 114,
    height: 96,
    width: 90,
    position: "absolute",
  },
});

export default GroupComponent7;