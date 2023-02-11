import React, { useState } from "react";
import axios from "axios";
import "../../styles/profile.scss";

const ProfileCreation = () => {
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    plan: "",
    impact: "",
    funding_needs: "",
  });

  const { name, goal, plan, impact, funding_needs } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newNGO = { name, goal, plan, impact, funding_needs };
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newNGO);
      const res = await axios.post("/ngo/create", body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="profile-box">
      <div className="profile-form-data">
        <div className="left">
          <form className="profile_data_after_signup">
          <h1>Users Data</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              className="input"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="input"
            />
          </form>
        </div>
        <div className="right">
          <form onSubmit={onSubmit} className="profile_form_container">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="NGO Name"
              className="input"
            />
            <input
              type="text"
              name="goal"
              value={goal}
              onChange={onChange}
              placeholder="Goal"
              className="input"
            />
            <input
              type="text"
              name="plan"
              value={plan}
              onChange={onChange}
              placeholder="Plan"
              className="input"
            />
            <input
              type="text"
              name="impact"
              value={impact}
              onChange={onChange}
              placeholder="Impact"
              className="input"
            />
            <input
              type="number"
              name="funding_needs"
              value={funding_needs}
              onChange={onChange}
              placeholder="Funding Needs"
              className="input"
            />
            <button type="submit" className="green_btn">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
