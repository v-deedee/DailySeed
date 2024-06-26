import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { getTree } from ".../../../../../services/tree.service";
import { Skeleton } from "@rneui/themed";
import { CLOUDINARY_BASE_URL } from ".../../../../../utils/constants/cloudinary.constants";

export default function TreeDetail({ treeID }) {
  const [treeInfo, setTreeInfo] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [imgURL, setImgUrl] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info = await getTree(treeID);
        setTreeInfo(info);
        const assetArray = info.seed.asset.split("|");
        const phaseImage = assetArray[assetArray.length - info?.seed?.phase];
        setImgUrl(phaseImage);
        setLoading(false);
        console.log(JSON.stringify(info));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [treeID]);

  const phaseStyle = {
    1: { width: 50, height: 50, top: "5%" },
    2: { width: 60, height: 60, top: "5%" },
    3: { width: 80, height: 80, top: 0 },
    4: { width: 100, height: 100, top: 0 },
  };

  return (
    <View>
      <ImageBackground
        source={require(".../../../../../assets/theme/background.png")}
        style={styles.imgContainer}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Image
              source={{ uri: `${CLOUDINARY_BASE_URL}${imgURL}` }}
              style={[{ top: "0%" }, phaseStyle[treeInfo?.seed?.phase]]}
            />
          </>
        )}
      </ImageBackground>
      {!isLoading && (
        <View>
          <View style={styles.treeStatusContainer}>
            <Text style={{ color: "#6d4100", fontWeight: "bold" }}>
              Score: {treeInfo?.tree?.score}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={{ color: "#e0d6b3", fontWeight: "bold" }}>
              {treeInfo?.tree?.date}
            </Text>
            <Text style={{ color: "#e0d6b3", fontWeight: "bold" }}>
              {`Record ${treeInfo?.habits?.length}`}
            </Text>
          </View>

          {treeInfo?.tree?.picture &&
            <View>
              {treeInfo?.habits?.map((habit) => (
                <View key={habit.id} style={styles.infoContainer}>
                  <Text style={{ color: "#e3dcc5", fontWeight: "bold" }}>
                    {habit.icon} {habit.name}: {habit.selected.name}
                  </Text>
                </View>
              ))}

              <View
                style={{
                  margin: 20,
                  marginTop: 0,
                  padding: 20,
                  paddingTop: 5,
                  backgroundColor: "#fcf0be",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginBottom: 10,
                  }}
                >
                </View>
                <View>
                  <Text
                    style={{
                      fontWeight: "400",
                      marginBottom: 10,
                      color: "#333",
                      fontSize: 16,
                    }}
                  >
                    {treeInfo?.tree?.note}
                  </Text>
                  <Image source={{ uri: `${CLOUDINARY_BASE_URL}${treeInfo?.tree?.picture}` }} style={styles.image} />
                </View>
              </View>
            </View>
          }
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  contentContainer: {
    backgroundColor: "#6d4100",
  },
  treeStatusContainer: {
    borderRadius: 100,
    backgroundColor: "#fcf0be",
    margin: 20,
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: "1/1",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#eee",
  },
});
