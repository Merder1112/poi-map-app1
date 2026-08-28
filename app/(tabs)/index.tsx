import { PointOfInterest, pois } from "@/data/pois";
import { useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HomeScreen() {
  const mapRef = useRef<MapView>(null);
  const [selectedId, setSelectedId] = useState<string>(pois[0].id);

  function handleSelectPoi(poi: PointOfInterest) {
    setSelectedId(poi.id);
    mapRef.current?.animateToRegion(
      {
        latitude: poi.latitude,
        longitude: poi.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      },
      500
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: pois[0].latitude,
          longitude: pois[0].longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {pois.map((poi) => (
          <Marker
            key={poi.id}
            coordinate={{ latitude: poi.latitude, longitude: poi.longitude }}
            title={poi.name}
            description={poi.description}
            pinColor={poi.id === selectedId ? "red" : "orange"}
          />
        ))}
      </MapView>

      <FlatList
        style={styles.list}
        data={pois}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handleSelectPoi(item)}
            style={[
              styles.item,
              item.id === selectedId && styles.itemSelected,
            ]}
          >
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ddd",
  },
  itemSelected: {
    backgroundColor: "#e6f0ff",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemDescription: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
});