import React, { memo } from "react";
import { Text } from "react-native";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  };
}

export function FriendComponent({ data }: Props) {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
