import React from 'react'

export default function CommentCard(props) {
    const { comments } = props;

    return (
        <div>
            {comments.map(comment => (
                <React.Fragment key={comment.id}>
                    <div>
                        {comment.message}
                    </div>
                </React.Fragment>))}
        </div>
    )
}
