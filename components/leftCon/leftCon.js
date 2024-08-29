
function renderLeftCon(parent) {

    let con = document.createElement("div");
    con.id = "leftCon";
    con.classList.add("contactCon");
    parent.appendChild(con);

    updateLeftCon(con, "default");

}

function updateLeftCon(parent, type) {

    parent.innerHTML = "";

    switch (type) {
        case "default":

            let defaultText = document.createElement("h1");
            defaultText.textContent = "Click on a contact to view or edit their information, or press 'Add Contact' to create a new contact.";
            defaultText.id = "defaultText";
            parent.appendChild(defaultText);

            break;
        case "get":


            break;
        case "postPatch":


            break;
    };

}