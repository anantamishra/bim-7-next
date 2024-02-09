'use client'
import { useEffect } from "react"

export default function AboutPage() {
    // use of useEffect

    useEffect(() => {
        console.log("About Page")
    })

    useEffect(() => {
        console.log("About 1 Page")
    }, [])

    useEffect((a) => {
        console.log("About 12 Page")
    }, [a])




    return (
        <div>

        </div>

    )
}
