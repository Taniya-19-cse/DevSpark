import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import store from "../../Store/store";
import { addRequest ,removeRequest} from "../../Store/requestSlice";
const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();
  const reviewRequest=async(status,_id)=>{
    try{
         const res=await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true});
          dispatch(removeRequest(_id));
    }catch(err){
        console.log(err.message);
    }
   
  }
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (requests.length === 0) {
    return <h1 className="text-bold text-2xl justify-center">No Requests Found</h1>;
  }
  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl text-white">Requests</h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            key={_id}
            className="flex m-4 p-4 justify-between items-center rounded-lg bg-base-300 mx-auto"
          >
            <div>
              {" "}
              <img
                src=""
                className="w-20 h-20 rounded-full "
                alt="photo"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4">
              <h1 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h1>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div>
                <h1>{request._id}</h1>
              <button className="btn btn-active btn-primary mx-2" onClick={()=>reviewRequest("accepted",request._id)}>Accept</button>
              <button className="btn btn-active btn-secondary mx-2" onClick={()=>reviewRequest("rejected",request._id)}>
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
