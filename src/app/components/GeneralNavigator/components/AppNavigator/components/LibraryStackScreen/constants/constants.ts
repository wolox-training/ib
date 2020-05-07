import CustomHeader from "../components/CustomHeader";
import { Platform } from "react-native";
import { white } from "src/constants/colors";
import { StackNavigationOptions } from "@react-navigation/stack";

export const BASE_OPTIONS = {
  headerBackground: CustomHeader,
  headerTintColor: white,
  headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
} as StackNavigationOptions;
