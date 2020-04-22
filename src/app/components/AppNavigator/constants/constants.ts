<<<<<<< HEAD
import CustomHeader from "../components/LibraryTabScreen/components/CustomHeader";
import CustomBackButton from "../components/LibraryTabScreen/components/CustomBackButton";
import { Platform } from "react-native";
import { white } from "src/constants/colors";
import { StackNavigationOptions } from "@react-navigation/stack";

export const BASE_OPTIONS = {
  headerBackground: CustomHeader,
  headerLeft: (props: any) => CustomBackButton({...props}),
  headerTintColor: white,
  headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
} as StackNavigationOptions;
=======
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
>>>>>>> Added a TabBar, refactored the Stack navigation
