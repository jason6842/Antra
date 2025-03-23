import React, { FormEvent, useState } from 'react'
import PInput from './EmailInput'
import PasswordInput from './PasswordInput'

function verifyPassword(password: string) {
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

export default function PracticeSignupForm() {
  const [checkedTerm, setCheckedTerm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
        alert("Passwords does not match.");
        return;
    }
    if (!verifyPassword(password)) {
        alert("Please make sure your password min 8 letter password, with at least a symbol, upper and lower case letters and a number.");
        return;
    } else {
        // Call api to create account
        alert("Account created!");
        return;
    }
  }


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <PInput label="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <PasswordInput label="Password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <PasswordInput label="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={checkedTerm}
                    onClick={() => setCheckedTerm(!checkedTerm)}
                /> I agree to the Terms and Conditions.
            </label>
        </div>
        <button className='submit-btn' disabled={!checkedTerm}>Submit</button>
    </form>
  )
}
