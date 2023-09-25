import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {Book} from './nytTypes';
import type {Item} from './bookTypes';

export type RootStackParamList = {
  Tabs?: NavigatorScreenParams<BottomTabParams>;
  Welcome: undefined;
  Login: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BottomTabParams = {
  Feed: NavigatorScreenParams<FeedTabParams>;
  Search: NavigatorScreenParams<SearchTabParams>;
  Bookmark: NavigatorScreenParams<BookmarkTabParams>;
  Account: NavigatorScreenParams<AccountTabsParams>;
};

export type FeedTabParams = {
  FeedPage: undefined;
  Book: {book: Book};
};

export type FeedTabScreenProps<T extends keyof FeedTabParams> =
  CompositeScreenProps<
    BottomTabScreenProps<FeedTabParams, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type SearchTabParams = {
  SearchPage: undefined;
  Book: {book: Item};
};

export type SearchTabScreenProps<T extends keyof SearchTabParams> =
  CompositeScreenProps<
    BottomTabScreenProps<SearchTabParams, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type BookmarkTabParams = {
  Bookmark: undefined;
};

export type BookmarkTabScreenProps<T extends keyof BookmarkTabParams> =
  CompositeScreenProps<
    BottomTabScreenProps<BookmarkTabParams, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type AccountTabsParams = {
  Account: undefined;
};

export type AccountTabScreenProps<T extends keyof AccountTabsParams> =
  CompositeScreenProps<
    BottomTabScreenProps<AccountTabsParams, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
