import { Comment } from './Comment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';


import styles from './Post.module.css';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    avatarUrl: string;
        name: string;
        role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string; 
}

export interface PostProps {
    author: Author;
    content: Content[];    
    publishedAt: Date;
}

export const Posts = ({ author, content, publishedAt }:PostProps) => {

    const [newCommentText, setNewCommentText] = useState('');

    const [comments, setComments] = useState([
        'Post muito bacana, show de bola!'
    ]);

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        // Aplicação real deveria enviar para o banco aqui !
        // e depois zerar o estado do textarea

        // ---> pushMethod();

        setNewCommentText('');
    }

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    const handelNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }


    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        //COnceito: imutabilidade o valor do setState não é atualizado diretamente
        setComments(commentsWithoutDeleteOne);
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR, });
    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.length === 0;

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
                    onInvalid={handelNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article >
    );
}