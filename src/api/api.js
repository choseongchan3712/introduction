import axios from "axios";

const key = process.env.RREACT_APP_GITHUB_KEY;

const githubApi = axios.create({
  baseURL: "https://api.github.com/users/choseongchan3712/repos",
  params: {
    Authorization: `Bearer ${key}`,
  },
});

export const getGithub = () => githubApi.get('');