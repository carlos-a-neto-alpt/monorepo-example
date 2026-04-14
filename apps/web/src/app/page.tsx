import { WebLoginForm } from "./fragments/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <h1 className="text-4xl font-bold">Welcome to the Web App!</h1>
      <div className="w-1/2">
        <WebLoginForm />
      </div>
    </main>
  );
}
