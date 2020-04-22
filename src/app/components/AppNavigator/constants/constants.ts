import Routes from 'src/constants/routes';
import LibraryStackScreen from '../components/LibraryStackScreen';
import OtherScreen from '../components/OtherScreen';

export const TABS = [Routes.Library, Routes.Wishlist, Routes.AddNew, Routes.Rentals, Routes.Settings];
export const SCREENS = {
  [Routes.Library]: LibraryStackScreen,
  [Routes.Wishlist]: OtherScreen,
  [Routes.AddNew]: OtherScreen,
  [Routes.Rentals]: OtherScreen,
  [Routes.Settings]: OtherScreen
};
