import React, { FC, useEffect, useState } from 'react'

interface PaginationProps{
    cardyPerPage: number;
    totalCard: number;
    pagination: (pageNumber: number) => void;
}

export const Pagination: FC<PaginationProps> = ({cardyPerPage, totalCard, pagination}) => {

    const [pageNumders, setPageNumbers] = useState<number[]>([])
    useEffect(() => {
        let a: number[] = []
        for (let i: number = 1; i <= Math.ceil(totalCard / cardyPerPage); i++) {
            a.push(i);
        }
        setPageNumbers([...a])
    }, [cardyPerPage, totalCard])
    

  return (
    <div>
        <ul className='pagination'>
            {
                pageNumders.map(num =>
                    <li className='page-item' key={num}>
                        <a href="#" className='page-link' onClick={() => pagination(num)}>
                            {num}
                        </a>
                    </li>
                )
            }
        </ul>
    </div>
  )
}
