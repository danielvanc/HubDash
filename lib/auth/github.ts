import { Octokit as createOctokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";

const API_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const Octokit = createOctokit.plugin(throttling);

type ThrottleOptions = {
  method: string;
  url: string;
  request: { retryCount: number };
};

const octokit = new Octokit({
  auth: API_TOKEN,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );
      if (options.request.retryCount === 0) {
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    },
  },
});

export async function getAllStarredRepos() {
  const starredRepos = [];
  for await (const response of octokit.paginate.iterator(
    octokit.activity.listReposStarredByAuthenticatedUser
  )) {
    starredRepos.push(...response.data);
  }

  return starredRepos;
}
