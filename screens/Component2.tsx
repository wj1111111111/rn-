import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GroupComponent121 from "../components/GroupComponent121";
import GroupComponent13 from "../components/GroupComponent13";
import GroupComponent14 from "../components/GroupComponent14";
import GroupComponent from "../components/GroupComponent";
import Group1278011 from "../assets/group127801";
import Group1278021 from "../assets/group127802";
import Group127864 from "../assets/group12786";
import { Color } from "../GlobalStyles";

const Component2 = () => {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <GroupComponent121 />
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/-16.png")}
      />
      <GroupComponent13 groupViewBottom={747} />
      <GroupComponent14 />
      <GroupComponent group12780={<Group1278011 width={24} height={24} />} />
      <GroupComponent
        groupViewTop={702}
        group12780={<Group1278021 width={24} height={24} />}
      />
      <Group127864 style={styles.child} width={40} height={40} />
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

export default Component2;