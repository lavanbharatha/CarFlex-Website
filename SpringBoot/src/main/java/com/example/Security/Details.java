package com.example.Security;



import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
@Service
public class Details implements UserDetailsService{
@Autowired
private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       NewUser byUsername = userRepo.findByUserName(username);
        if (byUsername == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        System.out.println(byUsername.getUserName());
        return new Principal(byUsername);
        
    }

  

    

}
