import { createCanvas, loadImage } from "canvas";

import trim from "./trim";

function stickerify(
  imgSrc: string,
  thickness: number = 1,
  fillStyle: string | CanvasGradient | CanvasPattern = "white",
  samples: number = 36
): Promise<string> {

    return loadImage( imgSrc, { crossOrigin: 'anonymous' } )
      .then( ( img ) => {
        const x = thickness + 1, // 1px buffer in case of rounding errors etc.
          y = thickness + 1;

        const canvas = createCanvas(img.width + x * 2, img.height + y * 2),
          ctx = canvas.getContext("2d")!;

        for (let angle = 0; angle < 360; angle += 360 / samples) {
          ctx.drawImage(
            img,
            thickness * Math.sin((Math.PI * 2 * angle) / 360) + x,
            thickness * Math.cos((Math.PI * 2 * angle) / 360) + y
          );
        }

        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = fillStyle;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(img, x, y);

        return trim(canvas).toDataURL();
      });
}

export { stickerify };
