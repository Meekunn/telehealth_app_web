interface IBaseRoutes {
	path: string;
	exact?: boolean;
	component: React.LazyExoticComponent<() => JSX.Element>;
	// isAuthenticated?: boolean;
	// isProtected: boolean;
	layout?: ({ children }) => JSX.Element;
}

// interface PhishingEmails {
// 	subject: string;
// 	recipient: string;
// 	body: string;
// }

interface LessonContent {
	header: {
		id: string,
		image: string,
		name: string
	};
	intro?: {
		image?: string,
		texts: {
			[children: string]: {
				type: string,
				content: string
			}
		}
	};
	subHeadings: {
		[subHeading: string]: {
			name: string;
			content: React.ReactElement;
			breakAfter?: JSX.Element | string | boolean;
			breakBefore?: JSX.Element | string | boolean;
		}
	}
	video?: {
		title?: string
		file: string;
	}
	quizzes: {
		[quiz: string]: {
			type: string;
			question: string;
			instruction?: string;
			options?: {
				[option: string]: {
					text: string;
					isCorrect: boolean;
				}
			}
			correctAnswers?: string[]; // For select-multiple questions
			answerField?: {
				type: string;
				options?: string[]; // For dropdown type
			};
		}
	}
	email?: {
		subject: string;
		recipient: string;
		body: string;
	}
}

interface LessonTextContent {
  [lesson: string]: LessonContent;
}



