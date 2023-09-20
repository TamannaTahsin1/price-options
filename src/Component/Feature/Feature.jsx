/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap-2'> <AiFillCheckCircle className='text-green-600'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.prototype ={
    feature: PropTypes.string
}
export default Feature;