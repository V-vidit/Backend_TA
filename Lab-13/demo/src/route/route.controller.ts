import { Controller, Get, Redirect, All, Header, Param } from '@nestjs/common';

@Controller('route')
export class RouteController {

    @Get('google') // /route/redirect
    @Redirect('https://www.google.com', 302) //redirects to google.com if using browser.
    gotoGoogle(){
        return;
    }

    @Get('wildcard/*') 
    wildcard(){
        return {
            message: "Matches routes like /wildcard/a, /wildcard/a/b, etc"
        };
    }

    @Get('page/:pageno')
    getPage(@Param('pageno') pageNo: string){
        const page = Number(pageNo);
        const limit = 5;

        if(isNaN(page) || page<1){
            return {
                error: "Invalid Page number"
            };
        }

        const start = (page-1) * limit + 1;
        const end = page * limit;

        return {
            page,
            start,
            end
        };

    }

    @Get('prime/:start/:end') //route/prime/5/20
    getPrimeNo(@Param('start') start: string, @Param('end') end: string,){
        const s=Number(start);
        const e=Number(end);

        if (isNaN(s) || isNaN(e) || s > e) {
           return { error: "Invalid range" };
        }

        const primes: number[]=[];

        for(let i=s;i<=e;i++){
            if(i<2) continue;

            let bool=true;

            for(let j=2;j<i;j++){
                if (i%j==0) {
                    bool=false;
                    break;
                }
            }

            if (bool) {
                primes.push(i);
            }
        }

        return {
            range: [s,e],
            primes
        };

    }

    @Get('*') //If placed above other get routes, it will override everything
    onlyStar(){
        return {
            message: "Handles all GET Routes"
        }
    }

    @All('all')
    @Header('Content-Type', 'application/json') //used to set headers
    all(){
        return {
            message: "This is used to handle all HTTP request methods for a specific route."
        }
    }
}