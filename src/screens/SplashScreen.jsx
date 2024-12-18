import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import AppStyle from '../theme/styles';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('login'), 2500);
  }, []);

  return (
    <View style={AppStyle.StyleSplash.container}>
      <View>
        <Text style={AppStyle.StyleSplash.text}>Sinh viên: Đỗ Minh Hiếu</Text>
        <Text style={AppStyle.StyleSplash.text}>Mã sinh viên: PH47182</Text>
        <Text style={AppStyle.StyleSplash.text}>Lớp: MD19202</Text>
        <Text style={AppStyle.StyleSplash.text}>Mã môn: CRO102</Text>
        <Text style={AppStyle.StyleSplash.text}>Giảng viên: Đặng Thái Sơn</Text>
        <Text style={AppStyle.StyleSplash.text}>Sản phẩm: Assignment</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
