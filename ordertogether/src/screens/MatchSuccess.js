import React, {useState} from 'react';
import {View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

const initialMessages = [
  {
    _id: 2,
    text: '안녕하세요! 어디서 수령하는게 편하신가요?',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'def',
      // avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: 1,
    text: '안녕하세요 ^^',
    createdAt: new Date(),
    user: {
      _id: 3,
      name: 'abc',
      // avatar: 'https://placeimg.com/140/140/any',
    },
  },
];

const getResponse1 = () => ({
  _id: 4,
  text: '좋아요. 그렇게 해요 ㅎㅎ',
  createdAt: new Date(),
  user: {
    _id: 3,
    name: 'abc',
  },
});

const getResponse2 = () => ({
  _id: 5,
  text: '저도 좋습니다!',
  createdAt: new Date(),
  user: {
    _id: 2,
    name: 'def',
  },
});

const MatchSuccess = ({routes, navigation}) => {
  const [messages, setMessages] = useState(initialMessages);

  const wait = (ms) =>
    new Promise((resolve) => {
      setTimeout(() => resolve('done'), ms);
    });

  const onSend = async (newMessages) => {
    setMessages(GiftedChat.append(messages, newMessages));
    await wait(1000);
    const response1 = getResponse1();
    setMessages(GiftedChat.append(messages, [response1, ...newMessages]));
    await wait(1000);
    setMessages(
      GiftedChat.append(messages, [getResponse2(), response1, ...newMessages]),
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
    />
  );
};

export default MatchSuccess;
