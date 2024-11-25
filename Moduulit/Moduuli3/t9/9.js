

    button = document.getElementById("start");
    button.addEventListener("click", function(evt)  {
        let tekst = document.getElementById("calculation").value;
        console.log(tekst);
    if (tekst.includes('+')) {
        let parts = tekst.split('+');
        let nam1 = parseInt(parts[0].trim());
        let nam2 = parseInt(parts[1].trim());
        document.getElementById("result").innerHTML = String(nam1 + nam2);
    }
    if (tekst.includes('-')) {
        let parts = tekst.split('-');
        let nam1 = parseInt(parts[0].trim());
        let nam2 = parseInt(parts[1].trim());
        document.getElementById("result").innerHTML = String(nam1 - nam2);
    }
    if (tekst.includes('/')) {
        let parts = tekst.split('/');
        let nam1 = parseInt(parts[0].trim());
        let nam2 = parseInt(parts[1].trim());
        document.getElementById("result").innerHTML = String(nam1 / nam2);
    }
    if (tekst.includes('*')) {
        let parts = tekst.split('*');
        let nam1 = parseInt(parts[0].trim());
        let nam2 = parseInt(parts[1].trim());
        document.getElementById("result").innerHTML = String(nam1 * nam2);
    }
});
