import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <h1>Dashboard</h1>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
