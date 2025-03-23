import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    if (!email.includes('@')) {
      setEmailError("Please include an '@' in the email address.");
      return false;
    }
    if (!email.endsWith('@srmist.edu.in')) {
      setEmailError('Please use your SRM email address (ending with @srmist.edu.in).');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      alert('Login Successful');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <Card className="p-6 w-96 shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-center mb-2">CSI CONSOLE</h1>
        <p className="text-center text-gray-600 mb-4">Manage your events and activities</p>
        <form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-4" />
          <Button type="submit" className="w-full mt-4">Sign in to Dashboard</Button>
        </form>
        <Link to="/password-recovery" className="text-blue-500 text-sm text-center block mt-4">Forgot your password?</Link>
      </Card>
    </div>
  );
}

export default Login;
