const path = require("path");
const sharp = require("sharp");

const resize = imagePath => {
  const { dir, name, ext } = path.parse(imagePath);

  const origin = sharp(imagePath);
  [1400, 800, 640, 480, 320].map(width => {
    origin
      .resize({ width })
      .toFile(`${dir}/${name}-${width}w${ext}`)
      .then(() => {
        console.log("ok");
      });
  });
};

const imagePath = `src/assets/images/hero.jpg`;
resize(imagePath);
