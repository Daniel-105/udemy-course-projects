const list = [];

let wish = prompt('What would you like to do?');

while (wish !== 'quit' && wish !== 'q'){
    if (wish === 'list') {
        console.log('**************************');
        for (i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`)
        }
        console.log('**************************')

    } else if (wish === 'new'){
        const newItem = prompt('Enter new todo');
        list.push(newItem);
        console.log(`${newItem} added to the list!`)

    } else if (wish === 'delete'){
        let itemToDel = parseInt(prompt('enter the number you want to delete'))
        let delItem = list.splice(itemToDel, 1);
        console.log(`You have deleted ${delItem}`)
    }

    wish = prompt('What would you like to do?');
} 
console.log('YOU HAVE QUIT THE APP')



// for (i = 0; wish === 'new'; i++) {
//     let newItem = list.push(prompt('Enter new todo'))
//     let wish = prompt('What would you like to do?');
//     if (wish !== 'new') break
// }
// console.log('*******************************')
// if (wish === 'list') {
//     console.log(list[i])
// }


// let i = 0;
// if (wish ==='new') {
//     while (wish) {
//         i++
//     let newItem = list.push(prompt('Enter new todo'))
//     let wish = prompt('What would you like to do?');
//     }
// } else if (wish === 'list') {
//     console.log(list[i])
// }



