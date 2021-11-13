export interface Avatars {
  default: 'blue' | 'gray' | 'green' | 'orange' | 'red';
  blue?: string;
  gray?: string;
  green?: string;
  orange?: string;
  red?: string;
  [key: string]: string | undefined;
}
export interface Profile {
  author?: string;
  avatar?: string;
  bot?: boolean;
  verified?: boolean;
  server?: boolean;
  roleColor?: string;
}
export interface DiscordMessageOptions {
  avatars?: Avatars;
  profiles?: {
    [key: string]: Profile;
  };
  defaultTheme?: string;
  defaultMode?: string;
  defaultBackground?: 'discord' | 'none';
}
export declare const defaultDiscordAvatars: Omit<Avatars, 'default'>;
export declare const avatars: Avatars;
export declare const profiles: {
  [key: string]: Profile;
};
export declare const defaultTheme: string;
export declare const defaultMode: string;
export declare const defaultBackground: string;
declare global {
  interface Window {
    $discordMessage: DiscordMessageOptions;
  }
}
