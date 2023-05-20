export const revalidate = 0;

export default function DashUpdates({ data }: { data: any }) {
  return (
    <div>
      <h2>Updates Box</h2>
      <div>
        {data.map((repo: any) => {
          return (
            <div key={repo.id}>
              <h1>
                {repo.name}
                <span className="text-gray-500"> by {repo.owner.login}</span>
              </h1>
              <p>{repo.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
