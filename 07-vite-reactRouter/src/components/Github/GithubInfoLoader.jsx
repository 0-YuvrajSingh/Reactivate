export const GithubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/0-YuvrajSingh');

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }

  return response.json();
};

export default GithubInfoLoader;