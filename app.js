
const input = document.querySelector("#input");

input.addEventListener('keyup', e => {
  if (e.keyCode === 13) searchImage(input.value);
})




const options = {
  headers: {
    Authorization: '563492ad6f917000010000016b1b446b8133430193160f7858e58597'
  }
}

function searchImage(query) {
  const url =
    `https://api.pexels.com/v1/search?query=${query}&per_page=4`;

  fetch(url, options)
    .then(d => d.json())
    .then(renderImages)
    .catch(e => console.error(e))
}

function renderImages({ photos }) {
  const results = document.querySelector('#results');
  let html = '';
  if (photos.length) {
    photos.forEach(({ src }) => {
      html +=
        `<div class="result-img" 
                    style="background-image: url(${src.medium})">
                </div>`
    })
  } else {
    html = "No Image Found!!";
  }
  results.innerHTML = html;
}

