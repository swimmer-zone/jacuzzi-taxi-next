import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import { nl } from 'date-fns/locale'
import PropTypes from "prop-types";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '../assets/components/date.scss';

// https://github.com/hypeserver/react-date-range

const DateComponent = ({ ranges, onChange, onSubmit, ...rest }) => {
    const [ selectedDateRange, setSelectedDateRange ] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection'
    });
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ comment, setComment ] = useState('');
	const [ formError, setFormError ] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !comment) {
			setFormError('Niet alle verplichte velden zijn ingevuld');
			return;
		}

		const { data, error } = await supabase
			.from('contact')
			.insert([{ name, email, comment }]);

		if (error) {
			console.log(error);
			setFormError('Er is iets fout gegaan bij het opslaan');
		}
		if (data) {
			console.log(data);
			setFormError(null);
		}
	}

    const formatDateDisplay = (date, defaultText) => {
		if (!date) {
			return defaultText;
		}
		return format(date, "dd-MM-yyyy");
    }

    const handleSelect = (ranges) => {
		setSelectedDateRange(ranges.selection);
		console.log(ranges.selection);
    };

	const onClickClear = () => {
		setSelectedDateRange({
			startDate: new Date(),
			endDate: new Date(),
			key: "selection"
		});
	};

	const reserved = [
		new Date(2023, 10, 20),
		new Date(2023, 10, 21),
		new Date(2023, 10, 22),
		new Date(2023, 11, 14),
		new Date(2023, 11, 15),
		new Date(2023, 11, 16)
	];

    return (<div className="picker-container">
		<DateRangePicker
			className="picker"
			onChange={handleSelect}
			showSelectionPreview={true}
			moveRangeOnFirstSelection={false}
			months={2}
			ranges={[selectedDateRange]}
			direction="horizontal"
			locale={nl}
			minDate={new Date}
			disabledDates={reserved}
			color="#3998f4"
			dateDisplayFormat="dd MMMMMMMMMM yyyy"
			monthDisplayFormat="MMMMMMMMMM yyyy"
			weekdayDisplayFormat="EE"
			showMonthAndYearPickers={false}
			/>
		
		<form onSubmit={handleSubmit}>
			<div>
				<input 
					type="text" 
					name="name"
					id="name"
					value={name}
					placeholder="Naam"
					onChange={(e) => setName(e.target.value)}/>
			</div>
			<div>
				<input 
					type="email" 
					name="email"
					id="email"
					value={email}
					placeholder="E-mail"
					onChange={(e) => setEmail(e.target.value)}/>
			</div>
			<div>
				<textarea 
					name="comment"
					id="comment"
					value={comment}
					placeholder="Opmerkingen"
					onChange={(e) => setComment(e.target.value)}/>
			</div>
			<button className="primary">Reserveren</button>
			<button className="secondary" onClick={onClickClear}>Wissen</button>
			<input 
				type="hidden" 
				id="date_from" 
				name="date_from" 
				value={formatDateDisplay(selectedDateRange.startDate)}/>
			<input 
				type="hidden" 
				id="date_until" 
				name="date_until" 
				value={formatDateDisplay(selectedDateRange.endDate)}/>
		</form>
	</div>);
};

DateComponent.propTypes = {
    onSubmit: PropTypes.func
};

export default DateComponent;
