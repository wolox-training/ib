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
