import './Wave.css'
 const BlackWave = () => {

    return (
        <div className="wave-container">
            <div className="wave-parent">
                <img src={require('../Assets/wave.jpg').default} alt="no internet connection" />
            </div>
        </div>
    )
}
export default BlackWave;
