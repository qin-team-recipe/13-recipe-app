import { FC } from "react";

type Props = {
  index: number;
  text: string;
  remarks: string;
};

// レシピ手順の各項目
export const RecipeStepItem: FC<Props> = ({ index, text, remarks }) => {
  return (
    <div key={index} className="flex w-full gap-x-2 border-b px-4 py-2">
      <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-white">
        {index + 1}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-base">{text}</p>
        <p className="text-xs text-slate-500">{remarks}</p>
      </div>
    </div>
  );
};
