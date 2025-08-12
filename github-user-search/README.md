# GitProfile Explorer Application

## Project Overview

The GitHub-profile explorer Application is a React-based web application that allows users to search for GitHub profiles using the GitHub API. It features a user-friendly interface with basic and advanced search capabilities, enabling users to find GitHub users by username, location, and repository count. The application is styled with Tailwind CSS for a responsive and visually appealing design and is deployed on Vercel for public access.
This project was developed as part of the ALX Front-End ReactJS learning track, demonstrating skills in React development, API integration, UI/UX design, and deployment.

## Features

- **Basic Search**: Search for GitHub users by username and display their avatar, name, and profile link.
- **Advanced Search**: Filter users by additional criteria such as location and minimum repository count using the GitHub Search API.
- **Responsive UI**: Styled with Tailwind CSS for a seamless experience across devices.
- **Error Handling**: Displays appropriate messages for loading states and errors (e.g., "Loading..." or "Looks like we can't find the user").
- **Deployment**: Hosted on Vercel for reliable performance in a production environment.

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **API**: GitHub API (via Axios for HTTP requests)
- **Deployment**: Vercel
- **Tools**: Node.js, npm, Vite

## Setup Instructions

To run this project locally, follow these steps:

Clone the Repository:

```bash
git clone https://github.com/your-username/alx-fe-reactjs.git
cd alx-fe-reactjs/github-user-search
```

Install Dependencies:

```bash
npm install
```

## Configure Environment Variables:

Create a .env file in the root directory.

Add the GitHub API key (if required):VITE_APP_GITHUB_API_KEY=your-github-api-key

_Note_: The GitHub API allows unauthenticated requests with rate limits. An API key is optional for higher rate limits.

Run the Application:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173 (or the port specified by Vite).

## Usage

**Basic Search**:

- Enter a GitHub username in the search input field.
- View the user's avatar, name, and profile link upon successful API response.
- See "Loading..." during API calls or "Looks like we can't find the user" for invalid usernames.

**Advanced Search**:

- Use additional input fields to filter by location or minimum repository count.
- Results display a list of matching users with detailed information (e.g., location, repository count, profile link).
- Pagination or "load more" functionality is available for multi-page results.

## Responsive Design:

The application is fully responsive, adapting to various screen sizes for an optimal user experience.

## Live Demo

The application is live at: [gitprofile-explorer](https://gitprofile-explorer.vercel.app/)

## Learning Objectives

By completing this project, I learnt:

- Integrate API endpoint with a React App using GitHub API.
- Implement basic and advanced search features using API endpoints.
- Style a responsive UI with Tailwind CSS.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- ALX Front-End cohort 5
- GitHub API Documentation
- Vercel for hosting
- Tailwind CSS for styling
