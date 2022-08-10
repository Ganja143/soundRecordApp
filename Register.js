import React, {useState} from "react";



import {
    TextInput, 
    Button,
    StyleSheet,
    Text, 
    View,
} from 'react-native'
import {authentication} from './firebase-config/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register=(props) =>{

    const [isSignedIn, setIsSignedIn]=useState(false);
    const [name,setname] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const RegisterUser = () =>{

        createUserWithEmailAndPassword(authentication,email,password)
        .then((re) => {

            setIsSignedIn(true)
           props.navigation.navigate("Login")

        })
        .catch((err) =>{

                console.log(err)
        })

    }

    return(
        <View>

                   <TextInput placeholder="FirstName"  value={name} onChangeText={text=>setname(text)} />
                   <TextInput placeholder="Lastname"  value={surname} onChangeText={text=>setSurname(text)} />
                   <TextInput placeholder="Username"  value={email} onChangeText={text=>setEmail(text)} />
                   <TextInput placeholder="Password"  value={password}  secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
                    <Button title='Sign-In' onPress={RegisterUser}/>
                
               
        </View>
    )
};

const styles =StyleSheet.create({

})
export default Register;