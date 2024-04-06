// export default function middleware(){
//     console.log("middleware");
// }

import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware used")
//   return NextResponse.redirect(new URL('/login', request.url));
  const authToken= request.cookies.get("authtoken")?.value;

  if(request.nextUrl.pathname==="/api/login"){
    return;
  }

  const loggedInUserNotAccessPaths=request.nextUrl.pathname==="/login" || request.nextUrl.pathname=="/register";

  if(loggedInUserNotAccessPaths){
    //accessing not secured route
    if(authToken){
         return NextResponse.redirect(new URL("/user-profile",request.url));
    }else{
        //accessing secured  route
        if(!authToken){
            return NextResponse.redirect(new URL('/login', request.url));
        }else{
            //verify ...
        }
    }
  }
console.log(authToken)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/user-profile',
   "/Appointment",
    "/api/:path*",

]
}