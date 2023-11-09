import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const SearchStockCard = () => {
    const [stockSymbol, setStockSymbol] = useState("")
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate(`/dashboard/stock/${stockSymbol}`)
    }

    return (
        <div>SearchStockCard
            <div className="card-div">
                <h2>Search Stock</h2>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className='mb-3' >
                        <Form.Label>Stock Symbol</Form.Label>
                        <Form.Control type="stockSymbol" placeholder="eg. AAPL" onChange={(e => {
                            console.log(e.target.value)
                            setStockSymbol(e.target.value)
                        })} />
                    </Form.Group>
                    <input type="submit" value="Search" />

                </Form>

            </div>

        </div>
    )
}

export default SearchStockCard