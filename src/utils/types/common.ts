import { iconVariants } from "@/components/Icon/Icon"

export type IconType = keyof typeof iconVariants;

export type ContactFormType = {
    name: string,
    email: string,
    topic: string,
    content: string
}