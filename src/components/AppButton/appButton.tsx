import React from 'react'
import { Button, TouchableOpacity, Text, } from 'react-native'


type AppButtonProps = {
    title: string;
    onPress: () => void;
    color?: string;
};

const AppButton = ({ title, onPress, color }: AppButtonProps) => {
    return (
        <>
            {/* Button nativo com diferenças visuais entre Android e iOS
     <Button title="Click Me"/>*/}


            <TouchableOpacity 
                activeOpacity={0.7}
                style={{ 
                    backgroundColor: color || '#30ec49', 
                    marginTop: 10, 
                    padding: 10, 
                    borderRadius: 5, 
                    }}
                    onPress={onPress}
                    >
                <Text style={{ fontSize: 16, fontFamily: 'Arial', fontWeight: 'bold' }}>
                    {title}
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default AppButton
