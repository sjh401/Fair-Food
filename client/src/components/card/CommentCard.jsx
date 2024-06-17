import React, { useState } from 'react';
import CommentEdit from './CommentEdit';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

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
        food_id,
        darkMode
    } = props;

    const commentCardCSS = makeStyles((theme) => ({
        button: {
            backgroundColor: (darkMode === true) ? "#3e885b" : '#1d7dc2',
            color: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
            width: 50,
            height: 20,
            margin: 2,
            '&:hover': {
                backgroundColor: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
                color: (darkMode === true) ? "#3e885b" : '#1d7dc2'
            },
        },
        text: {
            width: '25vw',
            margin: 7,
            minWidth: 300,
            maxWidth: 400,
            height: 'auto',
            backgroundColor: (darkMode === true) ? "#3e885b" : '#f8f7ff',
            borderRadius: 5,
            borderColor: (darkMode === true) ? "#3e885b" : '#1d7dc2',
            '& label.Mui-focused': {
                color: (darkMode === true) ? "#d4cdc3" : '#e4b612',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: (darkMode === true) ? "#3e885b" : '#f8f7ff',
                },
                '&:hover fieldset': {
                    borderColor: (darkMode === true) ? "#3e885b" : '#1d7dc2',
                },
                '&.Mui-focused fieldset': {
                    borderColor: (darkMode === true) ? "#3e885b" : '#e4b612',
                },
            }
        },
    }));

    const classes = commentCardCSS();

    const getUsername = (comment) => {
        const commentUser = allUsers?.find(user => Number(user.id) === Number(comment.user_id))
        return (
            <div>
                {commentUser?.username}
            </div>
        )
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
                darkMode={darkMode}
            />
            {currentUser && 
                <div 
                    className={(darkMode === true) ? "dark-food-detail-create-comment food-detail-create-comment" : "food-detail-create-comment" }
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
                            label="Message" 
                            name="message"
                            variant="outlined"
                            value={formData.message}
                            onChange={handleChange} 
                        />
                        <div className="comment-card-posting-user">
                            posting as {currentUser.username} 
                            <Button type="submit" variant="contained" color="primary" className={classes.button}>
                                    Post
                            </Button>
                        </div>
                    </form>
                </div>
            }
            <div 
                className={(darkMode === true) ? "dark-comment-card-container comment-card-container" : "comment-card-container"}
                style={{display: ((toggle === false) ? 'flex' : 'none')}}
            >
                {comments?.map(comment => (
                    <div key={comment.id} className="comment-card">
                        <div className="comment-card-container-addons">
                            
                                {getUsername(comment)}
                            
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
                        <div className={(darkMode === true) ? "dark-comment-message comment-message" : "comment-message"}>
                            {comment.message}
                        </div>
                    </div>))}
            </div>
        </React.Fragment>
    )
}
