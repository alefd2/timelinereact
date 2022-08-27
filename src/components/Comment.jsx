import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export const Comment = ({ content }) => {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/alefd2.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alef Oliveira</strong>
                            <time title="25 de Agosto às 08:13h" dateTime="2022-08-25 20:00:00">Cerca de uma 1h atrás</time>
                        </div>
                        <button tittle="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}