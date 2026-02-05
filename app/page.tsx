import GamesPage from "@/features/games-page/GamesPage";

export const dynamic = "force-static"; // Явно включаем SSG

export default function Home() {
  return <GamesPage />;
}
