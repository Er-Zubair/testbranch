export type ClassValue = string | number | false | null | undefined;

/**
 * Minimal className joiner so we don't need an extra dependency for
 * something this small. Falsy values are dropped.
 */
export function clsx(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
