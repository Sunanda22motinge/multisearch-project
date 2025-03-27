// const geminiApi = AIzaSyCAF8_9Ti_EILTH1MSsjnNyIW6Fosal9K4;
// const geminiAPI = AIzaSyCAF8_9Ti_EILTH1MSsjnNyIW6Fosal9K4;
// const googleApi = AIzaSyCjaw0mzkbo4xgvESIiYmwzFcZaub8Lw3A;


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("type-here");
    const searchButtons = document.querySelectorAll(".choose-btn");
    const recentContainer = document.getElementById("recent-container");
    const searchContainer = document.getElementById("search-container");

    // Load recent searches from local storage
    loadRecentSearches();

    searchButtons.forEach(button => {
        button.addEventListener("click", function () {
            const engine = this.getAttribute("data-engine");
            const query = searchInput.value.trim();

            if (!query) {
                alert("Please enter a search query!");
                return;
            }

            performSearch(engine, query);
            saveSearch(query);
        });
    });

    function performSearch(engine, query) {
        searchContainer.innerHTML = `<p>Loading results...</p>`;

        switch (engine) {
            case "google":
                searchGoogle(query);
                break;
            case "wiki":
                searchWikipedia(query);
                break;
            case "gemini":
                searchGeminiAI(query);
                break;
            case "ai":
                searchAIImages(query);
                break;
            default:
                searchContainer.innerHTML = `<p>Error: Invalid search engine.</p>`;
        }
    }

    function saveSearch(query) {
        let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        searches = searches.filter(search => search !== query);
        searches.unshift(query);
        if (searches.length > 7) searches.pop();
        localStorage.setItem("recentSearches", JSON.stringify(searches));
        loadRecentSearches();
    }

    function loadRecentSearches() {
        let searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        recentContainer.innerHTML = "";
        searches.forEach(search => {
            const searchItem = document.createElement("div");
            searchItem.classList.add("recent-item");
            searchItem.innerHTML = `<p>${search}</p>`;
            searchItem.addEventListener("click", function () {
                searchInput.value = search;
            });
            recentContainer.appendChild(searchItem);
        });
    }
//google API
    async function searchGoogle(query) {
        const API_KEY = "AIzaSyCjaw0mzkbo4xgvESIiYmwzFcZaub8Lw3A"; //goole api key
        const CX = "d47fcba4fc6824d2a"; // google cse id
        const URL = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${CX}`;

        try {
            const response = await fetch(URL);
            const data = await response.json();
            displayResults(data.items);
        } catch (error) {
            searchContainer.innerHTML = `<p>Error fetching Google results.</p>`;
            console.error(error);
        }
    }

    // wikipedia
    async function searchWikipedia(query) {
        const URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;

        try {
            const response = await fetch(URL);
            const data = await response.json();
            displayResults(data.query.search.map(item => ({
                title: item.title,
                link: `https://en.wikipedia.org/wiki/${item.title}`,
                snippet: item.snippet
            })));
        } catch (error) {
            searchContainer.innerHTML = `<p>Error fetching Wikipedia results.</p>`;
            console.error(error);
        }
    }

    // ✅ Fetch AI Image Search Results (Using Bing)
    async function searchAIImages(query) {
        const URL = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
        searchContainer.innerHTML = `<a href="${URL}" target="_blank">Click here to view AI Images</a>`;
    }

    // ✅ Fetch Gemini AI Response
    async function searchGeminiAI(query) {
        const API_KEY = "AIzaSyCAF8_9Ti_EILTH1MSsjnNyIW6Fosal9K4"; // Replace with your Gemini API key
        const URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText?key=${API_KEY}`;

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: query })
            });

            const data = await response.json();
            const aiResponse = data.candidates?.[0]?.output || "No results found.";
            searchContainer.innerHTML = `<h3>Gemini AI Response</h3><p>${aiResponse}</p>`;
        } catch (error) {
            searchContainer.innerHTML = `<p>Error fetching AI response.</p>`;
            console.error(error);
        }
    }

    // ✅ Display Search Results in `#search-container`
    function displayResults(results) {
        if (!results || results.length === 0) {
            searchContainer.innerHTML = `<p>No results found.</p>`;
            return;
        }

        searchContainer.innerHTML = results.map(result => `
            <div class="result-item">
                <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                <p>${result.snippet || ""}</p>
            </div>
        `).join("");
    }
});

