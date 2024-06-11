import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile-Components/ProfileHeader';
import Voucher from '../../components/Profile-Components/Voucher';

export default function Profile() {
  return (
    <SafeAreaView>
      <ProfileHeader memberType={'Gold Member'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
