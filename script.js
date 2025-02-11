function createUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newUsers = {id: users.length + 1, name: "users" + (users.length + 1)};
    users.push(newUsers);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User Created", newUsers);
}

function getUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log("All Users:", users);
}

function updateUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0){
        users[0].name = "Updated User";
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User Updated", users[0]);
    } else {
        console.log("No users to update");
    }
}
function deleteUser(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length > 0){
        let removeUser = users.pop();
        localStorage.setItem("users", JSON.stringify(users));
        console.log("User Deleted", removeUser);
    }
    else{
        console.log("No users to delete");
    }
}