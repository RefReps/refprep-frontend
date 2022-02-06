import { AuthenticationService } from "../_services/authentication.service";
import { TokenService } from "../_services/token.service";

export function appInitializer(authenticationService: AuthenticationService, tokenService: TokenService) {
    
    return () => new Promise(resolve => {
        authenticationService.loginWithToken(tokenService.getRefreshToken(), tokenService.getEmail())
            .subscribe()
            .add(resolve)

        
    })
}