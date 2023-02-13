import { useState } from 'react';
import Statistics from './Contakt/Statistics';
import FeedbackOptions from './Contakt/FeedbackOptions';
import Notification from './Contakt/Notification';
import Section from './Contakt/Section';

const App = () => {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);


	const handleFeedbackClick = e => {
		const { name } = e.target;
		switch (name) {
			case 'good':
				setGood(prev => prev + 1);
				break;
			case 'neutral':
				setNeutral(prev => prev + 1);
				break;
			case 'bad':
				setBad(prev => prev + 1);
				break;
			default: return
		}
	};

	const countTotalFeedback = () => {
		return good + neutral + bad;
	};

	const countPositiveFeedbackPercentage = () => {
		const total = countTotalFeedback();
		return total ? Math.round((good / total) * 100) : 0;
	};

	const total = countTotalFeedback();
	return (

		<div className="w-50 mb-4 p-3 text-white rounded bg-dark rounded-4 mx-auto my-auto shadow-lg">
			<Section title={'Please leave feedback'}>
				<FeedbackOptions
					handleFeedbackClick={handleFeedbackClick}
					options={['good', 'neutral', 'bad']}
				/>
			</Section>
			<Section title={'Statistics'}>
				{total > 0 ? (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={total}
						positiveFeedback={countPositiveFeedbackPercentage()}
					/>
				) : (
					<Notification message={'There is no feedback'} />
				)}
			</Section>
		</div>
	);
};
export default App;