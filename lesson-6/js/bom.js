const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const ul = document.querySelector('.list');

button.addEventListener('click', () => {
    let count = document.getElementsByTagName('li').length;

    if (count >= 25) {
        alert('You have reached the maximum number of favorites. Please remove one or more before adding additional favorites.');
    } else if (input.value == '') {
        alert('You have not entered a favorite chapter!');
    } else {
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        li.textContent = input.value;
        deletebutton.textContent = '❌ Delete';
        li.append(deletebutton);
        ul.append(li);
        input.value = "";

        deletebutton.addEventListener('click', function() {
            ul.removeChild(li);
            input.focus();
        });
    } 
});

