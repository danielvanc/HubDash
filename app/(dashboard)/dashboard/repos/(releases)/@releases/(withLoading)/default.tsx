import Image from "next/image";
import Link from "next/link";
import { getLatestReleases } from "@/lib/auth/github";

// export const revalidate = 0;

export default async function DefaultReleasesPage() {
  const releases = await getLatestReleases();

  return (
    <div>
      {releases.map((repo: any) => {
        return (
          <div key={repo.id} className="flex gap-x-5 gap-y-10">
            <span>
              <Image width={52} height={52} src={repo.repo_image} alt="" />
            </span>
            <span>
              <Link href={repo.release.html_url} target={"_blank"}>
                {repo.repo}
              </Link>
            </span>
            <span>version: {repo.release.tag_name}</span>
            <span>published: {repo.release.published_at}</span>
            {/* <span>description: {repo.release.body}</span> */}
          </div>
        );
      })}
    </div>
  );
}
