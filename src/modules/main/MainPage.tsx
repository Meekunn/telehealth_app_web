import { Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
// import Lesson from '../course-content/Lesson';

const MainPage = () => {
	// const [recipient, setRecipient] = useState("");
	// const [subject, setSubject] = useState("");
	// const [body, setBody] = useState("");
	// const [message, setMessage] = useState("");

	// const sendPhishingEmail = async (e: React.FormEvent) => {
	//   e.preventDefault();
	//   try {
	//     const response = await axios.post(
	//       "http://localhost:3000/send-phishing-email",
	//       {
	//         recipient,
	//         subject,
	//         body,
	//       }
	//     );
	//     setMessage(response.data.message);
	//   } catch (error) {
	//     setMessage("Error sending email");
	//   }
	// };
	return (
		<>
			<Stack>
				{/* <Heading>This is just a Dummy Page...</Heading> */}
				{/* <Lesson quiz lesson={undefined} /> */}
				{/* <Lesson video /> */}
				<Outlet />
			</Stack>
		</>
	);
};

export default MainPage;
