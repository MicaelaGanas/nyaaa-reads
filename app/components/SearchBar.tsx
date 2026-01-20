"use client"

import React, { useEffect, useState } from "react";

export default function SearchBar({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  const [local, setLocal] = useState(value);

  useEffect(() => setLocal(value), [value]);

  useEffect(() => {
    const t = setTimeout(() => onChange(local), 350);
    return () => clearTimeout(t);
  }, [local, onChange]);

  return (
    <input
      aria-label="Search manga"
      value={local}
      onChange={e => setLocal(e.target.value)}
      placeholder="Search titles — e.g. One Piece"
      className="w-full rounded px-3 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
    />
  );
}
