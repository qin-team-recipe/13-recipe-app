// レシピ詳細のレイアウト
export default function RecipeDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-[480px]">
      <div>
        <div className="aspect-square bg-orange-300 text-center">ここにレシピ画像入る</div>
        <div className="space-y-3 p-4">
          <h1 className="text-2xl font-semibold">シェフのレシピ</h1>
          <p>
            吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
          </p>
          <div className="flex items-center gap-x-4">
            <a href="#" className="group flex cursor-pointer items-center gap-x-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-300 text-white"></div>
              <p className="group-hover:underline">しまぶーシェフ</p>
            </a>
            <p>
              <span className="mr-1 font-bold">1,234</span>お気に入り
            </p>
          </div>
          <button className="rounded-md bg-orange-600 px-4 py-1 text-white">お気に入りに追加</button>
        </div>
        {/* タブメニュー */}
        <div className="border-b">
          <nav className="flex">
            <a className="flex-1 py-2 text-center font-bold" href="/recipe/1">
              作り方
            </a>
            <a className="flex-1 py-2 text-center font-bold" href="/recipe/1/ingredients">
              材料
            </a>
          </nav>
        </div>
        {children}
      </div>
    </main>
  );
}
