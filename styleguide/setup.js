import React from 'react';
import { sizes as avatarSizes } from '../src/components/Avatar/Avatar';
import { values as colors, titles as colorTitles, keys as colorKeys } from '../src/helpers/colors';
import {platform, IOS, ANDROID} from '../src/lib/platform';
import '../src/styles/common.css';
import '@vkontakte/icons';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon16Add from '@vkontakte/icons/dist/16/add';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Shuffle from '@vkontakte/icons/dist/24/shuffle';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24About from '@vkontakte/icons/dist/24/about';


window.osname = platform();
window.IOS = IOS;
window.ANDROID = ANDROID;

window.Icon24Cancel = Icon24Cancel;
window.Icon16Add = Icon16Add;
window.Icon24Camera = Icon24Camera;
window.Icon24Shuffle = Icon24Shuffle;
window.Icon24Back = Icon24Back;
window.Icon24Search = Icon24Search;
window.Icon24Add = Icon24Add;
window.Icon28ChevronBack = Icon28ChevronBack;
window.Icon24Story = Icon24Story;
window.Icon24MoreVertical = Icon24MoreVertical;
window.Icon24Done = Icon24Done;
window.Icon24Services = Icon24Services;
window.Icon24About = Icon24About;

window.colors = colors;

window.colorTitles = colorTitles;

window.colorKeys = colorKeys;

window.avatarSizes = avatarSizes;
