import { useState } from 'react'

function useDisplayForm() {
    const [displayForm, setDisplayForm] = useState(false)

    const toggleDisplayForm = () => {
        setDisplayForm(!displayForm)
    }

    return [displayForm, toggleDisplayForm]
}

export default useDisplayForm