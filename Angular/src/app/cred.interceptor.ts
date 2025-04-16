import { HttpInterceptorFn } from '@angular/common/http';

export const credInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwtToken');
  const modifiedReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(modifiedReq);
};
