import { useNavigate } from "react-router-dom";

type TRedirect = {
    sec?:number;
    address:string;
}

export function useRedirect() {
  const navigate = useNavigate();

  return ({ sec, address }: TRedirect) => {
    setTimeout(() => {
      navigate(address);
    }, sec || 1500);
  };
}