import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
import Fragment from '../../Fragment';
import { avatars, profiles } from '../../options';
import { handleTimestamp } from '../../util';
import { AuthorInfo } from '../author-info/author-info';
export class DiscordMessage {
  constructor() {
    /**
     * The message author's username.
     * @default 'User'
     */
    this.author = 'User';
    /**
     * Whether the message author is a bot or not.
     * Only works if `server` is `false` or `undefined`.
     */
    this.bot = false;
    /**
     * Whether the message author is a server crosspost webhook or not.
     * Only works if `bot` is `false` or `undefined`.
     */
    this.server = false;
    /**
     * Whether the bot is verified or not.
     * Only works if `bot` is `true`
     */
    this.verified = false;
    /**
     * Whether the message has been edited or not.
     */
    this.edited = false;
    /**
     * Whether to highlight this message.
     */
    this.highlight = false;
    /**
     * The timestamp to use for the message date.
     */
    this.timestamp = new Date();
    /**
     * Whether to use 24-hour format for the timestamp.
     */
    this.twentyFour = false;
  }
  updateTimestamp(value) {
    const parent = this.el.parentElement;
    return handleTimestamp(value, parent.compactMode, this.twentyFour);
  }
  componentWillRender() {
    const parent = this.el.parentElement;
    this.timestamp = handleTimestamp(this.timestamp, parent.compactMode, this.twentyFour);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const parent = this.el.parentElement;
    if (parent.tagName.toLowerCase() !== 'discord-messages') {
      throw new Error('All <discord-message> components must be direct children of <discord-messages>.');
    }
    const resolveAvatar = (avatar) => { var _a, _b; return (_b = (_a = avatars[avatar]) !== null && _a !== void 0 ? _a : avatar) !== null && _b !== void 0 ? _b : avatars.default; };
    const defaultData = { author: this.author, bot: this.bot, verified: this.verified, server: this.server, roleColor: this.roleColor };
    const profileData = (_a = Reflect.get(profiles, this.profile)) !== null && _a !== void 0 ? _a : {};
    const profile = Object.assign(Object.assign(Object.assign({}, defaultData), profileData), { avatar: resolveAvatar((_b = profileData.avatar) !== null && _b !== void 0 ? _b : this.avatar) });
    const highlightMention = 
    // @ts-expect-error ts doesn't understand this
    Array.from(this.el.children).some((child) => {
      return child.tagName.toLowerCase() === 'discord-mention' && child.highlight && ['user', 'role'].includes(child.type);
    }) || this.highlight;
    return (h(Host, { class: clsx('discord-message', { 'discord-highlight-mention': highlightMention }) },
      h("slot", { name: "reply" }),
      h("div", { class: "discord-message-inner" },
        parent.compactMode && h("span", { class: "discord-message-timestamp" }, this.timestamp),
        h("div", { class: "discord-author-avatar" },
          h("img", { src: profile.avatar, alt: profile.author })),
        h("div", { class: "discord-message-content" },
          !parent.compactMode && (h(Fragment, null,
            h(AuthorInfo, { author: (_c = profile.author) !== null && _c !== void 0 ? _c : '', bot: (_d = profile.bot) !== null && _d !== void 0 ? _d : false, server: (_e = profile.server) !== null && _e !== void 0 ? _e : false, verified: (_f = profile.verified) !== null && _f !== void 0 ? _f : false, roleColor: (_g = profile.roleColor) !== null && _g !== void 0 ? _g : '', compact: parent.compactMode }),
            h("span", { class: "discord-message-timestamp" }, this.timestamp))),
          h("div", { class: "discord-message-body" },
            parent.compactMode && (h(AuthorInfo, { author: (_h = profile.author) !== null && _h !== void 0 ? _h : '', bot: (_j = profile.bot) !== null && _j !== void 0 ? _j : false, server: (_k = profile.server) !== null && _k !== void 0 ? _k : false, verified: (_l = profile.verified) !== null && _l !== void 0 ? _l : false, roleColor: (_m = profile.roleColor) !== null && _m !== void 0 ? _m : '', compact: parent.compactMode })),
            h("span", { class: "discord-message-markup" },
              h("slot", null)),
            this.edited ? h("span", { class: "discord-message-edited" }, "(edited)") : ''),
          h("div", { class: "discord-message-compact-indent" },
            h("slot", { name: "embeds" }),
            h("slot", { name: "attachments" }),
            h("slot", { name: "components" }),
            h("slot", { name: "reactions" }))))));
  }
  static get is() { return "discord-message"; }
  static get originalStyleUrls() { return {
    "$": ["discord-message.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-message.css"]
  }; }
  static get properties() { return {
    "profile": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The id of the profile data to use."
      },
      "attribute": "profile",
      "reflect": false
    },
    "author": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "'User'",
            "name": "default"
          }],
        "text": "The message author's username."
      },
      "attribute": "author",
      "reflect": false,
      "defaultValue": "'User'"
    },
    "avatar": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The message author's avatar. Can be an avatar shortcut, relative path, or external link."
      },
      "attribute": "avatar",
      "reflect": false
    },
    "bot": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the message author is a bot or not.\nOnly works if `server` is `false` or `undefined`."
      },
      "attribute": "bot",
      "reflect": false,
      "defaultValue": "false"
    },
    "server": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the message author is a server crosspost webhook or not.\nOnly works if `bot` is `false` or `undefined`."
      },
      "attribute": "server",
      "reflect": false,
      "defaultValue": "false"
    },
    "verified": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the bot is verified or not.\nOnly works if `bot` is `true`"
      },
      "attribute": "verified",
      "reflect": false,
      "defaultValue": "false"
    },
    "edited": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether the message has been edited or not."
      },
      "attribute": "edited",
      "reflect": false,
      "defaultValue": "false"
    },
    "roleColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp)."
      },
      "attribute": "role-color",
      "reflect": false
    },
    "highlight": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to highlight this message."
      },
      "attribute": "highlight",
      "reflect": false,
      "defaultValue": "false"
    },
    "timestamp": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "DiscordTimestamp",
        "resolved": "Date | null | string",
        "references": {
          "DiscordTimestamp": {
            "location": "import",
            "path": "../../util"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The timestamp to use for the message date."
      },
      "attribute": "timestamp",
      "reflect": true,
      "defaultValue": "new Date()"
    },
    "twentyFour": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Whether to use 24-hour format for the timestamp."
      },
      "attribute": "twenty-four",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "timestamp",
      "methodName": "updateTimestamp"
    }]; }
}
