'use client';

import { ReactNode } from 'react';

interface SocialLoginButtonProps {
  onClick: () => void;
  disabled?: boolean;
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function SocialLoginButton({
  onClick,
  disabled = false,
  icon,
  label,
  className = ''
}: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 active:scale-[0.98] transition disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

