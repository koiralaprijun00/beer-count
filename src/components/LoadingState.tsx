export const LoadingState = ({ label = 'Loading...' }: { label?: string }) => (
  <div className="flex items-center justify-center py-10 text-sm text-slate-500">
    <div className="h-4 w-4 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" aria-hidden />
    <span className="ml-2">{label}</span>
  </div>
);
