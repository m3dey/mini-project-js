let url = new URL(location.href);
let data=url.searchParams.get('data');
let userInfo=JSON.parse(data);
let userBlock = document.getElementById('container');

for (let key in userInfo) {
    if (typeof userInfo[key] === 'object') {
        let deepKey=userInfo[key];
        for (let keyOfKey in deepKey) {
            if (typeof deepKey[keyOfKey] === 'object'){
                let geo=deepKey[keyOfKey];
                for (let geoKey in geo) {
                    let userGeoField = document.createElement('div');
                    userGeoField.innerText = `${geoKey}: ${geo[geoKey]}`;
                    userGeoField.classList.add('information');
                    userBlock.appendChild(userGeoField);
                }
            }else {
                let userKeyField = document.createElement('div');
                userKeyField.innerText = `${keyOfKey}: ${deepKey[keyOfKey]}`;
                userKeyField.classList.add('information');
                userBlock.appendChild(userKeyField);
            }
        }
    } else {
        let userField = document.createElement('div');
        userField.innerText = `${key}: ${userInfo[key]}`;
        userField.classList.add('information');
        userBlock.appendChild(userField);
    }
}

let buttonPosts=document.getElementById('button_posts');
let postsDiv=document.getElementById('block_posts');
function createPostsList(){
    fetch(`https://jsonplaceholder.typicode.com/users/${userInfo.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            postsDiv.innerHTML=('');
            for (let post of posts) {
                let postDiv=document.createElement('div');
                postDiv.innerText=`${post.title}`;
                postDiv.classList.add('little_along_post');
                postsDiv.appendChild(postDiv);

                let postLink=document.createElement('a');
                postLink.classList.add('postLink_button');
                postLink.innerText=('Read more');
                postLink.target=('_blank');
                postLink.href=('post-details.html?data='+JSON.stringify(post));
                postDiv.appendChild(postLink);
            }
        })
}
buttonPosts.addEventListener('click',createPostsList);

