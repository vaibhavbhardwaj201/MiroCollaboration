"use client"

import { ChangeEvent, useEffect, useState } from 'react'
import qs from 'query-string'
import { Search } from 'lucide-react'
import { useDebounce } from 'usehooks-ts'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
    const router = useRouter()
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const query = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue
            },
        }, { skipEmptyString: true, skipNull: true })

        router.push(query)
    }, [debouncedValue, router])


    return (
        <div className='w-full relative'>
            <Search
                className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'
            />
            <Input
                className='w-full max-w-[516px] pl-9'
                placeholder='Search for a board or a card'
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

export default SearchInput