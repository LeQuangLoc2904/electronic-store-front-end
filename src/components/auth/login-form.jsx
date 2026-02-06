import {cn} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export function LoginForm({className, ...props}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/auth/token', {
          username,
          password
        });

        localStorage.setItem('accessToken', response.data.result.token);
        navigate('/admin');
      } catch (error) {
        console.error('Error during login:', error);
        
        if (error.response) {
          const backendError = error.response.data;
          alert(backendError.message || 'login failed')
          console.log('Error code:', backendError.code);
        }
        else {
          console.error('Error during login:', error);
          alert("Không thể kết nối đến server!");
        }
      }
    }

    return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Đăng nhập</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>                       
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Tên tài khoản</FieldLabel>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >                   
                  </a>
                </div>
                <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)} />
              </Field>
              <Field>
                <Button type="submit" style={{ backgroundColor: 'black', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
