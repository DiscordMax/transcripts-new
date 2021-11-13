'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-72152aae.js');

/*
 Stencil Client Patch Esm v2.8.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["discord-action-row_17.cjs",[[4,"discord-action-row"],[0,"discord-attachment",{"url":[1],"height":[2],"width":[2],"alt":[1]}],[4,"discord-attachments"],[4,"discord-button",{"emoji":[1],"emojiName":[1,"emoji-name"],"url":[1],"disabled":[4],"type":[1]}],[0,"discord-command",{"profile":[1],"author":[1],"avatar":[1],"roleColor":[1,"role-color"],"command":[1]}],[4,"discord-embed",{"color":[1],"authorName":[1,"author-name"],"authorImage":[1,"author-image"],"authorUrl":[1,"author-url"],"embedTitle":[1,"embed-title"],"url":[1],"thumbnail":[1],"image":[1],"video":[1],"provider":[1],"footerImage":[1,"footer-image"],"timestamp":[1537]}],[4,"discord-embed-field",{"fieldTitle":[1,"field-title"],"inline":[4],"inlineIndex":[2,"inline-index"]}],[4,"discord-embed-fields"],[0,"discord-invite",{"icon":[1],"name":[1],"url":[1],"online":[2],"members":[2],"verified":[4],"partnered":[4]}],[4,"discord-mention",{"highlight":[4],"color":[1],"type":[1]}],[4,"discord-message",{"profile":[1],"author":[1],"avatar":[1],"bot":[4],"server":[4],"verified":[4],"edited":[4],"roleColor":[1,"role-color"],"highlight":[4],"timestamp":[1537],"twentyFour":[4,"twenty-four"]}],[4,"discord-messages",{"lightTheme":[1540,"light-theme"],"noBackground":[1540,"no-background"],"compactMode":[1540,"compact-mode"]}],[0,"discord-reaction",{"emoji":[1],"name":[1],"count":[1026],"reacted":[4],"interactive":[4]}],[4,"discord-reactions"],[4,"discord-reply",{"profile":[1],"author":[1],"avatar":[1],"bot":[4],"server":[4],"verified":[4],"edited":[4],"roleColor":[1,"role-color"],"command":[4],"attachment":[4],"mentions":[4]}],[4,"discord-system-message",{"timestamp":[1537],"type":[1],"channelName":[4,"channel-name"]}],[0,"discord-tenor-video",{"url":[1],"height":[2],"width":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
