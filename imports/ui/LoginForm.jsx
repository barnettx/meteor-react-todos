import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';

export const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()

        Meteor.loginWithPassword(username, password);
    }

    return (
        <form className="login-form" onSubmit={onSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    required
                    onChange={e => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button type="submit">Log In</button>
        </form>
    )
}
