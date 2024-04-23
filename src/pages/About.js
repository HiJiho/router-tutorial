import { useLocation } from "react-router-dom";

const About = () => {
	const location = useLocation();

	return (
		<div>
			<h1>소개</h1>
			<p>리액트 라우터를 사용해보자</p>
			<p>쿼리스트링: {location.search}</p>
		</div>
	);
};

export default About;
