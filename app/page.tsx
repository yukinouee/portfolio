import Introduction from "@/components/Introduction";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto px-5">
      <Hero />
      <Introduction />
    </main>
  );
}
