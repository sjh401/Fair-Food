import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Card.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function CommentEdit(props) {
    const [ formData, setFormData ] = useState({
        message: 'here is the message'
    });
    const { allComments, updateComment, toggle, setToggle, toEdit, darkMode } = props;
    const { location_id, food_id} = useParams();
    
    const useStyles = makeStyles((theme) => ({
        submit: {
            width: '16vw',
            minWidth: '300px',
            margin: 5,
            backgroundColor: (darkMode === true) ? "#d4cdc3" : '#e4b612',
            color: (darkMode === true) ? "#3e885b" : '#333432',
            '&:hover': {
                backgroundColor: (darkMode === true) ? "#30292f" : '#f8f7ff',
                color: (darkMode === true) ? "#d4cdc3" : '#1d7dc2'
            },
        },
        cancel: {
            width: '16vw',
            minWidth: '300px',
            margin: 5,
            backgroundColor: (darkMode === true) ? "#30292f" : '#c30c24',
            color: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
            '&:hover': {
                backgroundColor: (darkMode === true) ? "#d4cdc3" : '#e4b612',
                color: (darkMode === true) ? "#30292f" : '#333432'
            },
        },
        text: {
            width: '16vw',
            minWidth: '300px',
            textDecoration: 'none',
            margin: 5,
            borderRadius: 5,
            backgroundColor: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
            borderColor: (darkMode === true) ? "#d4cdc3" : '#f8f7ff',
            '& label.Mui-focused': {
                color: (darkMode === true) ? "#d4cdc3" : '#e4b612',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: (darkMode === true) ? "#30292f" : '#f8f7ff',
                },
                '&:hover fieldset': {
                    borderColor: (darkMode === true) ? "#30292f" : '#1d7dc2',
                },
                '&.Mui-focused fieldset': {
                    borderColor: (darkMode === true) ? "#30292f" : '#e4b612',
                },
            }
        },
    
    }));

    const classes = useStyles();

    useEffect(() => {
        const prefillFormData = () => {
            const comment = allComments?.find(comment => comment.id === Number(toEdit));
            setFormData({ 
                message: comment?.message
            });
        }
        if(allComments?.length) {
            prefillFormData();
        }
    }, [allComments, toEdit, toggle])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    
    return (
        <div 
        style={{display: ((toggle === false) ? 'none' : 'flex')}}
        className={(darkMode === true) ? "dark-food-detail-comment-edit food-detail-comment-edit" : "food-detail-comment-edit"}
        >
            <form
            className={(darkMode === true) ? "dark-food-detail-comment-edit-form food-detail-comment-edit-form" : "food-detail-comment-edit-form"}
                onSubmit={(e) => {
                e.preventDefault();
                updateComment(location_id, food_id, toEdit, formData)
                setToggle(prevToggle => !prevToggle)
            }}>
                <TextField 
                    className={classes.text}
                    required 
                    label="Message" 
                    variant="outlined"
                    type="text"
                    name="message"
                    value={(formData.message) ? formData.message : 1}
                    onChange={handleChange}
                />
                <br />
                <Button type="submit" variant="contained" className={classes.submit}>
                    Post
                </Button>
                <br />
                <Button variant="contained" className={classes.cancel} onClick={() => setToggle(prevToggle => !prevToggle)}>
                    Cancel
                </Button>
            </form>
        </div>
    )
}
