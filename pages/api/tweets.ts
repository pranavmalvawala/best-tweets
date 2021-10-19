import type { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import TwitterApi, { TweetV2, UserV2 } from "twitter-api-v2";

type Tweets = {
  tweets: TweetV2[];
  user: UserV2;
};

const client = new TwitterApi(process.env.BEARER_TOKEN || "").readOnly;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Tweets | { error: string }>) {
  try {
    const { handle } = req.query;

    if (!handle) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: "Looks like you forgot to specify the handle!" });
      return;
    }

    const user = await client.v2.userByUsername(handle as string, { "user.fields": ["profile_image_url"] });
    const tweets = await client.v2.userTimeline(user.data.id, {
      "tweet.fields": "created_at",
      exclude: ["replies", "retweets"],
    });

    res.status(StatusCodes.OK).json({ tweets: tweets.data.data, user: user.data });
  } catch (err: any) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
}
