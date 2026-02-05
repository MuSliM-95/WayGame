import Link from "next/link";
import { Send, Youtube } from "lucide-react";
import { pageConfig } from "@/shared/configs/page.config";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Левая часть */}
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WAY Games.{" "}
          <Link href={pageConfig.terms}>Все права защищены.</Link>
        </div>

        {/* Соцсети */}
        <div className="flex items-center gap-6">
          <Link
            href={`${process.env.NEXT_PUBLIC_TELEGRAM}`}
            target="_blank"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
          >
            <Send size={18} />
            Telegram
          </Link>

          <Link
            href={`${process.env.NEXT_PUBLIC_YOUTUBE}`}
            target="_blank"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
          >
            <Youtube size={18} />
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
