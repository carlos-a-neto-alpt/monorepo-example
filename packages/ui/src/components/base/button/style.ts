import { cva } from "class-variance-authority";
import { cn } from "../../../utils";

export const buttonStyle = cva(
  "group w-fit animate-none transition-none flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground sm:hover:bg-primary/90 active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground sm:hover:bg-secondary/80",
        outline:
          "bg-background border border-input text-foreground sm:hover:bg-accent sm:hover:text-accent-foreground active:bg-accent/50",
        ghost:
          "bg-background text-foreground hover:bg-accent/50 hover:text-accent-foreground",
        destructive:
          "bg-destructive text-destructive-foreground sm:hover:bg-destructive/90 active:bg-destructive/80",
        "primary-outline":
          "bg-primary/10 text-primary border border-primary active:bg-primary sm:hover:bg-primary/15",
        "secondary-outline":
          "bg-secondary/10 text-secondary border border-secondary active:bg-secondary sm:hover:bg-secondary/15",
        "destructive-outline":
          "bg-destructive/10 text-destructive border border-destructive active:bg-destructive sm:hover:bg-destructive/15",
        success:
          "bg-emerald-500/10 text-emerald-500 border border-emerald-500 sm:hover:bg-emerald-500/40 active:bg-emerald-500/80",
        info: "bg-sky-500/10 text-sky-500 border border-sky-500 sm:hover:bg-sky-500/40 active:bg-sky-500/80",
        warning:
          "bg-amber-500/10 text-amber-500 border border-amber-500 sm:hover:bg-amber-500/40 active:bg-amber-500/80",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-3",
        lg: "h-12 px-4",
        icon: "h-9 w-9",
        "mobile-icon": cn("h-12 w-12"),
        mobile: cn("w-full", "h-12"),
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const textStyle = cva(
  "text-sm font-normal whitespace-nowrap select-none",
  {
    variants: {
      variant: {
        default: "text-primary-foreground",
        secondary: "text-secondary-foreground",
        outline: "text-foreground sm:group-hover:text-accent-foreground",
        ghost: "text-foreground group-hover:text-accent-foreground",
        destructive: "text-destructive-foreground",
        "primary-outline": "text-primary group-active:text-primary-foreground",
        "secondary-outline":
          "text-secondary group-active:text-secondary-foreground",
        "destructive-outline":
          "text-destructive group-active:text-destructive-foreground",
        success: "text-emerald-500 group-active:text-emerald-200",
        info: "text-sky-500 group-active:text-sky-200",
        warning: "text-amber-500 group-active:text-amber-200",
      },
      textVariant: {
        default: "text-base",
        sm: "text-sm",
        xs: "text-xs",
        lg: "text-lg",
      },
      fontVariant: {
        extralight: "font-extralight",
        light: "font-light",
        default: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-base",
        icon: "",
        "mobile-icon": "",
        mobile: "font-medium text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      fontVariant: "default",
      size: "default",
      textVariant: "default",
    },
  },
);
