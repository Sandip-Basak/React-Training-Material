import profilePic from './assets/a.jpg';
import PropTypes from 'prop-types';
function Card(props){
    const styles = {
        color: "red"
    }
    return(
        <div className="card">
            <img src={profilePic} alt="" className='imgBorder' />
            <h2 style={styles}>{props.name}</h2>
            <p>{props.data}</p>
            <p>Billionare: {props.justBoolean ? "Yes" : "No"}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    data: PropTypes.string,
    justBoolean: PropTypes.bool
}
Card.defaultProps = {
    name: "Mr. X",
    data: "Invisible Man",
    justBoolean: false
}

export default Card;