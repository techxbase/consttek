import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const heroVideo = "/videos/construction-site-3.mp4";
export const smallHeroVideo = "/videos/construction-site-development.mp4";
