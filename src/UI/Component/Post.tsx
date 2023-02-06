import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FC, useContext, useEffect, useState } from 'react';
import { IPost } from '../../Context/Context.interface';
import { Context } from '../../Context/ContextWrapper';
import { useAsyncEffect } from '../../hooks/useAsyncEffect';
import { Pagination } from './Pagination';


export const Post = () => {

    const { getPost, post } = useContext(Context);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const cardPerPage: number = 12

    useAsyncEffect(async () => {
        getPost(await (await fetch('https://jsonplaceholder.typicode.com/posts')).json())
    }, []);


    const [currentCard, setCurrentCard] = useState<IPost[]>([])
    useEffect(() => {
        const lastCardIndex: number = currentPage * cardPerPage;
        const firstCardIndex: number = lastCardIndex - cardPerPage;
        const currentCards: IPost[] = post.slice(firstCardIndex, lastCardIndex);
        setCurrentCard(currentCards)
    }, [currentPage, post])

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div style={{display: "flex",flexWrap: "wrap", width: "55%",justifyContent: "space-between", alignContent: "center"}}>
                    {currentCard.map((el) => (
                        <div key={el.id}>
                            <Card style={{ width: '18rem', marginBottom: "2rem" }}>
                                <Card.Body>
                                    <Card.Title>{el.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Автор: {el.userId}</Card.Subtitle>
                                    <Card.Text>
                                        {el.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
                <div>
                    <Pagination
                        cardyPerPage={cardPerPage}
                        totalCard={post.length}
                        pagination={paginate}
                    />
                </div>
            </div>
        </>
    )
}

