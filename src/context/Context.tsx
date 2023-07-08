import { useRouter } from 'next/router';
import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface AppContext {
  user: UserModel | undefined;
  isLogin: boolean;
  token: string | undefined;
  initializing: boolean;
  baseURL: string;
  frontURL: string;
  login: Function;
  logout: Function;
  fetchingData: boolean;
  setFetchingData: Function;
  //   manager: ManagerModel;
  setUser: Dispatch<SetStateAction<UserModel | undefined>>;
  successToast: Function;
  errorToast: Function;
}
const AuthContext = createContext<AppContext | undefined>(undefined);

interface Props {
  children?: ReactNode;
}

type UserModel = {
  userID: number;
  account_type: string;
  customer_type: string;
  first_name: string;
  last_name: string;
  is_setup_complete: number;
  user_email: string;
};

export const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserModel | undefined>(undefined);
  const [token, setToken] = useState<string | undefined>();
  const [initializing, setInitializing] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem('user') !== undefined ||
      localStorage.getItem('session_token') !== undefined ||
      localStorage.getItem('balance') !== undefined
    ) {
      setUser(JSON.parse(localStorage.getItem('user') || '{}'));
      setToken(localStorage.getItem('session_token') || '{}');
      setInitializing(false);
    }
  }, []);
  //   const baseURL = process.env.NEXT_PUBLIC_API_URL;
  //   const frontURL = process.env.NEXT_PUBLIC_FRONT_URL;
  const login = (user: UserModel, token: string) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('session_token', token);
    setToken(token);
    setUser(user);
    setIsLogin(true);
  };
  const logout = () => {
    setUser(undefined);
    localStorage.removeItem('user');
    localStorage.removeItem('session_token');
    setIsLogin(false);
  };
  const successToast = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: 'success1',
      style: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        fontSize: '13px',
        padding: '16px',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    });
  };
  // added for test
  const errorToast = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: 'error1',
      style: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        fontSize: '13px',
        padding: '16px',
        fontWeight: 'bold',
        textAlign: 'center'
      }
    });
  };

  // Getting already login user details
  useEffect(() => {
    if (user === undefined) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [initializing]);
  return (
    // Returning UseContext value
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        // frontURL,
        initializing,
        isLogin,
        // baseURL,
        login,
        logout,
        setFetchingData,
        fetchingData,
        successToast,
        errorToast
      }}
    >
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
