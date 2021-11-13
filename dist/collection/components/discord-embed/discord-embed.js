import { Component, Element, h, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';
import Fragment from '../../Fragment';
import { findSlotElement, handleTimestamp } from '../../util';
export class DiscordEmbed {
  updateTimestamp(value) {
    if (!value || isNaN(new Date(value).getTime()))
      return null;
    return handleTimestamp(new Date(value));
  }
  componentWillRender() {
    this.timestamp = this.updateTimestamp(this.timestamp);
  }
  render() {
    const footerSlot = findSlotElement(this.el.children, 'footer');
    return (h("div", { class: "discord-embed" },
      h("div", { style: { 'background-color': this.color }, class: "discord-left-border" }),
      h("div", { class: "discord-embed-root" },
        h("div", { class: "discord-embed-wrapper" },
          h("div", { class: "discord-embed-grid" },
            this.provider && (h("div", { class: "discord-embed-provider" },
              h(Fragment, null, this.provider))),
            this.authorName && (h("div", { class: "discord-embed-author" },
              this.authorImage ? h("img", { src: this.authorImage, alt: "", class: "discord-author-image" }) : '',
              this.authorUrl ? (h("a", { href: this.authorUrl, target: "_blank", rel: "noopener noreferrer" }, this.authorName)) : (h(Fragment, null, this.authorName)))),
            this.embedTitle && (h("div", { class: "discord-embed-title" }, this.url ? (h("a", { href: this.url, target: "_blank", rel: "noopener noreferrer" }, this.embedTitle)) : (h(Fragment, null, this.embedTitle)))),
            h("div", { class: "discord-embed-description" },
              h("slot", null)),
            h("slot", { name: "fields" }),
            this.image || this.video ? (h("div", { class: clsx('discord-embed-media', { 'discord-embed-media-video': Boolean(this.video) }) }, this.renderMedia())) : null,
            this.thumbnail ? h("img", { src: this.thumbnail, alt: "", class: "discord-embed-thumbnail" }) : '',
            (footerSlot || this.timestamp) && (h("div", { class: "discord-embed-footer" },
              footerSlot && this.footerImage ? h("img", { src: this.footerImage, alt: "", class: "discord-footer-image" }) : '',
              h(Fragment, null,
                h("slot", { name: "footer" }),
                footerSlot && this.timestamp ? h("span", { class: "discord-footer-separator" }, "\u2022") : '',
                this.timestamp ? h(Fragment, null, this.timestamp) : ''))))))));
  }
  renderMedia() {
    if (this.video) {
      return (h("video", { controls: true, muted: true, preload: "none", poster: this.image, src: this.video, height: "225", width: "400", class: "discord-embed-video" },
        h("img", { src: this.image, alt: "Discord embed media", class: "discord-embed-image" })));
    }
    else if (this.image) {
      return h("img", { src: this.image, alt: "Discord embed media", class: "discord-embed-image" });
    }
    return null;
  }
  static get is() { return "discord-embed"; }
  static get originalStyleUrls() { return {
    "$": ["discord-embed.css"]
  }; }
  static get styleUrls() { return {
    "$": ["discord-embed.css"]
  }; }
  static get properties() { return {
    "color": {
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
        "text": "The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp)."
      },
      "attribute": "color",
      "reflect": false
    },
    "authorName": {
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
        "text": "The author's name."
      },
      "attribute": "author-name",
      "reflect": false
    },
    "authorImage": {
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
        "text": "The author's avatar URL."
      },
      "attribute": "author-image",
      "reflect": false
    },
    "authorUrl": {
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
        "text": "The URL to open when you click on the author's name."
      },
      "attribute": "author-url",
      "reflect": false
    },
    "embedTitle": {
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
        "text": "The embed title."
      },
      "attribute": "embed-title",
      "reflect": false
    },
    "url": {
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
        "text": "The URL to open when you click on the embed title."
      },
      "attribute": "url",
      "reflect": false
    },
    "thumbnail": {
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
        "text": "The thumbnail image to use."
      },
      "attribute": "thumbnail",
      "reflect": false
    },
    "image": {
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
        "text": "The embed image to use (displayed at the bottom)."
      },
      "attribute": "image",
      "reflect": false
    },
    "video": {
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
            "text": "YouTube videos will not be playable on your projects, this is due to YouTube using DASH to play their videos rather\nthan providing the raw media stream (in a container such as mp4 or ogg). Links to regular MP4 files (such as on a CDN) however\nwill autoplay!",
            "name": "important"
          }, {
            "text": "Video takes priority over image.",
            "name": "note"
          }, {
            "text": "Providing both a video and an image will ensure the image is shown to users with browsers\nthat do not support HTML5 video playback.",
            "name": "remark"
          }, {
            "text": "https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_stereo.ogg",
            "name": "example"
          }],
        "text": "The embed video to use (displayed at the bottom, same slot as the image)."
      },
      "attribute": "video",
      "reflect": false
    },
    "provider": {
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
            "text": "YouTube",
            "name": "example"
          }],
        "text": "The provider to show above the embed, for example for YouTube videos it will show \"YouTube\" at the top of the embed (above the author)"
      },
      "attribute": "provider",
      "reflect": false
    },
    "footerImage": {
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
        "text": "The image to use next to the footer text."
      },
      "attribute": "footer-image",
      "reflect": false
    },
    "timestamp": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "DiscordTimestamp",
        "resolved": "Date | null | string | undefined",
        "references": {
          "DiscordTimestamp": {
            "location": "import",
            "path": "../../util"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`."
      },
      "attribute": "timestamp",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "timestamp",
      "methodName": "updateTimestamp"
    }]; }
}
