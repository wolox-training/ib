import React from 'react';
import {Image} from 'react-native';

import Routes from 'src/constants/routes';
import {IconProps} from 'src/app/interfaces/tabbarIcon';
import libraryIcon from './assets/ic_library.png';
import wishListIcon from './assets/ic_wishlist.png';
import addNewIcon from './assets/ic_add_new.png';
import settingsIcon from './assets/ic_settings.png';
import rentalsIcon from './assets/ic_myrentals.png';
import styles from './styles';

const tabIcons = {
  [Routes.Library]: libraryIcon,
  [Routes.Wishlist]: wishListIcon,
  [Routes.AddNew]: addNewIcon,
  [Routes.Rentals]: rentalsIcon,
  [Routes.Settings]: settingsIcon
};

function TabBarIcon({route, focused}: IconProps) {
  return <Image source={tabIcons[route]} style={focused && styles.active} resizeMode="center" />;
}

export default TabBarIcon;
