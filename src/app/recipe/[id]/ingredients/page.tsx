import { IngredientListItem } from "@/app/_components/IngredientListItem";

// レシピ詳細（材料タブ）
export default function Ingredients() {
  return (
    <div className="py-6">
      <div className="flex justify-between ">
        <div className="text-2xl font-bold">2人前</div>
        <div className="text-xl font-bold text-slate-500">まとめてお買い物に追加</div>
      </div>
      <div>
        {ingredients.map((ingredient, i) => {
          return <IngredientListItem key={i} index={i} text={ingredient.text} />;
        })}
      </div>
    </div>
  );
}

// ダミーデータ
const ingredients = [
  {
    text: "玉ねぎ",
  },
  {
    text: "にんじん",
  },
  {
    text: "じゃがいも",
  },
  {
    text: "豚肉",
  },
];
