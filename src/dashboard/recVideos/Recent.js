import './Recent.css'

function Recent(){
    return (
        <div>
            <div className="recentVideosSeen">
                <h2>Recently Watched Videos</h2>
                <hr/>
                <div className="container">
                    <div className="panel active panel1"onClick={passOn}>
                        <h3>#PersonalDevelopment</h3>
                    </div>
                    <div className="panel panel2" onClick={passOn}>
                        <h3>#Photography</h3>
                    </div>
                    <div className="panel panel3" onClick={passOn}>
                        <h3>#Algorithms</h3>
                    </div>
                    <div className="panel panel4" onClick={passOn}>
                        <h3>#Medicine</h3>
                    </div>
                    <div className="panel panel5" onClick={passOn}>
                        <h3>#Coding</h3>
                    </div>

                </div>
            </div>

            <h1>Recent Course Completed</h1>
            <hr/>
            <div className="container">


            <div className="courseCompleted panel1">
                <h3>#PersonalDevelopment</h3>
            </div>
            <div className="courseCompleted panel2">
                <h3>#Photography</h3>
            </div>
            <div className="courseCompleted panel3">
                <h3>#DataStructures&Algos</h3>
            </div>
        </div>

        </div>

    )
}

function passOn(){
    const panels = document.querySelectorAll('.panel')

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses()
            panel.classList.add('active')
        })
    })

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }
}
export default Recent