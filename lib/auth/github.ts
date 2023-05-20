import { Octokit as createOctokit } from "@octokit/rest";
import { throttling } from "@octokit/plugin-throttling";
import { client } from "lib/client";

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
    onRateLimit(retryAfter, options, octokit, retryCount) {
      // console.warn(
      //   `Request quota exhausted for request ${options.method} ${options.url}`
      // );
      // if (options.request.retryCount === 0) {
      //   console.log(`Retrying after ${retryAfter} seconds!`);
      //   return true;
      // }
    },
    onAbuseLimit(retryAfter, options, octokit) {
      // does not retry, only logs a warning
      // console.warn(
      //   `Abuse detected for request ${options.method} ${options.url}`
      // );
    },
  },
});

// TODO: Create a fn that stores data of users starredRepos to save on api requests?

export function getAllStarredRepos(page: number = 1, perPage: number = 5) {
  return octokit.rest.activity.listReposStarredByAuthenticatedUser({
    per_page: perPage,
    page,
  });
}

export async function getLatestReleases() {
  const starredRepos = await getAllStarredRepos();

  const allActiveRepos = starredRepos.data
    .filter((repo) => !repo.archived && !repo.disabled)
    .map((repo) => ({
      id: repo.id,
      owner: repo.owner.login,
      repo: repo.name,
      url: repo.html_url,
      description: repo.description,
      repo_image: repo.owner.avatar_url,
    }));

  const releases = await Promise.all(
    allActiveRepos.map(async (repo) => {
      return {
        ...repo,
        release: await octokit.rest.repos.listReleases({
          owner: repo.owner,
          repo: repo.repo,
          per_page: 1,
          page: 1,
        }),
      };
    })
  );

  return releases
    .filter(
      (release) =>
        release.release.data.length > 0 &&
        release.release.data[0].prerelease === false &&
        !release.release.data[0].draft
    )
    .map((repo) => ({
      ...repo,
      release: repo.release.data[0],
    }));
}
