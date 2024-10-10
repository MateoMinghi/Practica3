const button = document.getElementById("toggleButton");
const image = document.getElementById("image");

const image1 =
  "https://www.northweststar.com.au/images/transform/v1/crop/frm/230390599/1ed4d736-a50d-453f-9d36-afe9a0c46dd5.png/r0_215_1260_877_w1200_h630_fmax.jpg"; // Original image link
const image2 =
  "https://www.hindustantimes.com/ht-img/img/2024/09/16/1600x900/Moo_Deng_1726453915615_1726453915979.jpg"; // New image link
let isOriginal = true;

image.src = image1;

button.addEventListener("click", () => {
  if (isOriginal) {
    image.src = image2;
  } else {
    image.src = image1;
  }
  isOriginal = !isOriginal;
});
