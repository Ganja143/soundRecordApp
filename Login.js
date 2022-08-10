import React, {useState} from "react";

import {
    TextInput, 
    Button,
    StyleSheet,
    Text, 
    View,
} from 'react-native'

import {authentication} from './firebase-config/firebase';
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login=(props) =>{

    const [isSignedIn, setIsSignedIn]=useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const LogUser = () =>{

            signInWithEmailAndPassword(authentication,email,password)

            .then((re) =>{

                setIsSignedIn(true)
                props.navigation.navigate("Login")
                
            })

            .catch((err)=>{

                console.log(err)

            })
        

    }
    const LogOutUser =() =>{
        signOut(authentication)

        .then((re)=>{
            setIsSignedIn(false)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    return(
        <View>

                   <TextInput placeholder="Username"  value={email} onChangeText={text=>setEmail(text)} />
                   <TextInput placeholder="Password"  value={password}  secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                    {isSignedIn ===true?
                       <Button title='Logout' onPress={LogOutUser} /> 
                       :
                       <Button title='Login' onPress={LogUser} onChangeText={() =>props.navigation.navigate("Recording")}/>
                    }
                   
                
               
        </View>
    )
};

const styles =StyleSheet.create({

})
export default Login;