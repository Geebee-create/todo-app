const Date = ({ day, month, year }) => {
    return (
       <div>
        <p>{day}</p>
        <p>{month}</p>
        <p>{year}</p>
        <button>delete</button>
       </div> 
    )
}

export default Date