import React from "react";
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'


export default function DiaryItem({props}){
    return (
        <div className="diary_item_wrapper">
            <div className="item_content">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className="action_icons">
                <p><AiFillEdit /></p>
                <p><AiFillDelete /></p>
            </div>
        </div>
    )
}