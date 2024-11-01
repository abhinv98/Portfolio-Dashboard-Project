# Portfolio Dashboard Project

A modern, responsive portfolio dashboard built with React and Tailwind CSS, showcasing projects, skills, and professional experience with interactive visualizations.

![Portfolio Dashboard](public/dashboard-preview.png)

## 🌟 Features

- **Responsive Layout**
  - Collapsible sidebar navigation
  - Mobile-friendly design
  - Smooth transitions

- **Theme Support**
  - Dark/light mode toggle
  - Persistent theme preference
  - Custom color schemes

- **Interactive Components**
  - Data visualizations using recharts
  - Force-directed graph for skills
  - Animated loading states
  - Project filtering and showcase
  - Dynamic contact form

- **Advanced Features**
  - Skills visualization with list and network views
  - Comprehensive experience timeline
  - Integrated analytics dashboard
  - Project metrics and statistics

## 🛠️ Tech Stack

- **Frontend Framework**
  - React 18.3.1
  - Create React App

- **Styling**
  - Tailwind CSS
  - Custom animations
  - Responsive design

- **Libraries**
  - recharts (data visualization)
  - react-force-graph (network graphs)
  - lucide-react (icons)
  - @headlessui/react (UI components)

## 📁 Project Structure

```
portfolio-dashboard/
├── public/
│   └── index.html               # Main HTML file
├── src/
│   ├── components/              # React components
│   │   ├── Contact.jsx         # Contact form component
│   │   ├── Experience.jsx      # Experience timeline
│   │   ├── Loading.jsx         # Loading animation
│   │   ├── OverviewDashboard.jsx # Main dashboard
│   │   ├── ProjectsGrid.jsx    # Projects showcase
│   │   ├── Sidebar.jsx         # Navigation
│   │   ├── SkillsChart.jsx     # Skills display
│   │   └── ThemeToggle.jsx     # Theme switcher
│   ├── context/
│   │   └── ThemeContext.js     # Theme management
│   ├── data/
│   │   └── portfolioData.js    # Portfolio content
│   ├── styles/
│   │   └── index.css           # Global styles
│   └── App.jsx                 # Main component
└── package.json                # Dependencies
```

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/abhinv98/Portfolio-Dashboard-Project.git
```

2. **Install dependencies**
```bash
cd portfolio-dashboard
npm install
```

3. **Start development server**
```bash
npm start
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🔧 Configuration

This project uses several configuration files:

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and follow the existing code style.

## 📚 Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)

## 📝 Additional Documentation

- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analyzing Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
- [Troubleshooting](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.