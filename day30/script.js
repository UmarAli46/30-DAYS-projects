const accessKey = "e7se-TwFgZTkXJWsML7mgkaHo0ZiaIi2lH05VOZoX3g";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value.trim();
  if (keyword === "") {
    alert("Please enter a search term");
    return;
  }

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      searchResult.innerHTML = "";
    }

    const results = data.results;

    results.forEach((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });

    if (results.length === 12) {
      showMoreBtn.style.display = "block";
    } else {
      showMoreBtn.style.display = "none";
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Something went wrong while fetching images.");
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
