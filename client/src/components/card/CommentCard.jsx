import React from 'react'
import { Link } from 'react-router-dom';

export default function CommentCard(props) {
    const { comments, currentUser, food, allUsers, removeComment } = props;

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
                <React.Fragment key={comment.id}>
                    <div>
                        {comment.message}
                    </div>
                    <div>
                        <div>
                            {getUsername(comment)}
                        </div>
                        {(currentUser?.id === comment.user_id) &&
                        <div>
                            <Link to={`/locations/${food.location_id}/foods/${food.id}/comments/${comment.id}`}>Edit</Link>
                            <button onClick={() => removeComment(food.location_id, food.id, comment.id)}>Delete</button>
                        </div>
                        }
                    </div>
                </React.Fragment>))}
        </div>
    )
}
