import './FAQ.css'

function FAQ(){
    return (
        <div>
            <h1 id="faq">Have Questions?</h1>
            <hr/>
            <div className="faq-container">
                <div className="faq active">
                    <h3 className="faq-title">
                        What is my hourly freelancing rate?
                    </h3>

                    <p className="faq-text">
                        Thank you for considering. Contact <a href="mailto:contactme@ulearn.com">me</a> we can discuss over coffee.
                    </p>

                    <button className="faq-toggle">
                        <i className="fas fa-chevron-down" onClick={passOn}/>
                        <i className="fas fa-times" onClick={passOn}/>
                    </button>
                </div>

                <div className="faq">
                    <h3 className="faq-title">
                        What do you call someone with no body and no nose?
                    </h3>
                    <p className="faq-text">
                        Nobody knows.
                    </p>
                    <button className="faq-toggle">
                        <i className="fas fa-chevron-down" onClick={passOn}/>
                        <i className="fas fa-times" onClick={passOn}/>
                    </button>
                </div>

                <div className="faq">
                    <h3 className="faq-title">
                        Does as a developer I laugh?
                    </h3>
                    <p className="faq-text">
                        My Question to you <br/>
                        What's the object-oriented way to become wealthy?<br/>
                        Inheritance.
                    </p>
                    <button className="faq-toggle">
                        <i className="fas fa-chevron-down" onClick={passOn}/>
                        <i className="fas fa-times" onClick={passOn}/>
                    </button>
                </div>

                <div className="faq">
                    <h3 className="faq-title">
                        Looking for my  past projects?
                    </h3>
                    <p className="faq-text">
                        You can find them <a href="mailto:contactme@ulearn.com">here</a>
                    </p>
                    <button className="faq-toggle">
                        <i className="fas fa-chevron-down" onClick={passOn}/>
                        <i className="fas fa-times" onClick={passOn}/>
                    </button>
                </div>

                <div className="faq">
                    <h3 className="faq-title">
                        How to contact me?
                    </h3>
                    <p className="faq-text">
                        You can mail me <a href="mailto:contactme@ulearn.com">here</a>
                    </p>
                    <button className="faq-toggle">
                        <i className="fas fa-chevron-down" onClick={passOn}/>
                        <i className="fas fa-times" onClick={passOn}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

function passOn(){
    const toggles = document.querySelectorAll('.faq-toggle')

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.parentNode.classList.toggle('active')
        })
    })
}
export default FAQ