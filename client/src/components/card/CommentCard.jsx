import React, { useState } from 'react';
import CommentEdit from './CommentEdit';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


export const commentCardCSS = makeStyles((theme) => ({
    button: {
        backgroundColor: '#1d7dc2',
        color: '#f8f7ff',
        width: 50,
        height: 20,
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    text: {
        width: 300,
        height: 'auto',
        backgroundColor: '#f8f7ff',
        borderRadius: 5,
        borderColor: '#1d7dc2',
        '& label.Mui-focused': {
            color: '#e4b612',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#f8f7ff',
            },
            '&:hover fieldset': {
                borderColor: '#1d7dc2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#e4b612',
            },
        }
    },
}));

export default function CommentCard(props) {
    const [ toEdit, setToEdit ] = useState([]);
    const [ toggle, setToggle ] = useState(false);
    const [ formData, setFormData ] = useState({
        message: ''
    });
    const { 
        currentUser,
        allUsers,
        allComments,
        createComment,
        removeComment,
        updateComment,
        comments,
        food,
        location_id,
        food_id
    } = props;

    const classes = commentCardCSS();

    const getUsername = (comment) => {
        const commentUser = allUsers?.find(user => Number(user.id) === Number(comment.user_id))
        return commentUser.username
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <React.Fragment>
            <CommentEdit 
                allComments={allComments}
                updateComment={updateComment}
                currentUser={currentUser}
                toEdit={toEdit}
                toggle={toggle}
                setToggle={setToggle}
            />
            {currentUser && 
                <div 
                    className="food-detail-create-comment" 
                    style={{display: ((toggle === false) ? 'flex' : 'none')}}
                >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        createComment(location_id, food_id, formData)
                        setFormData({message: ''})
                    }}>
                        <TextField 
                            required 
                            className={classes.text}
                            id="outlined-basic" 
                            label="Message" 
                            name="message"
                            variant="outlined"
                            value={formData.message}
                            onChange={handleChange} 
                        />
                        <div>
                            posting as {currentUser?.username} 
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                    Post
                            </Button>
                        </div>
                    </form>
                </div>
            }
            <div 
                className="comment-card-container"
                style={{display: ((toggle === false) ? 'flex' : 'none')}}
            >
                {comments?.map(comment => (
                    <div key={comment.id} className="comment-card">
                        <div className="comment-card-container-addons">
                            <div>
                                {getUsername(comment)}
                            </div>
                            {(currentUser?.id === comment.user_id) &&
                            <div className="comment-card-container-ud">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={() => {
                                        setToEdit(comment.id)
                                        setToggle(prevToggle => !prevToggle)
                                    }}
                                    className={classes.button}>
                                    Edit
                                </Button>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button} 
                                    onClick={() => removeComment(food.location_id, food.id, comment.id)}>
                                    Delete
                                </Button>
                            </div>
                            }
                        </div>
                        <div className="comment-message">
                            {comment.message}
                        </div>
                    </div>))}
            </div>
        </React.Fragment>
    )
}
