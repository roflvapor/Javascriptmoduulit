x1 = document.querySelector("#forming");

x1.addEventListener('submit', async function(event) {
    event.preventDefault();
    const x2 = document.getElementById("query").value;
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${x2}`);
        const data = await response.json();
        const container = document.getElementById("results");
        data.result.forEach(joke => {
            const c1 = document.createElement("article");
            const c2 = document.createElement("p");
            c2.innerHTML = joke.value;
            c1.appendChild(c2);
            container.appendChild(c1);
        });
    }
    catch (error) {
            console.log(error.message);
    }})