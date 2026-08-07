import type { OrderStage } from '@/types';
import { clsx } from '@/lib/clsx';

export function OrderProgressTracker({ stages }: { stages: OrderStage[] }) {
  const completedCount = stages.filter((s) => s.status !== 'pending').length;
  const progressPercent = stages.length > 1 ? (completedCount - 0.5) / (stages.length - 1) * 100 : 0;

  return (
    <div className="mt-stack-md w-full max-w-md pb-6">
      <div className="relative flex items-center justify-between">
        <div className="absolute left-0 top-1/2 z-0 h-1 w-full -translate-y-1/2 rounded-full bg-surface-container-highest" />
        <div
          className="absolute left-0 top-1/2 z-0 h-1 -translate-y-1/2 rounded-full bg-primary-container transition-all duration-500 ease-in-out"
          style={{ width: `${Math.max(0, Math.min(100, progressPercent))}%` }}
        />
        {stages.map((stage) => (
          <div key={stage.id} className="relative z-10 flex flex-col items-center gap-2">
            <div
              className={clsx(
                'flex items-center justify-center rounded-full shadow-sm',
                stage.status === 'complete' && 'h-8 w-8 bg-primary-container text-on-primary-container',
                stage.status === 'active' &&
                  '-ml-1 h-10 w-10 animate-pulse border-4 border-primary-container bg-white text-primary-container shadow-md',
                stage.status === 'pending' && 'h-8 w-8 bg-surface-container-highest text-outline',
              )}
            >
              <span
                className={stage.status === 'active' ? 'material-symbols-outlined text-base' : 'material-symbols-outlined text-sm'}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {stage.icon}
              </span>
            </div>
            <span
              className={clsx(
                'font-label-sm absolute -bottom-6 whitespace-nowrap',
                stage.status === 'active' ? 'font-label-bold text-primary' : 'text-on-surface',
                stage.status === 'pending' && 'text-outline',
              )}
            >
              {stage.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
