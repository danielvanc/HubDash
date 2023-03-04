import Login from "components/providers/Login";
import "server-only";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl">Welcome</h1>
      <Login />
    </div>
  );
}
