import React, { useState } from "react";
import Card from "../Card";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import { addUser } from "../../Store/userSlice";
function EditProfile({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
    const dispatch=useDispatch();
  const saveProfile = async () => {
    try {
        console.log("Clicked");
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoURL,
          age,
          gender,
          about,
        },
          { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data))
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-96 shadow-md mt-20">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="justify-center">
              <fieldset className="fieldset">
                <label className="label" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="input input-bordered w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <label className="label" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="input input-bordered w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
                <label className="label" htmlFor="photourl">
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photourl"
                  className="input input-bordered w-full"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  placeholder="Photo URL"
                />
                <label className="label" htmlFor="age">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  className="input input-bordered w-full"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Age"
                />

                <label className="label" htmlFor="gender">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  className="input input-bordered w-full"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  placeholder="Gender"
                />

                <label className="label" htmlFor="about">
                  About
                </label>
                <textarea
                  id="about"
                  className="textarea textarea-bordered w-full"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="About you..."
                />
              </fieldset>
            </div>
            <div className="card-actions justify-center ">
              <button className="btn btn-primary w-full" onClick={saveProfile}>Edit Profile</button>
            </div>
          </div>
        </div>
        <Card user={{ firstName, lastName, photoURL, age, gender, about }} />
      </div>
    </>
  );
}

export default EditProfile;
