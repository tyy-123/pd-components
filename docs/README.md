---
home: true
heroText: "pd-components"
tagline: 🐏 This library is a business component library developed based on vue + Element.
actions:
  - text: Get Started →
    link: ./componentsView
features:
  - title: Out of the Box
    details: A set of high-quality React components out of the box.
  - title: Feature 2
    details: Easy to learn and use
  - title: Typescript
    details: Written in TypeScript with predictable static types
footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by [Jack](https://d.umijs.org)

---

## Installation

### Using npm

We recommend using npm to install, it not only makes development easier, but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.

```bash
# Create directory
$ mkdir myapp && cd myapp

# Install dependency
$ npm i j23k-lib --save
```

## Usage

```tsx | pure
import React from "react";
import { Player } from "j23k-lib";

export default () => (
  <Player>
    <Player.Audio
      name="星球大战.mp3"
      url="https://ia600702.us.archive.org/33/items/Classical_Sampler-9615/Kevin_MacLeod_-_Also_Sprach_Zarathustra.mp3"
    ></Player.Audio>
  </Player>
);
```
