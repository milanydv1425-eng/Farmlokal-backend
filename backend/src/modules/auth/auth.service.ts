import axios from "axios";
import redis from "../../config/redis";

const TOKEN_KEY = "oauth_token";

export const getAccessToken = async () => {
  const cached = await redis.get(TOKEN_KEY);
  if (cached) return cached;

  const response = await axios.post("https://oauth.mock/token", {
    client_id: "client_id",
    client_secret: "client_secret",
    grant_type: "client_credentials",
  });

  const token = response.data.access_token;
  const expiresIn = response.data.expires_in || 3600;

  await redis.set(TOKEN_KEY, token, "EX", expiresIn);
  return token;
};
