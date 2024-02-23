import { useState } from "react"

const Form = ({
    handleSubmit,
    activityInput,
    setActivityInput,
}) => {

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter Activity:
                <input
                    type="text"
                    value={activityInput}
                    onChange={(event) => setActivityInput(event.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form