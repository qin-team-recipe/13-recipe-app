import { CopyButton } from "@/app/_components/CopyButton";
import { IngredientListItem } from "@/app/_components/IngredientListItem";

// レシピ詳細（材料タブ）
export default function Ingredients() {
  return (
    <div className="py-6">
      <div className="flex justify-between px-4">
        <div className="text-2xl font-bold">2人前</div>
        <div className="text-xl font-bold text-slate-500">まとめてお買い物に追加</div>
      </div>
      <div className="mt-2">
        {ingredients.map((ingredient, i) => {
          return <IngredientListItem key={i} index={i} text={ingredient.text} isInCart={ingredient.isInCart} />;
        })}
      </div>
      <div className="my-4 flex justify-end"></div>
    </div>
  );
}

// ダミーデータ
const ingredients = [
  {
    text: "玉ねぎ",
    isInCart: false,
  },
  {
    text: "にんじん",
    isInCart: true,
  },
  {
    text: "じゃがいも",
    isInCart: true,
  },
  {
    text: "豚肉",
    isInCart: false,
  },
];
