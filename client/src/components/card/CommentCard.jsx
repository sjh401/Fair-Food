import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
}));

export default function CommentCard(props) {
    const { comments, currentUser, food, allUsers, removeComment } = props;

    const classes = useStyles();

    const getUsername = (comment) => {
        const commentUser = allUsers?.find(user => Number(user.id) === Number(comment.user_id))
        return commentUser.username
    }

    // const toggleEdit = () => {
    //     const 
    // }

    return (
        <div className="comment-card-container">
            {comments?.map(comment => (
                <div key={comment.id} className="comment-card">
                    <div className="comment-card-container-addons">
                        <div>
                            {getUsername(comment)}
                        </div>
                        {(currentUser?.id === comment.user_id) &&
                        <div className="comment-card-container-ud">
                            <Link to={`/locations/${food.location_id}/foods/${food.id}/comments/${comment.id}`} className="card-comment-link">
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    className={classes.button}>
                                    Edit
                                </Button>
                            </Link>
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
    )
}
