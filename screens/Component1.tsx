import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupComponent121 from "../components/GroupComponent121";
import GroupComponent13 from "../components/GroupComponent13";
import GroupComponent141 from "../components/GroupComponent141";
import Union from "../assets/union";
import GroupComponent11 from "../components/GroupComponent11";
import Group127863 from "../assets/group12786";
import { Color } from "../GlobalStyles";

const Component = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <GroupComponent121 />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />
      <GroupComponent13 groupViewBottom={747} />
      <GroupComponent141
        groupViewLeft={15}
        union={<Union width={97} height={18} />}
      />
      <GroupComponent11
        groupViewTop={250}
        rectangleViewTop={1}
        groupViewLeft={15}
      />
      <GroupComponent11
        groupViewTop={352}
        rectangleViewTop={0}
        groupViewLeft={15}
      />
      <Group127863 style={styles.child} width={40} height={40} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 7,
    left: 10,
    width: 356,
    height: 13,
    position: "absolute",
  },
  child: {
    top: 613,
    left: 320,
    position: "absolute",
  },
  safeareaview: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Component;