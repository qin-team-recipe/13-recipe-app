"use client";

import { FC } from "react";

import { TbShoppingCartPlus, TbShoppingCartX } from "react-icons/tb";

type Props = {
  index: number;
  text: string;
  isInCart: boolean;
};

// レシピ材料の各項目
export const IngredientListItem: FC<Props> = ({ index, text, isInCart }) => {
  return (
    <div key={index} className="flex w-full justify-between gap-x-2 border-b py-4">
      <div className="text-xl">{text}</div>
      <div className="text-xl text-slate-500">
        {isInCart ? <TbShoppingCartX size={24} className="text-orange-600" /> : <TbShoppingCartPlus size={24} />}
      </div>
    </div>
  );
};
