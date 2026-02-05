"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Play, Loader2 } from "lucide-react";
import Link from "next/link";
import game from "@/lib/games.json";
import Image from "next/image";
import Footer from "./Footer";
import { pageConfig } from "@/shared/configs/page.config";

const ITEMS_PER_PAGE = 12;

export default function GamesPage() {
  const { theme, setTheme } = useTheme();

  // Состояния для пагинации
  const [visibleGames, setVisibleGames] = useState(
    game.slice(0, ITEMS_PER_PAGE)
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const observerTarget = useRef(null);

  // Логика подгрузки
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !loading &&
          visibleGames.length < game.length
        ) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [visibleGames, loading]);

  const loadMore = () => {
    setLoading(true);
    // Имитация задержки сети
    setTimeout(() => {
      const nextItems = game.slice(
        page * ITEMS_PER_PAGE,
        (page + 1) * ITEMS_PER_PAGE
      );
      setVisibleGames((prev) => [...prev, ...nextItems]);
      setPage((prev) => prev + 1);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="dark:bg-[#000000]">
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur bg-background/70 border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">🎮 WAY Games</h1>
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-14 flex flex-col items-center justify-center  md:flex-row gap-12 ">
          <div className=" flex flex-col gap-4 items-start">
            <h2 className="text-4xl font-bold mb-4">Играй и помогай</h2>
            <p className="text-muted-foreground leading-relaxed">
              Реклама позволяет нам запускать всё больше проектов. Играя здесь,
              ты поддерживаешь добрые инициативы.
            </p>
            <Button className="cursor-pointer p-0">
              <Link className="m-2" href={pageConfig.advertising}>Посмотреть рекламу</Link>
            </Button>
          </div>
          <Image
            width={400}
            height={400}
            src="/images/waygames.png"
            className="rounded-2xl shadow-2xl"
            alt="Games"
          />
        </section>

        {/* Games Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <h3 className="text-2xl font-semibold mb-8">Каталог игр</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleGames.map((game) => (
              <Card key={game.id} className="group hover:shadow-xl transition">
                <CardContent className="p-4 flex flex-col gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                    <img src={game?.img} alt="game-img" />
                  </div>
                  <h4 className="font-semibold">{game.title}</h4>
                  <Button className="mt-auto gap-2 cursor-pointer p-0">
                    <Link
                      className="flex w-full h-full items-center justify-center gap-2"
                      href={`${pageConfig.play}/${game.id}`}
                    >
                      <Play size={16} /> Играть
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Триггер для загрузки */}
          <div
            ref={observerTarget}
            className="h-20 flex items-center justify-center mt-10"
          >
            {loading && (
              <Loader2 className="animate-spin text-primary" size={32} />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
