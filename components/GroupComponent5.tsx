import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Logo411 from "../assets/logo41";
import Logo811 from "../assets/logo81";
import Ellipse2621 from "../assets/ellipse262";
import Logovideo711 from "../assets/logovideo71";
import Logovideo611 from "../assets/logovideo61";
import Ellipse10811 from "../assets/ellipse1081";
import Logovideo411 from "../assets/logovideo41";
import Logovideo311 from "../assets/logovideo31";
import Logovideo211 from "../assets/logovideo21";
import { Color } from "../GlobalStyles";

const GroupComponent5 = () => {
  return (
    <View style={[styles.logo1Parent, styles.parentPosition]}>
      <Image
        style={[styles.logo1Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.logo2Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.logo7Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.logo3Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Logo411 style={[styles.logo4Icon, styles.iconChildLayout]} />
      <Image
        style={[styles.logo5Icon, styles.iconChildLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.logo6Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Logo811 style={[styles.logo8Icon, styles.iconLayout1]} />
      <View
        style={[styles.thisSiteOffersACompleteExParent, styles.parentPosition]}
      >
        <Text style={styles.thisSiteOffers}>
          This site offers a complete experience of the game. To use our
          website, you must be at least 18 years of age. We are not responsible
          for providing you with local laws relating to the game. Play
          responsibly and have fun at wj.com
        </Text>
        <Text style={[styles.emallWjgmailcom, styles.wjgmailcomTypo]}>
          Emall:{` `}wj@gmail.com
        </Text>
        <Text style={[styles.wjgmailcomAll, styles.wjgmailcomTypo]}>
          © 2022 wj@gmail.com | All rights reserved.
        </Text>
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.groupWrapperPosition]}>
            <View style={[styles.vectorParent, styles.groupWrapperPosition]}>
              <Ellipse2621
                style={[styles.groupChild, styles.groupChildPosition]}
              />
              <Text style={styles.text}>18</Text>
              <View
                style={[styles.rectangleParent, styles.logoWj931IconPosition]}
              >
                <View style={[styles.groupItem, styles.groupLayout]} />
                <View style={[styles.groupInner, styles.groupLayout]} />
              </View>
            </View>
          </View>
          <View style={[styles.logovideo7Parent, styles.groupChildPosition]}>
            <Logovideo711
              style={[styles.logovideo7Icon, styles.iconPosition1]}
            />
            <Logovideo611
              style={[styles.logovideo6Icon, styles.iconPosition1]}
            />
            <View style={[styles.logovideo5, styles.iconPosition1]}>
              <Ellipse10811
                style={[styles.logovideo5Child, styles.groupWrapperPosition]}
              />
              <View style={[styles.logovideo5Item, styles.logovideo5Border]} />
              <View
                style={[styles.logovideo5Inner, styles.rectangleViewLayout]}
              />
              <View
                style={[styles.rectangleView, styles.rectangleViewLayout]}
              />
            </View>
            <Logovideo411
              style={[styles.logovideo4Icon, styles.iconPosition1]}
            />
            <Logovideo311
              style={[styles.logovideo3Icon, styles.iconPosition1]}
            />
            <Logovideo211
              style={[styles.logovideo2Icon, styles.iconPosition1]}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.logoWj931Icon, styles.logoWj931IconPosition]}
        resizeMode="cover"
        source={require("../assets/logowj93-11.png")}
      />
      <Image
        style={[styles.jdbIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.sexybcrtIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.fcIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.logo2Icon1, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.jiliIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.pgIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.yesbingoIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
      <Image
        style={[styles.pp2Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/logo11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconLayout1: {
    bottom: "73.63%",
    top: "22.19%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "17.97%",
    height: "4.18%",
    position: "absolute",
  },
  wjgmailcomTypo: {
    fontFamily: "Microsoft YaHei",
    lineHeight: 17,
    textAlign: "center",
    fontSize: 12,
    position: "absolute",
  },
  groupWrapperPosition: {
    height: "100%",
    top: "0%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  groupChildPosition: {
    top: "3.23%",
    height: "96.77%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  logoWj931IconPosition: {
    top: "0%",
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: "#fe2121",
    borderRadius: 6,
    height: "18.18%",
    width: "100%",
    position: "absolute",
  },
  iconPosition1: {
    width: "11.54%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
  },
  logovideo5Border: {
    borderWidth: 1,
    borderColor: "#191e24",
    borderStyle: "solid",
  },
  rectangleViewLayout: {
    borderRadius: 8,
    position: "absolute",
  },
  iconLayout: {
    height: 13,
    width: 62,
    top: 69,
    position: "absolute",
  },
  iconPosition: {
    top: 96,
    height: 13,
    width: 62,
    position: "absolute",
  },
  logo1Icon: {
    right: "80.58%",
    left: "1.45%",
    bottom: "82.32%",
    top: "13.5%",
    width: "17.97%",
    height: "4.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logo2Icon: {
    right: "60.87%",
    left: "21.16%",
    bottom: "82.32%",
    top: "13.5%",
    width: "17.97%",
    height: "4.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logo7Icon: {
    right: "39.71%",
    left: "42.32%",
  },
  logo3Icon: {
    right: "41.16%",
    left: "40.87%",
    bottom: "82.32%",
    top: "13.5%",
    width: "17.97%",
    height: "4.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logo4Icon: {
    right: "21.45%",
    left: "60.58%",
    bottom: "82.32%",
    top: "13.5%",
    width: "17.97%",
    height: "4.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logo5Icon: {
    right: "1.74%",
    left: "80.29%",
    bottom: "82.32%",
    top: "13.5%",
    width: "17.97%",
    height: "4.18%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  logo6Icon: {
    right: "57.39%",
    left: "24.64%",
  },
  logo8Icon: {
    right: "20%",
    left: "62.03%",
  },
  thisSiteOffers: {
    letterSpacing: 1,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: "NotoSans-Medium",
    textAlign: "center",
    fontSize: 12,
    color: Color.wz1,
    top: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  emallWjgmailcom: {
    top: "38.12%",
    left: "32.17%",
  },
  wjgmailcomAll: {
    top: "90.61%",
    left: "13.91%",
    color: Color.wz1,
    lineHeight: 17,
  },
  groupChild: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    width: "100%",
  },
  text: {
    top: "25.81%",
    left: "13.33%",
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Arial",
    color: "#fe2121",
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    top: "40.91%",
    bottom: "40.91%",
    left: "0%",
    right: "0%",
  },
  groupInner: {
    top: "100%",
    right: "-40.91%",
    bottom: "-18.18%",
    left: "40.91%",
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleParent: {
    height: "35.48%",
    width: "36.67%",
    bottom: "64.52%",
    left: "63.33%",
    right: "0%",
  },
  vectorParent: {
    right: "0%",
    width: "100%",
  },
  groupWrapper: {
    width: "9.8%",
    right: "90.2%",
  },
  logovideo7Icon: {
    left: "88.46%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
  },
  logovideo6Icon: {
    right: "17.69%",
    left: "70.77%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  logovideo5Child: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    right: "0%",
    width: "100%",
  },
  logovideo5Item: {
    height: "53.33%",
    width: "53.33%",
    top: "23.33%",
    right: "23.33%",
    bottom: "23.33%",
    left: "23.33%",
    borderRadius: 3,
    position: "absolute",
  },
  logovideo5Inner: {
    height: "26.67%",
    width: "26.67%",
    top: "36.67%",
    right: "36.67%",
    bottom: "36.67%",
    left: "36.67%",
    borderWidth: 1,
    borderColor: "#191e24",
    borderStyle: "solid",
  },
  rectangleView: {
    height: "6.67%",
    width: "6.67%",
    top: "30%",
    right: "30%",
    bottom: "63.33%",
    backgroundColor: "#191e24",
    left: "63.33%",
  },
  logovideo5: {
    right: "35.38%",
    left: "53.08%",
  },
  logovideo4Icon: {
    right: "53.08%",
    left: "35.38%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  logovideo3Icon: {
    right: "70.77%",
    left: "17.69%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  logovideo2Icon: {
    right: "88.46%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
  },
  logovideo7Parent: {
    width: "84.97%",
    left: "15.03%",
  },
  groupParent: {
    height: "17.13%",
    width: "88.7%",
    top: "61.33%",
    right: "6.38%",
    bottom: "21.55%",
    left: "4.93%",
    position: "absolute",
  },
  thisSiteOffersACompleteExParent: {
    height: "58.2%",
    top: "41.8%",
    left: "0%",
  },
  logoWj931Icon: {
    height: "9.13%",
    width: "22.61%",
    right: "38.55%",
    bottom: "90.87%",
    left: "38.84%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  jdbIcon: {
    left: 269,
  },
  sexybcrtIcon: {
    left: 221,
  },
  fcIcon: {
    left: 63,
  },
  logo2Icon1: {
    left: 94,
  },
  jiliIcon: {
    left: 39,
  },
  pgIcon: {
    left: 136,
  },
  yesbingoIcon: {
    left: 5,
  },
  pp2Icon: {
    left: 175,
  },
  logo1Parent: {
    height: "53.07%",
    top: "46.93%",
    left: "0%",
  },
});

export default GroupComponent5;