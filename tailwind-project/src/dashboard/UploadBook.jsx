import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UploadBook = () => {
    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mystery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event) => {
        //  console.log(event.target.value);
        setSelectedBookCategory(event.target.value);
    }
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>

            <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* first row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="bookTitle" 
                                value="Book Title" 
                            />
                        </div>
                        <TextInput 
                            id="bookTitle" 
                            name='bookTitle'
                            type="text" 
                            placeholder="Book name" 
                            required 
                        />
                    </div>

                    {/* authorName */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="authorName" 
                                value="Author Name" 
                            />
                        </div>
                        <TextInput 
                            id="authorName" 
                            name='authorName'
                            type="text" 
                            placeholder="Author Name" 
                            required 
                        />
                    </div>
                </div>

                {/* 2nd Row */}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="imageURL" 
                                value="Book Image URL" 
                            />
                        </div>
                        <TextInput 
                            id="imageURL" 
                            name='imageURL'
                            type="text" 
                            placeholder="Book image URL" 
                            required 
                        />
                    </div>

                    {/* Category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label 
                                htmlFor="imputState" 
                                value="Book Category" 
                            />
                        </div>

                        <Select id='inputState' name='categoryName' className='w-full rounded'>

                        </Select>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UploadBook