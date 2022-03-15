import React, {useState} from "react";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "../../images/logo.png";
import google from "../../images/google.svg";

// context
import {useUserDispatch, loginUser} from "../../context/UserContext";


function Login(props) {
    let classes = useStyles();

    // global
    let userDispatch = useUserDispatch();

    // local
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState(null);
    let [activeTabId, setActiveTabId] = useState(0);
    let [nameValue, setNameValue] = useState("");
    let [loginValue, setLoginValue] = useState("user@gmail.com");
    let [passwordValue, setPasswordValue] = useState("password");

    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}><img src={logo} alt="logo" className={classes.logotypeImage}/></div>
            <div className={classes.formContainer}>
                <div className={classes.form}>
                    <Tabs
                        value={activeTabId}
                        onChange={(e, id) => setActiveTabId(id)}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Login" classes={{root: classes.tab}}/>
                        <Tab label="New User" classes={{root: classes.tab}}/>
                    </Tabs>
                    {activeTabId === 0 && (
                        <>
                            <Typography variant="h1" className={classes.greeting}>
                                Good Morning, User
                            </Typography>
                            <Button size="large" className={classes.googleButton}>
                                <img src={google} alt="google" className={classes.googleIcon}/>
                                &nbsp;Sign in with Google
                            </Button>
                            <div className={classes.formDividerContainer}>
                                <div className={classes.formDivider}/>
                                <Typography className={classes.formDividerWord}>or</Typography>
                                <div className={classes.formDivider}/>
                            </div>
                            <Fade in={error}>
                                <Typography color="secondary" className={classes.errorMessage}>
                                    Something is wrong with your login or password :(
                                </Typography>
                            </Fade>
                            <TextField
                                id="email"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={loginValue}
                                onChange={e => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Address"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div className={classes.formButtons}>
                                {isLoading ? (
                                    <CircularProgress size={26} className={classes.loginLoader}/>
                                ) : (
                                    <Button
                                        disabled={
                                            loginValue.length === 0 || passwordValue.length === 0
                                        }
                                        onClick={() =>
                                            loginUser(
                                                userDispatch,
                                                loginValue,
                                                passwordValue,
                                                props.history,
                                                setIsLoading,
                                                setError,
                                            )
                                        }
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Login
                                    </Button>
                                )}
                                <Button
                                    color="primary"
                                    size="large"
                                    className={classes.forgetButton}
                                >
                                    Forget Password
                                </Button>
                            </div>
                        </>
                    )}
                    {/* Creating new account tab*/}
                    {activeTabId === 1 && (
                        <>
                            <Typography variant="h1" className={classes.greeting}>
                                Welcome!
                            </Typography>
                            <Typography variant="h2" className={classes.subGreeting}>
                                Create your account
                            </Typography>
                            <Fade in={error}>
                                <Typography color="secondary" className={classes.errorMessage}>
                                    Something is wrong with your login or password :(
                                </Typography>
                            </Fade>
                            <TextField
                                id="name"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={nameValue}
                                onChange={e => setNameValue(e.target.value)}
                                margin="normal"
                                placeholder="Full Name"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                id="email"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={loginValue}
                                onChange={e => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Address"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                }}
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />
                            <div className={classes.creatingButtonContainer}>
                                {isLoading ? (
                                    <CircularProgress size={26}/>
                                ) : (
                                    <Button
                                        onClick={() =>
                                            loginUser(
                                                userDispatch,
                                                loginValue,
                                                passwordValue,
                                                props.history,
                                                setIsLoading,
                                                setError,
                                            )
                                        }
                                        disabled={
                                            loginValue.length === 0 ||
                                            passwordValue.length === 0 ||
                                            nameValue.length === 0
                                        }
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        className={classes.createAccountButton}
                                    >
                                        Create your account
                                    </Button>
                                )}
                            </div>
                            <div className={classes.formDividerContainer}>
                                <div className={classes.formDivider}/>
                                <Typography className={classes.formDividerWord}>or</Typography>
                                <div className={classes.formDivider}/>
                            </div>
                            <Button
                                size="large"
                                className={classnames(
                                    classes.googleButton,
                                    classes.googleButtonCreating,
                                )}
                            >
                                <img src={google} alt="google" className={classes.googleIcon}/>
                                &nbsp;Sign in with Google
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </Grid>
    );
}

export default withRouter(Login);
