import './WhiteWave.css'

const WhiteWave = () => {
    return (
        <div className="whiteWave-container">
            <div className="whiteWave-parent">
                <img src={require('../Assets/whiteShape.jpg').default} alt="no internet connection" />
            </div>
        </div>
    )
}

export default WhiteWave
