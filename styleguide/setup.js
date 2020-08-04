import '../src/styles/styles.css';

import pkg from '../package';
import { getRandomInt, getRandomUser, getRandomUsers, importantCountries, getAvatarUrl } from './utils';
import * as VKUI from '../src';

import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon16Like from '@vkontakte/icons/dist/16/like';

import Icon20ArticleOutline from '@vkontakte/icons/dist/20/article_outline';
import Icon20FollowersOutline from '@vkontakte/icons/dist/20/followers_outline';
import Icon20WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon20GlobeOutline from '@vkontakte/icons/dist/20/globe_outline';
import Icon20Info from '@vkontakte/icons/dist/20/info';
import Icon20PhoneOutline from '@vkontakte/icons/dist/20/phone_outline';
import Icon20CommunityName from '@vkontakte/icons/dist/20/community_name';
import Icon20MessageOutline from '@vkontakte/icons/dist/20/message_outline';
import Icon20PlaceOutline from '@vkontakte/icons/dist/20/place_outline';
import Icon20MentionOutline from '@vkontakte/icons/dist/20/mention_outline';

import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon24Shuffle from '@vkontakte/icons/dist/24/shuffle';
import Icon24User from '@vkontakte/icons/dist/24/user';

import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28BlockOutline from '@vkontakte/icons/dist/28/block_outline';
import Icon28CameraOutline from '@vkontakte/icons/dist/28/camera_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28MusicOutline from '@vkontakte/icons/dist/28/music_outline';
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon28PrivacyOutline from '@vkontakte/icons/dist/28/privacy_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28SlidersOutline from '@vkontakte/icons/dist/28/sliders_outline';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28PaletteOutline from '@vkontakte/icons/dist/28/palette_outline';
import Icon28UserAddOutline from '@vkontakte/icons/dist/28/user_add_outline';
import Icon28SafariOutline from '@vkontakte/icons/dist/28/safari_outline';
import Icon28ClipOutline from '@vkontakte/icons/dist/28/clip_outline';
import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon28DeleteOutline from '@vkontakte/icons/dist/28/delete_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28PlaySpeedOutline from '@vkontakte/icons/dist/28/play_speed_outline';
import Icon28DeleteOutlineAndroid from '@vkontakte/icons/dist/28/delete_outline_android';
import Icon28ListPlayOutline from '@vkontakte/icons/dist/28/list_play_outline';
import Icon28CopyOutline from '@vkontakte/icons/dist/28/copy_outline';
import Icon28SubtitlesOutline from '@vkontakte/icons/dist/28/subtitles_outline';

import Icon56MentionOutline from '@vkontakte/icons/dist/56/mention_outline';
import Icon56MessageReadOutline from '@vkontakte/icons/dist/56/message_read_outline';
import Icon56MoneyTransferOutline from '@vkontakte/icons/dist/56/money_transfer_outline';
import Icon56NotificationOutline from '@vkontakte/icons/dist/56/notification_outline';
import Icon56UsersOutline from '@vkontakte/icons/dist/56/users_outline';

for (let i in VKUI) {
  window[i] = VKUI[i];
}

window.osname = VKUI.platform();

window.schemeId = window.localStorage.getItem('vkui-styleguide:schemeId') || pkg.defaultSchemeId;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.importantCountries = importantCountries;

window.Icon16Add = Icon16Add;
window.Icon16Chevron = Icon16Chevron;
window.Icon16Clear = Icon16Clear;
window.Icon16Done = Icon16Done;
window.Icon16Dropdown = Icon16Dropdown;
window.Icon16Like = Icon16Like;

window.Icon20ArticleOutline = Icon20ArticleOutline;
window.Icon20FollowersOutline = Icon20FollowersOutline;
window.Icon20WorkOutline = Icon20WorkOutline;
window.Icon20GlobeOutline = Icon20GlobeOutline;
window.Icon20Info = Icon20Info;
window.Icon20PhoneOutline = Icon20PhoneOutline;
window.Icon20CommunityName = Icon20CommunityName;
window.Icon20MessageOutline = Icon20MessageOutline;
window.Icon20PlaceOutline = Icon20PlaceOutline;
window.Icon20MentionOutline = Icon20MentionOutline;

window.Icon24Add = Icon24Add;
window.Icon24Back = Icon24Back;
window.Icon24Camera = Icon24Camera;
window.Icon24Cancel = Icon24Cancel;
window.Icon24Dismiss = Icon24Dismiss;
window.Icon24Document = Icon24Document;
window.Icon24Done = Icon24Done;
window.Icon24Favorite = Icon24Favorite;
window.Icon24Filter = Icon24Filter;
window.Icon24Play = Icon24Play;
window.Icon24MoreHorizontal = Icon24MoreHorizontal;
window.Icon24MoreVertical = Icon24MoreVertical;
window.Icon24Shuffle = Icon24Shuffle;
window.Icon24User = Icon24User;

window.Icon28AddOutline = Icon28AddOutline;
window.Icon28BlockOutline = Icon28BlockOutline;
window.Icon28CameraOutline = Icon28CameraOutline;
window.Icon28ChevronBack = Icon28ChevronBack;
window.Icon28FavoriteOutline = Icon28FavoriteOutline;
window.Icon28InfoOutline = Icon28InfoOutline;
window.Icon28MessageOutline = Icon28MessageOutline;
window.Icon28More = Icon28More;
window.Icon28MusicOutline = Icon28MusicOutline;
window.Icon28NewsfeedOutline = Icon28NewsfeedOutline;
window.Icon28Notifications = Icon28Notifications;
window.Icon28PictureOutline = Icon28PictureOutline;
window.Icon28PrivacyOutline = Icon28PrivacyOutline;
window.Icon28Profile = Icon28Profile;
window.Icon28SearchOutline = Icon28SearchOutline;
window.Icon28ServicesOutline = Icon28ServicesOutline;
window.Icon28SettingsOutline = Icon28SettingsOutline;
window.Icon28SlidersOutline = Icon28SlidersOutline;
window.Icon28UserOutline = Icon28UserOutline;
window.Icon28UsersOutline = Icon28UsersOutline;
window.Icon28PaletteOutline = Icon28PaletteOutline;
window.Icon28UserAddOutline = Icon28UserAddOutline;
window.Icon28SafariOutline = Icon28SafariOutline;
window.Icon28ClipOutline = Icon28ClipOutline;
window.Icon28UserCircleOutline = Icon28UserCircleOutline;
window.Icon28EditOutline = Icon28EditOutline;
window.Icon28DeleteOutline = Icon28DeleteOutline;
window.Icon28ShareOutline = Icon28ShareOutline;
window.Icon28PlaySpeedOutline = Icon28PlaySpeedOutline;
window.Icon28DeleteOutlineAndroid = Icon28DeleteOutlineAndroid;
window.Icon28ListPlayOutline = Icon28ListPlayOutline;
window.Icon28CopyOutline = Icon28CopyOutline;
window.Icon28SubtitlesOutline = Icon28SubtitlesOutline;

window.Icon56MentionOutline = Icon56MentionOutline;
window.Icon56MessageReadOutline = Icon56MessageReadOutline;
window.Icon56MoneyTransferOutline = Icon56MoneyTransferOutline;
window.Icon56NotificationOutline = Icon56NotificationOutline;
window.Icon56UsersOutline = Icon56UsersOutline;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.getRandomUsers = getRandomUsers;
window.importantCountries = importantCountries;
window.getAvatarUrl = getAvatarUrl;
