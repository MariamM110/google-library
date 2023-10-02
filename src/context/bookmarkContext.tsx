// BookmarkContext.js
import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookmarkContext = createContext();

export const BookmarkProvider = ({children}) => {
  const [savedBooks, setSavedBooks] = useState([]);

  const getAllSavedItems = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const savedItems = await AsyncStorage.multiGet(keys);
      const parsedBooks = savedItems.map(([key, value]) => JSON.parse(value));
      setSavedBooks(parsedBooks);
    } catch (error) {
      console.error('Error retrieving saved items:', error);
    }
  };

  useEffect(() => {
    getAllSavedItems();
  }, []);

  const addBookToBookmark = async newBook => {
    try {
      const bookJson = JSON.stringify(newBook);
      await AsyncStorage.setItem('savedBookKey', bookJson);
      getAllSavedItems(); // Refresh the saved books list
      console.log('Book saved successfully!');
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <BookmarkContext.Provider value={{savedBooks, addBookToBookmark}}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => {
  return useContext(BookmarkContext);
};
