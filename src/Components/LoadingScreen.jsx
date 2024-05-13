import { useProgress } from '@react-three/drei'

export default function LoadingScreen() {

    const { active, progress, errors, item, loaded, total } = useProgress()

    const percentage = Math.trunc(loaded / 21 * 100)

    console.log(percentage)

    // active is a boolean that indicates if the loader is active
    // progress is a number between 0 and 100
    // errors is an array of errors that occurred
    // item is the current item being loaded
    // loaded is the number of items loaded
    // total is the total number of items to be loaded, but it doesnt work, so the number as of now is 21 to be pitted against the 21 items in the scene
    // add a loading bar with a percentage above the bar, beside the loading text

    return (
        <>
            <div className="loadingScreen"></div>
            <h1>Loading... {percentage}%</h1>
            <h2>Loading... {percentage}%</h2>
            
        </>
    )
}