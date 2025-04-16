package com.example.service;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.example.Security.JWTService;
import com.example.Security.Login;
import com.example.Security.NewUser;
import com.example.Security.UserFromAngular;
import com.example.Security.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTService jwtservice;

    public void addUser(UserFromAngular user) {
        NewUser newUser = new NewUser();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(user.getPassword());
        newUser.setPhoneNumber(user.getPhoneNumber());
        newUser.setEmail(user.getEmail());
        userRepo.save(newUser);
    }

    public String verify(Login user) {
        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            user.getUsername(),
                            user.getPassword()));
            if (auth.isAuthenticated()) {
                return jwtservice.generateToken(user.getUsername());
            }
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
        throw new AuthenticationCredentialsNotFoundException("Authentication failed");
    }
}
