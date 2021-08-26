import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const App = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: "column", alignItems: "center", marginTop: 30 }}>
                    <View style={{ width: 350, height: 250, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ width: 350, height: 200, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ width: 350, height: 120, borderRadius: 20, marginBottom: 20 }} />
                </View>
            </View>

        </SkeletonPlaceholder>
    );
};

export default App