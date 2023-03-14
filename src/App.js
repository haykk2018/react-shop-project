function App() {
    return <>
        <div className="container">
            <span>Hello</span><span className="material-icons">waving_hand</span>
            <div className="row">
                <div className="col s12"><span
                    className="flow-text">This div is 12-columns wide on all screen sizes</span></div>
                <div className="col s6 offset-s6"><span className="flow-text">6-columns (offset-by-6)</span></div>
            </div>
        </div>
    </>
}

export default App;
