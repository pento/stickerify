# stickerify
Add sticker-like border effect to images with transparency

Input:

<img alt="input image" src="example/input.png" width="200px" />

Output:

<img alt="stickerified image" src="example/stickerified.png" width="200px" />

## Live Demo

Check out this codepen demo: https://codepen.io/markus-wa/pen/eYEMvxd - thanks to [@pento](https://github.com/pento) for letting me steal this!

## Sample code

```html
<img id="out"/>
```

```js
const out = document.getElementById("out");

stickerify( 'https://raw.githubusercontent.com/markus-wa/stickerify/main/example/input.png', 10, 'white' )
  .then((img) => stickerify(img, 1, 'grey'))
  .then((img) => out.src = img);
```

`stickerify()` returns a [HTML5 canvas element](https://www.w3schools.com/html/html5_canvas.asp)

## Install

    yarn add stickerify

or

    npm install stickerify
