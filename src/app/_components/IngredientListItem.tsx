import { FC } from "react";

type Props = {
  index: number;
  text: string;
};

// レシピ材料の各項目
export const IngredientListItem: FC<Props> = ({ index, text }) => {
  return (
    <div key={index} className="flex w-full justify-between gap-x-2 border-b  py-4">
      <div className="text-xl">{text}</div>
      <div className="text-xl text-slate-500">🛒</div>
    </div>
  );
};
