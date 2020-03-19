import React from 'react';
import {TouchableOpacity, View, Image, ScrollView, Share} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../components/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import VideoList from '../../components/VideoList';

const Video = ({route, navigation, item}) => {
  const onShare = async video => {
    try {
      const result = await Share.share({
        url: `https://www.youtube.com/watch?v=${video.id}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const parseSpeakerName = item => {
    const indexCheck = item.snippet.title.indexOf('|');
    if (indexCheck !== -1) {
      const first = item.snippet.title.slice(indexCheck + 1);
      const second = first.slice(1, first.indexOf('|') - 1);
      return second;
    }
  };
  const parseTitle = item => {
    return item.snippet.title.slice(0, item.snippet.title.indexOf('|') - 1);
  };

  const parseDuration = duration => {
    const mins = duration.slice(2, 4);
    let secs = duration.slice(5, duration.length - 1);
    if (secs.length === 1) {
      secs = '0' + secs;
    }
    return `${mins}:${secs}`;
  };
  const video = item.items[0];
  return (
    <ScrollView>
      <View style={styles.root}>
        <TouchableOpacity
          onPress={() => {
            // TODO - open video player with youtube video data
            navigation.navigate('Now Playing', {item: video});
          }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: video.snippet.thumbnails.high.url}}
            />
          </View>
          <View style={styles.play}>
            <Icon name="play" size={55} color="rgb(255,255,255)" />
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <CustomText style={styles.speakerName}>
            {parseSpeakerName(video)}
          </CustomText>
          <CustomText style={styles.videoTitle}>{parseTitle(video)}</CustomText>
          <View style={styles.videoActions}>
            <CustomText style={styles.videoLength}>
              {parseDuration(video.contentDetails.duration)}

              {/* 18:30 */}
            </CustomText>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => {}}>
              {/* TODO - add logic to check if video is faved  */}
              <Icon
                style={styles.icon}
                name="heart-outline"
                size={18}
                color="#db4f48"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="download-outline"
                size={18}
                color="#2f9e99"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onShare(video);
              }}>
              <Icon
                style={styles.icon}
                name="share-variant"
                size={18}
                color="#507ea2"
              />
            </TouchableOpacity>
          </View>
          <CustomText style={styles.description}>
            {video.snippet.description}
          </CustomText>
        </View>
      </View>
      <View style={styles.externalLinks}>
        <View style={styles.speakerContainer}>
          <CustomText style={styles.title}>About The Speaker</CustomText>
          <View style={styles.speakerCardContainer}>
            {/* TODO - integrate actual speakers */}
            <SpeakerCard
              style={styles.speakerCard}
              name="Ivan Dai"
              source={require('../../assets/images/winstonatstage.jpg')}
              route={route}
            />
          </View>
          <CustomText style={styles.title}>Watch Next</CustomText>
        </View>
        <View style={styles.watchNextContainer}>
          <VideoList
            route={route}
            navigation={navigation}
            horizontal={true}
            offset={-20}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Video;
