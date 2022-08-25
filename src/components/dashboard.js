import React, { useEffect, useState } from "react";
import DiaryItem from "./diary_item";



export default function Dashboard(){
    
    const [diaries, setdiaries] = useState([])

    useEffect(() => {
        setdiaries([1,2,3,4,6,7,7,8,9,9,9])
    }, [])
    return (
        <div className="dashboard_container">

            <div className="dashboard_wrapper">
            <form>
                <h2>New Diary Item</h2>
      
                <div>
                    <label>Title</label>
                    <input placeholder="Enter Item Title" name="title" type="text"/>
                </div>
          
                <div>
                    <label>Description</label>
                    <textarea placeholder="Enter Description" name="description" type="text"/>
                </div>
            
                <button>Add To Diary</button>
            
            </form>

            <div className="diaries_container">


                {diaries.map( (diary) => {
                    return <DiaryItem  diary={diary}/>
                })}
            </div>
            </div>

        </div>
    )
}