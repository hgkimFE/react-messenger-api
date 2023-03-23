# express + session(redis) + oauth(passport) 인증서버

## Dependancy

> redis  
> **connect-redis  
> **express-session  
> **passport  
> **passport-google-oauth
>
> ### devdependancy
>
> > @types/express-session  
> > @types/passport  
> > @types/passport-google-oauth

## Usage

> 1. googleapis에 웹사이트를 등록하고 client id,secret을 획득합니다.
> 2. redis server를 구성 또는 연결합니다.
> 3. 환경변수를 알맞게 설정합니다.(redis, passport, passport google strategy)
> 4. configs/passportConfig.ts에서 추가적으로 passport에 대해 구현할 수 있습니다.
> 5. 설정을 바탕으로 비즈니스 로직을 구현합니다.
