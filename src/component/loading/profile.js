import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const App = () => {
    return (
        <SkeletonPlaceholder>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: "column" }}>
                    <View style={{ width: 400, height: 300, borderRadius: 20, marginBottom: 20 }} />
                    <View style={{ paddingHorizontal: 24 }}>
                        <View style={{ width: 350, height: 120, borderRadius: 20, marginBottom: 20 }} />
                        <View style={{ width: 350, height: 120, borderRadius: 20, marginBottom: 20 }} />
                    </View>

                </View>
            </View>

        </SkeletonPlaceholder>
    );
};

export default App