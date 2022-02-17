const LS_KEY="users";
function saveUser(user){
    let oldData=readUsers();
    oldData.push(user);

    let val=JSON.stringify(oldData);
    localStorage.setItem(LS_KEY, val);
}
function readUsers(){
    let data = localStorage.getItem(LS_KEY);
    if(!data){
        return [];
    }else{
        let list=JSON.parse(data);
        return list;
    }
}