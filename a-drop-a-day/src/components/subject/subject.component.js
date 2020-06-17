import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTomatoes, addProject } from "../../redux/actions/tomatoesActions";

import "./subject.styles.scss";
import {
  finishingOneTomatoes,
  resetFinishingTomatoes,
} from "../../redux/actions/tomatoesActions";
import SubjectDetail from "../SubjectDetail/SubjectDetail";

const Subject = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.tomatoesReducers.projects);
  const [userId, setUserId] = useState();

  // const [color, setColor] = useState("white");
  // const [textColor, setTextColor] = useState("black");
  // const [userId, setUserId] = useState(0);

  const isFetching = useSelector((state) => state.tomatoesReducers.isFetching);

  useEffect(() => {
    dispatch(fetchTomatoes());
  }, []);

  const finishedOneTask = () => {
    console.log(props.isStopping);
    props.setIsStopping(false);
  };
  if (props.minutes <= 0) {
    console.log("Yes?");
    dispatch(finishingOneTomatoes(userId));
    props.setMinutes(25);
    props.setBreakTime(false);
    props.setIsStopping(true);
    //add dipatch here to add a block with color
  }
  console.log({ userId });
  return (
    <div>
      {isFetching ? (
        <>
          {projects.map((sub) => {
            return (
              <div className="project" key={sub.id}>
                {/* <SubjectDetail sub={sub} /> */}
                <h1>Project Name: {sub.project}</h1>
                <h2>
                  Finished {sub.finished}/{sub.tomatoes}
                </h2>
                {props.isStopping ? (
                  <>
                    {" "}
                    <button
                      onClick={() => {
                        setUserId(sub.id);
                        return finishedOneTask();
                      }}
                    >
                      <i className="fa fa-play fa-2x" />
                    </button>
                    <button
                      onClick={() => {
                        props.setMinutes(25);
                        dispatch(resetFinishingTomatoes(sub.id));
                      }}
                    >
                      START OVER?
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h1>Fetching...</h1>
        </>
      )}
    </div>
  );
};

export default Subject;

// {tomatoes.map((tom) => {
//   {
//     /* <button style={{background:color,color:textColor}} className='btn btn-primary' onClick={()=>{setColor("black");setTextColor('red')}}>Click here</button> */
//   }
//   return (
//     <button
//       style={{ backgroundColor: color, color: textColor }}
//       className="subjectbox"
//       onClick={() => {
//         changeColor();
//       }}
//     >
//       x
//     </button>
//   );
// })}
