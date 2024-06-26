import { useContext } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import { TreeContext } from ".../../../../contexts/tree.context";
import { CLOUDINARY_BASE_URL } from ".../../../../utils/constants/cloudinary.constants";

export default function ProgressCircle({ progress }) {
  const { tree } = useContext(TreeContext);

  return (
    <AnimatedCircularProgress
      size={200}
      width={15}
      fill={progress}
      lineCap="round"
      rotation={0}
      tintColor="#184C45"
      backgroundColor="#D8E1D0"
    >
      {() => {
        if (tree) {
          return (
            <ImageBackground
              source={require(".../../../../../assets/theme/background2.png")}
              style={styles.imageBackground}
            >
              {(() => {
                if (!tree.seed?.asset || tree.seed?.asset.length === 0) {
                  return null; // Hoặc return <></>;
                }
                if (progress <= 25) {
                  return (
                    <Image
                      source={{
                        uri: `${CLOUDINARY_BASE_URL}${tree.seed.asset[3]}`,
                      }}
                      style={{ width: 85, height: 85, marginTop: 20 }}
                    />
                  );
                } else if (progress <= 50) {
                  return (
                    <Image
                      source={{
                        uri: `${CLOUDINARY_BASE_URL}${tree.seed.asset[2]}`,
                      }}
                      style={{ width: 80, height: 102 }}
                    />
                  );
                } else if (progress <= 75) {
                  return (
                    <Image
                      source={{
                        uri: `${CLOUDINARY_BASE_URL}${tree.seed.asset[1]}`,
                      }}
                      style={{ width: 110, height: 110 }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={{
                        uri: `${CLOUDINARY_BASE_URL}${tree.seed.asset[0]}`,
                      }}
                      style={{ width: 120, height: 120 }}
                    />
                  );
                }
              })()}
            </ImageBackground>
          );
        } else {
          return (
            <ImageBackground
              source={require(".../../../../../assets/theme/background2.png")}
              style={styles.imageBackground}
            />
          );
        }
      }}
    </AnimatedCircularProgress>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: 180,
    height: 170,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
});
