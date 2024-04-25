import React, { useEffect } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval: number): [isCopied: boolean, handleCopy: (text: string) => void] {
  const [isCopied, setIsCopied] = React.useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setIsCopied(false), resetInterval);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  const handleCopy = React.useCallback((text: string) => {
    copy(text);
    setIsCopied(true);
  }, []);
  return [isCopied, handleCopy];
}
