import React from "react";

export default function Dashboard(){
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
            </div>

        </div>
    )
}