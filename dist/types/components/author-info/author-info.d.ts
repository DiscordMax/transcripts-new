import { FunctionalComponent } from '../../stencil-public-runtime';
interface AuthorInfoProps {
  /**
   * The name of the author
   */
  author: string;
  /**
   * Whether this author is a bot. Only works if `server` is `false` or `undefined`.
   */
  bot: boolean;
  /**
   * Whether this author is a `server` crosspost webhook. Only works if `bot` is `false` or `undefined`.
   */
  server: boolean;
  /**
   * The colour of the author, which comes from their highest role
   */
  roleColor: string;
  /**
   * Whether this bot is verified by Discord. Only works if `bot` is `true`
   */
  verified: boolean;
  /**
   * Whether to reverse the order of the author info for compact mode.
   */
  compact: boolean;
}
export declare const AuthorInfo: FunctionalComponent<AuthorInfoProps>;
export {};
