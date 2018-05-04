
let form = document.createElement('form');
form.className = "form";
document.body.appendChild(form);

let input = document.createElement('input');
input.className = 'input';
form.appendChild(input);

let buttonAdd = document.createElement('button');
buttonAdd.className = 'add';
buttonAdd.textContent = '+';
buttonAdd.setAttribute("type", "submit");
buttonAdd.setAttribute("name", "button");
form.appendChild(buttonAdd);

let buttonDel = document.createElement('button');
buttonDel.className = 'delete';
buttonDel.textContent = '-';
buttonDel.setAttribute("type", "button");
buttonDel.setAttribute("name", "button");
form.appendChild(buttonDel);

this.input = this.position.querySelector('input');
this.buttonAdd = this.position.querySelector('add');
this.buttonAdd = this.position.querySelector('delete');




class List {
    constructor(position, options) {
        this.position = position;
        this.options = options;
        this.render ();
    }
    render () {
        this.ul = document.createElement(this.options.parentElement);
        for (let i = 0; i < this.options.arrOfItems.length; i++){
            this.li = document.createElement(this.options.itemElement);
            this.li.innerHTML = this.options.arrOfItems[i];
            this.ul.appendChild(this.li);
        }
        this.position.appendChild(this.ul);
    }
};


let options = {
    ctrl: true,
    parentElement: 'ul',
    itemElement: 'li',
    arrOfItems: ['1', '2', '3', '4', '5'],
    onCreate: func,
    onDelete: func,
};

let list = new List(document.body, options);



