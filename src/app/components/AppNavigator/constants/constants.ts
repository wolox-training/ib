import Routes from 'src/constants/routes';
import OtherScreen from '../components/OtherScreen';
import LibraryStackScreen from '../components/LibraryStackScreen';

export const TABS = [Routes.Library, Routes.Wishlist, Routes.AddNew, Routes.Rentals, Routes.Settings];
export const SCREENS = {
  [Routes.Library]: LibraryStackScreen,
  [Routes.Wishlist]: OtherScreen,
  [Routes.AddNew]: OtherScreen,
  [Routes.Rentals]: OtherScreen,
  [Routes.Settings]: OtherScreen
};
