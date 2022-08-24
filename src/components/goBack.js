import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function GoBack() {
    const navigate = useNavigate()

    return (
        <Link to="#!" onClick={() => navigate(-1)}
            className="relative border text-lg border-blue-500 py-2 px-4 hover:bg-blue-500 hover:text-white duration-300 rounded-md">Go Back</Link>
    )
}
