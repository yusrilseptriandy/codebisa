import { useEffect } from 'react';

export function useBodyOverflow(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [open]);
}
