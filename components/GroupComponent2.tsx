import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Vector29 from "../assets/vector";
import Star145 from "../assets/star1";
import Star146 from "../assets/star1";
import Star147 from "../assets/star1";
import Star148 from "../assets/star1";
import Star149 from "../assets/star1";
import { Color } from "../GlobalStyles";

export type GroupComponent2Type = {
  maskGroup?: ImageSourcePropType;
};

const GroupComponent2 = ({ maskGroup }: GroupComponent2Type) => {
  return (
    <View style={styles.groupPosition}>
      <View style={styles.groupPosition}>
        <LinearGradient
          style={[styles.groupChild, styles.groupPosition]}
          locations={[0, 1]}
          colors={["#76cd00", "#478a03"]}
          useAngle={true}
          angle={90}
        />
        <Image
          style={styles.groupPosition}
          resizeMode="cover"
          source={maskGroup}
        />
        <View style={styles.groupItem} />
        <Vector29 style={styles.vectorIcon} />
        <Star145
          style={[styles.groupInner, styles.groupChildLayout]}
          width={15}
          height={15}
        />
        <Star146
          style={[styles.starIcon, styles.groupChildLayout]}
          width={15}
          height={15}
        />
        <Star147
          style={[styles.groupChild1, styles.groupChildLayout]}
          width={15}
          height={15}
        />
        <Star148
          style={[styles.groupChild2, styles.groupChildLayout]}
          width={15}
          height={15}
        />
        <Star149
          style={[styles.groupChild3, styles.groupChildLayout]}
          width={15}
          height={15}
        />
        <Text style={[styles.manyBenefitsFor, styles.downloadTypo]}>
          Many benefits for newcomers
        </Text>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
        </View>
        <Text style={[styles.download, styles.downloadTypo]}>Download</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    height: 68,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 15,
    width: 15,
    borderRadius: 1,
    top: 41,
    position: "absolute",
  },
  downloadTypo: {
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  rectangleLayout: {
    height: 32,
    width: 97,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
  },
  groupItem: {
    top: 4,
    left: 358,
    backgroundColor: Color.wz,
    width: 14,
    height: 14,
    position: "absolute",
  },
  vectorIcon: {
    height: "38.24%",
    width: "6.93%",
    top: "0%",
    right: "0%",
    bottom: "61.76%",
    left: "93.07%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupInner: {
    left: 68,
  },
  starIcon: {
    left: 102,
  },
  groupChild1: {
    left: 85,
  },
  groupChild2: {
    left: 119,
  },
  groupChild3: {
    left: 136,
  },
  manyBenefitsFor: {
    top: 13,
    fontSize: 12,
    lineHeight: 14,
    textTransform: "uppercase",
    fontFamily: "Arial",
    color: Color.color1,
    display: "flex",
    alignItems: "center",
    width: 169,
    height: 24,
    left: 68,
  },
  rectangleView: {
    borderRadius: 90,
    backgroundColor: Color.color1,
    left: 0,
    top: 0,
    width: 97,
  },
  rectangleWrapper: {
    top: 18,
    left: 248,
  },
  download: {
    top: 26,
    left: 261,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "NotoSans-Bold",
    color: Color.wz,
  },
});

export default GroupComponent2;