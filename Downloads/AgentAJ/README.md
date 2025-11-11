# AgentAJ - Real Estate Website

A modern, responsive real estate website for AJ Yusufzai, an eXp Realty agent serving Ottawa and surrounding areas.

## About

This website showcases AJ Yusufzai's real estate services, highlighting his:
- 10+ years of experience in real estate
- 30+ years as an educator with a Master's degree in Mathematics
- 30+ years of involvement in Ottawa soccer leagues
- Passion for helping clients in Ottawa and surrounding areas

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Fixed navbar with smooth scrolling to sections
- **Contact Form**: Easy-to-use contact form that opens email client
- **Service Showcase**: Highlights all real estate services offered
- **About Section**: Comprehensive information about AJ's background and experience

## Files Structure

```
AgentAJ/
├── index.html      # Main HTML file
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser

2. **No installation required**: This is a static website that runs entirely in the browser

3. **Local Development**: For a better development experience, you can use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   Then visit `http://localhost:8000` in your browser

## Contact Information

- **Phone**: 613-697-5679
- **Email**: homesbyjawid@gmail.com
- **Company**: eXp Realty
- **Service Area**: Ottawa & Surrounding Areas

## Browser Support

This website works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

To customize the website:

1. **Colors**: Edit CSS variables in `styles.css` (lines 4-12)
2. **Content**: Edit text content directly in `index.html`
3. **Styling**: Modify styles in `styles.css`
4. **Functionality**: Update JavaScript in `script.js`

## Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Inter font family)

## Deployment

This website is configured for deployment on Vercel through GitHub.

### Deploy to Vercel via GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `AgentAJ` (or your preferred name)
   - Don't initialize with README, .gitignore, or license

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/AgentAJ.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the settings (no build command needed for static sites)
   - Click "Deploy"
   - Your site will be live in seconds!

5. **Custom Domain** (Optional):
   - In your Vercel project settings, go to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

### Files for Deployment

- `vercel.json` - Vercel configuration for static site deployment
- `.gitignore` - Git ignore file to exclude unnecessary files

## License

© 2024 AgentAJ - AJ Yusufzai. All rights reserved.

