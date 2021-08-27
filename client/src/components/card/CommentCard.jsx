import { Link } from 'react-router-dom';


import Button from '@material-ui/core/Button';
import { commentCardCSS } from '../../assets/material';

export default function CommentCard(props) {
    const { comments, currentUser, food, allUsers, removeComment, location_id, food_id } = props;

    const classes = commentCardCSS();

    const getUsername = (comment) => {
        const commentUser = allUsers?.find(user => Number(user.id) === Number(comment.user_id))
        return commentUser.username
    }
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
                            <Link to={`/locations/${location_id}/foods/${food_id}/comments/${comment.id}`} className="card-comment-link">
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
