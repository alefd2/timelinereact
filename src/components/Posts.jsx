import { Comment } from './Comment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


import styles from './Post.module.css';
import { useState } from 'react';


export const Posts = ({ author, content, publishedAt }) => {

    const [newCommentText, setNewCommentText] = useState('');

    const [comments, setComments] = useState([
        'Post muito bacana, show de bola!'
    ]);

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        // Aplicaç~ao real deveria enviar para o banco aqui !
        // e depois zerar o estado do textarea

        // pushMethod();

        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR, });
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong> {author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(item => {
                    if (item.type == 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    } else if (item.type == 'link') {
                        return <p key={item.content}><a href="#"></a>{item.content}</p>
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comantário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment key={comment} content={comment} />
                    })
                }
            </div>
        </article >
    );
}