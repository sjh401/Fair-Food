import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Card.css'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    submit: {
        width: '16vw',
        minWidth: '300px',
        margin: 5,
        backgroundColor: '#e4b612',
        color: '#333432',
        '&:hover': {
            backgroundColor: '#f8f7ff',
            color: '#1d7dc2'
        },
    },
    cancel: {
        width: '16vw',
        minWidth: '300px',
        margin: 5,
        backgroundColor: '#c30c24',
        color: '#f8f7ff',
        '&:hover': {
            backgroundColor: '#e4b612',
            color: '#333432'
        },
    },
    text: {
        width: '16vw',
        minWidth: '300px',
        textDecoration: 'none',
        margin: 5,
        backgroundColor: '#f8f7ff',
        borderRadius: 5,
    },

}));
export default function CommentEdit(props) {
    const [ formData, setFormData ] = useState({
        message: ''
    });
    const { allComments, updateComment, toggle, setToggle, toEdit } = props;
    const { location_id, food_id} = useParams();
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
        className="food-detail-comment-edit" 
        >
            <form
            className="food-detail-comment-edit-form"
                onSubmit={(e) => {
                e.preventDefault();
                updateComment(location_id, food_id, toEdit, formData)
                setToggle(prevToggle => !prevToggle)
            }}>
                <TextField 
                    className={classes.text}
                    required 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined"
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" className={classes.submit}>
                    Post
                </Button>
                <Button variant="contained" className={classes.cancel} onClick={() => setToggle(prevToggle => !prevToggle)}>
                    Cancel
                </Button>
            </form>
        </div>
    )
}
