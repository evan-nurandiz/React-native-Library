import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const App = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: "column", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: 350, height: 60, borderRadius: 20, marginBottom: 40 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, marginHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, marginHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, marginHorizontal: 20, justifyContent: 'space-between' }}>
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ width: 160, height: 150, borderRadius: 20, marginBottom: 20 }} />
                </View>
            </View>

        </SkeletonPlaceholder>
    );
};

export default App