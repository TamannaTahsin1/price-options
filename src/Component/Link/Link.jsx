import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        <div>
            <li className='hover:bg-sky-700 px-6'> 
                <a href={route.path}>{route.name}</a> </li>
        </div>
    );
};

Link.propTypes ={
    route: PropTypes.object
}
export default Link;