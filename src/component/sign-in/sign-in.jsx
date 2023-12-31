import { useState} from 'react';

import FormInput from '../../form-input/form-input';
import Button,{ BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

// import {UserContext} from '../../context/user.context'

import './sign-in.scss'

const defaultFormFields = {
  email: '',
  password: '',
};


const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // setCurrentUser(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Please Check your Password!');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2> 
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.goggle} onClick={signInWithGoogle}>
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;