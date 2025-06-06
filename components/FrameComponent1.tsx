import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Group118423 from "../assets/group11842";
import Frame116 from "../assets/frame1";
import Rectangle2656 from "../assets/rectangle265";
import Rectangle2666 from "../assets/rectangle266";
import Frame117 from "../assets/frame1";
import Rectangle2657 from "../assets/rectangle265";
import Rectangle2667 from "../assets/rectangle266";
import { FontFamily, Color } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.groupContainer}>
        <Group118423 style={styles.groupPosition} width={215} height={29} />
        <Text style={[styles.jbet88com, styles.jbet88phTypo]}>jbet88.com</Text>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Frame116 style={styles.frameIcon} width={17} height={18} />
        <Rectangle2656
          style={[styles.groupInner, styles.groupInnerPosition]}
          width={191}
          height={29}
        />
        <Rectangle2666
          style={[styles.rectangleIcon, styles.groupInnerPosition]}
          width={176}
          height={29}
        />
        <Text style={[styles.jbet88ph, styles.jbet88phTypo]}>JBET88.ph</Text>
      </View>
      <View style={styles.groupContainer}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Frame117 style={styles.frameIcon} width={17} height={18} />
        <Rectangle2657
          style={[styles.groupInner, styles.groupInnerPosition]}
          width={191}
          height={29}
        />
        <Rectangle2667
          style={[styles.rectangleIcon, styles.groupInnerPosition]}
          width={176}
          height={29}
        />
        <Text style={[styles.jbet88ph, styles.jbet88phTypo]}>JBET88.cc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jbet88phTypo: {
    height: 12,
    width: 121,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    textTransform: "lowercase",
    lineHeight: 8,
    fontSize: 13,
    left: 58,
    top: 9,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInnerPosition: {
    top: 0,
    height: 29,
    position: "absolute",
  },
  jbet88com: {
    color: Color.colorLightsteelblue100,
  },
  groupContainer: {
    height: 29,
    width: 215,
  },
  groupItem: {
    borderTopLeftRadius: 26,
    borderBottomRightRadius: 26,
    backgroundColor: Color.color3,
  },
  frameIcon: {
    top: 6,
    left: 9,
    overflow: "hidden",
    position: "absolute",
  },
  groupInner: {
    left: 21,
  },
  rectangleIcon: {
    left: 30,
  },
  jbet88ph: {
    color: Color.colorLightsteelblue200,
  },
  groupParent: {
    marginLeft: -107.45,
    top: 574,
    left: "50%",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    width: 215,
    position: "absolute",
  },
});

export default FrameComponent1;
