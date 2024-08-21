
document.getElementById('addItemButton').addEventListener('click', function() {

    let itemText = document.getElementById('itemInput').value;
    if (itemText !== '') {
        let li = document.createElement('li');
        li.textContent = itemText;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px'; 
        
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        
        document.getElementById('itemList').appendChild(li);
        
        document.getElementById('itemInput').value = '';
    }
});
