import React from 'react'
import { Table } from 'flowbite-react';

const ManageBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect( () => {
        fetch("https://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data))
    }, [])
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3x1 font-bold'>Manage Your Books</h2>

            {/* table for book data */}
            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Book Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author
                    </Table.HeadCell>
                    <Table.HeadCell>
                       Categrory
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Author
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span>
                            Edit or Manage
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                {
                    allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>

                    </Table.Body>)
                }
                <Table.Body className="divide-y">

                </Table.Body>
            </Table>
        </div>
    )
}

export default ManageBooks