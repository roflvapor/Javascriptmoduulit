    x1 = document.querySelector("#forming");

x1.addEventListener('submit', async function(event) {
    event.preventDefault();
    const x2 = document.getElementById("query").value;
 try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${x2}`);
        const data = await response.json();
        console.log(data);
        const contai = document.getElementById("results");
        contai.innerHTML = '';
        for (const shw of data) {
            const article = document.createElement("article");
            const title = document.createElement("h2");
            title.textContent = shw.show.name;
            article.appendChild(title);

            const link = document.createElement("a");
            link.href = shw.show.url;
            link.target = "_blank";
            link.textContent = "deets";
            article.appendChild(link);
            article.appendChild(document.createElement("br"))
            article.appendChild(document.createElement("br"))

            const image = document.createElement("img");
            image.src = shw.show.image
                ? shw.show.image.medium
                : "https://via.placeholder.com/210x295?text=Not%20Found";
            image.alt = shw.show.name;
            article.appendChild(image);

            const summary = document.createElement("div");
            summary.innerHTML = shw.show.summary;
            article.appendChild(summary);

            contai.appendChild(article);
        }
    } catch (error) {
        console.error("error:", error);
    }
});