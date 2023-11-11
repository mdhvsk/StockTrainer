import React, { useState } from 'react'
import "./BalanceForm.css"
import axios from 'axios';
const BalanceForm = () => {

    const [option, setOption] = useState('Deposit')

    const handleSubmit = async (e) => {
        console.log("HandleSUmbit")
    };

    const handleChange = () => {
        console.log("handle change")
    }

    const handleSelectChange = () => {
        if (option === "Deposit") {
            setOption("Withdraw")
        }
        else {
            setOption("Deposit")
        }
    }

    return (
        <div>BalanceForm
            <div className='balancePage-container'>
                <div className='balanceForm-container'>
                    <form className='balanceForm-style' onSubmit={handleSubmit}>
                        <h1>Sign In to Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            required
                            className="balanceForm-input"
                        />
                        <select value={option} onChange={handleSelectChange}>
                            <option value="Deposit">Deposit</option>
                            <option value="Withdraw">Withdraw</option>
                        </select>
                        <input
                            type="number"
                            step="0.01"
                            name="password"
                            onChange={handleChange}
                            required
                            className="balanceForm-input"
                        />
                        {/* {error && <div className="balanceForm-error_msg">{error}</div>} */}
                        <button type="submit" className="balanceForm-green_btn">
                            Log In
                        </button>
                    </form>

                </div>
            </div>


        </div>
    )
}

export default BalanceForm