'use strict';

const list = {
    help: 'show the help commands',
    list: 'list the to dos',
    add: 'add to to do list',
    remove: 'remove one or more from the list',
    reset: 'reset all the items in the to dos list'
}

let toDosList = ['go', 'come', 'buy'];

if (process.argv[2] === 'help' || !process.argv[2]) {
    console.log(list);
}
else if (process.argv[2] === 'list') {
    console.log(toDosList);
}
else if (process.argv[2] === 'add') {
    toDosList.push(process.argv[3]);
    console.log(toDosList);
}
else if (process.argv[2] === 'remove') {
    toDosList.splice(process.argv[3], 1);
    console.log(toDosList);
}
else if (process.argv[2] === 'reset') {
    toDosList = [];
    console.log('To dos is empty');
}
