export default function Startup( loaded, setLoaded ) {


    return (
        <>
            <div className="buttonScreen">
                <h1 className="title" >John Arocha's Portfolio</h1>
                <p className="instructions">(Click on the computer to zoom)</p>
                <p className="instructions2">(Click on the screen to type in the terminal)</p>

                <div className="button" onClick={() => setLoaded(true)}>Click to Start</div>
            </div>
        </>
    )
}