import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

export type GroupComponent21Type = {
  maskGroup?: ImageSourcePropType;
  vector?: React.ReactNode;
  star1?: React.ReactNode;
  star3?: React.ReactNode;
  star2?: React.ReactNode;
  star4?: React.ReactNode;
  star5?: React.ReactNode;
};

const GroupComponent21 = ({
  maskGroup,
  vector,
  star1,
  star3,
  star2,
  star4,
  star5,
}: GroupComponent21Type) => {
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
        <View>{vector && vector}</View>
        <View>{star1 && star1}</View>
        <View>{star3 && star3}</View>
        <View>{star2 && star2}</View>
        <View>{star4 && star4}</View>
        <View>{star5 && star5}</View>
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
    backgroundColor: Color.wz4,
    width: 14,
    height: 14,
    position: "absolute",
  },
  manyBenefitsFor: {
    top: 13,
    fontSize: FontSize.size_12,
    lineHeight: 14,
    textTransform: "uppercase",
    fontFamily: FontFamily.microsoftYaHeiBold,
    color: Color.color,
    display: "flex",
    alignItems: "center",
    width: 169,
    height: 24,
    left: 68,
  },
  rectangleView: {
    borderRadius: 90,
    backgroundColor: Color.color,
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
    fontSize: FontSize.size_14,
    lineHeight: 16,
    fontFamily: FontFamily.notoSansBold,
    color: Color.wz4,
  },
});

export default GroupComponent21;
