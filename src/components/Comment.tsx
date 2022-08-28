import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export const Comment = ({ content, onDeleteComment }:CommentProps) => {

    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {

        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/alefd2.png" alt="Avatar" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alef Oliveira</strong>
                            <time
                                title="25 de Agosto às 08:13h"
                                dateTime="2022-08-25 20:00:00"
                            >
                                Cerca de uma 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}