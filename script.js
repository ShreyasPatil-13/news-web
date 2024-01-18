const url =
  "https://news67.p.rapidapi.com/v2/feed?batchSize=30&languages=en&sortOrder=latest";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f778b5e0c2mshabad0affed5463cp1de496jsn781232f6c2c6",
    "X-RapidAPI-Host": "news67.p.rapidapi.com",
  },
};

async function fetchNews() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    displayNews(result.news);
  } catch (error) {
    console.error(error);
  }
}

function displayNews(newsArray) {
  const newsContainer = document.getElementById("news-container");

  newsArray.forEach((news) => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    newsItem.innerHTML = `
            <h2><a href="${news.Url}" target="_blank">${news.Title}</a></h2>
            <p>${news.Description}</p>
            <img src="${news.Image}" alt="${news.Title}">
            <p><strong>Source:</strong> ${news.Source}</p>
            <p><strong>Published On:</strong> ${new Date(
              news.PublishedOn
            ).toLocaleString()}</p>
        `;

    newsContainer.appendChild(newsItem);
  });
}

// Fetch and display news when the page loads
document.addEventListener("DOMContentLoaded", fetchNews);
