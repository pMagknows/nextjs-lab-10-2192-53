import Hello from "./components/Hello";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <main>
        <Counter/>
      </main>
    </div>
  );
}
