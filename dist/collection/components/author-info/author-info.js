import { h } from '@stencil/core';
import Fragment from '../../Fragment';
import VerifiedTick from '../svgs/verified-tick';
export const AuthorInfo = ({ author, bot, server, roleColor, verified, compact }) => (h("span", { class: "discord-author-info" },
  !compact && (h("span", { class: "discord-author-username", style: { color: roleColor } }, author)),
  h(Fragment, null,
    bot && !server && (h("span", { class: "discord-application-tag" },
      verified && h(VerifiedTick, null),
      "Bot")),
    server && !bot && h("span", { class: "discord-application-tag" }, "Server")),
  compact && (h("span", { class: "discord-author-username", style: { color: roleColor } }, author))));
