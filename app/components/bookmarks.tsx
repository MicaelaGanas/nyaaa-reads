"use client"

import React, { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "md_bookmarks";

type Bookmark = { id: string; title: string; url: string };

export default function Bookmarks({ visible }: { visible?: boolean }) {
  const [list, setList] = useState<Bookmark[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setList(JSON.parse(raw));
    } catch (e) {
      setList([]);
    }
  }, []);

  const remove = useCallback((id: string) => {
    const next = list.filter((l) => l.id !== id);
    setList(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, [list]);

  if (visible === false) return null;

  return (
    <aside className="p-2 border rounded bg-white/60 dark:bg-gray-900/60">
      <h4 className="font-semibold mb-2">Bookmarks</h4>
      {list.length === 0 ? (
        <div className="text-sm text-gray-500">No bookmarks saved</div>
      ) : (
        <ul className="space-y-2">
          {list.map((b) => (
            <li key={b.id} className="flex items-center justify-between gap-2">
              <div className="text-sm">{b.title}</div>
              <div className="flex gap-2">
                <a className="text-xs text-blue-600" href={b.url} target="_blank" rel="noreferrer">Open</a>
                <button className="text-xs text-red-600" onClick={() => remove(b.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
