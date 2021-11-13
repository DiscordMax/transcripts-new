export declare type DiscordTimestamp = Date | string | null;
export declare const handleTimestamp: (value: DiscordTimestamp, useTime?: boolean, hour24?: boolean) => string | null;
export declare const findSlotElement: (elements: HTMLCollection, name: string) => Element | undefined;
export declare const IMAGE_EXTENSION: RegExp;
export declare const validateImageExtension: (url: string) => void;
