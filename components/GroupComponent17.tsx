import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Ellipse1762 from "../assets/ellipse176";
import Group120242 from "../assets/group12024";
import {
  Color,
  FontFamily,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

export type GroupComponent17Type = {
  /** Style props */
  groupViewTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent17 = ({ groupViewTop }: GroupComponent17Type) => {
  const groupView8Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  return (
    <View style={[styles.groupParent, groupView8Style]}>
      <View style={[styles.lineParent, styles.orPosition]}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.frameWrapper}>
          <View style={[styles.groupContainer, styles.frameParentFlexBox]}>
            <View style={styles.groupInnerLayout}>
              <Ellipse1762
                style={[styles.groupInner, styles.groupInnerLayout]}
                width={28}
                height={28}
              />
              <Image
                style={styles.googleLogo98082Icon}
                resizeMode="cover"
                source={require("../assets/googlelogo9808-2.png")}
              />
            </View>
            <Text style={[styles.google, styles.orTypo]}>Google</Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={[styles.groupContainer, styles.frameParentFlexBox]}>
            <Group120242
              style={styles.groupInnerLayout}
              width={28}
              height={28}
            />
            <Text style={[styles.google, styles.orTypo]}>Telegram</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orPosition: {
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 149,
    borderTopWidth: 1,
    borderColor: Color.colorDarkslategray100,
    borderStyle: "solid",
    top: 6,
    position: "absolute",
  },
  orTypo: {
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupInnerLayout: {},
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 197,
  },
  or: {
    left: 164,
    color: Color.color6,
    top: 0,
    position: "absolute",
  },
  lineParent: {
    height: 12,
    left: 0,
    width: 345,
  },
  groupInner: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  googleLogo98082Icon: {
    top: 4,
    left: 4,
    width: 21,
    height: 21,
    position: "absolute",
  },
  google: {
    color: Color.color,
  },
  groupContainer: {
    gap: Gap.gap_12,
    alignItems: "center",
  },
  frameWrapper: {
    flex: 1,
    borderRadius: Border.br_8,
    backgroundColor: Color.colorGray800,
    height: 42,
    paddingHorizontal: Padding.p_36,
    paddingVertical: 7,
    alignItems: "center",
  },
  frameParent: {
    top: 43,
    left: 5,
    width: 335,
    gap: Gap.gap_10,
    alignItems: "center",
    position: "absolute",
  },
  groupParent: {
    top: 542,
    left: 15,
    height: 85,
    width: 345,
    position: "absolute",
  },
});

export default GroupComponent17;
