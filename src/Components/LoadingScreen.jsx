import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {

    const { active, progress, errors, item, loaded, total } = useProgress()

    const percentage = Math.trunc(loaded / 27 * 100)

    console.log(percentage)
    console.log(total)

    const loadingBar = percentage * .9

    return (
        <>
            <div className="loadingScreen">
                <h1>Loading... {percentage}%</h1>
                <div className="loadingBar" style={{ width: `${loadingBar}%` }} />
                <div className="loadingBarIndent" />
                <div className="pfp"><img src="/photos/pfp.jpg" alt="" /></div>
                <p className="name">(Click on the screen to type in the terminal)</p>
            </div>
        </>
    )
}