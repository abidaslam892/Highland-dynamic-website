// Blog Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blogSearch');
    const searchBtn = document.querySelector('.search-btn');
    const blogPosts = document.querySelectorAll('.blog-post-card');

    if (searchInput && searchBtn && blogPosts.length > 0) {
        // Search function
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Show all posts if search is empty
                blogPosts.forEach(post => {
                    post.style.display = 'grid';
                });
                return;
            }

            let visibleCount = 0;

            blogPosts.forEach(post => {
                const title = post.querySelector('h2 a').textContent.toLowerCase();
                const excerpt = post.querySelector('.blog-excerpt').textContent.toLowerCase();
                const category = post.querySelector('.blog-category').textContent.toLowerCase();

                if (title.includes(searchTerm) || excerpt.includes(searchTerm) || category.includes(searchTerm)) {
                    post.style.display = 'grid';
                    visibleCount++;
                } else {
                    post.style.display = 'none';
                }
            });

            // Show no results message if needed
            const existingMessage = document.querySelector('.no-results-message');
            if (existingMessage) {
                existingMessage.remove();
            }

            if (visibleCount === 0) {
                const noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <p style="text-align: center; padding: 60px 20px; color: #999; font-size: 18px;">
                        No articles found for "<strong>${searchTerm}</strong>". Try different keywords.
                    </p>
                `;
                document.querySelector('.blog-posts-grid').appendChild(noResultsMsg);
            }
        }

        // Search on button click
        searchBtn.addEventListener('click', performSearch);

        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        // Real-time search (optional - uncomment if desired)
        /*
        searchInput.addEventListener('input', function() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(performSearch, 300);
        });
        */
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    }

    // Smooth scroll for anchor links in blog posts
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
