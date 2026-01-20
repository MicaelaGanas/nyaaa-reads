"use client"

import React from "react";

export default function EmptyState({
  title = "No results",
  description = "We couldn't find anything matching your search.",
  actionLabel,
  onAction,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#051515] border border-[#2bd5d5]/20">
          <svg className="w-8 h-8 text-[#2bd5d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[#e6f7f7] mb-2">{title}</h3>
        <p className="text-sm text-[#93a9a9] mb-4">{description}</p>
        {onAction && actionLabel && (
          <div className="flex justify-center">
            <button
              onClick={onAction}
              className="px-3 py-2 text-sm rounded bg-[#2bd5d5] text-black font-semibold hover:bg-[#19bfbf] transition-colors"
            >
              {actionLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
