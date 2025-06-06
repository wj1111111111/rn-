import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Group3171 from "../assets/group317";
import Group3103 from "../assets/group310";
import Group3104 from "../assets/group310";
import Group3105 from "../assets/group310";
import Grandesvitoriasrecentes1 from "../assets/grandesvitoriasrecentes";
import Component405 from "../assets/";
import Component406 from "../assets/";
import Group7461 from "../assets/group746";
import Vector4144 from "../assets/vector41";
import Group7361141 from "../assets/group73611";
import Component407 from "../assets/";
import Vector4145 from "../assets/vector41";
import Rectangle671 from "../assets/rectangle67";
import Vector242 from "../assets/vector24";
import Vector252 from "../assets/vector25";
import Vector262 from "../assets/vector26";
import Group7601 from "../assets/group760";
import Group5661 from "../assets/group566";
import Component408 from "../assets/";
import Ellipse441 from "../assets/ellipse44";
import Vector271 from "../assets/vector27";
import Component409 from "../assets/";
import Component410 from "../assets/";
import Component411 from "../assets/";
import Group6291 from "../assets/group629";
import Component412 from "../assets/";
import Stroke36 from "../assets/stroke3";
import Stroke42 from "../assets/stroke4";
import Group6281 from "../assets/group628";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Component33 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={[styles.slotsParent, styles.containerLayout]}>
        <Text style={[styles.slots, styles.slotsTypo]}>Slots</Text>
        <Group3171 style={[styles.groupChild, styles.iconLayout4]} />
        <View style={[styles.moreParent, styles.moreLayout]}>
          <Text style={[styles.more, styles.moreTypo]}>more</Text>
          <Group3103 style={styles.groupItem} width={18} height={9} />
        </View>
        <View style={[styles.parent, styles.groupLayout3]}>
          <Image
            style={[styles.icon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/138-1.png")}
          />
          <Image
            style={[styles.icon1, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/104.png")}
          />
          <Image
            style={[styles.icon2, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/159-1.png")}
          />
          <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
            <LinearGradient
              style={[styles.groupInner, styles.groupChildPosition1]}
              locations={[0, 1]}
              colors={["#ffab3b", "#eb4136"]}
              useAngle={true}
              angle={105.88}
            />
            <Image
              style={styles.fastspinIcon}
              resizeMode="cover"
              source={require("../assets/fastspin.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
            <LinearGradient
              style={[
                styles.rectangleLineargradient,
                styles.groupChildPosition1,
              ]}
              locations={[0, 1]}
              colors={["#ffab3b", "#eb4136"]}
              useAngle={true}
              angle={105.88}
            />
            <Image
              style={styles.fastspinIcon}
              resizeMode="cover"
              source={require("../assets/fastspin.png")}
            />
          </View>
          <View
            style={[styles.rectangleContainer, styles.rectangleParentLayout]}
          >
            <View style={styles.groupChild3Position} />
            <Image
              style={[styles.logoAw1024x459Icon, styles.iconPosition2]}
              resizeMode="cover"
              source={require("../assets/logo-aw1024x459.png")}
            />
          </View>
          <Text style={styles.fortuneTypo3}>{`Fortune
Tiger`}</Text>
          <Text style={styles.fortuneTypo2}>{`Fortune
Ox`}</Text>
          <Text style={styles.fortuneTypo1}>{`Fortune
Mouse`}</Text>
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout3]}>
          <View style={[styles.group, styles.groupLayout3]}>
            <Image
              style={[styles.icon, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/138-1.png")}
            />
            <Image
              style={[styles.icon1, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/104.png")}
            />
            <Image
              style={[styles.icon2, styles.iconLayout3]}
              resizeMode="cover"
              source={require("../assets/159-1.png")}
            />
            <View
              style={[styles.rectangleParent, styles.rectangleParentLayout]}
            >
              <LinearGradient
                style={[styles.groupChild1, styles.groupChildPosition1]}
                locations={[0, 1]}
                colors={["#ffab3b", "#eb4136"]}
                useAngle={true}
                angle={105.88}
              />
              <Image
                style={styles.fastspinIcon}
                resizeMode="cover"
                source={require("../assets/fastspin.png")}
              />
            </View>
            <View style={[styles.rectangleGroup, styles.rectangleParentLayout]}>
              <LinearGradient
                style={[styles.groupChild2, styles.groupChildPosition1]}
                locations={[0, 1]}
                colors={["#ffab3b", "#eb4136"]}
                useAngle={true}
                angle={105.88}
              />
              <Image
                style={styles.fastspinIcon}
                resizeMode="cover"
                source={require("../assets/fastspin.png")}
              />
            </View>
            <View
              style={[styles.rectangleContainer, styles.rectangleParentLayout]}
            >
              <View style={styles.groupChild3Position} />
              <Image
                style={[styles.logoAw1024x459Icon, styles.iconPosition2]}
                resizeMode="cover"
                source={require("../assets/logo-aw1024x459.png")}
              />
            </View>
            <Text style={styles.fortuneTypo3}>{`Fortune
Tiger`}</Text>
            <Text style={styles.fortuneTypo2}>{`Fortune
Ox`}</Text>
            <Text style={styles.fortuneTypo1}>{`Fortune
Mouse`}</Text>
          </View>
        </View>
        <View style={[styles.container, styles.containerLayout]}>
          <Image
            style={[styles.icon6, styles.iconParentPosition]}
            resizeMode="cover"
            source={require("../assets/153-3.png")}
          />
          <Image
            style={[styles.icon7, styles.iconParentPosition]}
            resizeMode="cover"
            source={require("../assets/124-3.png")}
          />
          <Image
            style={[styles.icon8, styles.iconParentPosition]}
            resizeMode="cover"
            source={require("../assets/122-3.png")}
          />
          <View style={[styles.groupChild4, styles.parent2Layout]} />
          <Text style={[styles.theRechargeOf, styles.loginTypo]}>
            The recharge of the
          </Text>
          <Text
            style={[styles.theRecharge, styles.loginTypo]}
          >{`The recharge `}</Text>
          <Image
            style={[
              styles.b4bde395738f0c8b07d1baa47c5d48Icon,
              styles.iconLayout2,
            ]}
            resizeMode="cover"
            source={require("../assets/3b4bde395738f0c8b07d1baa47c5d48f172c19aa158772swckar-12.png")}
          />
          <Text style={[styles.favourites, styles.slotsTypo]}>Favourites</Text>
          <View style={[styles.moreGroup, styles.moreLayout]}>
            <Text style={[styles.more, styles.moreTypo]}>more</Text>
            <Group3104 style={styles.groupItem} width={18} height={9} />
          </View>
          <View style={[styles.moreContainer, styles.moreLayout]}>
            <Text style={[styles.more, styles.moreTypo]}>more</Text>
            <Group3105 style={styles.groupItem} width={18} height={9} />
          </View>
          <Image
            style={styles.icon9}
            resizeMode="cover"
            source={require("../assets/12.png")}
          />
          <Text style={[styles.grandesVitoriasRecentes, styles.slotsTypo]}>
            Grandes Vitorias Recentes
          </Text>
          <Grandesvitoriasrecentes1 style={styles.grandesVitoriasRecentes1} />
          <View style={[styles.rectangleParent3, styles.iconParentPosition]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.platform24Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/platform-24.png")}
            />
          </View>
          <View style={[styles.rectangleParent4, styles.iconParentPosition]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.platform24Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/platform-24.png")}
            />
          </View>
          <View style={[styles.rectangleParent5, styles.iconParentPosition]}>
            <View style={styles.groupChildPosition} />
            <Image
              style={[styles.platform24Icon, styles.iconLayout2]}
              resizeMode="cover"
              source={require("../assets/platform-24.png")}
            />
          </View>
          <Component405
            style={[styles.icon10, styles.loginIconLayout]}
            width={16}
            height={16}
          />
          <Component406
            style={[styles.icon11, styles.loginIconLayout]}
            width={16}
            height={16}
          />
          <Group7461 style={styles.groupChild9} width={46} height={46} />
          <View style={[styles.groupParent, styles.groupLayout2]}>
            <View style={[styles.rectangleWrapper, styles.instanceChildLayout]}>
              <LinearGradient
                style={[styles.groupChild10, styles.childPosition1]}
                locations={[0, 1]}
                colors={["#ffc71e", "#ff9f00"]}
                useAngle={true}
                angle={180}
              />
            </View>
            <LinearGradient
              style={[styles.instanceChild, styles.childPosition1]}
              locations={[0, 1]}
              colors={["#76cd00", "#478a03"]}
              useAngle={true}
              angle={180}
            />
            <View style={[styles.vectorParent, styles.vectorPosition]}>
              <Vector4144
                style={[styles.vectorIcon, styles.vectorIconPosition]}
              />
              <Text style={[styles.withdrawal, styles.loginTypo]}>
                Withdrawal
              </Text>
            </View>
            <Image
              style={[styles.logoWj931Icon, styles.iconLayout4]}
              resizeMode="cover"
              source={require("../assets/logowj93-12.png")}
            />
            <Text style={[styles.r198000, styles.slotsTypo]}>R$1980.00</Text>
            <Group7361141 style={[styles.instanceItem, styles.iconLayout4]} />
            <Component407 style={[styles.icon12, styles.iconLayout4]} />
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Vector4145
                style={[styles.vectorIcon1, styles.vectorIconPosition]}
              />
              <Text style={[styles.deposit, styles.loginTypo]}>Deposit</Text>
            </View>
          </View>
          <View style={[styles.vectorContainer, styles.rectangleIconLayout]}>
            <Rectangle671
              style={[styles.rectangleIcon, styles.rectangleIconLayout]}
              width={345}
              height={44}
            />
            <View style={[styles.groupChild11, styles.groupChildLayout1]} />
            <LinearGradient
              style={[styles.groupChild12, styles.groupChildLayout1]}
              locations={[0, 1]}
              colors={["rgba(133, 212, 32, 0.21)", "rgba(133, 212, 32, 0)"]}
              useAngle={true}
              angle={90}
            />
            <Text style={[styles.bingo, styles.bingoTypo]}>BINGO</Text>
            <Text style={[styles.slots1, styles.slots1Typo]}>Slots</Text>
            <Text style={[styles.popular, styles.bingoTypo]}>Popular</Text>
            <Text style={[styles.pescaria, styles.slots1Typo]}>Pescaria</Text>
            <View style={styles.groupChild13} />
            <Vector242
              style={[styles.vectorIcon2, styles.loginIconLayout]}
              width={15}
              height={16}
            />
            <Vector252 style={[styles.vectorIcon3, styles.vectorIcon3Layout]} />
            <Vector262 style={[styles.vectorIcon4, styles.iconLayout4]} />
            <Group7601
              style={[styles.groupChild14, styles.vectorIcon3Layout]}
            />
          </View>
          <Text style={[styles.fortuneOxFortune, styles.fortuneTypo]}>{`Fortune
Ox fortune`}</Text>
          <Text style={[styles.fortuneMouse2, styles.fortuneTypo]}>{`Fortune
Mouse`}</Text>
          <Text style={[styles.fortuneMouse3, styles.fortuneTypo]}>{`Fortune
Mouse`}</Text>
          <Group5661 style={styles.groupChild15} width={50} height={50} />
          <Image
            style={styles.icon13}
            resizeMode="cover"
            source={require("../assets/-110.png")}
          />
        </View>
      </View>
      <View style={[styles.parent1, styles.childPosition]}>
        <Component408 style={styles.icon14} />
        <Ellipse441 style={[styles.instanceInner, styles.iconLayout4]} />
        <Vector271 style={[styles.vectorIcon5, styles.iconPosition]} />
        <Component409 style={[styles.icon15, styles.iconLayout]} />
        <Component410 style={[styles.icon16, styles.iconPosition]} />
        <Component411 style={[styles.icon17, styles.iconLayout]} />
        <Text style={[styles.members, styles.homeTypo]}>Menu</Text>
        <Text style={[styles.promotion, styles.homeTypo]}>Bonus</Text>
        <Text style={[styles.home, styles.homeTypo]}>Casino</Text>
        <Text style={[styles.deposit1, styles.homeTypo]}>Invite</Text>
        <Text style={[styles.services, styles.moreTypo]}>Deposlt</Text>
        <Image
          style={[styles.icon18, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/-2.png")}
        />
      </View>
      <View style={[styles.child, styles.childPosition]} />
      <View style={[styles.groupContainer, styles.groupLayout1]}>
        <View style={[styles.rectangleParent6, styles.groupLayout1]}>
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
          <Text
            style={[styles.loremIpsumDolor, styles.loginTypo]}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. 

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur `}</Text>
        </View>
        <Group6291
          style={[styles.groupChild18, styles.icon19Layout]}
          width={100}
          height={40}
        />
        <View style={[styles.parent2, styles.parent2Layout]}>
          <Component412
            style={[styles.icon19, styles.icon19Layout]}
            width={100}
            height={40}
          />
          <View style={[styles.loginParent, styles.loginIconLayout]}>
            <Text style={[styles.login, styles.loginIconLayout]}>Previous</Text>
            <Stroke36
              style={[styles.strokeIcon, styles.strokeIconLayout]}
              width={8}
              height={13}
            />
          </View>
          <View style={[styles.groupFrame, styles.groupLayout]}>
            <View style={[styles.groupParent1, styles.groupLayout]}>
              <View style={styles.loginPosition}>
                <Text style={[styles.login1, styles.loginPosition]}>Next</Text>
              </View>
              <Stroke42
                style={[styles.strokeIcon1, styles.strokeIconLayout]}
                width={8}
                height={13}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.text, styles.loginTypo]}>2/8</Text>
      </View>
      <Group6281 style={styles.item} width={48} height={48} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerLayout: {
    width: 346,
    position: "absolute",
  },
  slotsTypo: {
    textAlign: "left",
    lineHeight: 18,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout4: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  moreLayout: {
    height: 12,
    width: 53,
    left: 292,
    position: "absolute",
  },
  moreTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_12,
    textAlign: "left",
    color: Color.color,
    position: "absolute",
  },
  groupLayout3: {
    height: 138,
    left: 0,
    width: 346,
    position: "absolute",
  },
  iconLayout3: {
    width: 110,
    borderRadius: Border.br_8,
    height: 138,
  },
  rectangleParentLayout: {
    height: 18,
    width: 34,
  },
  groupChildPosition1: {
    borderBottomRightRadius: Border.br_6,
    borderTopLeftRadius: Border.br_8,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: Color.colorGray2100,
    backgroundColor: "transparent",
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition2: {
    height: 11,
    left: 5,
    top: 4,
  },
  iconParentPosition: {
    top: 393,
    position: "absolute",
  },
  parent2Layout: {
    height: 40,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
  },
  iconLayout2: {
    width: 24,
    position: "absolute",
  },
  loginIconLayout: {
    height: 16,
    position: "absolute",
  },
  groupLayout2: {
    width: 345,
    left: 0,
  },
  instanceChildLayout: {
    top: "46.27%",
    width: "49.28%",
    height: "53.73%",
  },
  childPosition1: {
    borderRadius: Border.br_2,
    right: "0%",
    bottom: "0%",
    backgroundColor: "transparent",
    position: "absolute",
  },
  vectorPosition: {
    bottom: "16.42%",
    top: "62.69%",
    height: "20.9%",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "7.86%",
    top: "7.14%",
    height: "85%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    height: 44,
    width: 345,
    left: 0,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 29,
    width: 86,
    borderRadius: 15,
    top: 7,
    left: 5,
    position: "absolute",
  },
  bingoTypo: {
    top: 16,
    lineHeight: 12,
    fontSize: FontSize.size_12,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  slots1Typo: {
    top: 17,
    color: Color.wz1,
    lineHeight: 12,
    fontSize: FontSize.size_12,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    position: "absolute",
  },
  vectorIcon3Layout: {
    top: "36.36%",
    width: "4.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fortuneTypo: {
    fontFamily: FontFamily.notoSansBold,
    top: 498,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 13,
    fontSize: 13,
    color: Color.color,
    fontWeight: "700",
    position: "absolute",
  },
  childPosition: {
    width: 375,
    marginLeft: -187.5,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    bottom: "45.57%",
    height: "20.25%",
  },
  iconLayout: {
    width: "4.27%",
    top: "34.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    fontFamily: FontFamily.notoSansRegular,
    top: "65.82%",
    lineHeight: 12,
    fontSize: FontSize.size_12,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout1: {
    height: 529,
    width: 287,
  },
  groupChildLayout: {
    borderRadius: Border.br_12,
    position: "absolute",
  },
  icon19Layout: {
    width: 100,
    height: 40,
    position: "absolute",
  },
  strokeIconLayout: {
    height: 13,
    width: 8,
    top: 1,
    position: "absolute",
  },
  groupLayout: {
    width: 58,
    height: 16,
    position: "absolute",
  },
  loginPosition: {
    width: 32,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  slots: {
    top: 752,
    color: Color.color,
    fontSize: FontSize.size_18,
    left: 30,
    lineHeight: 18,
  },
  groupChild: {
    height: "1.95%",
    width: "5.23%",
    top: "81.47%",
    right: "93.61%",
    bottom: "16.58%",
    left: "1.16%",
    maxWidth: "100%",
  },
  more: {
    textTransform: "capitalize",
    left: 0,
    top: 0,
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 12,
    fontSize: FontSize.size_12,
  },
  groupItem: {
    left: 35,
    top: 1,
    position: "absolute",
  },
  moreParent: {
    top: 755,
  },
  icon: {
    left: 118,
    top: 0,
    position: "absolute",
  },
  icon1: {
    left: 236,
    top: 0,
    position: "absolute",
  },
  icon2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "transparent",
  },
  fastspinIcon: {
    top: 6,
    left: 1,
    width: 30,
    height: 7,
    position: "absolute",
  },
  rectangleParent: {
    left: 236,
    top: 0,
    position: "absolute",
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
  },
  rectangleGroup: {
    left: 118,
    top: 0,
    position: "absolute",
  },
  groupChild3Position: {
    backgroundColor: Color.colorGold300,
    borderBottomRightRadius: Border.br_6,
    borderTopLeftRadius: Border.br_8,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: Color.colorGray2100,
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoAw1024x459Icon: {
    width: 26,
    position: "absolute",
  },
  rectangleContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  fortuneTypo3: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.notoSansBlack,
    fontWeight: "900",
    textTransform: "uppercase",
    lineHeight: 13,
    fontSize: 13,
    left: 24,
    top: 105,
    color: Color.color,
    position: "absolute",
  },
  fortuneTypo2: {
    left: 142,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: FontFamily.notoSansBlack,
    fontWeight: "900",
    textTransform: "uppercase",
    lineHeight: 13,
    fontSize: 13,
    top: 105,
    color: Color.color,
    position: "absolute",
  },
  fortuneTypo1: {
    fontFamily: FontFamily.notoSansExtraBold,
    fontWeight: "800",
    left: 260,
    top: 103,
    lineHeight: 14,
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 13,
    color: Color.color,
    position: "absolute",
  },
  parent: {
    top: 589,
  },
  groupChild1: {
    backgroundColor: "transparent",
  },
  groupChild2: {
    backgroundColor: "transparent",
  },
  group: {
    top: 0,
  },
  groupWrapper: {
    top: 785,
  },
  icon6: {
    width: 110,
    borderRadius: Border.br_8,
    height: 138,
    left: 0,
  },
  icon7: {
    width: 110,
    borderRadius: Border.br_8,
    height: 138,
    left: 118,
  },
  icon8: {
    left: 236,
    width: 110,
    borderRadius: Border.br_8,
    height: 138,
  },
  groupChild4: {
    top: 243,
    borderRadius: Border.br_26,
    width: 345,
    left: 0,
    backgroundColor: Color.bg3,
  },
  theRechargeOf: {
    left: 64,
    color: Color.color3,
    top: 256,
    fontSize: FontSize.size_14,
    lineHeight: 14,
    position: "absolute",
  },
  theRecharge: {
    left: 249,
    color: Color.color3,
    top: 256,
    fontSize: FontSize.size_14,
    lineHeight: 14,
    position: "absolute",
  },
  b4bde395738f0c8b07d1baa47c5d48Icon: {
    top: 254,
    height: 19,
    left: 6,
  },
  favourites: {
    top: 358,
    color: Color.color,
    fontSize: FontSize.size_18,
    left: 30,
    lineHeight: 18,
  },
  moreGroup: {
    top: 361,
  },
  moreContainer: {
    top: 559,
  },
  icon9: {
    top: 359,
    left: 3,
    height: 15,
    width: 16,
    position: "absolute",
  },
  grandesVitoriasRecentes: {
    top: 556,
    color: Color.color,
    fontSize: FontSize.size_18,
    left: 30,
    lineHeight: 18,
  },
  grandesVitoriasRecentes1: {
    height: "3.14%",
    width: "5.12%",
    top: "96.86%",
    right: "93.73%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "1.16%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChildPosition: {
    backgroundColor: Color.colorGold200,
    elevation: 2,
    shadowRadius: 2,
    borderBottomRightRadius: Border.br_6,
    borderTopLeftRadius: Border.br_8,
    shadowOpacity: 1,
    shadowColor: Color.colorGray2100,
    height: 18,
    width: 34,
    left: 0,
    top: 0,
    position: "absolute",
  },
  platform24Icon: {
    height: 11,
    left: 5,
    top: 4,
  },
  rectangleParent3: {
    height: 18,
    width: 34,
    left: 0,
  },
  rectangleParent4: {
    height: 18,
    width: 34,
    left: 118,
  },
  rectangleParent5: {
    height: 18,
    width: 34,
    left: 236,
  },
  icon10: {
    left: 42,
    top: 255,
    overflow: "hidden",
  },
  icon11: {
    left: 227,
    top: 255,
    overflow: "hidden",
  },
  groupChild9: {
    top: 235,
    left: 299,
    position: "absolute",
  },
  groupChild10: {
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
    borderRadius: Border.br_2,
  },
  rectangleWrapper: {
    right: "50.72%",
    shadowColor: Color.colorGray1600,
    left: "0%",
    elevation: 2,
    shadowRadius: 2,
    width: "49.28%",
    height: "53.73%",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
  },
  instanceChild: {
    left: "50.72%",
    top: "46.27%",
    width: "49.28%",
    height: "53.73%",
  },
  vectorIcon: {
    width: "16.49%",
    right: "83.51%",
  },
  withdrawal: {
    left: "22.68%",
    top: "0%",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
    position: "absolute",
  },
  vectorParent: {
    width: "28.12%",
    right: "61.16%",
    left: "10.72%",
  },
  logoWj931Icon: {
    height: "37.61%",
    width: "31.88%",
    right: "68.12%",
    bottom: "62.39%",
    top: "0%",
    left: "0%",
  },
  r198000: {
    top: "5.97%",
    left: "68.7%",
    fontSize: FontSize.size_16,
    color: Color.colorOrange100,
  },
  instanceItem: {
    height: "23.88%",
    width: "4.52%",
    top: "7.46%",
    right: "33.16%",
    bottom: "68.66%",
    left: "62.32%",
  },
  icon12: {
    height: "21.79%",
    width: "4.78%",
    top: "8.96%",
    right: "0.72%",
    bottom: "69.25%",
    left: "94.49%",
  },
  vectorIcon1: {
    width: "21.62%",
    right: "78.38%",
  },
  deposit: {
    left: "29.73%",
    top: "0%",
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
    position: "absolute",
  },
  vectorGroup: {
    width: "21.45%",
    right: "13.91%",
    left: "64.64%",
  },
  groupParent: {
    height: 67,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8,
    top: 0,
  },
  groupChild11: {
    backgroundColor: Color.bg,
  },
  groupChild12: {
    backgroundColor: "transparent",
  },
  bingo: {
    left: 203,
    color: Color.wz1,
  },
  slots1: {
    left: 129,
  },
  popular: {
    left: 35,
    color: Color.color,
  },
  pescaria: {
    left: 284,
  },
  groupChild13: {
    top: 41,
    borderRadius: Border.br_6,
    backgroundColor: Color.bg1,
    width: 113,
    height: 3,
    left: 6,
    position: "absolute",
  },
  vectorIcon2: {
    top: 14,
    left: 16,
  },
  vectorIcon3: {
    height: "31.14%",
    right: "19.13%",
    bottom: "32.5%",
    left: "76.23%",
  },
  vectorIcon4: {
    height: "36.36%",
    width: "4.41%",
    top: "31.82%",
    right: "42.55%",
    bottom: "31.82%",
    left: "53.04%",
  },
  groupChild14: {
    height: "30.23%",
    right: "63.77%",
    bottom: "33.41%",
    left: "31.59%",
  },
  vectorContainer: {
    top: 291,
  },
  fortuneOxFortune: {
    left: 134,
  },
  fortuneMouse2: {
    left: 262,
  },
  fortuneMouse3: {
    left: 26,
  },
  groupChild15: {
    top: 524,
    left: 294,
    position: "absolute",
  },
  icon13: {
    marginLeft: -173,
    top: 75,
    height: 160,
    left: "50%",
    width: 345,
    borderRadius: Border.br_8,
    position: "absolute",
  },
  container: {
    height: 574,
    left: 0,
    top: 0,
  },
  slotsParent: {
    top: 10,
    height: 923,
    left: 15,
  },
  icon14: {
    height: "81.01%",
    top: "18.99%",
    right: "0%",
    left: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  instanceInner: {
    height: "92.41%",
    width: "19.47%",
    right: "40.27%",
    bottom: "7.59%",
    left: "40.27%",
    top: "0%",
  },
  vectorIcon5: {
    width: "4.24%",
    right: "27.76%",
    left: "68%",
    top: "34.18%",
    bottom: "45.57%",
    height: "20.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon15: {
    right: "88%",
    left: "7.73%",
    bottom: "45.57%",
    height: "20.25%",
    width: "4.27%",
  },
  icon16: {
    width: "4.21%",
    right: "8.05%",
    left: "87.73%",
    top: "34.18%",
    bottom: "45.57%",
    height: "20.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon17: {
    height: "20.13%",
    right: "68.27%",
    bottom: "45.7%",
    left: "27.47%",
  },
  members: {
    left: "5.6%",
    color: Color.wz1,
  },
  promotion: {
    left: "25.07%",
    color: Color.wz1,
  },
  home: {
    left: "84.53%",
    color: Color.color3,
  },
  deposit1: {
    left: "65.87%",
    color: Color.wz1,
  },
  services: {
    top: "56.96%",
    left: "44%",
    fontWeight: "500",
    fontFamily: FontFamily.notoSansMedium,
  },
  icon18: {
    height: "30.38%",
    width: "6.4%",
    top: "21.52%",
    right: "46.93%",
    bottom: "48.1%",
    left: "46.67%",
  },
  parent1: {
    bottom: 0,
    height: 79,
  },
  child: {
    backgroundColor: Color.colorGray1100,
    top: 1,
    height: 1005,
    marginLeft: -187.5,
  },
  groupChild16: {
    height: 529,
    width: 287,
    left: 0,
    top: 0,
    backgroundColor: Color.bg,
  },
  groupChild17: {
    top: 13,
    left: 9,
    width: 270,
    height: 456,
    backgroundColor: Color.bg3,
  },
  loremIpsumDolor: {
    top: 23,
    left: 18,
    lineHeight: 16,
    width: 252,
    height: 434,
    color: Color.wz1,
    position: "absolute",
  },
  rectangleParent6: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild18: {
    top: 489,
    left: 0,
  },
  icon19: {
    left: 174,
    top: 0,
  },
  login: {
    width: 61,
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 14,
    color: Color.color,
    top: 0,
    left: 15,
  },
  strokeIcon: {
    left: 0,
  },
  loginParent: {
    width: 76,
    top: 12,
    left: 0,
  },
  login1: {
    fontSize: FontSize.size_14,
    textAlign: "left",
    fontFamily: FontFamily.microsoftYaHeiBold,
    fontWeight: "700",
    lineHeight: 14,
    color: Color.color,
  },
  strokeIcon1: {
    left: 50,
  },
  groupParent1: {
    left: 0,
    top: 0,
  },
  groupFrame: {
    left: 208,
    top: 12,
  },
  parent2: {
    left: 13,
    width: 274,
    top: 489,
  },
  text: {
    top: 504,
    left: 131,
    lineHeight: 14,
    fontSize: FontSize.size_14,
    color: Color.color,
    position: "absolute",
  },
  groupContainer: {
    top: 145,
    left: 44,
    position: "absolute",
  },
  item: {
    top: 691,
    left: 163,
    position: "absolute",
  },
  safeareaview: {
    flex: 1,
    overflow: "hidden",
    height: 1005,
    width: "100%",
    backgroundColor: Color.bg,
  },
});

export default Component33;