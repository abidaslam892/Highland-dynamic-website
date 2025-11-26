# Highland Website

A professional, responsive website showcasing the beauty and services of the Highland region.

## 🌄 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and active link highlighting
- **Sections Include**:
  - Hero section with call-to-action
  - About Highland
  - Services (6 featured services)
  - Photo Gallery
  - Contact form with information
  - Newsletter subscription
  - Social media links

## 📁 Project Structure

```
Highland-Website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets folder
├── assets/             # Additional assets
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Quick Start

1. Open the project folder
2. Open `index.html` in your web browser
3. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

### Customization

1. **Colors**: Edit CSS variables in `css/style.css`:
   ```css
   --primary-color: #2d5f3f;
   --secondary-color: #5a8f69;
   --accent-color: #d4a574;
   ```

2. **Content**: Edit text in `index.html`

3. **Images**: Add your images to the `images/` folder and update paths

## 💡 Features in Detail

### Navigation
- Fixed navigation bar with scroll effect
- Mobile-responsive hamburger menu
- Active link highlighting based on scroll position

### Hero Section
- Full-screen hero with gradient background
- Animated scroll indicator
- Call-to-action button

### Services
- 6 service cards with icons
- Hover effects
- Fully responsive grid

### Gallery
- Image placeholder system
- Hover zoom effect
- Responsive masonry-style layout

### Contact
- Working contact form with validation
- Contact information display
- Social media icons
- Newsletter subscription

### Additional Features
- Scroll to top button
- Smooth scrolling
- Fade-in animations
- Mobile-friendly design

## 🎨 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (Vanilla)**: No dependencies
- **Font Awesome**: Icons
- **Google Fonts**: Typography (via system fonts)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔧 Customization Guide

### Adding New Images

1. Place images in the `images/` folder
2. Replace image placeholders in HTML:
   ```html
   <div class="image-placeholder">
       <!-- Replace with: -->
       <img src="images/your-image.jpg" alt="Description">
   </div>
   ```

### Adding New Services

Copy this service card template in `index.html`:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Service Title</h3>
    <p>Service description goes here.</p>
</div>
```

### Changing Colors

Edit the CSS variables in `:root` section of `style.css`:
- Primary: Main theme color
- Secondary: Complementary color
- Accent: Highlight color

## 📝 To-Do / Enhancement Ideas

- [ ] Add image lightbox for gallery
- [ ] Integrate with backend API for contact form
- [ ] Add testimonials section
- [ ] Implement blog section
- [ ] Add booking/reservation system
- [ ] Multi-language support
- [ ] Add Google Maps integration
- [ ] Performance optimization
- [ ] SEO enhancements

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

Created with ❤️ for the Highland community

---

**Note**: Replace placeholder images and content with your actual Highland region photos and information to make this website truly yours!
# Highland-dynamic-website
