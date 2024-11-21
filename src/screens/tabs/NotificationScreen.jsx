import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import AppStyle from '../../theme/styles';
import {Heading} from '../../theme/styled';
import {useNavigation} from '@react-navigation/native';

const NotificationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={AppStyle.StyleNotification.container}>
      <Heading>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/icon-back.png')} />
        </Pressable>
        <Text style={AppStyle.StyleNotification.textLabel}>Notification</Text>
      </Heading>
      <Text style={AppStyle.StyleNotification.textNotification}>
        Hiện chưa có thông báo nào cho bạn
      </Text>
    </View>
  );
};

export default NotificationScreen;
