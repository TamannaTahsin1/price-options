import { useEffect, useState } from "react";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';



const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
    })

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map(phone => {
            const obj = {
                name: phone.phone_name,
                // eslint-disable-next-line no-undef
                price: parseInst(phone.slug.split('-')[1])
            }
            return obj;
        })
        setPhones(phoneWithFakeData)
    })
    return (
        <div>
            <h2 className="text-5xl bg-or">PHones: {phones.length}</h2>
            <BarChart className="" width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;