import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt';

const middleware = async (req: any) => {
    const token = await getToken({req, secret: process.env.JWT_SECRET})
    let approved_response = NextResponse.next();
    let unapproved_response = NextResponse.redirect('/login');
    const url = req.nextUrl.clone()

    if (token || url.pathname.includes('/api/auth')){
        return approved_response;
    }

    if (!token && url.pathname !== '/login') {
        return unapproved_response;
    }
    
}

export default middleware;
