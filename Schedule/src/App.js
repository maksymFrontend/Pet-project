import logo from './logo.svg';
import './App.css';
import { ListGroup, Badge, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const myDeal = [ 
	{
		id:1,
		name: 'Зарядка',
		description: 'Выполнить комплекс упражнений. Выполнить комплекс упражнений.',
		timeStart:1682455617,
		timeFinish: 1682456080,
		done: true,
	},
	{
		id:2,
		name: 'Зарядка',
		description: 'Выполнить комплекс упражнений',
		timeStart:1682455617,
		timeFinish: 1682456080,
		done: false,
	},
	{
		id:3,
		name: 'Зарядка',
		description: 'Выполнить комплекс упражнений',
		timeStart:1682455617,
		timeFinish: 1682456080,
		done: true,
	},
	{
		id:4,
		name: 'Зарядка',
		description: 'Выполнить комплекс упражнений',
		timeStart:1682455617,
		timeFinish: 1682560685,
		done: false,
	},
	{
		id:5,
		name: 'Зарядка',
		description: 'Выполнить комплекс упражнений',
		timeStart:1682455617,
		timeFinish: 1682456080,
		done: false,
	},
	{
		id:6,
		name: 'Зарядка',
		description: '',
		timeStart:1682455617,
		timeFinish: 1682456080,
		done: true,
	},
]


function App() {
	let doneDeal = myDeal.reduce((b, {done}) => {return done?++b:b}, 0)
	let percentDoneDeal = doneDeal*100/myDeal.length
	return (
		<div className="App">
			<ProgressBar now={percentDoneDeal} label={`${percentDoneDeal.toFixed(1)}%`} />
			<ListGroup as="ul">
				{
					myDeal.map(
						({id, name, description, timeStart, timeFinish, done}) => {
							const dateStart = new Date(timeStart * 1000); 
							const dateFinish = new Date(timeFinish * 1000);
							const unixTime = Math.floor(new Date().getTime() / 1000);
							const active = ((timeStart <= unixTime) && (unixTime <= timeFinish))
							console.log(active)
							return(
								<ListGroup.Item 
									key={id}
									as="li"
									className={`d-flex justify-content-between align-items-center list-group-item ${done&&'text-decoration-line-through'}`}
									active={active}
								>
									<div className="input-group d-flex justify-content-between" style={{flexWrap: 'inherit'}} id={id}>
										<div className="input-group-text checkboxBox">
											<input mlFor={id} className="form-check-input mt-0" type="checkbox" checked={done} aria-label="Checkbox for following text input"/>
										</div>
										<div className="w-100">
											<div className="fw-bold d-flex justify-content-between">
												{ name }
												<Badge bg={active?`light`:`primary`}  pill>
													{dateStart.getHours()}:{dateStart.getMinutes()} - {dateFinish.getHours()}:{dateFinish.getMinutes()}
												</Badge>
											</div>
											{ description }
										</div>
										</div>

								</ListGroup.Item>
							)
						}
					)
				}
			</ListGroup>
		</div>
	);
}

export default App;
