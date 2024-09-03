import { NextApiRequest, NextApiResponse } from "next";

interface IClient {
  routeWithoutBaseUrl: string;
  fetchParams?: RequestInit;
}

export async function client({ routeWithoutBaseUrl, fetchParams = {} }: IClient): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const format = "json";

  if (!baseUrl) {
    throw new Error("API base URL is not defined in environment variables");
  }

  const url = `${baseUrl}${routeWithoutBaseUrl}?format=${format}`;

  return fetch(url, {
    ...fetchParams,
    headers: {
      ...fetchParams.headers,
      "Content-Type": "application/json",
    },
  });
}
