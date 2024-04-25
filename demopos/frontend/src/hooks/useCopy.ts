import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export const useCopy = (resetInterval: number): [isCopied: boolean, handleCopy: (text: string) => void] => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    copy(text);
    setIsCopied(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }

    // called when hook is destroyed
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
};
