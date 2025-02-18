# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

// **************** case study of project **************** //

🔹 Why Should You Write a Case Study?
✅ Helps you stand out in job applications & interviews
✅ Shows your problem-solving & optimization skills
✅ Acts as portfolio content (LinkedIn, GitHub, Blog)
✅ Makes your project look professional & impactful

🔹 How to Structure a Case Study?
🔹 1. Introduction → What is the project? Why did you build it?
🔹 2. Tech Stack & Tools → What technologies did you use?
🔹 3. Challenges → What performance/scalability issues did you face?
🔹 4. Solutions & Optimizations → How did you improve performance? (e.g., Lazy Loading, Caching, Code Splitting)
🔹 5. Results & Metrics → Show improvements using Lighthouse Scores, Web Vitals
🔹 6. Conclusion → What did you learn? What’s next?

🔥 Example: GitHub Repo Explorer (Case Study)
1️⃣ Introduction
I built a GitHub Repository Explorer to search and display repositories using the GitHub API. The goal was to make an optimized, fast-loading app.

2️⃣ Tech Stack & Tools
React + Redux Toolkit (for state management)
React Query (for API caching & pagination)
Lighthouse & Web Vitals (for performance testing)
3️⃣ Challenges
Slow API calls → Caused UI lag
Too many re-renders → Wasted performance
Large JavaScript bundle → Increased load time
4️⃣ Solutions & Optimizations
✅ Used React Query for caching → Fewer API calls
✅ Added Debounced Search → Prevented excessive API requests
✅ Implemented Lazy Loading for images → Improved load time
✅ Used Code Splitting (React.lazy & Suspense) → Reduced JS size

5️⃣ Results & Metrics
📌 Before Optimizations:

First Contentful Paint (FCP): 2.8s
API Requests: Too many
JavaScript Bundle: 300 KB
📌 After Optimizations:
✅ FCP improved to 1.2s
✅ API Requests reduced by 60%
✅ JavaScript Bundle reduced to 120 KB

6️⃣ Conclusion & Learnings
React Query is a game-changer for performance
Debounced search improves UX & API efficiency
Lazy Loading + Code Splitting make a huge impact
🚀 Deployed on Vercel → Live Demo | GitHub Repo

🔹 Where to Publish Your Case Study?
✅ LinkedIn → Attracts recruiters & showcases expertise
✅ GitHub ReadMe → Helps others understand your project
✅ Personal Blog/Medium → Establishes authority
✅ Portfolio Website → Adds credibility