import React, { useState } from 'react';
import axios from 'axios';

const ProfileCreation = () => {
    const [formData, setFormData] = useState({
        name: '',
        goal: '',
        plan: '',
        impact: '',
        funding_needs: ''
    });

    const { name, goal, plan, impact, funding_needs } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const newNGO = { name, goal, plan, impact, funding_needs };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(newNGO);
            const res = await axios.post('/ngo/create', body, config);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="NGO Name"
            />
            <input
                type="text"
                name="goal"
                value={goal}
                onChange={onChange}
                placeholder="Goal"
            />
            <input
                type="text"
                name="plan"
                value={plan}
                onChange={onChange}
                placeholder="Plan"
            />
            <input
                type="text"
                name="impact"
                value={impact}
                onChange={onChange}
                placeholder="Impact"
            />
            <input
                type="number"
                name="funding_needs"
                value={funding_needs}
                onChange={onChange}
                placeholder="Funding Needs"
            />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default ProfileCreation;
