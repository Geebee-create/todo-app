import Form from './Form.js';

const Date = ({day, month, year, activityInput}) => {
    return (
       <div>
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
        <p>{activityInput}</p>
        <button>delete</button>
       </div> 
    )
}

export default Date