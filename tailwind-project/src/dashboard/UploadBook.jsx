import React from 'react'

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const UploadBook = () => {
    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>

            <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
                        type="bookTitle" 
                        placeholder="name@flowbite.com" 
                        required 
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default UploadBook