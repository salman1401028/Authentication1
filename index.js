let passwordInDB= '';

let signupEnteredPassword= document.getElementById('signup-password');


// cipher password storation technique:--
//******************************************************************************* 
const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_'
  }
  
  const encode = (inputString) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = inputString.split("")
    let encodedArr = codeArr.map(codeArrChar => {
      let index = lookupValues.findIndex((element) => element === codeArrChar)
      return lookupKeys[index]
    })
    return encodedArr.join("")
  }
  
  const decode = (encodedStr) => {
    const codeArr = encodedStr.split("")  // converting an input string to an array of character.
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])  // looking for corresponding values of the particular array element.
    return decodedArr.join("")  // now again converting back arrays characters to string format.
  }


//*********************************************************************************************** */


const signup= () => {
    let signupPassword= signupEnteredPassword.value;  
    if(signupPassword.length >= 8 && signupPassword.includes('@') && signupPassword && /\d/.test(signupPassword))
    {
        passwordInDB= encode(signupPassword); // encoding values using cipher. Main motive is to save a ciper text instead of real password in DB.
        document.getElementById('signup-valid').style.display= 'block';
        document.getElementById('validation').style.display= 'none';
    }
    else 
    {
        document.getElementById('validation').style.display= 'block';
        document.getElementById('signup-valid').style.display= 'none';
    }
    
    
}

const login= () =>{
    let loginPassword= document.getElementById('login-password').value;
    if(loginPassword === decode(passwordInDB)){  // decoding password using decode function to match with the entered password.
        document.getElementById('login-valid').style.display= 'block';
        document.getElementById('login-invalid').style.display= 'none';
    }
    else{
        document.getElementById('login-invalid').style.display= 'block';
        document.getElementById('login-valid').style.display= 'none';
    }
}


const passwordStrength=  ()=> {
    if(signupEnteredPassword.value.length < 5)
    {
        document.getElementById('weak').style.display= 'block';
        document.getElementById('medium').style.display= 'none';
        document.getElementById('strong').style.display= 'none';

    }
    else if(signupEnteredPassword.value.length >=5 && signupEnteredPassword.value.length<=8)
    {
        document.getElementById('medium').style.display= 'block';
        document.getElementById('weak').style.display= 'none';
        document.getElementById('strong').style.display= 'none';
    }
    else{
        document.getElementById('strong').style.display= 'block';
        document.getElementById('medium').style.display= 'none';
        document.getElementById('weak').style.display= 'none';
    }
}


/*
if((signupPassword.value).length >= 8)
    signupPassword= signupPassword.value;
*/