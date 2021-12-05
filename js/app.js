const img = document.querySelector("img");
const btn = document.querySelector(".btn");

async function getImg() {
  const respons = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await respons.json();
  let imgUrl = data.message;
  img.src = imgUrl;
}

getImg();
btn.addEventListener("click", getImg);
