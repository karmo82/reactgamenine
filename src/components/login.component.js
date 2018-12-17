import React from 'react';

const LoginComponent = (props) => {
    return (
        <div>
            <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Enter username" 
                    onChange={props.handleOnUsernameChanged}
                    value={props.username} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                    onChange={props.handleOnPasswordChanged}
                    value={props.password} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.handleOnSubmit} >Submit</button>            
                {
                    props.isLogged ? <div className="alert alert-success" >utente loggato</div> : null
                }
        </div>
    );
};

export default LoginComponent;