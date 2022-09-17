
const links = [
    {
        label: "Week 1",
        url: "week1/index.html"
    }

];
let newline = '';
    for (let i = 0; i < links.length; i++) {
        
        newline += "<li><a href='" + links[i].url + "'>" + links[i].label + "</a></li>"
    }
    console.log(newline);
    document.getElementById("links").innerHTML = newline;






