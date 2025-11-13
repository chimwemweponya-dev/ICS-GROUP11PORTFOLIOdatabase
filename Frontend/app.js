document.addEventListener('DOMContentLoaded', function() {
    const API_BASE_URL = 'http://localhost:3000/api';
    
    // Smooth scrolling
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Form handling
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        // Your form handling code
    });
    
    // API calls
    async function fetchPortfolioData() {
        try {
            const response = await fetch(${API_BASE_URL}/portfolio);
            const result = await response.json();
            if (result.success) {
                updatePortfolioUI(result.data);
            }
        } catch (error) {
            console.error('API Error:', error);
        }
    }
    
    function updatePortfolioUI(data) {
        // Update UI with API data
    }
    
    fetchPortfolioData();
});