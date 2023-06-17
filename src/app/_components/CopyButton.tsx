"use client";

import { FC } from "react";

import { TbCopy } from "react-icons/tb";

type MethodItem = {
  text: string;
  remarks: string;
};

type Props = {
  methodItems: MethodItem[];
};

export const CopyButton: FC<Props> = ({ methodItems }) => {
  const copyToClipboard = () => {
    // テキストを結合
    const methodText = methodItems.reduce((prev, current, index) => {
      return prev + `${index + 1}. ${current.text}\n${current.remarks}\n\n`;
    }, "");

    // クリップボードにコピー
    navigator.clipboard.writeText(methodText);
    alert("レシピ手順をコピーしました");
  };

  return (
    <button onClick={copyToClipboard}>
      <div className="flex items-center text-base text-blue-500">
        <TbCopy size={20} />
        <div>コピーする</div>
      </div>
    </button>
  );
};
