import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
import Search from "../components/Search";
import SortRepos from "../components/SortRepos";
import Spinner from "../components/Spinner";

const HomePage = () => {
	const [userProfile, setUserProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);

	const [sortType, setSortType] = useState("recent"); // stars, forks

	const getUserProfileAndRepos = useCallback(async (username = "AlpeshJasani") => { // function
		setLoading(true);
		try {
			// 60 requests per hour for unauthenticated requests, 5000 requests per hr. for authenticated requests
			// //  const userRes = await fetch(`https://api/gitthub.com/users/${username}`);
			// const userRes = await fetch(`https://api/gitthub.com/users/${username}`, {headers:{authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`}}); // not safe on frontend side - key will see on client side. after build(production)
			// const userProfile = await userRes.json();
			// setuserProfile(userProfile);

			// const repoRes = await fetch(userProfile.repos_url);
			// const repos = await repoRes.json();
			// setRepos(repos);

			// const res = await fetch(`https://localhost:5000/api/users/profile/${username}`);
			const res = await fetch(`/api/users/profile/${username}`); // -> http://localhost:5000/api/users/profile/${username}
			const { repos, userProfile } = await res.json();

			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first

			setRepos(repos);
			setUserProfile(userProfile);

			return { userProfile, repos };
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getUserProfileAndRepos();
	}, [getUserProfileAndRepos]);

	const onSearch = async (e, username) => {
		e.preventDefault(); // don't refresh the page

		setLoading(true);
		setRepos([]);
		setUserProfile(null);

		const { userProfile, repos } = await getUserProfileAndRepos(username);

		setUserProfile(userProfile);
		setRepos(repos);
		setLoading(false);
		setSortType("recent");
	};

	const onSort = (sortType) => {
		if (sortType === "recent") {
			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
		} else if (sortType === "stars") {
			repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
		} else if (sortType === "forks") {
			repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
		}
		setSortType(sortType);
		setRepos([...repos]);
	};

	return (
		<div className='m-4'>
			<Search onSearch={onSearch} />
			{repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				{userProfile && !loading && <ProfileInfo userProfile={userProfile} />}

				{!loading && <Repos repos={repos} />}
				{loading && <Spinner />}
			</div>
		</div>
	);
};
export default HomePage;
