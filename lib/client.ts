const apiURL = process.env.NEXT_PUBLIC_API_URL;
const user = process.env.NEXT_PUBLIC_USER;
const pwd = process.env.NEXT_PUBLIC_PASSWORD;

const headers = {
  Authorization: `Basic ${btoa(user + ":" + pwd)}`,
  "Content-Type": "application/json",
};

export async function client(endpoint?: string, customConfig?: clientConfig) {
  const config = {
    method: "GET",
    body: undefined,
    headers,
    ...customConfig,
  };

  return fetch(`${apiURL}${endpoint ?? ""}`, config).then(async (response) => {
    if (response.status === 401) {
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export default async function getData(
  endpoint?: string,
  config?: clientConfig
) {
  async function getClient() {
    return await client(endpoint, config);
  }

  return await getClient();
}
