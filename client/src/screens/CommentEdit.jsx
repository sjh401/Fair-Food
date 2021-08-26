import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function CommentEdit(props) {
    const [ formData, setFormData ] = useState({
        message: ''
    });
    const { allComments, updateComment } = props;
    const { location_id, food_id, comment_id} = useParams();

    useEffect(() => {
        const prefillFormData = () => {
            const comment = allComments?.find(comment => comment.id === Number(comment_id));
            setFormData({ 
                message: comment.message
            });
        }
        if(allComments.length) {
            prefillFormData();
        }
    }, [allComments, comment_id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateComment(location_id, food_id, comment_id, formData)
            }}>
                <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <button>Post</button>
            </form>
        </div>
    )
}
