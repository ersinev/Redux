import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { checkLogin } from '../loginSlice'

function Login() {
    const isAuthorized = useSelector((state) => state.isAuthorized.isAuthorized)
    const dispatch = useDispatch()
    const [password, setpassword] = useState('')
    console.log(isAuthorized)

    return (
        <div>
            <div>
                <input type='text'
                    onChange={(e) => {
                        setpassword(e.target.value)
                    }}
                />
                <button onClick={() => {
                    dispatch(checkLogin(password))
                }}>Login</button>

            </div>

            {isAuthorized &&
                <div>Welcome</div>
            }


        </div>
    )
}

export default Login