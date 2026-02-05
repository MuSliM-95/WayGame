import { notFound } from "next/navigation";
import games from "@/lib/games.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { pageConfig } from "@/shared/configs/page.config";
import { BackButton } from "@/components/ui/back-button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// ✅ SSG
export function generateStaticParams() {
  return games.map((game) => ({
    id: game.id.toString(),
  }));
}

// ✅ SEO
export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PlayPage({ params }: PageProps) {
  const { id } = await params;

  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    notFound();
  }

  return (
    <main className="w-screen h-screen">
      <BackButton />
      <iframe
        src={game.url}
        title={game.title}
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      />
    </main>
  );
}
