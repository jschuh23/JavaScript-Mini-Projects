let command = prompt('What would you like to do?');
const list = []; //defines the array for where the list items will be stored

while (command !== 'quit' && command !== 'q') {
    if (command.toLowerCase() === 'list') {
        console.log('*************************');
        for (let i = 0; i < list.length; i++) {
            /*iterate over the array - start at 0;  stop before hitting length of array; adding 1 each time thru*/
            console.log(`${i}: ${list[i]}`);
            /*printing what the index is and the list item associated with the index (can also use for...each)*/
        }
        console.log('*************************');
    } else if (command.toLowerCase() === 'new') {
        const newTodo = prompt('Enter new todo');
        list.push(newTodo); //push new todo to the list array
        console.log(`${newTodo} was added to the list`);
    } else if (command.toLowerCase() === 'delete') {
        const index = parseInt(prompt('Enter index of todo to delete'));
        if (!Number.isNaN(index)) {
            /*if the index entered (when converted to actual number) does not give NaN (so it's valid) then todo item will be deleted*/
            const deleted = list.splice(index, 1); //takes the users entered index and deletes it
            console.log(`You have just removed ${deleted[0]} from the list`);
        } else {
            console.log('Unknown index');
        }
    }

    command = prompt('What would you like to do?');
}

console.log('OK, you quit the app');
