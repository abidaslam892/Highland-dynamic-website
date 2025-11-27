// Blog Search Functionality

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const searchButton = document.getElementById('search-button');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    function performSearch() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        if (!blogPosts.length) return;
        
        blogPosts.forEach(post => {
            const title = post.querySelector('h2, h3, .post-title');
            const content = post.querySelector('.post-excerpt, .post-content, p');
            const category = post.querySelector('.category, .post-category');
            
            const titleText = title ? title.textContent.toLowerCase() : '';
            const contentText = content ? content.textContent.toLowerCase() : '';
            const categoryText = category ? category.textContent.toLowerCase() : '';
            
            const matches = titleText.includes(searchTerm) || 
                          contentText.includes(searchTerm) || 
                          categoryText.includes(searchTerm);
            
            if (searchTerm === '' || matches) {
                post.style.display = '';
            } else {
                post.style.display = 'none';
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', performSearch);
    }
});
