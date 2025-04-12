export interface Value {
	text: string
}

export interface Category {
	name: string
	color:
		| 'blue'
		| 'purple'
		| 'green'
		| 'yellow'
		| 'amber'
		| 'red'
		| 'sky'
		| 'indigo'
		| 'orange'
	values: Value[]
}

export const categories: Category[] = [
	{
		name: 'Relationships',
		color: 'blue',
		values: [
			{
				text: "I'll take people along for the ride, as I need relationships to nurture my mental state."
			},
			{ text: 'I will not let people limit me in my dreams and goal-setting.' },
			{
				text: 'As an introvert, I find meaning and fulfilment in nurturing relationships and creating shared experiences.'
			},
			{
				text: 'I have compassion for everyone and treat every person the same, like a person.'
			},
			{
				text: 'I want contribution to the community to be a theme throughout my life.'
			}
		]
	},
	{
		name: 'Spirituality',
		color: 'purple',
		values: [
			{ text: 'The Divine is watching, do the right thing, always.' },
			{
				text: 'I see the Divine as my guide in life and thus seek active connection with it to lead me on how to live my best life.'
			},
			{
				text: 'I respect everyone\'s beliefs. Not wanting to convince with words, but by "showing" my actions.'
			},
			{
				text: 'I believe we are all one in multitudes. Every culture and belief is another eye on the infinite and is incredibly interesting.'
			},
			{
				text: "Losing hope is the worst thing that can happen. It's not possessions, relationships or anything else, it's hope."
			}
		]
	},
	{
		name: 'Curiosity',
		color: 'green',
		values: [
			{
				text: 'I embrace innovation, selecting new technologies, learning from them and applying what works.'
			},
			{
				text: 'I embrace change, keeping myself in check if I am aspiring to be the best person I can be in a changing world.'
			},
			{
				text: 'I believe travel is the most profound way you can develop in life. I will keep traveling and staying curious and open to new experiences.'
			},
			{
				text: 'I commit to always keep learning throughout my life, acquiring new skills and knowledge.'
			}
		]
	},
	{
		name: 'Mindset',
		color: 'yellow',
		values: [
			{
				text: 'Having a positive mindset is key, because the outer world is a mirror of your inner world. Before you can change the world, you have to change yourself.'
			},
			{
				text: 'I believe complaining is the most useless and harmful thing to yourself you can do.'
			},
			{
				text: 'I believe I am personally responsible for my actions and results I achieve in my life.'
			}
		]
	},
	{
		name: 'Wealth',
		color: 'amber',
		values: [
			{
				text: 'I believe financial independence empowers me to focus on impactful, meaningful pursuits.'
			},
			{
				text: 'I will not become materialistic. Everything I own should serve a purpose other than status.'
			}
		]
	},
	{
		name: 'Planning/Career',
		color: 'red',
		values: [
			{
				text: 'I will not trade my time for money unless absolutely necessary.'
			},
			{ text: 'I apply rigorous planning to every aspect of my life.' },
			{ text: 'In anything I do, the goal is excellence.' },
			{ text: 'In anything I do, I maintain integrity.' },
			{
				text: 'I believe mentorship is one of the best ways to develop yourself and your career, and should seek out mentorship as well as aspire to become a mentor.'
			}
		]
	},
	{
		name: 'Health and wellbeing',
		color: 'sky',
		values: [
			{ text: 'I will put my mental health first in whatever situation.' },
			{
				text: 'I believe my physical wellbeing is deeply connected with my mental one. I will prioritise working out and "moving" throughout my life.'
			}
		]
	},
	{
		name: 'Life purpose',
		color: 'indigo',
		values: [
			{ text: "I will only chase my own dreams, not someone else's." },
			{ text: 'My life is an adventure to find the truth, as in my truth.' },
			{
				text: 'Once I attain my freedom, I want to devote my life to addressing problems that affect the world, like for example climate change.'
			}
		]
	},
	{
		name: 'Handle adversity',
		color: 'orange',
		values: [
			{
				text: 'However dire my situation, I will not kill myself'
			},
			{
				text: 'I will take criticism as an opportunity for growth and will never refute constructive criticism.'
			},
			{
				text: 'I believe the best way to handle any problem is to go straight at it. Go directly towards your pain, do the most difficult thing first'
			},
			{
				text: "I aspire to choose to do the best thing in whatever situation I'm in"
			},
			{
				text: 'I believe failure is necessary to become successful'
			}
		]
	}
]
