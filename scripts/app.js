const container = document.querySelector('.gallery-container');

function generateMasonryGrid(columns, posts) {
    container.innerHTML = '';
    console.log(posts)
    // store all column arrays which contain the relevant posts
    let columnWrappers = {};
    
    //create column item array and add this to the column wrapper object
    for(let i = 0; i < columns; i++){
        columnWrappers[`column${i}`] = []
    }

    for(let i = 0; i < posts.length; i++ ){
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for (let i = 0; i < columns; i++){
        let columnPosts = columnWrappers[`column${i}`];
        let column = document.createElement('div');
        column.classList.add('column');

        columnPosts.forEach(post => {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post');
            let image = document.createElement('img');
            image.src = post.image;

            postDiv.append(image);
            column.appendChild(postDiv);
        })
    container.appendChild(column)
    }
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
    imageIndex = 0;
    if(window.innerWidth < 600 && previousScreenSize >= 600){
        generateMasonryGrid(1, posts);
    }else if(window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)){
        generateMasonryGrid(2, posts);
    }else if(window.innerWidth >= 1000 && previousScreenSize < 1000){
        generateMasonryGrid(4, posts)
    }
    previousScreenSize = window.innerWidth
})

// Page load 

if(previousScreenSize < 600){
    generateMasonryGrid(1, posts);
}else if(previousScreenSize >= 600 && previousScreenSize < 1000){
    generateMasonryGrid(2, posts);
}else{
    generateMasonryGrid(4, posts);
}