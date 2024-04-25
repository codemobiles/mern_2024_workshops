import { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopy = (resetInterval: number): [isCopied: boolean, handleCopy: (text: string) => void] => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {};

  return [isCopied, handleCopy];
};
