import { BackButton } from "@/components/ui/back-button";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#000000] text-gray-800 dark:text-gray-200 py-12 px-6 transition-colors duration-300">
      <BackButton />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl dark:shadow-2xl border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
          Правовая информация
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
              01. Контент
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Все игры на платформе{" "}
              <span className="font-semibold">WayGames</span> транслируются
              через технологию{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">
                iframe
              </code>
              . Мы не являемся владельцами данного контента; все права
              принадлежат оригинальным разработчикам и издателям.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
              02. Реклама
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Внутри игровых сессий может отображаться реклама от поставщиков
              контента. <strong>WayGames</strong> не модерирует эти объявления и
              не несет ответственности за их содержание.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-indigo-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
              03. Ответственность
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Сайт функционирует как витрина. Мы не храним исполняемые файлы на
              своих серверах. Используя данный ресурс, вы соглашаетесь с тем,
              что техническая поддержка игр осуществляется на стороне их
              провайдеров.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-700 text-center">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">
            © 2026 WAY Games. Все права защищены.
          </p>
        </div>
      </div>
    </div>
  );
}
