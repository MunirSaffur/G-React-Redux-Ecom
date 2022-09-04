import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'
export default function ItemsSkeletons() {
    return (
        <div className='col-6 col-md-3 mb-4'>
            <Stack>
                <Skeleton height='100px' />
                <Skeleton height='10px' width="100px" />
                <Skeleton height='10px' />
                <Skeleton height='10px' width="120px" />
                <Skeleton height='25px' />
            </Stack>
        </div>
    )
}
