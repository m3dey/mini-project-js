let url = new URL(location.href);
let data=url.searchParams.get('data');
let postInfo=JSON.parse(data);
let postBlock = document.getElementById('container');
let commentsDiv = document.getElementById('comments');
for (let key in postInfo) {
    let block=document.createElement('div');
    block.innerText = `${key}: ${postInfo[key]}`;
    block.classList.add('information');
    postBlock.appendChild(block);
}
fetch(`https://jsonplaceholder.typicode.com/users/${postInfo.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (let comment of comments) {
            if (comment.postId === postInfo.id){
                let commentDiv=document.createElement('div')
                commentDiv.classList.add('avada')
                for (let key in comment) {
                    let aaa=document.createElement('p');
                    aaa.innerText=(`${key}: ${comment[key]}`);

                    commentDiv.appendChild(aaa);
                }
                commentsDiv.appendChild(commentDiv) ;
            }
        }
    })