
let wrapper = document.querySelector("#wrapper");

let header = document.createElement("img");
header.setAttribute("src", "assets/images/logo.png");
header.setAttribute("alt", "QuickContacts");
header.id = "header";
wrapper.appendChild(header);

let con = document.createElement("div");
con.id = "contactCons";
wrapper.appendChild(con);

renderRightCon(con);
renderLeftCon(con);
