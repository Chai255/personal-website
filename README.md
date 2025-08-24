# George's Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. Features a clean design, mobile-friendly navigation, and blog functionality with Markdown support.

## Features

### 🎨 **Modern Design**
- Clean, professional aesthetic with CSS custom properties
- Responsive grid layouts using CSS Grid and Flexbox
- Smooth animations and hover effects
- Professional typography with Inter font family

### 📱 **Mobile-First Responsive Design**
- Collapsible mobile navigation menu
- Responsive grid layouts that adapt to all screen sizes
- Touch-friendly interface elements
- Optimized for mobile and desktop viewing

### 🚀 **Interactive Elements**
- Smooth fade-in animations on scroll
- Hover effects on cards and buttons
- Loading states and transitions
- Mobile navigation with animated hamburger menu

### 📝 **Blog System**
- Markdown support using marked.js
- Dynamic blog post loading
- Responsive blog post layout
- Syntax highlighting for code blocks

### 🎯 **Key Sections**
- **Home**: Hero section with call-to-action buttons
- **Blog**: Dynamic blog post listing and viewing
- **About**: Personal information with statistics
- **Stories**: Personal narratives and experiences

## File Structure

```
html-site/
├── index.html          # Home page
├── about.html          # About page
├── blog.html           # Blog listing page
├── post.html           # Individual blog post viewer
├── stories.html        # Stories page
├── styles.css          # Main stylesheet
├── js/
│   ├── main.js         # Main JavaScript functionality
│   └── marked.min.js   # Markdown parser
├── blog/
│   ├── first-post.md   # Sample blog post
│   └── second-post.md  # Sample blog post
└── stories/
    └── my-story.pdf    # Sample PDF story
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with custom properties, Grid, and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Marked.js**: Markdown parsing for blog posts
- **Google Fonts**: Inter font family for typography

## CSS Features

### Design System
- CSS custom properties (variables) for consistent theming
- Modular CSS architecture with logical grouping
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth transitions and animations

### Layout
- CSS Grid for complex layouts (interests grid, about page)
- Flexbox for navigation and component alignment
- Responsive containers with max-width constraints
- Mobile-first responsive design approach

### Animations
- CSS keyframe animations for fade-in effects
- Smooth transitions on hover and focus states
- Transform animations for interactive elements
- Intersection Observer for scroll-triggered animations

## JavaScript Features

### Navigation
- Mobile menu toggle with animated hamburger icon
- Smooth scrolling for anchor links
- Active navigation state management
- Click-outside-to-close functionality

### User Experience
- Loading states for buttons and forms
- Intersection Observer for scroll animations
- Enhanced hover effects on interactive elements
- Error handling for blog post loading

### Performance
- Event delegation for dynamic elements
- Efficient DOM queries and caching
- Smooth animations with CSS transforms
- Responsive event handling

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, Flexbox, CSS Custom Properties, ES6+

## Getting Started

1. **Clone or download** the project files
2. **Open `index.html`** in a web browser
3. **Navigate** through the different pages
4. **Test** the responsive design by resizing your browser window
5. **Try** the mobile navigation on mobile devices or browser dev tools

## Customization

### Colors and Theme
Edit the CSS custom properties in `:root` to change the color scheme:

```css
:root {
  --primary-color: #6366f1;    /* Main brand color */
  --primary-dark: #4f46e5;     /* Darker shade */
  --text-primary: #1e293b;     /* Main text color */
  --bg-primary: #ffffff;       /* Background color */
}
```

### Adding Blog Posts
1. Create a new `.md` file in the `blog/` folder
2. Write your content in Markdown format
3. Add the post to the `posts` array in `blog.html`
4. The post will automatically appear in the blog listing

### Modifying Navigation
Update the navigation links in all HTML files to match your desired structure.

## Performance Optimizations

- **CSS**: Efficient selectors and minimal repaints
- **JavaScript**: Event delegation and efficient DOM manipulation
- **Images**: Optimized and responsive image handling
- **Fonts**: Google Fonts with display=swap for better performance

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Alt text for images
- ARIA labels where appropriate
- High contrast color scheme

## Future Enhancements

- **Dark Mode**: Toggle between light and dark themes
- **Search Functionality**: Search through blog posts
- **Categories**: Organize blog posts by topic
- **Comments**: Add commenting system to blog posts
- **Analytics**: Track website usage and engagement
- **SEO Optimization**: Meta tags and structured data

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using modern web technologies.
