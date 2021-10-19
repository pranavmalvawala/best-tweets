import { Box, HStack, Stack, Heading, Text, Image, VStack } from "@chakra-ui/react";
import { TweetV2, UserV2 } from "twitter-api-v2";
import { getDisplayDuration } from "../utils/dateHelper";

export interface Props {
  tweets: TweetV2[];
  user: UserV2;
}

export default function Tweets({ tweets, user }: Props) {
  console.log({ tweets, user });
  return (
    <Stack spacing={2} style={{ marginTop: "3rem" }}>
      {tweets.map((t) => (
        <Tweet
          name={user.name}
          handle={user.username}
          image={user.profile_image_url || ""}
          text={t.text}
          created_at={t.created_at || ""}
          key={t.id}
        />
      ))}
    </Stack>
  );
}

interface TweetProps {
  name: string;
  handle: string;
  text: string;
  image: string;
  created_at: string;
}

function Tweet({ name, handle, text, image, created_at }: TweetProps) {
  return (
    <Box p={5} borderWidth="1px" borderRadius="lg" maxWidth="md">
      <HStack alignItems="flex-start">
        <Image src={image} alt="profile picture" borderRadius="full" />
        <VStack alignItems="start">
          <HStack>
            <Text fontWeight="bold">{name}</Text>
            <Text color="gray.500">
              @{handle} · {getDisplayDuration(new Date(created_at))}
            </Text>
          </HStack>
          <Text>{text}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}
