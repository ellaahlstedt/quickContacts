
function renderRightCon(parent) {

    // con
    let con = document.createElement("div");
    con.id = "rightCon";
    con.classList.add("contactCon");
    parent.appendChild(con);

    // header
    let header = document.createElement("h2");
    header.innerHTML = "All Contacts";
    header.id = "allContactsText";
    con.appendChild(header);

    // sort by
    renderSelect(con, "sortBy");

    // list
    let list = document.createElement("ul");
    list.id = "contactList";
    con.appendChild(list);

    // list item
    let getList = _state; // get all listItems
    for (let i = 0; i < getList.length; i++) {
        renderListItem(list, getList[i]);
    }

    // add contact
    // renderButton(con, "Add Contact");

}