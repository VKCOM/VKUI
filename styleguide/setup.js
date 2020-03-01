import '../src/styles/styles.css';

import pkg from '../package';
import { getRandomInt, getRandomUser, importantCountries } from './utils';
import * as VKUI from '../src';

import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon16Chevron from '@vkontakte/icons/dist/16/chevron';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';
import Icon16Like from '@vkontakte/icons/dist/16/like';

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

window.Icon24Add = Icon24Add;
window.Icon24Back = Icon24Back;
window.Icon24Camera = Icon24Camera;
window.Icon24Cancel = Icon24Cancel;
window.Icon24Dismiss = Icon24Dismiss;
window.Icon24Document = Icon24Document;
window.Icon24Done = Icon24Done;
window.Icon24Favorite = Icon24Favorite;
window.Icon24Filter = Icon24Filter;
window.Icon24MoreHorizontal = Icon24MoreHorizontal;
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

window.Icon56MentionOutline = Icon56MentionOutline;
window.Icon56MessageReadOutline = Icon56MessageReadOutline;
window.Icon56MoneyTransferOutline = Icon56MoneyTransferOutline;
window.Icon56NotificationOutline = Icon56NotificationOutline;
window.Icon56UsersOutline = Icon56UsersOutline;
