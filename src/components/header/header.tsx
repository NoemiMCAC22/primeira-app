import React from 'react'
import { View, Text } from 'react-native'

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle = 'Subtitulo Teste' }: HeaderProps) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      {subtitle && <Text>{subtitle}</Text>}
    </View>
  )
}

export default Header
