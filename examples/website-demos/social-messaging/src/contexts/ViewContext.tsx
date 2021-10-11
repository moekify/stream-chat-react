import React, { useContext, useState } from 'react';

type ViewContextValue = {
  chatsUnreadCount: number;
  isListMentions: boolean;
  isSideDrawerOpen: boolean;
  isNewChat: boolean;
  mentionsUnreadCount: number;
  reactionsOpenId: string;
  setChatsUnreadCount: React.Dispatch<React.SetStateAction<number>>;
  setListMentions: React.Dispatch<React.SetStateAction<boolean>>;
  setMentionsUnreadCount: React.Dispatch<React.SetStateAction<number>>;
  setNewChat: React.Dispatch<React.SetStateAction<boolean>>;
  setReactionsOpenId: React.Dispatch<React.SetStateAction<string>>;
  setSideDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewContext = React.createContext({} as ViewContextValue);

export const ViewProvider: React.FC = ({ children }) => {
  const [chatsUnreadCount, setChatsUnreadCount] = useState(0);
  const [isListMentions, setListMentions] = useState(false);
  const [isSideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isNewChat, setNewChat] = useState(false);
  const [mentionsUnreadCount, setMentionsUnreadCount] = useState(0);
  const [reactionsOpenId, setReactionsOpenId] = useState('');

  const contextValue: ViewContextValue = {
    chatsUnreadCount,
    isListMentions,
    isSideDrawerOpen,
    isNewChat,
    mentionsUnreadCount,
    reactionsOpenId,
    setChatsUnreadCount,
    setListMentions,
    setMentionsUnreadCount,
    setNewChat,
    setReactionsOpenId,
    setSideDrawerOpen,
  };

  return <ViewContext.Provider value={contextValue}>{children}</ViewContext.Provider>;
};

export const useViewContext = () => useContext(ViewContext);
