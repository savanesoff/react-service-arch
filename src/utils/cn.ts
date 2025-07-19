import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
/**
 * Tailwind classes merge utility
 * Allows for a proper merging of tw classes
 * @example
 * ```ts
 * import { cn, ViewProps } from 'react-kit'
 * const MyComponent = ({ className, ...props }:ViewProps) => {
 *   return (
 *     <View className={cn('text-red-500', 'bg-blue-500', 'p-4', 'rounded-lg', className)}>
 *       Hello World
 *     </View>
 *   )
 * }
 * ```
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
