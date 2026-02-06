interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'light';
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  showDot?: boolean;
}

export function StatusBadge({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'sm',
  showDot = false,
}: StatusBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  };

  const colorClasses = {
    solid: {
      primary: 'bg-[#7C9070] text-white',
      success: 'bg-[var(--color-success-700)] text-white',
      warning: 'bg-[var(--color-warning-700)] text-white',
      error: 'bg-[var(--color-error-700)] text-white',
      info: 'bg-[var(--color-informative-700)] text-white',
      neutral: 'bg-[var(--color-neutral-600)] text-white',
    },
    light: {
      primary: 'bg-[rgba(124,144,112,0.08)] text-[#7C9070]',
      success: 'bg-[var(--color-success-50)] text-[var(--color-success-700)]',
      warning: 'bg-[var(--color-warning-50)] text-[var(--color-warning-700)]',
      error: 'bg-[var(--color-error-50)] text-[var(--color-error-700)]',
      info: 'bg-[var(--color-informative-50)] text-[var(--color-informative-700)]',
      neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]',
    },
  };

  const dotColorClasses = {
    primary: 'bg-[#7C9070]',
    success: 'bg-[var(--color-success-700)]',
    warning: 'bg-[var(--color-warning-700)]',
    error: 'bg-[var(--color-error-700)]',
    info: 'bg-[var(--color-informative-700)]',
    neutral: 'bg-[var(--color-neutral-600)]',
  };

  return (
    <div
      className={`inline-flex items-center justify-center gap-1.5 rounded-xl font-secondary font-medium ${sizeClasses[size]} ${colorClasses[variant][color]}`}
    >
      {showDot && variant === 'light' && (
        <div className={`w-1.5 h-1.5 rounded-full ${dotColorClasses[color]}`} />
      )}
      {children}
    </div>
  );
}
