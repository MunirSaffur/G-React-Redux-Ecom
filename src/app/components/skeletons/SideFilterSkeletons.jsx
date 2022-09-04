import React from 'react'
import { Skeleton, Stack } from '@chakra-ui/react'

export default function SideFilterSkeletons() {
    return (
        <Stack>
            {[1, 2, 3, 4, 5].map(skeleton => (
                <div className='d-flex' key={skeleton}>
                    <Skeleton height='15px' width="15px" mr="5px" />
                    <Skeleton height='15px' width="200px" />
                </div>
            ))}
        </Stack>
    )
}
