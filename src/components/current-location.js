import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation } from '../actions/location.actions'
import { Button, Card } from '@material-ui/core'

function CurrentLocation() {
    const dispatch = useDispatch()

    const address = useSelector(state => state.location.address)

    return (
        <Card>
            <Button fullWidth onClick={() => dispatch(fetchLocation())}>{ address || 'Usar minha localização' }</Button>
        </Card>
    )
}

export default CurrentLocation