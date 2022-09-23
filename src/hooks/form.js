import { useState } from 'react'


function useAddTodoForm() {
    const [formState, updateFormState] = useState({
        "text": "",
        "duedate": false
    });

    const updateTodoText = (event) => {
        updateFormState({ ...formState, text: event.target.value })
    }
    const updateDate = (event) => {
        updateFormState({ ...formState, duedate: event.target.value })
    }

    return { formState, updateTodoText, updateDate }
}

export default useAddTodoForm