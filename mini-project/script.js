fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let userContainer = document.getElementById('user-container');

        users.forEach(user => {
            let userBlock = document.createElement('div');
            userBlock.classList.add('user-block');

            let userImg=document.createElement('img');
            userImg.src=('imagine/img.png');
            userImg.classList.add('userImagine');
            userBlock.appendChild(userImg);

            let userName = document.createElement('span');
            userName.textContent = ` Name: ${user.name}`;
            userBlock.appendChild(userName);

            let userId = document.createElement('span');
            userId.textContent = `ID: ${user.id}`;
            userBlock.appendChild(userId);

            let button = document.createElement('a');
            button.innerText='Read more...';
            button.classList.add('more_button');
            button.href='details/user-details.html?data='+JSON.stringify(user);
            button.target='_blank';
            userBlock.appendChild(button);



            userContainer.appendChild(userBlock);




        });
    })
    .catch(error => console.error(error));
