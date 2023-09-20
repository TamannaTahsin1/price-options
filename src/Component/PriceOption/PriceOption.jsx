/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-sky-600 text-white p-6
        rounded-md text-center my-8 flex flex-col'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-2xl'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                // eslint-disable-next-line react/prop-types
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature> )
            }
            </div>
            <button className='mt-12 bg-green-600 p-2 rounded-lg font-bold hover:bg-green-900'>Buy Now</button>
        </div>
    );
};


PriceOption.prototype ={
    option: PropTypes.object
}
export default PriceOption;