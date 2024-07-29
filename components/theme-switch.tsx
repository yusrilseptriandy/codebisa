'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { AiOutlineLoading } from 'react-icons/ai';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <AiOutlineLoading className="animate-spin" />;

  if (resolvedTheme === 'dark') {
    return (
      <FiSun
        className="text-2xl cursor-pointer"
        onClick={() => setTheme('light')}
      />
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <FiMoon
        className="text-2xl cursor-pointer"
        onClick={() => setTheme('dark')}
      />
    );
  }
}
