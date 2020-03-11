function show(text){
    alert(text);
}

//let smth = document.getElementById("mySelect");

function f(str) { // добавить элемент в конец

    let selectedOption = mySelectId.options[mySelectId.selectedIndex];
    alert(str);
    // 2)
    let newOption = new Option(str,str);
    mySelectId.append(newOption);

    // 3)
    newOption.selected = true;

}

function f1() { // заполнить выпадающий список домами

    alert(ShowHomeName.length)
    let arr = ShowHomeName();
    for(let i = 0; arr.length; i++){
        f(arr[i])
    }

}