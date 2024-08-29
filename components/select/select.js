
function renderSelect(parent, type) {

    let con = document.createElement("div");
    con.classList.add("selectCon" + type);
    parent.appendChild(con);

    if (type = "sortBy") {
        let selectTitle = document.createElement("p");
        selectTitle.textContent = "Sort by:";
        selectTitle.id = "selectTitle";
        con.appendChild(selectTitle);
    }
    let select = document.createElement("select");
    select.setAttribute("name", type);
    select.setAttribute("id", type);
    con.appendChild(select)

    if (type = "sortBy") {
        let options = ["Asc", "Desc", "Work", "School", "Family", "Friend", "Other"];
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.textContent = options[i];
            option.setAttribute("name", options[i].toLowerCase());
            option.classList.add("selectOption");
            select.appendChild(option);
        }
    }

}