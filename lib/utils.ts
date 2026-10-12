import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateExperience(startDateStr: string = '2025-01-02'): string {
  const start = new Date(startDateStr);
  const now = new Date();

  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) {
    months--;
  }

  if (months < 1) {
    return '1 mo';
  }
  if (months < 12) {
    return `${months} mos`;
  }

  const rawYears = months / 12;
  const rounded = Math.floor(rawYears * 2) / 2;
  if (rounded % 1 === 0) {
    return `${rounded}+`;
  }
  return `${rounded.toFixed(1)}+`;
}
